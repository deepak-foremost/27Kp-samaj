import {AppImages} from './AppImages';
import {AppScreens} from './AppScreens';

export class staticArray {
  static HomeMenu = [
    {
      id: 0,
      name: 'About Us',
      icon: AppImages.ABOUT_US_ICON,
      screen: AppScreens.ABOUT_US_SCREEN,
    },
    {
      name: 'Search',
      icon: AppImages.SEARCH_ICON,
      screen: AppScreens.SEARCH_SCREEN,
      id: 1,
    },
    {
      name: 'Statistics',
      icon: AppImages.STATICS_ICON,
      screen: AppScreens.STATISTIC_SCREEN,
      id: 2,
    },

    {
      name: 'Family Member\nDetails',
      icon: AppImages.FAMILY_MEMBER_ICON,
      screen: AppScreens.FAMILY_MEMBER_DETAIL_SCREEN,
      id: 3,
    },
    {
      name: 'Business Details',
      icon: AppImages.BUSSINESS_ICON,
      screen: AppScreens.BUSINESS_SCREEN,
      id: 4,
    },
    {
      name: 'Village Member\nDetails',
      icon: AppImages.VILLAGE_ICON,
      screen: AppScreens.VILLAGE_SCREEN,
      id: 5,
    },
    {
      name: '27 Samaj Latest News',
      icon: AppImages.NEWS_ICON,
      screen: AppScreens.NEWS_SCREEN,
      id: 6,
    },
    {
      name: 'પરિપત્ર',
      icon: AppImages.FORM_ICON,
      screen: AppScreens.PARICHAY_FILE_SCREEN,
      id: 7,
    },
    {
      name: 'Contact Us',
      icon: AppImages.CONTACT_US_ICON,
      screen: AppScreens.CONTACT_US_SCREEN,
      id: 8,
    },
  ];

  static DrawerMenu = [
    {
      index: 0,
      menu: 'Profile',
      screen: AppScreens.PROFILE_SCREEN,
    },
    {
      index: 1,
      menu: 'Support Member',
      screen: AppScreens.ADVICE_MEMBER,
    },
    {
      index: 2,
      menu: 'Edit Family Member',
      screen: AppScreens.FAMILY_MEMBER_SCREEN,
    },
    {
      index: 3,
      menu: 'Edit Business',
      screen: AppScreens.BUSINESS_LIST_SCREEN,
    },
    {
      index: 4,
      menu: 'જીવન સહાય સભાસદ સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'sponcer',
    },
    {
      index: 5,
      menu: 'ભુમિ સભાસદ સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'bhumi',
    },

    {
      index: 6,
      menu: 'ભૂમિ',
      screen: AppScreens.AppSponcerScreen,
    },
    {index: 7, menu: 'કેળવણી મંડળ', screen: ''},
    {
      index: 8,
      menu: 'Privacy Policy',
      screen: AppScreens.ContactUsScreen,
    },
    {
      index: 9,
      menu: 'Contact Us',
      screen: AppScreens.ContactUsScreen,
    },
  ];

  static gender = [
    {label: 'Male', value: 'Male', name: 'Male'},
    {label: 'Female', value: 'Female', name: 'Female'},
  ];

  static ContactPerson = [
    {
      id: 0,
      name: 'ધવલ',
      city: 'શંકરપુરા',
      code: '+91',
      phone: '9924486133',
      designation: 'પ્રમુખ શ્રી',
    },
    {
      id: 1,
      name: 'ધવલ',
      city: 'શંકરપુરા',
      code: '+91',
      phone: '9924486133',
      designation: 'પ્રમુખ શ્રી',
    },
    {
      id: 2,
      name: 'ધવલ',
      city: 'શંકરપુરા',
      code: '+91',
      phone: '9924486133',
      designation: 'પ્રમુખ શ્રી',
    },
    {
      id: 3,
      name: 'ધવલ',
      city: 'શંકરપુરા',
      code: '+91',
      phone: '9924486133',
      designation: 'પ્રમુખ શ્રી',
    },
  ];

  static week = [
    {
      day: 'Monday',
      status: false,
    },
    {
      day: 'Tuesday',
      status: false,
    },
    {
      day: 'Wednesday',
      status: false,
    },
    {
      day: 'Thursday',
      status: false,
    },

    {
      day: 'Friday',
      status: false,
    },
    {
      day: 'Saturday',
      status: false,
    },
    {
      day: 'Sunday',
      status: false,
    },
  ];

  static merriage_status = [
    {name: 'Single'},
    {name: 'Married'},
    {name: 'Widowed'},
    {name: 'Divorced'},
    {name: 'Separated'},
  ];

  static bloodGroup = [
    {label: 'A+', value: 'A+', name: 'A+'},
    {label: 'A-', value: 'A-', name: 'A-'},
    {label: 'B+', value: 'B+', name: 'B+'},
    {label: 'B-', value: 'B-', name: 'B-'},
    {label: 'O+', value: 'O+', name: 'O+'},
    {label: 'O-', value: 'O-', name: 'O-'},
    {label: 'AB+', value: 'AB+', name: 'AB+'},
    {label: 'AB-', value: 'AB-', name: 'AB-'},
  ];
  static getAgeList = last => {
    var data = [];

    for (let i = last ? last : 0; i < 21; i++) {
      data.push({name: i * 5});
    }

    return data;
  };
}
