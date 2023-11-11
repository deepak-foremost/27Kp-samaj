import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
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
import {AppConstValue, ShowMessage} from '../../../utils/AppConstValue';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import Header from '../../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

const MobileLogInScreen = ({route}) => {
  const screen = route.params.screen;
  const [mobile, setMobile] = useState('');

  return (
    <SafeAreaView
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor:
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor,
        },
      ]}>
        <StatusBar backgroundColor={ screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor}/>
      {/* <KeyboardAwareScrollView contentContainerStyle={{flexGrow:0.8}}
      extraScrollHeight={20}> */}
      {/* TpoView  */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Log in'}
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
          keyboardDismissMode="none"
          bounces={false}
          enableOnAndroid={true}>
          <View style={{flex: 1,overflow:'visible'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex:0.4,
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
                    fontSize: 18,
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  {screen == 'User Signin'
                    ? ' Guest Log in'
                    : 'Sign In Using Your Mobile Number'}
                </Text>
                <Text
                  style={{
                    fontFamily: AppFonts.regular,
                    fontSize: 14,
                    color: AppColors.LightText,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  Welcome back!
                </Text>
                {screen == 'User Signin' ? (
                  <TouchableOpacity
                    activeOpacity={AppConstValue.ButtonOpacity}
                    onPress={() =>
                      RootNavigation.navigate(AppScreens.USER_SIGNUP_SCREEN, {
                        screen: screen,
                      })
                    }
                    style={{marginTop: 5}}>
                    <Text
                      style={{
                        fontFamily: AppFonts.regular,
                        fontSize: 14,
                        color: AppColors.LightText,
                      }}>
                      Don’t have an account?{' '}
                      {
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: AppFonts.medium,
                            color: AppColors.Red,
                          }}>
                          Sign up
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
              <AppInputView
                text={'Mobile Number'}
                placeholder={'Mobile Number'}
                onChangeText={i => setMobile(i)}
              />

              <AppPasswordView text={'Password'} placeholder={'Password'} />

              <TouchableOpacity
                style={{alignSelf: 'flex-start'}}
                activeOpacity={AppConstValue.ButtonOpacity}
                onPress={() =>
                  mobile != ''
                    ? RootNavigation.navigate(AppScreens.VERIFY_SCREEN, {
                        screen: screen,
                      })
                    : ShowMessage('Please Enter Mobile Number')
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
              </TouchableOpacity>

              <AppButton
                text={'Log in'}
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
                buttonPress={() =>
                  RootNavigation.navigate(AppScreens.HOME_SCREEN)
                }
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
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
        {/* </KeyboardAwareScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default MobileLogInScreen;
