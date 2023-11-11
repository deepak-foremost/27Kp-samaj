import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import LogInToolbar from '../../../components/LogInToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import {AppFonts} from '../../../utils/AppFonts';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import { AppScreens } from '../../../utils/AppScreens';

const UserLogInDetail = ({route}) => {
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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'User Login Details'}
          style={{
            backgroundColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
        />

        <View style={{flex: 0.55, justifyContent: 'center'}}>
          <View style={[AppStyles.OutlineBackground]}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: AppFonts.semiBold,
                color: AppColors.Red,
                alignSelf: 'flex-start',
                marginVertical: 25,
              }}>
              User Login Details
            </Text>

            <View
              style={{
                height: 45,
                alignSelf: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: AppColors.DarkText,
                  fontSize: 12,
                  fontFamily: AppFonts.semiBold,
                }}>
                Mobile Number
              </Text>
              <Text
                style={{
                  fontFamily: AppFonts.regular,
                  fontSize: 14,
                  color: AppColors.LightText,
                }}>
                8733075256
              </Text>
            </View>

            <View
              style={{
                height: 45,
                alignSelf: 'flex-start',
                justifyContent: 'space-between',
                marginVertical: 25,
              }}>
              <Text
                style={{
                  color: AppColors.DarkText,
                  fontSize: 12,
                  fontFamily: AppFonts.semiBold,
                }}>
                Password
              </Text>
              <Text
                style={{
                  fontFamily: AppFonts.regular,
                  fontSize: 14,
                  color: AppColors.LightText,
                }}>
                Admin@234E34
              </Text>
            </View>
          </View>
        </View>

        <AppButton
          text={'Thanks'}
          buttonPress={()=> RootNavigation.navigate(AppScreens.FirstScreen)}
          buttonStyle={{
            width: '85%',
          
            alignSelf: 'center',
            backgroundColor:
              screen == 'User Signin'
                ? AppColors.Red
                : AppColors.BackgroundSecondColor,
          }}
        />

        <BorderView
          text={'સમાજ એજ મારો પરિવાર'}
          backgroundColor={
            screen == 'User Signin'
              ? AppColors.Red
              : AppColors.BackgroundSecondColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default UserLogInDetail;
