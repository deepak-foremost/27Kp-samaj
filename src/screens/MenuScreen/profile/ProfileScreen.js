import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import ProfileText from '../../../components/ProfileText';
import BorderView from '../../../components/BorderView';

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: AppColors.BackgroundSecondColor, flex: 1}}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            paddingTop: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'PROFILE'} />
        </View>
        <View
          style={{
            marginTop: -40,
            flex: 0.8,
            marginHorizontal: 15,
            borderRadius: 15,
            backgroundColor: AppColors.BackgroundColor,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent:'space-evenly',
            ...Platform.select({
              ios: {
                shadowColor: '#D5D5D5',
                shadowOffset: {width: 0, height: -1},
                shadowOpacity: 0.9,
                shadowRadius: 3,
              },
              android: {
                elevation: 15,
              },
            }),
          }}>
          <View style={[AppStyles.AppLogoStyle, {}]}>
            <Image
              style={{height: 100, width: 100}}
              source={AppImages.APP_MAIN_ICON}
            />
          </View>
          <Text
            style={{
              fontFamily: AppFonts.medium,
              fontSize: 10,
              color: AppColors.DarkText,
              
            }}>
            Wel Come to શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ, ઊંઝા{' '}
          </Text>
          <Text
            style={{
              fontFamily: AppFonts.bold,
              fontSize: 15,
              color: AppColors.DarkText,
              alignSelf: 'flex-start',
              marginLeft: 20,
             
            }}>
            Profile Details
          </Text>

          <ProfileText
            firstText={'Sign In Using Mobile Number'}
            secondText={'99999 99999'}
            src={AppImages.PHONE_SMALL_ICON}
          />
          <ProfileText
            firstText={'Member Name'}
            secondText={'પટેલ ધવલ વિષ્ણુભાઇ'}
            src={AppImages.NAME_SMALL_ICON}
          />
          <ProfileText
            firstText={'Village'}
            secondText={'શંકરપુરા'}
            src={AppImages.LOCATION_ICON}
          />

          <Image style={{position:'absolute',right:20,bottom:20}} source={require('../../../assets/images/lock_icon.png')}/>
        </View>
        <BorderView text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
        backgroundColor={AppColors.BackgroundSecondColor}/>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
