import {View, Text, SafeAreaView, Platform, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import LogInToolbar from '../../../components/LogInToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import {AppFonts} from '../../../utils/AppFonts';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {
  AsyncStorageConst,
  flushAllData,
  getString,
  setString,
} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const UserLogInDetail = props => {
  const screen = props?.route?.params?.data?.screen;
  const show = props?.route?.params?.data?.status;
  // const check = props?.route?.params?.data?.check;
  const [check, setCheck] = useState(props?.route?.params?.data?.check);

  const returnScreen = props?.route?.params?.data?.return;
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const userData = props?.route.params?.data?.userData;
  const password = props?.route.params?.data?.password;
  const name = props?.route.params?.data?.name;
  const city = props?.route.params?.data?.city;
  const [phone, setPhone] = useState(props?.route?.params?.data?.phone);
  const forget = props?.route.params?.data?.forget;
  const [country_code, setCountryCode] = useState(
    props?.route?.params?.data?.country_code,
  );

  useEffect(() => {
    // getString(AsyncStorageConst.status, response => {
    //   // console.log('res---', JSON.stringify(response));
    // });
    if (userData != null) {
      setCountryCode(userData?.country_code);
      setPhone(userData?.phone);
    }
  }, []);
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
        barStyle={'light-content'}
      />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Sign In Details'}
          imgStyle={{
            tintColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
          textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
          style={{
            backgroundColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
        />
        <View style={{flex: 1}}>
          <View style={{marginVertical: 50}}>
            <View style={[AppStyles.OutlineBackground, {paddingBottom: 20}]}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: AppFonts.semiBold,
                  color:
                    screen == 'User Signin'
                      ? 'black'
                      : AppColors.BackgroundSecondColor,
                  alignSelf: 'flex-start',
                  marginTop: 25,
                }}>
                {screen == 'User Signin'
                  ? 'Guest Signin Details'
                  : 'Register Mobile Number Login Details'}
              </Text>

              {screen == 'User Signin' && returnScreen == 'SignUp' && (
                <DetailsItem first={'Name'} second={name} />
              )}

              {screen == 'User Signin' && returnScreen == 'SignUp' && (
                <DetailsItem first={'Village'} second={city} />
              )}

              <DetailsItem
                first={'Mobile Number'}
                second={country_code + ' ' + phone}
              />

              <DetailsItem first={'Password'} second={password} />
            </View>
          </View>

          <AppButton
            text={'Thanks'}
            textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
            buttonPress={() => {
              if (check == 'first') {
                RootNavigation?.forcePush(props, AppScreens.HOME_SCREEN, NaN);
              } else if (returnScreen == 'SignUp') {
                RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, {
                  screen: screen,
                });
              } else if (forget == 'yes') {
                RootNavigation.navigate(AppScreens.MOILE_LOGIN_SCREEN, {
                  screen: screen,
                });
              } else {
                // flushAllData(
                //   success => {},
                //   failure => {},
                // );
                RootNavigation?.forcePush(props, AppScreens.HOME_SCREEN, NaN);
              }

              // returnScreen != 'profile' &&
              //   setString('flag', JSON.stringify('enter'));
              // RootNavigation.navigate(
              //   returnScreen == 'profile'
              //     ? AppScreens.HOME_SCREEN
              //     : AppScreens.FirstScreen,
              // );
            }}
            buttonStyle={{
              width: '85%',

              alignSelf: 'center',
              backgroundColor:
                screen == 'User Signin'
                  ? AppColors.Red
                  : AppColors.BackgroundSecondColor,
            }}
          />
        </View>
        <BorderView
          text={'સમાજ એજ મારો પરિવાર'}
          backgroundColor={
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor
          }
        />
        {/* <BorderView
          text={'સમાજ એજ મારો પરિવાર'}
          backgroundColor={
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor
          }
        /> */}
      </View>
    </View>
  );
};

export default UserLogInDetail;

export const DetailsItem = props => {
  return (
    <View
      style={{
        height: 40,
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <Text
        style={{
          color: AppColors.black,
          fontSize: 12,
          fontFamily: AppFonts.semiBold,
        }}>
        {props?.first}
      </Text>
      <Text
        style={{
          fontFamily: AppFonts.regular,
          fontSize: 14,
          color: AppColors.LightText,
        }}>
        {props?.second}
      </Text>
    </View>
  );
};
