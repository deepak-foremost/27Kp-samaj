import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
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

const ForgotScreen = ({route}) => {
  const screen = route.params.screen;

  return (
    <SafeAreaView
      style={[
        AppStyles.SafeAreabackground,
        {
          backgroundColor:
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor,
        },
      ]}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Forgot Password'}
          style={{
            backgroundColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
        />

        <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}>
          {/* TopView  */}
          <View
            style={{
              flex: 0.35,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingHorizontal: 25,
            }}>
            <Image
              source={
                screen == 'User Signin'
                  ? AppImages.USER_KEY_ICON
                  : AppImages.KEY_ICON
              }
            />

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 22,
                  color: '#000',
                }}>
                Forgot Password
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: AppFonts.regular,
                  color: AppColors.LightText,
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                Please enter your number. We will send a code to your phone to
                reset your password.
              </Text>
            </View>
          </View>

          {/* CenterView  */}
          <View style={{flex: 0.3}}>
            <View
              style={[
                {
                  marginBottom: 30,
                },
                AppStyles.OutlineBackground,
              ]}>
              <AppInputView
                text={'Phone Number'}
                placeholder={'Phone Number'}
              />

              <AppButton
                buttonPress={() =>
                  RootNavigation.navigate(
                    screen == 'User Signin'
                      ? AppScreens.USER_LOGIN_DETAIL
                      : AppScreens.VERIFY_SCREEN,
                  )
                }
                text={'Send my code'}
                buttonStyle={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 30,
                  marginBottom: 20,
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
      </View>
    </SafeAreaView>
  );
};

export default ForgotScreen;
