import {Keyboard} from 'react-native';
import {RequestType, Api} from './Api';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst} from '../utils/AsyncStorageHelper';
import * as RootNavigation from '../utils/RootNavigation';
import {printLog} from '../utils/AppConstValue';

export const login = (params, onSuccess, onFailure) => {
  CallApi(Api.POST_LOGIN, RequestType.post, params, onSuccess, onFailure);
};

export const register = (params, onSuccess, onFailure) => {
  CallApi(Api.POST_REGISTER, RequestType.post, params, onSuccess, onFailure);
};

export const getCities = (onSuccess, onFailure) => {
  CallApi(Api.GET_CITIES, RequestType.get, {}, onSuccess, onFailure);
};

export const getRelation = (onSuccess, onFailure) => {
  CallApi(Api.GET_RELATION, RequestType.get, {}, onSuccess, onFailure);
};

export const getYearRange = (onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_ABOUT_US_RANGE}`,
    RequestType.get,
    NaN,
    onSuccess,
    onFailure,
  );
};

export const getAboutUsMember = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_ABOUT_US_MEMBER}?${params}`,
    RequestType.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getStatistics = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_STATISTICS}?city_id=${params?.city_id}`,
    RequestType.get,
    NaN,
    onSuccess,
    onFailure,
  );
};

export const getSearch = (params, onSuccess, onFailure) => {
  CallApi(`${Api.POST_SEARCH}`, RequestType.post, params, onSuccess, onFailure);
};

export const getNews = (params, onSuccess, onFailure) => {
  CallApi(`${Api.GET_NEWS}`, RequestType.get, params, onSuccess, onFailure);
};

export const getParipatr = (params, onSuccess, onFailure) => {
  CallApi(`${Api.GET_PARIPATR}`, RequestType.get, params, onSuccess, onFailure);
};

export const getFamilies = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_FAMILIES}?city_id=${params?.city_id}`,
    RequestType.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getVillageMembers = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_VILLAGE_MEMBER}`,
    RequestType.get,
    params,
    onSuccess,
    onFailure,
  );
};

export const getFamilyMembersList = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_FAMILY_MEMBER}?id=${params?.id}&flag=all`,
    RequestType.get,
    NaN,
    onSuccess,
    onFailure,
  );
};

export const getAboutUsListById = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_ABOUT_US_LIST}`,
    RequestType.post,
    params,
    onSuccess,
    onFailure,
  );
};

export const getSalahkarMember = (onSuccess, onFailure) => {
  CallApi(Api.GET_SALAHKAR_MEMBER, RequestType.get, NaN, onSuccess, onFailure);
};

export const getMyFamilies = (onSuccess, onFailure) => {
  CallApi(Api.GET_FAMILY_MEMBER, RequestType.get, NaN, onSuccess, onFailure);
};

export const getMyBusinesses = (onSuccess, onFailure) => {
  CallApi(`${Api.GET_BUSINESSES}`, RequestType.get, {}, onSuccess, onFailure);
};

export const getBusinessAllList = (params, onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_ALL_BUSINESSES}`,
    RequestType.get,
    NaN,
    onSuccess,
    onFailure,
  );
};

export const getMyImageSlider = (onSuccess, onFailure) => {
  CallApi(
    `${Api.GET_IMAGE_SLIDERS}`,
    RequestType.get,
    NaN,
    onSuccess,
    onFailure,
  );
};

export const getCategories = (onSuccess, onFailure) => {
  CallApi(Api.GET_CATEGORIES, RequestType.get, NaN, onSuccess, onFailure);
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

  url = method == RequestType.get ? getMethodUrl(url, params) : url;

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

export const getMethodUrl = (url, body) => {
  if (body == null || body == NaN || body == '' || body == undefined) {
    return url;
  } else {
    var getUrl = '';

    let arrayOfBody = Object.entries(body).map(
      ([key, value]) => `${key}=${value}`,
    );
    var bodyUrl = '';
    for (i in arrayOfBody) {
      if (bodyUrl == '') {
        bodyUrl = arrayOfBody[i];
      } else {
        bodyUrl = bodyUrl + '&' + arrayOfBody[i];
      }
    }
    getUrl = url + '?' + bodyUrl;

    return getUrl;
  }
};
