import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../../../utils/AppStyles';
import LogInToolbar from '../../../components/LogInToolbar';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import AppInputView from '../../../components/AppInputView';
import AppPasswordView from '../../../components/AppPasswordView';
import {AppColors} from '../../../utils/AppColors';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppConstValue,
  ShowMessage,
  printLog,
} from '../../../utils/AppConstValue';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import Header from '../../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import CountryPicker from 'react-native-country-picker-modal';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {
  AsyncStorageConst,
  getString,
  setString,
} from '../../../utils/AsyncStorageHelper';
import AsyncStorage from '@react-native-community/async-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {login} from '../../../networking/CallApi';
import {MyMobileNumber} from '../../../components/SimpleTextInput';

const MobileLogInScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;

  const screen = props?.route?.params?.screen;
  var data;

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [Visible, setVisible] = useState(false);
  const [country, setCountry] = useState('+91');
  const [check, setCheck] = useState(false);
  const {code, setCode} = useState('+91');

  useEffect(async () => {
    data = await AsyncStorage.getItem('flag');
  }, []);

  const storeToken = () => {
    if (data == null && screen != 'User Signin') {
      RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {
        screen: screen,
        status: 'enter',
      });
    } else {
      RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, {
        screen: screen,
      });
    }
  };

  // const StoreToken = () => {
  //   setString('first', 'enter');

  //   // if (getString('first')) {

  //   // } else {

  //   // }
  //   // RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {
  //   //   screen: screen,
  //   // });
  // };

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor:
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor,
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,
        },
      ]}>
      <StatusBar
        backgroundColor={
          screen == 'User Signin'
            ? AppColors.Red
            : AppColors.BackgroundSecondColor
        }
      />
      {/* <KeyboardAwareScrollView contentContainerStyle={{flexGrow:0.8}}
      extraScrollHeight={20}> */}
      {/* TpoView  */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Sign in'}
          imgStyle={{tintColor: screen == 'User Signin' ? 'black' : 'white'}}
          textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
          style={{
            backgroundColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
        />

        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'handled'}
          extraScrollHeight={10}
          bounces={false}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <View style={{flex: 1, overflow: 'visible'}}>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height:
                  screen == 'User Signin'
                    ? Dimensions.get('window').height / 3.5
                    : Dimensions.get('window').height / 4,
              }}>
              <Image
                style={{}}
                source={
                  screen == 'User Signin'
                    ? AppImages.USER_LOGIN_ICON
                    : AppImages.LOGIN_ICON
                }
              />
              {/* <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor:'red'
                }}> */}
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 17,
                  color: '#000',
                  textAlign: 'center',
                  width: '70%',
                  // marginVertical: 15,
                }}>
                {screen == 'User Signin'
                  ? ' Guest Sign in'
                  : 'Sign In Using Your Register Mobile Number'}
              </Text>
              {/* <Text
                  style={{
                    fontFamily: AppFonts.regular,
                    fontSize: 14,
                    color: AppColors.LightText,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  Welcome back!
                </Text> */}
              {screen == 'User Signin' ? (
                <TouchableOpacity
                  activeOpacity={AppConstValue.ButtonOpacity}
                  onPress={() =>
                    RootNavigation.navigate(AppScreens.USER_SIGNUP_SCREEN, {
                      screen: screen,
                    })
                  }
                  style={{}}>
                  <Text
                    style={{
                      fontFamily: AppFonts.regular,
                      fontSize: 14,
                      color: AppColors.LightText,
                      textAlign: 'center',
                      lineHeight: 25,
                    }}>
                    Welcome back!{'\n'} Don’t have an account?{' '}
                    {
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: AppFonts.medium,
                          color: 'black',
                        }}>
                        Sign up
                      </Text>
                    }
                  </Text>
                </TouchableOpacity>
              ) : null}
              {/* </View> */}
            </View>

            {/* CenterView  */}

            <View
              style={[
                {
                  // marginBottom: 30,
                },
                AppStyles.OutlineBackground,
              ]}>
              <AppInputView
                close={() => setVisible(false)}
                code={country}
                selectCode={cod => {
                  setCountry('+' + cod.callingCode);
                  setVisible(false);
                }}
                Visible={Visible}
                open={() => setVisible(true)}
                text={'Mobile Number'}
                placeholder={'Mobile Number'}
                onChangeText={i => setMobile(i)}
                icon={{
                  tintColor:
                    screen == 'User Signin'
                      ? AppColors.Red
                      : AppColors.BackgroundSecondColor,
                }}
              />

              {/* <MyMobileNumber
                // placeholder={'vjbrb'}
                type={'numeric'}
                label={`Mobile No`}
                countryCode={code}
                phone={mobile}
                setCountryCode={item => {
                  setCode(item?.name);
                }}
                onChangeText={setMobile}
              /> */}

              <AppPasswordView
                text={'Password'}
                placeholder={'Password'}
                onChangeText={i => setPassword(i)}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    borderColor:
                      screen == 'User Signin'
                        ? 'black'
                        : AppColors.BackgroundSecondColor,
                    borderWidth: 1,
                    height: 15,
                    width: 15,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setCheck(!check)}>
                  {check && (
                    <Text
                      style={{
                        color:
                          screen == 'User Signin'
                            ? 'black'
                            : AppColors.BackgroundSecondColor,
                        fontSize: 11,
                        fontFamily: AppFonts.semiBold,
                      }}>
                      ✓
                    </Text>
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: AppFonts.semiBold,
                    color:
                      screen == 'User Signin'
                        ? 'black'
                        : AppColors.BackgroundSecondColor,
                    marginLeft: 15,
                  }}>
                  Remember Password{' '}
                </Text>
              </View>

              <TouchableOpacity
                style={{alignSelf: 'flex-start'}}
                activeOpacity={AppConstValue.ButtonOpacity}
                onPress={() =>
                  // mobile != ''
                  //   ? RootNavigation.navigate(AppScreens.VERIFY_SCREEN, {
                  //       screen: screen,
                  //     })
                  //   : ShowMessage(
                  //       'Please Enter Mobile Number',
                  //       screen == 'User Signin'
                  //         ? AppColors.Red
                  //         : AppColors.BackgroundSecondColor,
                  //     )
                  RootNavigation.navigate(AppScreens.MOBILE_FORGOT_SCREEN, {
                    screen: screen,
                  })
                }>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 12,
                    color:
                      screen == 'User Signin'
                        ? 'black'
                        : AppColors.BackgroundSecondColor,
                    marginTop: 20,
                  }}>
                  Forgot Password ?
                </Text>
              </TouchableOpacity>

              <AppButton
                text={'Sign in'}
                textStyle={{color: screen == 'User Signin' ? 'black' : '#fff'}}
                buttonStyle={{
                  width: '100%',
                  marginTop: 30,
                  marginBottom: 20,
                  alignSelf: 'center',
                  backgroundColor:
                    screen == 'User Signin'
                      ? AppColors.Red
                      : AppColors.BackgroundSecondColor,
                }}
                buttonPress={() => {
                  // if (screen != 'User Signin') {
                  //   if (mobile.length < 5) {
                  //     ShowMessage('Please Enter a Valid Mobile Number');
                  //   } else if (mobile == '' || mobile == null) {
                  //     ShowMessage('Please Enter Your Mobile Number');
                  //   } else if (password == '') {
                  //     ShowMessage('Please Enter Your Password');
                  //   } else {
                  //     login(
                  //       {
                  //         login_with: 'FamilyId',
                  //         family_id: mobile,
                  //         password: password,
                  //         // phone: defaultMenuPos == 1 ? phone : '',
                  //         // country_code:
                  //         //   defaultMenuPos == 1 ? countryCode : countryCode,
                  //       },
                  //       response => {
                  //         if (!response?.status) {
                  //           showMessage(response?.message);
                  //         } else {
                  //           // setLoading(false);
                  //           var token = response?.token;
                  //           printLog('token', JSON.stringify(response));
                  //           printLog(typeof token);
                  //           setString(
                  //             AsyncStorageConst.allDetails,
                  //             JSON.stringify(response),
                  //           );
                  //           setString(AsyncStorageConst.token, token);
                  //           setString(
                  //             AsyncStorageConst.user,
                  //             JSON.stringify(response?.data),
                  //           );
                  //         }
                  //       },
                  //     );
                  //   }
                  // } else {
                  //   RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, '');
                  //   setString('first', 'enter');
                  // }
                  // RootNavigation.navigate(AppScreens.HOME_SCREEN);
                  RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, '');
                  setString('first', 'enter');
                  storeToken();
                }}
              />
            </View>
          </View>

          <BorderView
            text={
              screen == 'User Signin'
                ? 'સમાજ એજ મારો પરિવાર'
                : 'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'
            }
            backgroundColor={
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor
            }
          />
        </KeyboardAwareScrollView>

        {/* </KeyboardAwareScrollView> */}
      </View>
    </View>
  );
};

export default MobileLogInScreen;
