import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomExpiryPicker} from '../../../components/CustomExpiryPicker';
import moment from 'moment';

const ForgotScreen = ({route}) => {
  const screen = route.params.screen;
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [mobile, setMobile] = useState('');
  const [Visible, setVisible] = useState(false);
  const [country, setCountry] = useState('+91');
  const {code, setCode} = useState('+91');

  return (
    <View
      style={[
        AppStyles.SafeAreabackground,
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
          text={'Forgot Password'}
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
            <View style={{flex: 0.4}}>
              <View
                style={[
                  {
                    marginBottom: 30,
                  },
                  AppStyles.OutlineBackground,
                ]}>
                {/* <AppInputView
                text={'Phone Number'}
                placeholder={'Phone Number'}
              /> */}

                <AppInputView
                  close={() => setVisible(false)}
                  code={country}
                  selectCode={cod => {
                    setCountry('+' + cod.callingCode);
                    setVisible(false);
                  }}
                  Visible={Visible}
                  open={() => setVisible(true)}
                  text={'Mobile Number'}
                  placeholder={'Mobile Number'}
                  onChangeText={i => setMobile(i)}
                  icon={{
                    tintColor:
                      screen == 'User Signin'
                        ? AppColors.Red
                        : AppColors.BackgroundSecondColor,
                  }}
                />

                <AppButton
                  textStyle={{
                    color: screen == 'User Signin' ? AppColors.black : 'white',
                  }}
                  buttonPress={() =>
                    RootNavigation.navigate(AppScreens.VERIFY_SCREEN, {
                      screen: screen,
                    })
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

export default ForgotScreen;
