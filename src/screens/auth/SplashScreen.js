import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React from 'react';
import {AppStyles} from '../../utils/AppStyles';
import {AppImages} from '../../utils/AppImages';
import * as RootNavigation from '../../utils/RootNavigation';
import {AppScreens} from '../../utils/AppScreens';
import AppButton from '../../components/AppButton';
import {AppColors} from '../../utils/AppColors';
import PopUp from '../../components/PopUp';

const SplashScreen = props => {
  // setTimeout(() => {
  //   RootNavigation.forcePush(props, AppScreens.SponserScreen, '');
  // }, 3000);
  return (
    <SafeAreaView style={AppStyles.SplashBackground}>
      <StatusBar backgroundColor={AppColors.BackgroundSecondColor} />
      <View style={{flex: 1, backgroundColor: AppColors.BackgroundSecondColor}}>
        <PopUp src={require('../../assets/animation/splash_animation.json')} />
      </View>
      {/* <View style={AppStyles.AppLogoStyle}>
        <Image
          style={{height: 100, width: 100}}
          source={AppImages.APP_MAIN_ICON}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default SplashScreen;
