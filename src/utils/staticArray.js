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
      name: 'પરિપત્ર ફાઇલ',
      icon: AppImages.FORM_ICON,
      screen: AppScreens.PARICHAY_FILE_SCREEN,
      id: 7,
    },
    {
      name: 'IMP.LInks',
      icon: AppImages.IMP_LINKS_ICON,
      screen: AppScreens.IMP_LINKS,
      id: 7,
    },
    {
      name: 'સમાજ સેવા \n સહાય',
      icon: AppImages.SOCIAL_HELP_ICON,
      screen: '',
      id: 7,
    },
    {
      name: 'Feedback',
      icon: AppImages.FEEDBACK_ICON,
      screen: AppScreens.FEEDBACK_SCREEN,
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
      src: require('../assets/images/profile_icon.png'),
    },
    {
      index: 1,
      menu: 'Support Member',
      screen: AppScreens.ADVICE_MEMBER,
      src: require('../assets/images/support_member_icon.png'),
    },
    {
      index: 2,
      menu: 'Edit Family Member',
      screen: AppScreens.FAMILY_MEMBER_SCREEN,
      src: require('../assets/images/edit_family_icon.png'),
    },
    {
      index: 3,
      menu: 'Edit Business',
      screen: AppScreens.BUSINESS_LIST_SCREEN,
      src: require('../assets/images/edit_family_icon.png'),
    },
    {
      index: 4,
      menu: 'જીવન સહાય સભાસદ સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'sponcer',
      src: require('../assets/images/support_member_icon.png'),
    },
    {
      index: 5,
      menu: 'ભુમિ સભાસદ સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'bhumi',
      src: require('../assets/images/support_member_icon.png'),
    },

    {
      index: 6,
      menu: 'ભૂમિ',
      screen: AppScreens.APP_SPONCER_SCREEN,
      src: require('../assets/images/bhumi_icon.png'),
    },
    {
      index: 7,
      menu: 'કેળવણી મંડળ',
      screen: AppScreens.APP_SPONCER_SCREEN,
      src: require('../assets/images/bhumi_icon.png'),
    },
    {
      index: 8,
      menu: 'Privacy Policy',
      screen: AppScreens.PRIVACY_POLICY,
      src: require('../assets/images/privacy_icon.png'),
    },
    {
      index: 9,
      menu: 'Contact Us',
      screen: AppScreens.CONTACT_US_SCREEN,
      src: require('../assets/images/contact_icon.png'),
    },
    {
      index: 10,
      menu: 'Log out',
      screen: '',
      src: AppImages.LOGOUT_ICON,
    },
  ];

  static gender = [
    {label: 'Male', value: 'Male', name: 'Male'},
    {label: 'Female', value: 'Female', name: 'Female'},
  ];
  static FeedbackOptions = [
    {label: 'Complaint', value: 'Complaint', name: 'Complaint'},
    {label: 'Suggestion', value: 'Suggestion', name: 'Suggestion'},
  ];

  static studies = [
    {label: 'Jr. KG', value: 'Jr. KG', name: 'Jr. KG'},
    {label: 'Sr. KG', value: 'Sr. KG', name: 'Sr. KG'},
    {label: 'STD:1', value: 'STD:1', name: 'STD:1'},
    {label: 'STD:2', value: 'STD:2', name: 'STD:2'},
    {label: 'STD:3', value: 'STD:3', name: 'STD:3'},
    {label: 'STD:4', value: 'STD:4', name: 'STD:4'},
    {label: 'STD:5', value: 'STD:5', name: 'STD:5'},
    {label: 'STD:6', value: 'STD:6', name: 'STD:6'},
    {label: 'STD:7', value: 'STD:7', name: 'STD:7'},
    {label: 'STD:8', value: 'STD:8', name: 'STD:8'},
    {label: 'STD:9', value: 'STD:9', name: 'STD:9'},
    {label: 'STD:10', value: 'STD:10', name: 'STD:10'},
    {label: 'STD:11', value: 'STD:11', name: 'STD:11'},
    {label: 'STD:12', value: 'STD:12', name: 'STD:12'},
    {label: 'I.T.I', value: 'I.T.I', name: 'I.T.I'},
    {label: 'DIPLOMA', value: 'DIPLOMA', name: 'DIPLOMA'},
    {label: 'B.Tech.', value: 'B.Tech.', name: 'B.Tech.'},
    {label: 'M.Tech.', value: 'M.Tech.', name: 'M.Tech.'},
    {label: 'B.H.M.S.', value: 'B.H.M.S.', name: 'B.H.M.S.'},
    {label: 'M.Sc.', value: 'M.Sc.', name: 'M.Sc.'},
    {label: 'B.Com.', value: 'B.Com.', name: 'B.Com.'},
    {label: 'M.Com.', value: 'M.Com.', name: 'M.Com.'},
    {label: 'B.A.', value: 'B.A.', name: 'B.A.'},
    {label: 'M.A.', value: 'M.A.', name: 'M.A.'},
    {label: 'Ph.D.', value: 'Ph.D.', name: 'Ph.D.'},
    {label: 'D.Ed.', value: 'D.Ed.', name: 'D.Ed.'},
    {label: 'B.Ed.', value: 'B.Ed.', name: 'B.Ed.'},
    {label: 'M.Ed.', value: 'M.Ed.', name: 'M.Ed.'},
    {label: 'B.P.Ed.', value: 'B.P.Ed.', name: 'B.P.Ed.'},
    {label: 'B.E.', value: 'B.E.', name: 'B.E.'},
    {label: 'M.E.', value: 'M.E.', name: 'M.E.'},
  ];

  static foriegnCountry = [
    {label: 'Canada', value: 'Canada', name: 'Canada'},
    {label: 'Australia', value: 'Australia', name: 'Australia'},
    {label: 'China', value: 'China', name: 'China'},
    {label: 'New Zealand', value: 'New Zealand', name: 'New Zealand'},
  ];

  static relationWithHead = [
    {label: 'પોતે', value: 'પોતે', name: 'પોતે'},
    {label: 'પત્ની', value: 'પત્ની', name: 'પત્ની'},
    {label: 'પિતા', value: 'પિતા', name: 'પિતા'},
    {label: 'દાદા', value: 'દાદા', name: 'દાદા'},
    {label: 'દાદી', value: 'દાદી', name: 'દાદી'},
    {label: 'માતા', value: 'માતા', name: 'માતા'},
    {label: 'પુત્ર', value: 'પુત્ર', name: 'પુત્ર'},
    {label: 'પુત્રી', value: 'પુત્રી', name: 'પુત્રી'},
    {label: 'પુત્રવધુ', value: 'પુત્રવધુ', name: 'પુત્રવધુ'},
    {label: 'પૌત્ર', value: 'પૌત્ર', name: 'પૌત્ર'},
    {label: 'પૌત્રી', value: 'પૌત્રી', name: 'પૌત્રી'},
    {label: 'ભાઈ', value: 'ભાઈ', name: 'ભાઈ'},
    {label: 'ભાભી', value: 'ભાભી', name: 'ભાભી'},
    {label: 'ભત્રીજો', value: 'ભત્રીજો', name: 'ભત્રીજો'},
    {label: 'ભત્રીજી', value: 'ભત્રીજી', name: 'ભત્રીજી'},
    {label: 'પપૌત્ર', value: 'પપૌત્ર', name: 'પપૌત્ર'},
    {label: 'પપૌત્રી', value: 'પપૌત્રી', name: 'પપૌત્રી'},
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

  static timeList = [
    {name: '00:00'},
    {name: '00:30'},
    {name: '01:00'},
    {name: '01:30'},
    {name: '01:00'},
    {name: '02:30'},
    {name: '03:00'},
    {name: '03:30'},
    {name: '04:00'},
    {name: '04:30'},
    {name: '05:00'},
    {name: '05:30'},
    {name: '06:00'},
    {name: '06:30'},
    {name: '07:00'},
    {name: '07:30'},
    {name: '08:00'},
    {name: '08:30'},
    {name: '09:00'},
    {name: '09:30'},
    {name: '10:00'},
    {name: '10:30'},
    {name: '11:00'},
    {name: '11:30'},
    {name: '12:00'},
    {name: '12:30'},
    {name: '13:00'},
    {name: '13:30'},
    {name: '14:00'},
    {name: '14:30'},
    {name: '15:00'},
    {name: '15:30'},
    {name: '16:00'},
    {name: '16:30'},
    {name: '17:00'},
    {name: '17:30'},
    {name: '18:00'},
    {name: '18:30'},
    {name: '19:00'},
    {name: '19:30'},
    {name: '20:00'},
    {name: '20:30'},
    {name: '21:00'},
    {name: '21:30'},
    {name: '22:00'},
    {name: '22:30'},
    {name: '23:30'},
    {name: '23:00'},
    {name: '24:00'},
    {name: '24:30'},
  ];
  static getAgeList = last => {
    var data = [];

    for (let i = last ? last : 0; i < 21; i++) {
      data.push({name: i * 5});
    }

    return data;
  };
}
