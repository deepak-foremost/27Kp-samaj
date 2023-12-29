import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {updatePassword} from '../../../networking/CallApi';
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';

const NewPasswordScreen = props => {
  const screen = props?.route.params.screen;
  const returnScreen = props?.route.params.return;
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [Userdata, setUserDta] = useState(null);

  useEffect(() => {
    // function getData() {
    //   const data = getString(AsyncStorageConst.allDetails);
    //   console.log('users', data);
    // }
    getString(AsyncStorageConst.allDetails, response => {
      setUserDta(response?.data);
    });
  }, []);

  const updateMyPassword = () => {
    setLoading(true);
    updatePassword(
      {
        family_id: Userdata?.family_id ? Userdata?.family_id : '',
        country_code: Userdata?.country_code,
        phone: Userdata?.phone,
        new_password: password,
      },
      response => {
        printLog('NEW_PASWORD', JSON.stringify(response));
        ShowMessage(response?.message);
        if (response?.status) {
          // RootNavigation.push(props?.navigation, AppScreens.SplashScreen, NaN);
          setLoading(false);
          RootNavigation.forcePush(props, AppScreens.USER_LOGIN_DETAIL, {
            screen: screen,
            return: returnScreen,
            userData: Userdata,
            password:password
          });
          // RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {});
        }
        setLoading(false);
      },
      error => {
        printLog('NEW_PASWORD', JSON.stringify(error));
        ShowMessage('Error');
        setLoading(false);
      },
    );
  };

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
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={30}>
          <View style={{flex: 1}}>
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
                    ? AppImages.USER_KEY_ICON
                    : AppImages.KEY_ICON
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
                    color: AppColors.black,
                  }}>
                  Create New Password
                </Text>
                <Text
                  style={{
                    fontFamily: AppFonts.regular,
                    fontSize: 14,
                    color: AppColors.LightText,
                    marginTop: 10,
                  }}>
                  Please set a new and strong password
                </Text>
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
              <AppPasswordView
                text={'New Password'}
                placeholder={'Password'}
                onChangeText={i => setPassword(i)}
              />

              <AppPasswordView
                text={'Retype Your Password'}
                placeholder={'Password'}
                onChangeText={i => setPasswordConfirm(i)}
              />
              <AppButton
                text={'Confirm'}
                loading={isLoading}
                color={'#fff'}
                textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
                buttonPress={() => updateMyPassword()}
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
              />
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

        {/* </KeyboardAwareScrollView> */}
      </View>
    </View>
  );
};

export default NewPasswordScreen;
