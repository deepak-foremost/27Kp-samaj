export class Api {
  static BASE_PATH = 'https://foremostdigital.dev/patidarsamaj/';
  static BASE_URL = `${this.BASE_PATH}api/v1/`;

  //   Auth
  static POST_LOGIN = `${this.BASE_URL}login`;
  static POST_REGISTER = `${this.BASE_URL}register`;
  static GET_CITIES = `${this.BASE_URL}getCity`;
}

export const RequestType = {
  post: 'POST',
  get: 'GET',
};
