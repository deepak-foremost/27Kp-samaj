export class Api {
  static BASE_PATH = 'https://foremostdigital.dev/patidarsamaj/';
  static BASE_URL = `${this.BASE_PATH}api/v1/`;

  //   Auth
  static POST_LOGIN = `${this.BASE_URL}login`;
  static POST_REGISTER = `${this.BASE_URL}register`;

  static POST_UPDATE_PASSWORD = `${this.BASE_URL}updatePassword`;
  static GET_STATISTICS = `${this.BASE_URL}getStatistics`;
  static GET_NEWS = `${this.BASE_URL}get27KPSamajNews`;
  static GET_FAMILIES = `${this.BASE_URL}getFamilies`;
  static GET_CATEGORIES = `${this.BASE_URL}getCategory`;
  static GET_ALL_BUSINESSES = `${this.BASE_URL}getAllBusinesses`;
  static GET_RELATION = `${this.BASE_URL}getRelation`;
  static GET_ABOUT_US_LIST = `${this.BASE_URL}getAboutUsList`;
  //Get No Token Required
  static CHECK_PHONE_EXISTS = `${this.BASE_URL}checkphoneExists`;
  static GET_CITIES = `${this.BASE_URL}getCity`;
  static GET_SALAHKAR_MEMBER = `${this.BASE_URL}getSalahkarMember`;
  static GET_ABOUT_US_RANGE = `${this.BASE_URL}getAboutUsRange`;
  static GET_ABOUT_US_MEMBER = `${this.BASE_URL}getAboutUs`;
  static POST_SEARCH = `${this.BASE_URL}getSearchFamilyMembers`;
  static GET_VILLAGE_MEMBER = `${this.BASE_URL}getVillageMember`;
  static GET_SUGGESTION_LIST = `${this.BASE_URL}getSuggestion`;
  static GET_APP_SPONCER_LIST = `${this.BASE_URL}getApplicationSponser`;
  static GET_FAMILY_MEMBER = `${this.BASE_URL}getFamilyMembers`;
  static GET_BUSINESSES = `${this.BASE_URL}getBusiness`;
  static GET_PARIPATR = `${this.BASE_URL}getCircularfiles`;
  static GET_IMAGE_SLIDERS = `${this.BASE_URL}getSlider`;
  static GET_FAMILY_DETAIL_BY_ID = `${this.BASE_URL}getSingleFamilyMemberDetail`;
  static GET_JEVAN_SLAH = `${this.BASE_URL}getjeevan`;
  static GET_BHUMI_SLAH = `${this.BASE_URL}getBhoomi`;
  static DELETE_BUSINESS = `${this.BASE_URL}deleteBusiness`;
  static DELETE_MEMBER = `${this.BASE_URL}deleteFamilyMember`;
  static DELETE_ACCOUNT = `${this.BASE_URL}deleteAccount`;
  static LOGOUT = `${this.BASE_URL}logout`;

  // Add Details
  static POST_ADD_MEMBER = `${this.BASE_URL}addFamilyMember`;
  static POST_ADD_BUSINESS = `${this.BASE_URL}addBusiness`;
  static POST_UPDATE_BUSINESS = `${this.BASE_URL}updateBusiness`;
  static POST_UPDATE_MEMBER = `${this.BASE_URL}updateFamilyMember`;
  static POST_FEEDBACK = `${this.BASE_URL}sendFeedBack`;
  static GET_ABOUT_KAROBARI = `${this.BASE_URL}getkarobarisabhy`;
  static GET_KAROBARI_RANGE = `${this.BASE_URL}getkarobariRange`;
  static GET_KAROBARI = `${this.BASE_URL}getkarobaricity`;
  static GET_EBOOK = `${this.BASE_URL}getbook`;
  static GET_JOB = `${this.BASE_URL}getjob`;
  static GET_SERCVICES = `${this.BASE_URL}getservicelist`;
  static UPDATE_IMAGE = `${this.BASE_URL}updateimagemultiple`;
  static SERVICE_DETAIL = `${this.BASE_URL}getservice`;
  static UPDATE_BUSINESS_IMAGE = `${this.BASE_URL}updateBusinesseimages`;
  static GETPROFILE = `${this.BASE_URL}getuser`;
}

export const RequestType = {
  post: 'POST',
  get: 'GET',
};
