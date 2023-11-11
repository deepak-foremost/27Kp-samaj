import {View, Text, Keyboard} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppScreens} from './AppScreens';
import SplashScreen from '../screens/auth/SplashScreen';
import SponserScreen from '../screens/auth/SponserScreen';
import FirstScreen from '../screens/auth/FirstScreen';
import MobileLogInScreen from '../screens/auth/MobileLogin/MobileLogInScreen';
import ForgotScreen from '../screens/auth/MobileLogin/ForgotScreen';
import VerifyScreen from '../screens/auth/MobileLogin/VerifyScreen';
import NewPasswordScreen from '../screens/auth/MobileLogin/NewPasswordScreen';
import QuickPayScreen from '../screens/QuickPayScreen';
import UserSignUp from '../screens/auth/UserLogIn/UserSignUp';
import UserLogInDetail from '../screens/auth/UserLogIn/UserLogInDetail';
import HomeScreen from '../screens/auth/HomeScreen';
import AdvicerMember from '../screens/MenuScreen/advisour_member/AdvicerMember';
import AboutUsScreen from '../screens/MenuScreen/about_us/AboutUsScreen';
import AboutUsDetailScreen from '../screens/MenuScreen/about_us/AboutUsDetailScreen';
import StatisticScreen from '../screens/MenuScreen/statistics/StatisticScreen.';
import SearchScreen from '../screens/MenuScreen/search/SearchScreen';
import MembersDetailScreen from '../screens/FamilyMemberScreen/MemberDetailScreen';
import FamilyMembersScreen from '../screens/FamilyMemberScreen/FamilyMemberScreen';
import FamilyMemberDetailScreen from '../screens/MenuScreen/memberDetail/FamilyMemberDetailScreen';
import FamilyDetailScreen from '../screens/MenuScreen/memberDetail/FamilyDetailScreen';
import BusinessScreen from '../screens/MenuScreen/business/BusinessScreen';
import BusinessDetaiLScreen from '../screens/MenuScreen/business/BusinessDetaiLScreen';
import VillageScreen from '../screens/MenuScreen/village/VillageScreen';
import NewsScreen from '../screens/MenuScreen/news/NewsScreen';
import ParichayFileScreen from '../screens/MenuScreen/parichay/ParichayFile';
import ContactUsScreen from '../screens/ContactUsScreen';
import FeedBackScreen from '../screens/MenuScreen/contatus/FeedBackScreen';
import NewsDetailScreen from '../screens/MenuScreen/news/NewsDetailScreen';
import AddMemberScreen from '../screens/FamilyMemberScreen/AddMemberScreen';
import AddBusinessScreen from '../screens/MenuScreen/business/AddBusinessScreen';
import BusinessListScreen from '../screens/MenuScreen/business/BusinessListScreen';
import AppSponcerScreen from '../screens/MenuScreen/sponcer/AppSponcerScreen';
import ProfileScreen from '../screens/MenuScreen/profile/ProfileScreen';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigtionRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {/* <Stack.Screen name={AppScreens.SplashScreen} component={SplashScreen} /> */}
        <Stack.Screen
          name={AppScreens.SponserScreen}
          component={SponserScreen}
        />
        <Stack.Screen name={AppScreens.FirstScreen} component={FirstScreen} />
        <Stack.Screen
          name={AppScreens.MOILE_LOGIN_SCREEN}
          component={MobileLogInScreen}
        />
        <Stack.Screen
          name={AppScreens.MOBILE_FORGOT_SCREEN}
          component={ForgotScreen}
        />
        <Stack.Screen
          name={AppScreens.VERIFY_SCREEN}
          component={VerifyScreen}
        />
        <Stack.Screen
          name={AppScreens.NEW_PASSWORD_SCREEN}
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name={AppScreens.QUICK_PAY_SCREEN}
          component={QuickPayScreen}
        />
        <Stack.Screen
          name={AppScreens.USER_SIGNUP_SCREEN}
          component={UserSignUp}
        />
        <Stack.Screen
          name={AppScreens.USER_LOGIN_DETAIL}
          component={UserLogInDetail}
        />
        <Stack.Screen name={AppScreens.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={AppScreens.ADVICE_MEMBER}
          component={AdvicerMember}
        />
        <Stack.Screen
          name={AppScreens.ABOUT_US_SCREEN}
          component={AboutUsScreen}
        />
        <Stack.Screen
          name={AppScreens.ABOUT_US_DETAIL_SCREEN}
          component={AboutUsDetailScreen}
        />
         <Stack.Screen
          name={AppScreens.STATISTIC_SCREEN}
          component={StatisticScreen}
        />
          <Stack.Screen
          name={AppScreens.SEARCH_SCREEN}
          component={SearchScreen}
        />
        <Stack.Screen
          name={AppScreens.MEMBER_DETAIL_SCREEN}
          component={MembersDetailScreen}
        />
        <Stack.Screen
          name={AppScreens.FAMILY_MEMBER_SCREEN}
          component={FamilyMembersScreen}
        />
         <Stack.Screen
          name={AppScreens.FAMILY_MEMBER_DETAIL_SCREEN}
          component={FamilyMemberDetailScreen}
        />
        <Stack.Screen
          name={AppScreens.FAMILY_DETAIL_SCREEN}
          component={FamilyDetailScreen}
        />
         <Stack.Screen
          name={AppScreens.BUSINESS_SCREEN}
          component={BusinessScreen}
        />
         <Stack.Screen
          name={AppScreens.BUSINESS_DETAIL_SCREEN}
          component={BusinessDetaiLScreen}
        />
         <Stack.Screen
          name={AppScreens.VILLAGE_SCREEN}
          component={VillageScreen}
        />
         <Stack.Screen
          name={AppScreens.NEWS_SCREEN}
          component={NewsScreen}
        />
         <Stack.Screen
          name={AppScreens.PARICHAY_FILE_SCREEN}
          component={ParichayFileScreen}
        />
         <Stack.Screen
          name={AppScreens.CONTACT_US_SCREEN}
          component={ContactUsScreen}
        />
         <Stack.Screen
          name={AppScreens.FEEDBACK_SCREEN}
          component={FeedBackScreen}
        />
         <Stack.Screen
          name={AppScreens.NEWS_DETAIL_SCREEN}
          component={NewsDetailScreen}
        />
         <Stack.Screen
          name={AppScreens.ADD_MEMBER_SCREEN}
          component={AddMemberScreen}
        />
         <Stack.Screen
          name={AppScreens.ADD_BUSINESS_SCREEN}
          component={AddBusinessScreen}
        />
         <Stack.Screen
          name={AppScreens.BUSINESS_LIST_SCREEN}
          component={BusinessListScreen}
        />
         <Stack.Screen
          name={AppScreens.APP_SPONCER_SCREEN}
          component={AppSponcerScreen}
        />
         <Stack.Screen
          name={AppScreens.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const Stack = createStackNavigator();

const navigtionRef = React.createRef();

export function forcePush(props, screenName, data) {
  props?.navigation?.reset({
    index: 0,
    routes: [{name: screenName}],
    params: data,
  });
}

export function navigate(name, params) {
  navigtionRef.current?.navigate(name, params);
}

export function push(navigation, name, params) {
  navigation.push(name, params);
}

export function goBack() {
  Keyboard.dismiss();
  navigtionRef.current.goBack();
}
export function goToRoot() {
  navigtionRef.current.navigate(AppScreens.SplashScreen);
}
