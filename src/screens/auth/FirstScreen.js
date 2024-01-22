import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {AppStyles} from '../../utils/AppStyles';
import {AppColors} from '../../utils/AppColors';
import {AppImages} from '../../utils/AppImages';
import AppButton from '../../components/AppButton';
import {AppFonts} from '../../utils/AppFonts';
import BorderView from '../../components/BorderView';
import * as RootNavigation from '../../utils/RootNavigation';
import {AppScreens} from '../../utils/AppScreens';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../components/MainButton';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst} from '../../utils/AsyncStorageHelper';

const FirstScreen = () => {
  // let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
  // console.log('Status',token);

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,
          flex: 1,
          paddingTop: 55,
        },
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
          height: 30,
        }}></View>
      {/* TopView  */}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View
            style={{
              flex: 0.4,
              backgroundColor: AppColors.BackgroundSecondColor,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={AppStyles.AppLogoStyle}>
              <Image
                style={{width: 140, height: 140}}
                source={AppImages.APP_MAIN_ICON}
              />
            </View>
          </View>

          {/* CenterView  */}

          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              // justifyContent: 'center',
              paddingTop: 50,
            }}>
            <MainButton
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                  screen: 'Login',
                })
              }
              text={'Sign In Using Your Register Mobile Number'}
              src={require('../../assets/images/register_icon.png')}
              buttonStyle={{marginTop: 1}}
            />
            {/* <MainButton
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                  screen: 'User Signin',
                })
              }
              text={'Guest Sign-in'}
              textStyle={{color: 'black'}}
              imgStyle={{tintColor: 'black'}}
              src={require('../../assets/images/guest_icon.png')}
              buttonStyle={{backgroundColor: AppColors.Red, marginTop: 15}}
            /> */}
            <MainButton
              buttonPress={() =>
                RootNavigation.navigate(AppScreens.SOCIAL_SERVICE, {pay: 'pay'})
              }
              text={'Quick Pay'}
              imgStyle={{tintColor: 'black'}}
              textStyle={{color: 'black'}}
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
