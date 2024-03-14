import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import AppButton from '../components/AppButton';
import * as RootNavigation from '../utils/RootNavigation';
import {AppScreens} from '../utils/AppScreens';
import {AppImages} from '../utils/AppImages';
import {AppConstValue} from '../utils/AppConstValue';

const SponserImage = props => {
  const status = props?.route?.params?.status;
  var screen_name = AppScreens.FirstScreen;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: AppColors.BackgroundSecondColor}}>
      <StatusBar backgroundColor={AppColors.BackgroundSecondColor} />

      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        style={{
          height: 40,
          width: 40,
          alignSelf: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft:15,
          marginTop:15
        }}
        onPress={() => RootNavigation.goBack()}>
        <Image style={{}} source={AppImages.BACK_ICON} />
      </TouchableOpacity>
      <Image
        style={{
          resizeMode: 'contain',
          height: Dimensions.get('window').height-130,
          width: Dimensions.get('window').width,
          // marginTop: -60,
        }}
        source={require('../assets/images/sponser_img.jpg')}
      />
      <AppButton
        buttonStyle={{
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 50,
          alignSelf: 'center',
          width: '50%',
          height: 40,
          borderRadius: 30,
        }}
        text={'Enter'}
        textStyle={{color: '#000', fontSize: 16}}
        buttonPress={() =>
          status
            ? RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, {
                status: status,
              })
            : RootNavigation.navigate(screen_name, {status: status})
        }
      />
    </SafeAreaView>
  );
};

export default SponserImage;
