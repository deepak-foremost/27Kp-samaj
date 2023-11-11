import {Keyboard} from 'react-native';
import {RequestType, Api} from './Api';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst} from '../utils/AsyncStorageHelper';
import * as RootNavigation from '../utils/RootNavigation';
import {printLog} from '../utils/AppConstValue';

export const register = (params, onSuccess, onFailure) => {
  CallApi(Api.POST_REGISTER, RequestType.post, params, onSuccess, onFailure);
};

export const getCities = (onSuccess, onFailure) => {
  CallApi(Api.GET_CITIES, RequestType.get, {}, onSuccess, onFailure);
};

export const CallApi = async (url, method, params, onSuccess, onFailure) => {
  Keyboard.dismiss();
  let token = await AsyncStorage.getItem(AsyncStorageConst?.allDetails);

  if (token?.token == undefined) {
    printLog('PRINT_TOKEN IF', token);
  } else {
    printLog('PRINT_TOKEN ELSE', token?.token);
  }

  var formData = jsonToFormData(params);
  var myHeaders = new Headers();

  if (token) {
    //myHeaders.append('Accept', 'application/json');
    // myHeaders.append('content-type', 'multipart/form-data');
    myHeaders.append(
      'Authorization',
      'Bearer ' +
        (token?.token == undefined ? JSON.parse(token)?.token : token?.token),
    );
  }

  printLog(
    'CallApi Details',
    `${method} -*- ${url} -*- ${JSON.stringify(params)} -*- ${JSON.stringify(
      myHeaders,
    )}`,
  );

  /*get url logic*/
  // if (method === RequestType.get) {
  //   let arrayOfBody = Object.entries(params).map(
  //     ([key, value]) => `${key}=${value}`,
  //   );
  //   var bodyUrl = '';
  //   for (i in arrayOfBody) {
  //     if (bodyUrl == '') {
  //       bodyUrl = arrayOfBody[i];
  //     } else {
  //       bodyUrl = bodyUrl + '&' + arrayOfBody[i];
  //     }
  //   }
  //   url = url + '?' + bodyUrl;
  // }

  try {
    fetch(
      url,
      method == RequestType.get
        ? {
            method: method,
            headers: myHeaders,
            params: formData,
          }
        : {
            method: method,
            headers: myHeaders,
            body: formData,
          },
    )
      .then(response => response.json())
      .then(json => {
        if (json?.code == 404) {
          flushAllData(
            onSuccess => {
              RootNavigation.goToRoot();
            },
            e => {
              RootNavigation.goToRoot();
            },
          );
        } else onSuccess(json);
      })
      .catch(error => onFailure(error));
  } catch (error) {
    onFailure(error);
  }
};

export function jsonToFormData(data) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    parentKey !== 'image'
  ) {
    Object.keys(data).forEach(key => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key,
      );
    });
  } else {
    const value = data == null ? '' : data;
    printLog('converted value ', value);
    formData.append(parentKey, value);
  }
}
