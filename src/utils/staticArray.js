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
      screen: AppScreens.SOCIAL_SERVICE,
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
      menu: 'પરિવાર સુરક્ષા સહાય સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'sponcer',
      src: require('../assets/images/support_member_icon.png'),
    },
    // {
    //   index: 5,
    //   menu: 'ભુમિ સભાસદ સભ્ય',
    //   screen: AppScreens.APP_SPONCER_SCREEN,
    //   detail: 'bhumi',
    //   src: require('../assets/images/support_member_icon.png'),
    // },

    {
      index: 5,
      menu: 'વિવિધ શહેર કારોબારી',
      screen: AppScreens.VARIOUS_BUSINESS,
      src: require('../assets/images/bhumi_icon.png'),
    },
    {
      index: 6,
      menu: 'Privacy Policy',
      screen: AppScreens.PRIVACY_POLICY,
      src: require('../assets/images/privacy_icon.png'),
    },
    {
      index: 7,
      menu: 'Contact Us',
      screen: AppScreens.CONTACT_US_SCREEN,
      src: require('../assets/images/contact_icon.png'),
    },
    {
      index: 8,
      menu: 'Log Out',
      screen: '',
      src: AppImages.LOGOUT_ICON,
    },
  ];

  static GuestDrawerMenu = [
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
      menu: 'પરિવાર સુરક્ષા સહાય સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'sponcer',
      src: require('../assets/images/support_member_icon.png'),
    },
    {
      index: 3,
      menu: 'ભુમિ સભાસદ સભ્ય',
      screen: AppScreens.APP_SPONCER_SCREEN,
      detail: 'bhumi',
      src: require('../assets/images/support_member_icon.png'),
    },

    {
      index: 4,
      menu: 'વિવિધ શહેર કારોબારી',
      screen: AppScreens.VARIOUS_BUSINESS,
      src: require('../assets/images/bhumi_icon.png'),
    },

    {
      index: 5,
      menu: 'Privacy Policy',
      screen: AppScreens.PRIVACY_POLICY,
      src: require('../assets/images/privacy_icon.png'),
    },
    {
      index: 6,
      menu: 'Contact Us',
      screen: AppScreens.CONTACT_US_SCREEN,
      src: require('../assets/images/contact_icon.png'),
    },
    {
      index: 7,
      menu: 'Log Out',
      screen: '',
      src: AppImages.LOGOUT_ICON,
    },
  ];

  static gender = [
    {label: 'Male', value: 'Male', name: 'Male'},
    {label: 'Female', value: 'Female', name: 'Female'},
  ];
  static FeedbackOptions = [
    {label: 'Complain', value: 'Complain', name: 'Complain'},
    {label: 'Suggestion', value: 'Suggestion', name: 'Suggestion'},
  ];

  // static studies = [
  //   {label: 'Jr. KG', value: 'Jr. KG', name: 'Jr. KG'},
  //   {label: 'Sr. KG', value: 'Sr. KG', name: 'Sr. KG'},
  //   {label: 'STD:1', value: 'STD:1', name: 'STD:1'},
  //   {label: 'STD:2', value: 'STD:2', name: 'STD:2'},
  //   {label: 'STD:3', value: 'STD:3', name: 'STD:3'},
  //   {label: 'STD:4', value: 'STD:4', name: 'STD:4'},
  //   {label: 'STD:5', value: 'STD:5', name: 'STD:5'},
  //   {label: 'STD:6', value: 'STD:6', name: 'STD:6'},
  //   {label: 'STD:7', value: 'STD:7', name: 'STD:7'},
  //   {label: 'STD:8', value: 'STD:8', name: 'STD:8'},
  //   {label: 'STD:9', value: 'STD:9', name: 'STD:9'},
  //   {label: 'STD:10', value: 'STD:10', name: 'STD:10'},
  //   {label: 'STD:11', value: 'STD:11', name: 'STD:11'},
  //   {label: 'STD:12', value: 'STD:12', name: 'STD:12'},
  //   {label: 'I.T.I', value: 'I.T.I', name: 'I.T.I'},
  //   {label: 'DIPLOMA', value: 'DIPLOMA', name: 'DIPLOMA'},
  //   {label: 'B.Tech.', value: 'B.Tech.', name: 'B.Tech.'},
  //   {label: 'B.Com.', value: 'B.Com.', name: 'B.Com.'},
  //   {label: 'B.A.', value: 'B.A.', name: 'B.A.'},
  //   {label: 'B.S.C.', value: 'B.S.C.', name: 'B.S.C.'},
  //   {label: 'B.Ed.', value: 'B.Ed.', name: 'B.Ed.'},
  //   {label: 'B.V.Sc.', value: 'B.V.Sc.', name: 'B.V.Sc.'},
  //   {label: 'B.H.M.S.', value: 'B.H.M.S.', name: 'B.H.M.S.'},
  //   {label: 'B.Ed.', value: 'B.Ed.', name: 'B.Ed.'},
  //   {label: 'B.A.M.S.', value: 'B.A.M.S.', name: 'B.A.M.S.'},
  //   {label: 'B.D.S.', value: 'B.D.S.', name: 'B.D.S.'},
  //   {label: 'B.M.L.T.', value: 'B.M.L.T.', name: 'B.M.L.T.'},
  //   {label: 'B.V.Sc.', value: 'B.V.Sc.', name: 'B.V.Sc.'},
  //   {label: 'B.P.Ed.', value: 'B.P.Ed.', name: 'B.P.Ed.'},
  //   {label: 'B.E.', value: 'B.E.', name: 'B.E.'},
  //   {label: 'B.Arch.', value: 'B.Arch.', name: 'B.Arch.'},
  //   {label: 'B.B.A.', value: 'B.B.A.', name: 'B.B.A.'},
  //   {label: 'B.C.A.', value: 'B.C.A.', name: 'B.C.A.'},
  //   {label: 'B.Pharma', value: 'B.Pharma', name: 'B.Pharma'},
  //   {label: 'B.S.W.', value: 'B.S.W.', name: 'B.S.W.'},
  //   {label: 'M.Tech.', value: 'M.Tech.', name: 'M.Tech.'},
  //   {label: 'M.S.C.', value: 'M.S.C.', name: 'M.S.C.'},
  //   {label: 'MSC MLT', value: 'MSC MLT', name: 'MSC MLT'},
  //   {label: 'M.Com.', value: 'M.Com.', name: 'M.Com.'},
  //   {label: 'M.A.', value: 'M.A.', name: 'M.A.'},
  //   {label: 'M.Ed.', value: 'M.Ed.', name: 'M.Ed.'},
  //   {label: 'M.E.', value: 'M.E.', name: 'M.E.'},
  //   {label: 'M.S.', value: 'M.S.', name: 'M.A.'},
  //   {label: 'M.B.B.S.', value: 'M.B.B.S.', name: 'B.Ed.'},
  //   {label: 'M.S.', value: 'M.S.', name: 'M.S.'},
  //   {label: 'M.D.', value: 'M.D.', name: 'M.D.'},
  //   {label: 'M.D.S.', value: 'M.D.S.', name: 'M.D.S.'},
  //   {label: 'M.C.M.', value: 'M.C.M.', name: 'M.C.M.'},
  //   {label: 'M.C.A.', value: 'M.C.A.', name: 'M.C.A.'},
  //   {label: 'M.B.A.', value: 'M.B.A.', name: 'M.B.A.'},
  //   {label: 'M.S.W.', value: 'M.S.W.', name: 'M.S.W.'},
  //   {label: 'M.Pharma', value: 'M.Pharma', name: 'M.Pharma'},
  //   {
  //     label: 'Management in Eng',
  //     value: 'Management in Eng',
  //     name: 'Management in Eng',
  //   },
  //   {label: 'N.D.A.', value: 'N.D.A.', name: 'N.D.A.'},
  //   {label: 'D.Ed.', value: 'D.Ed.', name: 'D.Ed.'},
  //   {label: 'IES', value: 'IES', name: 'Ph.D.'},
  //   {label: 'IIT', value: 'IIT', name: 'D.Ed.'},
  //   {label: 'L.L.B.', value: 'L.L.B.', name: 'L.L.B.'},
  //   {label: 'D.L.L.', value: 'D.L.L.', name: 'D.L.L.'},
  //   {label: 'D.T.M.', value: 'D.T.M.', name: 'D.T.M.'},
  //   {label: 'L.L.M.', value: 'L.L.M.', name: 'L.L.M.'},
  //   {label: 'C.S.', value: 'C.S.', name: 'C.S.'},
  //   {label: 'C.A.', value: 'C.A.', name: 'C.A.'},
  //   {label: 'I.C.W.A.', value: 'I.C.W.A.', name: 'I.C.W.A.'},
  //   {
  //     label: 'Hotel Management',
  //     value: 'Hotel Management',
  //     name: 'Hotel Management',
  //   },
  //   {label: 'Ph.D.', value: 'Ph.D.', name: 'Ph.D.'},
  //   {label: 'No Study', value: 'No Study', name: 'No Study'},
  //   {label: 'Other', value: 'Other', name: 'Other'},
  // ];

  static studies = [
    {label: 'B.A.', value: 'B.A.', name: 'B.A.'},
    {label: 'B.A.M.S.', value: 'B.A.M.S.', name: 'B.A.M.S.'},
    {label: 'B.Arch.', value: 'B.Arch.', name: 'B.Arch.'},
    {label: 'B.B.A.', value: 'B.B.A.', name: 'B.B.A.'},
    {label: 'B.C.A.', value: 'B.C.A.', name: 'B.C.A.'},
    {label: 'B.Com.', value: 'B.Com.', name: 'B.Com.'},
    {label: 'B.D.S.', value: 'B.D.S.', name: 'B.D.S.'},
    {label: 'B.E.', value: 'B.E.', name: 'B.E.'},
    {label: 'B.Ed.', value: 'B.Ed.', name: 'B.Ed.'},
    {label: 'B.H.M.S.', value: 'B.H.M.S.', name: 'B.H.M.S.'},
    {label: 'B.M.L.T.', value: 'B.M.L.T.', name: 'B.M.L.T.'},
    {label: 'B.P.Ed.', value: 'B.P.Ed.', name: 'B.P.Ed.'},
    {label: 'B.Pharma', value: 'B.Pharma', name: 'B.Pharma'},
    {label: 'B.S.C.', value: 'B.S.C.', name: 'B.S.C.'},
    {label: 'B.S.W.', value: 'B.S.W.', name: 'B.S.W.'},
    {label: 'B.Tech.', value: 'B.Tech.', name: 'B.Tech.'},
    {label: 'B.V.Sc.', value: 'B.V.Sc.', name: 'B.V.Sc.'},
    {label: 'B.V.Sc. & A.H.', value: 'B.V.Sc. & A.H.', name: 'B.V.Sc. & A.H.'},
    {label: 'C.A.', value: 'C.A.', name: 'C.A.'},
    {label: 'C.S.', value: 'C.S.', name: 'C.S.'},
    {label: 'D.Ed.', value: 'D.Ed.', name: 'D.Ed.'},
    {label: 'D.L.L.', value: 'D.L.L.', name: 'D.L.L.'},
    {label: 'D.T.M.', value: 'D.T.M.', name: 'D.T.M.'},
    {label: 'DIPLOMA', value: 'DIPLOMA', name: 'DIPLOMA'},
    {
      label: 'Health Management',
      value: 'Health Management',
      name: 'Health Management',
    },
    {
      label: 'Hotel Management',
      value: 'Hotel Management',
      name: 'Hotel Management',
    },
    {label: 'I.C.W.A.', value: 'I.C.W.A.', name: 'I.C.W.A.'},
    {label: 'I.T.I', value: 'I.T.I', name: 'I.T.I'},
    {label: 'IES', value: 'IES', name: 'IES'},
    {label: 'IIT', value: 'IIT', name: 'IIT'},
    {label: 'Jr. KG', value: 'Jr. KG', name: 'Jr. KG'},
    {label: 'L.L.B.', value: 'L.L.B.', name: 'L.L.B.'},
    {label: 'L.L.M.', value: 'L.L.M.', name: 'L.L.M.'},
    {label: 'M.A.', value: 'M.A.', name: 'M.A.'},
    {label: 'MA.BEd', value: 'MA.BEd', name: 'MA.BEd'},
    {label: 'M.B.A.', value: 'M.B.A.', name: 'M.B.A.'},
    {label: 'M.B.B.S.', value: 'M.B.B.S.', name: 'M.B.B.S.'},
    {label: 'M.C.A.', value: 'M.C.A.', name: 'M.C.A.'},
    {label: 'M.C.M.', value: 'M.C.M.', name: 'M.C.M.'},
    {label: 'M.Com.', value: 'M.Com.', name: 'M.Com.'},
    {label: 'M.D.', value: 'M.D.', name: 'M.D.'},
    {label: 'M.D.S.', value: 'M.D.S.', name: 'M.D.S.'},
    {label: 'M.E.', value: 'M.E.', name: 'M.E.'},
    {label: 'M.Ed.', value: 'M.Ed.', name: 'M.Ed.'},
    {label: 'M.Pharma', value: 'M.Pharma', name: 'M.Pharma'},
    {label: 'M.S.', value: 'M.S.', name: 'M.S.'},
    {label: 'M.S.C.', value: 'M.S.C.', name: 'M.S.C.'},
    {label: 'M.S.W.', value: 'M.S.W.', name: 'M.S.W.'},
    {label: 'M.Tech.', value: 'M.Tech.', name: 'M.Tech.'},
    {label: 'MSC MLT', value: 'MSC MLT', name: 'MSC MLT'},
    {
      label: 'Management in Eng',
      value: 'Management in Eng',
      name: 'Management in Eng',
    },
    {label: 'N.D.A.', value: 'N.D.A.', name: 'N.D.A.'},
    {label: 'Nursery', value: 'Nursery', name: 'Nursery'},
    {label: 'Ph.D', value: 'Ph.D', name: 'Ph.D'},
    {label: 'P.T.C.', value: 'P.T.C.', name: 'P.T.C.'},
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
    {label: 'Sr. KG', value: 'Sr. KG', name: 'Sr. KG'},
    {label: 'Graduate', value: 'Graduate', name: 'Graduate'},
    {label: 'No Study', value: 'No Study', name: 'No Study'},
    {label: 'Other', value: 'Other', name: 'Other'},
  ];
  static foriegnCountry = [
    {label: 'Australia', value: 'Australia', name: 'Australia'},
    {label: 'Azerbaijan', value: 'Azerbaijan', name: 'Azerbaijan'},
    {label: 'Bahamas', value: 'Bahamas', name: 'Bahamas'},
    {label: 'Bangladesh', value: 'Bangladesh', name: 'Bangladesh'},
    {label: 'Bhutan', value: 'Bhutan', name: 'Bhutan'},
    {label: 'Cambodia', value: 'Cambodia', name: 'Cambodia'},
    {label: 'Canada', value: 'Canada', name: 'Canada'},
    {label: 'China', value: 'China', name: 'China'},
    {label: 'Colombia', value: 'Colombia', name: 'Colombia'},
    {label: 'Cuba', value: 'Cuba', name: 'Cuba'},
    {label: 'Denmark', value: 'Denmark', name: 'Denmark'},
    {label: 'Egypt', value: 'Egypt', name: 'Egypt'},
    {label: 'Fiji', value: 'Fiji', name: 'Fiji'},
    {label: 'Finland', value: 'Finland', name: 'Finland'},
    {label: 'Germany', value: 'Germany', name: 'Germany'},
    {label: 'Hong Kong', value: 'Hong Kong', name: 'Hong Kong'},
    {label: 'India', value: 'India', name: 'India'},
    {label: 'Indonesia', value: 'Indonesia', name: 'Indonesia'},
    {label: 'Ireland', value: 'Ireland', name: 'Ireland'},
    {label: 'Italy', value: 'Italy', name: 'Italy'},
    {label: 'Japan', value: 'Japan', name: 'Japan'},
    {label: 'Kuwait', value: 'Kuwait', name: 'Kuwait'},
    {label: 'Malaysia', value: 'Malaysia', name: 'Malaysia'},
    {label: 'Maldives', value: 'Maldives', name: 'Maldives'},
    {label: 'Mauritius', value: 'Mauritius', name: 'Mauritius'},
    {label: 'Namibia', value: 'Namibia', name: 'Namibia'},
    {label: 'Nepal', value: 'Nepal', name: 'Nepal'},
    {label: 'Netherlands', value: 'Netherlands', name: 'Netherlands'},
    {label: 'New Zealand', value: 'New Zealand', name: 'New Zealand'},
    {label: 'Philippines', value: 'Philippines', name: 'Philippines'},
    {label: 'Poland', value: 'Poland', name: 'Poland'},
    {label: 'Russia', value: 'Russia', name: 'Russia'},
    {label: 'Saudi Arabia', value: 'Saudi Arabia', name: 'Saudi Arabia'},
    {label: 'Singapore', value: 'Singapore', name: 'Singapore'},
    {label: 'South Africa', value: 'South Africa', name: 'South Africa'},
    {label: 'Spain', value: 'Spain', name: 'Spain'},
    {label: 'Sri Lanka', value: 'Sri Lanka', name: 'Sri Lanka'},
    {label: 'Switzerland', value: 'Switzerland', name: 'Switzerland'},
    {label: 'Thailand', value: 'Thailand', name: 'Thailand'},
    {label: 'Turkey', value: 'Turkey', name: 'Turkey'},
    {
      label: 'United Arab Emirates',
      value: 'United Arab Emirates',
      name: 'United Arab Emirates',
    },
    {label: 'United Kingdom', value: 'United Kingdom', name: 'United Kingdom'},
    {label: 'United States', value: 'United States', name: 'United States'},
    {label: 'Vietnam', value: 'Vietnam', name: 'Vietnam'},
  ]
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));

  static lifeSupportNumbers = [
    {
      label: '1234 - Dhaval ahm',
      value: '1234 - Dhaval ahm',
      name: '1234 - Dhaval ahm',
    },
    {
      label: '8799 - Dhaval ahm',
      value: '9799 - Dhaval ahm',
      name: '6782 - Dhaval ahm',
    },
    {
      label: '1234 - Dhaval ahm',
      value: '1234 - Dhaval ahm',
      name: '1234 - Dhaval ahm',
    },
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

  static countryCodes = [
    {code: 'Australia', country: '61'},
    {code: 'Azerbaijan', country: '994'},
    {code: 'Bahamas', country: '1-242'},
    {code: 'Bangladesh', country: '880'},
    {code: 'Bhutan', country: '975'},
    {code: 'Cambodia', country: '855'},
    {code: 'Canada', country: '1'},
    {code: 'China', country: '86'},
    {code: 'Colombia', country: '57'},
    {code: 'Cuba', country: '53'},
    {code: 'Denmark', country: '45'},
    {code: 'Egypt', country: '20'},
    {code: 'Fiji', country: '679'},
    {code: 'Finland', country: '358'},
    {code: 'Germany', country: '49'},
    {code: 'Hong Kong', country: '852'},
    {code: 'India', country: '91'},
    {code: 'Indonesia', country: '62'},
    {code: 'Ireland', country: '353'},
    {code: 'Italy', country: '39'},
    {code: 'Japan', country: '81'},
    {code: 'Kuwait', country: '965'},
    {code: 'Malaysia', country: '60'},
    {code: 'Maldives', country: '960'},
    {code: 'Mauritius', country: '230'},
    {code: 'Namibia', country: '264'},
    {code: 'Nepal', country: '977'},
    {code: 'Netherlands', country: '31'},
    {code: 'New Zealand', country: '64'},
    {code: 'Philippines', country: '63'},
    {code: 'Poland', country: '48'},
    {code: 'Russia', country: '7'},
    {code: 'Saudi Arabia', country: '966'},
    {code: 'Singapore', country: '65'},
    {code: 'South Africa', country: '27'},
    {code: 'Spain', country: '34'},
    {code: 'Sri Lanka', country: '94'},
    {code: 'Switzerland', country: '41'},
    {code: 'Thailand', country: '66'},
    {code: 'Turkey', country: '90'},
    {code: 'United Arab Emirates', country: '971'},
    {code: 'United Kingdom', country: '44'},
    {code: 'United States', country: '1'},
    {code: 'Vietnam', country: '84 '},
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
    {label: 'Unknown', value: 'Unknown', name: 'Unknown'},
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

  static businessCategory = [
    {label: 'Jewellery', value: 'Jewellery', name: 'Jewellery'},
    {label: 'Electronics', value: 'Electronics', name: 'Electronics'},
    {label: 'House Builder', value: 'House Builder', name: 'House Builder'},
    {label: 'Gift Articles', value: 'Gift Articles', name: 'Gift Articles'},
  ];
  static getAgeList = last => {
    var data = [];

    for (let i = last ? last : 0; i < 101; i++) {
      data.push({name: i * 1});
    }

    return data;
  };
}
