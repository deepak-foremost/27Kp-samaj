import AsyncStorage from '@react-native-community/async-storage';

export function flushAllData(onSuccess, onFailure) {
  AsyncStorage.clear().then(
    success => onSuccess(success),
    err => onFailure(err),
  );
}

export function saveUserToken(token, onSuccess) {
  AsyncStorage.setItem(AsyncStorageConst.token, token).then(
    success => onSuccess(success),
    err => onSuccess(''),
  );
}

export function getUserToken(onSuccess) {
  AsyncStorage.getItem(AsyncStorageConst.token).then(
    res => {
      if (res != '' && res != null && res != undefined) {
        onSuccess(res);
      } else {
        onSuccess('');
      }
    },
    err => onSuccess(''),
  );
}

export function saveUser(details, onSuccess, onFailure) {
  AsyncStorage.setItem(AsyncStorageConst.user, JSON.stringify(details)).then(
    success => onSuccess(success),
    err => onFailure(err),
  );
}

export function getUser(onSuccess) {
  AsyncStorage.getItem(AsyncStorageConst.user).then(
    res => {
      if (res != '' && res != null && res != undefined) {
        onSuccess(res);
      } else {
        onSuccess('');
      }
    },
    err => onSuccess(''),
  );
}

export function setString(Key, Value) {
  AsyncStorage.setItem(Key, Value);
}

export function getString(Key, onSuccess) {
  AsyncStorage.getItem(Key).then(
    res => {
      if (res != '' && res != null && res != undefined) {
        onSuccess(JSON.parse(res));
      } else {
        onSuccess('');
      }
    },
    err => onSuccess(''),
  );
}

export class AsyncStorageConst {
  static allDetails = 'all_detail';
  static token = 'token';
  static user = 'userDetails';
  static cities = 'cities';
  static screen = 'screen';
}
