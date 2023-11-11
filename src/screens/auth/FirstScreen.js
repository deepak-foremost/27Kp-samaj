import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React from 'react';
import {AppStyles} from '../../utils/AppStyles';
import {AppColors} from '../../utils/AppColors';
import {AppImages} from '../../utils/AppImages';
import AppButton from '../../components/AppButton';
import {AppFonts} from '../../utils/AppFonts';
import BorderView from '../../components/BorderView';
import * as RootNavigation from '../../utils/RootNavigation';
import {AppScreens} from '../../utils/AppScreens';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FirstScreen = () => {
  return (
    <SafeAreaView
      style={[
        AppStyles.AppMainBackground,
        {backgroundColor: AppColors.BackgroundSecondColor},
      ]}>
      <View
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          height: 55,
        }}></View>
      {/* TopView  */}

      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            flex: 0.35,
            backgroundColor: AppColors.BackgroundSecondColor,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={AppStyles.AppLogoStyle}>
            <Image
              style={{width: 100, height: 100}}
              source={AppImages.APP_MAIN_ICON}
            />
          </View>
        </View>

        {/* CenterView  */}

        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <AppButton
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                screen: 'Login',
              })
            }
            text={'Sign in Using Your Mobile Number'}
            buttonStyle={{marginTop: 1}}
          />

          <AppButton
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                screen: 'User Signin',
              })
            }
            text={'Guest Sign-in'}
            buttonStyle={{backgroundColor: AppColors.Red, marginTop: 15}}
          />
          <AppButton
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.QUICK_PAY_SCREEN)
            }
            text={'Quick Pay'}
            buttonStyle={{backgroundColor: AppColors.Orange, marginTop: 15}}
          />
        </View>

        <BorderView
          text={'Welcome to Application'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstScreen;
