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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NewPasswordScreen = ({route}) => {
  const screen = route.params.screen;
  const returnScreen = route.params.return;
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
      {/* <KeyboardAwareScrollView contentContainerStyle={{flexGrow:0.8}}
        extraScrollHeight={20}> */}
      {/* TpoView  */}
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
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          extraScrollHeight={30}>
          <View style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height / 3.5,
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
                    color: AppColors.black,
                  }}>
                  Create New Password
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
              <AppPasswordView text={'New Password'} placeholder={'Password'} />

              <AppPasswordView
                text={'Retype Your Password'}
                placeholder={'Password'}
              />

              <AppButton
                text={'Confirm'}
                textStyle={{color: screen == 'User Signin' ? 'black' : 'white'}}
                buttonPress={() =>
                  RootNavigation.navigate(AppScreens.USER_LOGIN_DETAIL, {
                    screen: screen,
                    return: returnScreen,
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

        {/* </KeyboardAwareScrollView> */}
      </View>
    </View>
  );
};

export default NewPasswordScreen;
