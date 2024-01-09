import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../../../utils/AppStyles';
import LogInToolbar from '../../../components/LogInToolbar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import {AppColors} from '../../../utils/AppColors';
import BorderView from '../../../components/BorderView';
import AppInputView from '../../../components/AppInputView';
import AppButton from '../../../components/AppButton';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import OtpTextInput from '../../../components/OtpTextInput';
import {
  AppConstValue,
  ShowMessage,
  matchAuthCode,
  printLog,
  sendFirebasePhoneOtp,
} from '../../../utils/AppConstValue';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  AsyncStorageConst,
  getString,
  setString,
} from '../../../utils/AsyncStorageHelper';
import {register} from '../../../networking/CallApi';
import LoaderView from '../../../utils/LoaderView';
import {showMessage} from 'react-native-flash-message';

const VerifyScreen = props => {
  const screen = props?.route.params.screen;
  const forget = props?.route.params.forget;
  // const params=props?.route.params;
  const phone = props?.route?.params?.phone;
  const country_code = props?.route?.params?.country;
  // const firstname=props?.route?.params?.country;
  // const codeConfirmation = props?.route?.params?.codeConformation;
  const name = props?.route?.params?.name;
  const city_id = props?.route?.params?.city_id;
  const password = props?.route?.params?.password;
  const city = props?.route?.params?.city;
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var Userdata = props?.route?.params;

  const [isLoading, setLoading] = useState(false);
  const [resendCode, setResendCode] = useState('Resend Your Code');
  const [codeConfirmation, setConformation] = useState(
    props?.route?.params?.codeConformation,
  );
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [resendLoad, setLoad] = useState(false);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 61;
    return `${remainingSeconds}`;
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

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
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}>
          {/* TopView  */}
          <View style={{flex: 1}}>
            <View
              style={{
                height: Dimensions.get('window').height / 3,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingHorizontal: 25,
              }}>
              <Image
                source={
                  screen == 'User Signin'
                    ? AppImages.USER_PHONE_ICON
                    : AppImages.PHONE_ICON
                }
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 22,
                    color: '#000',
                  }}>
                  Verify
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: AppFonts.regular,
                    color: AppColors.LightText,
                    textAlign: 'center',
                    marginTop: 15,
                    lineHeight: 25,
                    width: '90%',
                  }}>
                  Please enter the verification code sent to your phone number
                </Text>
              </View>
            </View>

            {/* CenterView  */}
            <View style={{flex: 0.3}}>
              <View
                style={[
                  AppStyles.OutlineBackground,
                  {
                    marginBottom: 30,
                  },
                ]}>
                <OtpTextInput
                  text={'Your Code'}
                  codeFilled={i => setOtp(i)}
                  textStyle={{
                    color:
                      screen == 'User Signin'
                        ? 'black'
                        : AppColors.BackgroundSecondColor,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 25,
                    marginBottom: 10,
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    activeOpacity={AppConstValue.ButtonOpacity}
                    onPress={() => {
                      setResendCode('Code has been sent');
                      sendFirebasePhoneOtp(
                        `${country_code}${phone}`,
                        Confirmation => {
                          setLoad(false);
                          console.log('co', Confirmation);
                          setConformation(Confirmation);
                        },
                      );
                    }}>
                    <Text
                      style={{
                        fontFamily: AppFonts.semiBold,
                        fontSize: 12,
                        color:
                          screen == 'User Signin'
                            ? 'black'
                            : AppColors.BackgroundSecondColor,
                      }}>
                      {resendCode}
                    </Text>
                  </TouchableOpacity>
                  {timer > 0 ? (
                    <Text
                      style={{
                        fontSize: 11,
                        color: AppColors.LightText,
                        fontFamily: AppFonts.medium,
                      }}>
                      {'Expired after ' + formatTime(timer) + 's'}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 11,
                        color: AppColors.LightText,
                        fontFamily: AppFonts.medium,
                      }}>
                      Expired
                    </Text>
                  )}
                </View>
                <AppButton
                  buttonPress={
                    () => {
                      var params = {
                        country_code: country_code,
                        phone: phone,
                        name: name,
                        city_id: city_id,
                        password: password,
                      };
                      // console.log(
                      //   'details--->',
                      //   codeConfirmation,
                      //   '+',
                      //   otp,
                      //   JSON.stringify(params),
                      // );
                      setLoading(true);
                      matchAuthCode(
                        codeConfirmation,
                        otp,
                        onSuccess => {
                          console.log('verification done', onSuccess);
                          if (forget == 'no') {
                            register(
                              params,
                              response => {
                                printLog(
                                  'register Success',
                                  JSON.stringify(response),
                                );
                                if (!response?.status) {
                                  ShowMessage(response?.message);
                                  setLoading(false);
                                } else {
                                  // setLoading(false);
                                  var token = response?.token;
                                  printLog(typeof token);
                                  setString(
                                    AsyncStorageConst.allDetails,
                                    JSON.stringify(response),
                                  );
                                  printLog('signUpToken--', token);
                                  setString(AsyncStorageConst.token, token);
                                  setString(
                                    AsyncStorageConst.screen,
                                    'User Signin',
                                  );
                                  setString(
                                    AsyncStorageConst.user,
                                    JSON.stringify(response?.data),
                                  );
                                  RootNavigation.forcePush(
                                    props,
                                    AppScreens.USER_LOGIN_DETAIL,
                                    {
                                      screen: screen,
                                      phone: phone,
                                      country_code: country_code,
                                      return: 'SignUp',
                                      city: city,
                                      password: password,
                                      name: name,
                                    },
                                  );
                                  setLoading(false);
                                }
                              },
                              error => {
                                printLog('register error', error);
                                setLoading(false);
                              },
                            );
                          } else {
                            RootNavigation.navigate(
                              AppScreens.NEW_PASSWORD_SCREEN,
                              {
                                phone: phone,
                                country_code: country_code,
                                screen: screen,
                                forget: forget,
                              },
                            );
                            setLoading(false);
                          }
                        },
                        onError => {
                          if (
                            onError.code == 'auth/invalid-verification-code'
                          ) {
                            ShowMessage('Invalid-Otp');
                          } else if (onError == 'auth/session-expired') {
                            ShowMessage('Session Expired');
                          } else if (onError.code === 'missing-phone-number') {
                            ShowMessage('Missing Phone Number.');
                          } else if (
                            onError.code === 'auth/invalid-phone-number'
                          ) {
                            ShowMessage('Invalid Phone Number.');
                          } else if (onError.code === 'auth/quota-exceeded') {
                            ShowMessage(
                              'SMS quota exceeded.Please try again later.',
                            );
                          } else {
                            ShowMessage(onError);
                          }
                          console.log('error', onError.code);
                          // showMessage('invalid');
                        },

                        // onError => {
                        //   {
                        //     setLoading(false),
                        //       console.log('onInvalidError', onError);
                        //     if (
                        //       onError.code ==
                        //       'auth / invalid - verification - code'
                        //     ) {
                        //       ShowMessage('invalid Otp');
                        //     } else if (
                        //       onError.code === 'auth/session-expired'
                        //     ) {
                        //       ShowMessage('Session Expired');
                        //     } else if (
                        //       onError.code === 'missing-phone-number'
                        //     ) {
                        //       ShowMessage('Missing Phone Number.');
                        //     } else if (
                        //       onError.code === 'auth/invalid-phone-number'
                        //     ) {
                        //       ShowMessage('Invalid Phone Number.');
                        //     } else if (onError.code === 'auth/quota-exceeded') {
                        //       ShowMessage(
                        //         'SMS quota exceeded.Please try again later.',
                        //       );
                        //     } else {
                        //       ShowMessage(onError);
                        //     }
                        //   }
                        // },
                        loading => {
                          setLoading(loading);
                          ShowMessage('invalid otp');
                        },
                      );
                    }
                    // RootNavigation.navigate(AppScreens.NEW_PASSWORD_SCREEN, {
                    //   screen: screen,
                    // })
                  }
                  text={'Confirm'}
                  loading={isLoading}
                  color={screen == 'User Signin' ? 'black' : 'white'}
                  textStyle={{
                    color: screen == 'User Signin' ? 'black' : 'white',
                  }}
                  buttonStyle={{
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                    backgroundColor:
                      screen == 'User Signin'
                        ? AppColors.Red
                        : AppColors.BackgroundSecondColor,
                  }}
                />
              </View>
            </View>
          </View>
          <BorderView
            text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
            backgroundColor={
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor
            }
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default VerifyScreen;
