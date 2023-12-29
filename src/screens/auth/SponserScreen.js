import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppStyles} from '../../utils/AppStyles';
import {AppImages} from '../../utils/AppImages';
import {AppFonts} from '../../utils/AppFonts';
import AppButton from '../../components/AppButton';
import {AppColors} from '../../utils/AppColors';
import * as RootNavigation from '../../utils/RootNavigation';
import {AppScreens} from '../../utils/AppScreens';
import {
  AsyncStorageConst,
  getString,
  setString,
} from '../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities} from '../../networking/CallApi';
import {printLog} from '../../utils/AppConstValue';
import AsyncStorage from '@react-native-community/async-storage';

const SponserScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var screen_name = AppScreens.FirstScreen;
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function check() {
      let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
      // console.log('Status', JSON.parse(token)?.status);
      if (JSON.parse(token)?.status) {
        setStatus(JSON.parse(token)?.status);
        // var status = token?.status;
        // console.log('check--', status);
      }
    }
    check();
  }, []);
  // useEffect(() => {
  //   getString(AsyncStorageConst.user, user => {
  //     if (user == '') {
  //       screen_name = AppScreens.FirstScreen;
  //     } else {
  //       // pendindScreens
  //     }
  //   });
  // });
  // useEffect(() => {
  //   getCities(
  //     response => {
  //       printLog('NewUserScreen', response?.status);
  //       setString('village', JSON.stringify(response?.data));
  //       printLog('cities', JSON.stringify(response?.data));
  //     },
  //     error => {
  //       printLog('NewUserScreen', error);
  //     },
  //   );
  // }, []);
  return (
    <View
      style={[
        AppStyles.SplashBackground,
        {paddingTop: Platform.OS == 'ios' && StatusBarHeight, flex: 1},
      ]}>
      <StatusBar backgroundColor={AppColors.BackgroundSecondColor} />
      <View style={AppStyles.AppLogoStyle}>
        <Image
          style={{height: 140, width: 140}}
          source={AppImages.APP_MAIN_ICON}
        />
      </View>
      <Text
        style={{
          fontSize: 19,
          color: 'white',
          fontFamily: AppFonts.semiBold,
          textAlign: 'center',
          marginTop: 30,
          width: '80%',
        }}>
        શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ{'\n'} ઊંઝા
      </Text>
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          fontFamily: AppFonts.semiBold,
          textAlign: 'center',
          lineHeight: 35,
          marginTop: 50,
        }}>
        Welcome {'\n'} Let’s Get Started!
      </Text>

      <AppButton
        text={'Get Started!'}
        buttonStyle={{
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 30,
        }}
        textStyle={{color: 'black'}}
        buttonPress={() =>
          status
            ? RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, '')
            : RootNavigation.push(props?.navigation, screen_name, '')
        }
      />
    </View>
  );
};

export default SponserScreen;
