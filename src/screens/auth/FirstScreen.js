import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
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
    <View
      style={[
        AppStyles.AppMainBackground,
        {backgroundColor: AppColors.BackgroundSecondColor, flex: 1,paddingTop:55},
      ]}>
      {/* <View
        style={{
          backgroundColor: '#00BCD4',
          height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        }}>
        <StatusBar
          translucent
          backgroundColor="#00BCD4"
          barStyle="light-content"
        />
      </View> */}
      <View
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          height: 55,
        }}></View>
      {/* TopView  */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
              text={'Sign In Using Your Register Mobile Number'}
              src={require('../../assets/images/register_icon.png')}
              buttonStyle={{marginTop: 1}}
            />

            <AppButton
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                  screen: 'User Signin',
                })
              }
              text={'Guest Sign-in'}
              src={require('../../assets/images/guest_icon.png')}
              buttonStyle={{backgroundColor: AppColors.Red, marginTop: 15}}
            />
            <AppButton
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.SOCIAL_SERVICE)
              }
              text={'Quick Pay'}
              src={require('../../assets/images/pay_icon.png')}
              buttonStyle={{backgroundColor: AppColors.Orange, marginTop: 15}}
            />
          </View>
        </View>
        <BorderView
          text={'Welcome to Application'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
    // <SafeAreaView style={{backgroundColor:'red',flex:0.4}}/>
  );
};

export default FirstScreen;
