import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {AppStyles} from '../../utils/AppStyles';
import {AppImages} from '../../utils/AppImages';
import {AppFonts} from '../../utils/AppFonts';
import AppButton from '../../components/AppButton';
import {AppColors} from '../../utils/AppColors';
import * as RootNavigation from '../../utils/RootNavigation';
import {AppScreens} from '../../utils/AppScreens';
import {AsyncStorageConst, getString} from '../../utils/AsyncStorageHelper';

const SponserScreen = props => {
  var screen_name = AppScreens.FirstScreen;
  // useEffect(() => {
  //   getString(AsyncStorageConst.user, user => {
  //     if (user == '') {
  //       screen_name = AppScreens.FirstScreen;
  //     } else {
  //       // pendindScreens
  //     }
  //   });
  // });
  return (
    <SafeAreaView style={AppStyles.SplashBackground}>
      <StatusBar backgroundColor={AppColors.BackgroundSecondColor}/>
      <View style={AppStyles.AppLogoStyle}>
        <Image
          style={{height: 100, width: 100}}
          source={AppImages.APP_MAIN_ICON}
        />
      </View>
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
        textStyle={{color: '#303590'}}
        buttonPress={() =>
          RootNavigation.push(props?.navigation, screen_name, '')
        }
      />
    </SafeAreaView>
  );
};

export default SponserScreen;
