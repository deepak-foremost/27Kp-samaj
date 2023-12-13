import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import LogInToolbar from '../../../components/LogInToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import {AppFonts} from '../../../utils/AppFonts';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {setString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const UserLogInDetail = ({route}) => {
  const screen = route.params.screen;
  const show = route.params.status;
  const returnScreen = route?.params?.return;
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Sign In Details'}
          imgStyle={{tintColor: screen == 'User Signin' ? 'black' : 'white'}}
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

              {screen == 'User Signin' && show && (
                <DetailsItem first={'Name'} second={'Dhaval Patel'} />
              )}

              {screen == 'User Signin' && show && (
                <DetailsItem first={'Village'} second={'amrapue'} />
              )}

              <DetailsItem first={'Mobile Number'} second={'+91 8733075256'} />

              <DetailsItem first={'Password'} second={'Admin@234E34'} />
            </View>
          </View>

          <AppButton
            text={'Thanks'}
            textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
            buttonPress={() => {
              returnScreen != 'profile' &&
                setString('flag', JSON.stringify('enter'));
              RootNavigation.navigate(
                returnScreen == 'profile'
                  ? AppScreens.HOME_SCREEN
                  : AppScreens.FirstScreen,
              );
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
