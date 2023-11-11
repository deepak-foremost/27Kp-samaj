import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
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
import {AppConstValue} from '../../../utils/AppConstValue';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';

const NewPasswordScreen = ({route}) => {
  const screen = route.params.screen;

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
          enableOnAndroid={true}
          scrollEnabled={true}
          extraScrollHeight={30}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.35,
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
                  color: '#000',
                }}>
                Create new password
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
              text={'New password'}
              placeholder={'New password'}
            />

            <AppPasswordView
              text={'Retype your password'}
              placeholder={'Retype your password'}
            />

            <AppButton
              text={'Confirm'}
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {
                  screen: screen,
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
            />
          </View>
        </KeyboardAwareScrollView>
        <BorderView
          text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
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

export default NewPasswordScreen;
