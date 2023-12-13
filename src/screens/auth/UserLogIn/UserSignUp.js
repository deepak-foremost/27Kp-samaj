import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
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
import TextInputView from '../../../components/TextInputView';
import {getCities, register} from '../../../networking/CallApi';
import {showMessage} from 'react-native-flash-message';
import {
  AsyncStorageConst,
  getString,
  setString,
} from '../../../utils/AsyncStorageHelper';
import {Dropdown} from 'react-native-element-dropdown';
import {
  HorizontalSelection,
  HorizontalTextInput,
} from '../../../components/SimpleTextInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const UserSignUp = ({route}) => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const screen = route.params.screen;
  const [isLoading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState('');
  const [cities, setCities] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getString('village', response => {
      setCities(response);
    });
  }, [cities, setCities]);

  // useEffect(() => {
  //   getCities(
  //     response => {
  //       printLog('NewUserScreen', response?.status);
  //       setCities(response?.data);
  //       setString('village', JSON.stringify(response?.data));
  //       printLog('cities', JSON.stringify(response?.data));
  //     },
  //     error => {
  //       printLog('NewUserScreen', error);
  //     },
  //   );
  // }, []);

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
      {/* <KeyboardAwareScrollView contentContainerStyle={{flexGrow:0.8}}
        extraScrollHeight={20}> */}
      {/* TpoView  */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Sign Up'}
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
          contentContainerStyle={{
            flexGrow: 0.9,
            paddingBottom: Platform.OS == 'android' && -250,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          enableOnAndroid={true}
          extraScrollHeight={30}>
          <View
            style={{
              flex: 1,
              paddingTop: 15,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height / 3.5,
                backgroundColor: '#fff',
                justifyContent: 'space-evenly',
              }}>
              <Image
                style={{}}
                source={
                  screen == 'User Signin'
                    ? AppImages.USER_LOGIN_ICON
                    : AppImages.LOGIN_ICON
                }
              />
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 22,
                    color: '#000',
                  }}>
                  {screen == 'User Signin' ? 'User Sign Up' : 'Sign in'}
                </Text>
                <Text
                  style={{
                    fontFamily: AppFonts.regular,
                    fontSize: 14,
                    color: AppColors.LightText,
                    marginTop: 15,
                    textAlign: 'center',
                  }}>
                  Welcome!
                </Text>
                {screen == 'User Signin' ? (
                  <TouchableOpacity
                    activeOpacity={AppConstValue.ButtonOpacity}
                    onPress={() =>
                      RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                        screen: 'User Signin',
                      })
                    }
                    style={{marginTop: 5, marginBottom: 10}}>
                    <Text
                      style={{
                        fontFamily: AppFonts.regular,
                        fontSize: 14,
                        color: AppColors.LightText,
                      }}>
                      Do you have an account?{' '}
                      {
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: AppFonts.medium,
                            color: 'black',
                          }}>
                          Login
                        </Text>
                      }
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            {/* CenterView  */}

            <View
              style={[
                {
                  marginBottom: 30,
                },
                AppStyles.OutlineBackground,
              ]}>
              <TextInputView
                text={'Name'}
                placeholder={'Enter Full Name'}
                src={AppImages.PHONE_SMALL_ICON}
                onChangeText={i => setFirstName(i)}
              />

              {/* <TextInputView
              text={'Village'}
              placeholder={'Village Name is Here'}
              src={AppImages.LOCATION_ICON}
              rightImage={AppImages.DROP_DOWN_ICON}
              // onChangeText={i => setCities(i)}
            /> */}

              <View
                style={{
                  height: 65,
                  width: '100%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 12,
                    color: AppColors.black,
                  }}>
                  Village
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: AppColors.line_color,
                    borderBottomWidth: 1,
                  }}>
                  <Image
                    style={{marginRight: 15}}
                    source={AppImages.LOCATION_ICON}
                  />
                  <Dropdown
                    data={cities}
                    placeholder={'Village Name is Here'}
                    maxHeight={200}
                    placeholderStyle={{
                      fontFamily: AppFonts.regular,
                      fontSize: 14,
                      color: AppColors.black,
                    }}
                    selectedTextStyle={{
                      fontFamily: AppFonts.regular,
                      fontSize: 12,
                      color: AppColors.black,
                    }}
                    value={value?.name}
                    labelField="name"
                    valueField="name"
                    style={{
                      flex: 1,
                      borderBottomColor: AppColors.line_color,
                      borderBottomWidth: 0,
                      height: 45,
                    }}
                    onChange={item => {
                      setValue(item);
                    }}
                    renderItem={item => (
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: AppFonts.regular,
                          color: AppColors.black,
                          marginTop: 5,
                          marginLeft: 15,
                        }}>
                        {item.name}
                      </Text>
                    )}
                  />
                </View>
              </View>

              <AppInputView
                code={countryCode}
                selectCode={cod => {
                  setCountryCode('+' + cod.callingCode);
                  setVisible(false);
                }}
                Visible={visible}
                open={() => setVisible(true)}
                text={'Mobile Number'}
                placeholder={'Mobile Number'}
                onChangeText={i => setPhone(i)}
                icon={{tintColor: screen == 'User Signin' && AppColors.Red}}
              />

              <AppPasswordView
                text={'Password'}
                placeholder={'Password'}
                onChangeText={i => setPassword(i)}
              />

              {/* <TouchableOpacity
              style={{alignSelf: 'flex-start'}}
              activeOpacity={AppConstValue.ButtonOpacity}
              onPress={() =>
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
                      ? AppColors.Red
                      : AppColors.BackgroundSecondColor,
                  marginTop: 20,
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity> */}

              <AppButton
                text={'Sign up'}
                textStyle={{color: 'black'}}
                buttonPress={() =>
                  // () => {
                  //   var params = {
                  //     country_code: countryCode,
                  //     phone: phone,
                  //     name: firstName,
                  //     city_id: value?.id,
                  //     password: password,
                  //   };
                  //   countryCode == ''
                  //     ? ShowMessage('Please select country code')
                  //     : phone.trim().length < 9
                  //     ? ShowMessage('Please enter phone no.')
                  //     : firstName.trim().length == 0
                  //     ? ShowMessage('Please enter first name')
                  //     : value == '' || value == null || value == undefined
                  //     ? ShowMessage('Please select your village')
                  //     : password.length < 6
                  //     ? ShowMessage('Password must be 6 latter long.')
                  //     : (setLoading(true),
                  //       register(
                  //         params,
                  //         response => {
                  //           printLog(
                  //             'register error',
                  //             JSON.stringify(response),
                  //           );
                  //           if (!response?.status) {
                  //             showMessage(response?.message);
                  //             setLoading(false);
                  //           } else {
                  //             setLoading(false);
                  //             var token = response?.token;
                  //             printLog(typeof token);
                  //             setString(
                  //               AsyncStorageConst.allDetails,
                  //               JSON.stringify(response),
                  //             );
                  //             setString(AsyncStorageConst.token, token);
                  //             setString(
                  //               AsyncStorageConst.user,
                  //               JSON.stringify(response?.data),
                  //             );
                  //             RootNavigation.push(
                  //               props?.navigation,
                  //               AppScreens.HOME_SCREEN,
                  //               params,
                  //             );
                  //             setLoading(false);
                  //           }
                  //         },
                  //         error => {
                  //           printLog('register error', error);
                  //           setLoading(false);
                  //         },
                  //       ));
                  // }
                  RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {
                    screen: screen,
                    show: true,
                  })
                }
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
                // buttonPress={
                //   () => {
                //     var params = {
                //       country_code: countryCode,
                //       phone: phone,
                //       name: firstName,
                //       city_id: cities,
                //       password: password,
                //     };

                //     countryCode == ''
                //       ? ShowMessage('Please select country code')
                //       : phone.trim().length < 9
                //       ? ShowMessage('Please enter phone no.')
                //       : firstName.trim().length == 0
                //       ? ShowMessage('Please enter first name')
                //       : // : cities == ''
                //       // ? ShowMessage('Please select your village')
                //       password.length < 6
                //       ? ShowMessage('Password must be 6 latter long.')
                //       : // setLoading(true),
                //         register(
                //           params,
                //           response => {
                //             printLog('register error', JSON.stringify(response));
                //             if (!response?.status) {
                //               showMessage(response?.message);
                //               setLoading(false);
                //             } else {
                //               setLoading(false);
                //               var token = response?.token;
                //               printLog(typeof token);
                //               setString(
                //                 AsyncStorageConst.allDetails,
                //                 JSON.stringify(response),
                //               );
                //               setString(AsyncStorageConst.token, token);
                //               setString(
                //                 AsyncStorageConst.user,
                //                 JSON.stringify(response?.data),
                //               );
                //               RootNavigation.push(
                //                 props?.navigation,
                //                 AppScreens.VerifyMobileScreen,
                //                 params,
                //               );
                //               setLoading(false);
                //             }
                //           },
                //           error => {
                //             printLog('register error', error);
                //             setLoading(false);
                //           },
                //         );
                //   }

                // }
              />
            </View>
          </View>

          {/* <View
            style={{
              height: 110,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 60,
            }}>
            <View
              style={{
                backgroundColor: AppColors.Red,
                height: 5,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                width: '10%',
              }}></View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: AppFonts.regular,
                color: '#78789D',
              }}>
              સમાજ એજ મારો પરિવાર
            </Text>
            <View
              style={{
                backgroundColor: AppColors.Red,
                height: 5,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                width: '10%',
              }}></View>
          </View> */}
        </KeyboardAwareScrollView>
       

        {/* </KeyboardAwareScrollView> */}
      </View>
    </View>
  );
};

export default UserSignUp;
