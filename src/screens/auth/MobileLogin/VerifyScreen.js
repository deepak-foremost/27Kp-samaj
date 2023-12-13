import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
import OtpTextInput from '../../../components/OtpTextInput';
import {AppConstValue} from '../../../utils/AppConstValue';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const VerifyScreen = ({route}) => {
  const screen = route.params.screen;
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
          showsVerticalScrollIndicator={false}>
          {/* TopView  */}
          <View style={{flex: 1}}>
            <View
              style={{
                height: Dimensions.get('window').height / 3,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingHorizontal: 25,
              }}>
              <Image
                source={
                  screen == 'User Signin'
                    ? AppImages.USER_PHONE_ICON
                    : AppImages.PHONE_ICON
                }
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 22,
                    color: '#000',
                  }}>
                  Verify
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: AppFonts.regular,
                    color: AppColors.LightText,
                    textAlign: 'center',
                    marginTop: 15,
                    lineHeight: 25,
                    width: '90%',
                  }}>
                  Please enter the verification code sent to your phone number
                </Text>
              </View>
            </View>

            {/* CenterView  */}
            <View style={{flex: 0.3}}>
              <View
                style={[
                  AppStyles.OutlineBackground,
                  {
                    marginBottom: 30,
                  },
                ]}>
                <OtpTextInput
                  text={'Your Code'}
                  textStyle={{
                    color:
                      screen == 'User Signin'
                        ? 'black'
                        : AppColors.BackgroundSecondColor,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 25,
                    marginBottom: 10,
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    activeOpacity={AppConstValue.ButtonOpacity}
                    // onPress={() =>
                    //   RootNavigation.navigate(AppScreens.MOBILE_FORGOT_SCREEN)
                    // }
                  >
                    <Text
                      style={{
                        fontFamily: AppFonts.semiBold,
                        fontSize: 12,
                        color:
                          screen == 'User Signin'
                            ? 'black'
                            : AppColors.BackgroundSecondColor,
                      }}>
                      Resend Your Code
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 11,
                      color: AppColors.LightText,
                      fontFamily: AppFonts.medium,
                    }}>
                    Expired after 23s
                  </Text>
                </View>

                <AppButton
                  buttonPress={() =>
                    RootNavigation.navigate(AppScreens.NEW_PASSWORD_SCREEN, {
                      screen: screen,
                    })
                  }
                  text={'Confirm'}
                  textStyle={{
                    color: screen == 'User Signin' ? 'black' : 'white',
                  }}
                  buttonStyle={{
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                    backgroundColor:
                      screen == 'User Signin'
                        ? AppColors.Red
                        : AppColors.BackgroundSecondColor,
                  }}
                />
              </View>
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
    </View>
  );
};

export default VerifyScreen;
