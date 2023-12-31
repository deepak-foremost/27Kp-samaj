import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import ProfileText from '../../../components/ProfileText';
import BorderView from '../../../components/BorderView';
import {ModalView} from '../business/BusinessListScreen';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,

            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'PROFILE'} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              marginTop: -40,
              flex: 0.8,
              marginHorizontal: 15,
              borderRadius: 15,
              backgroundColor: AppColors.BackgroundColor,
              paddingHorizontal: 15,
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              ...Platform.select({
                ios: {
                  shadowColor: '#D5D5D5',
                  shadowOffset: {width: 0, height: -1},
                  shadowOpacity: 0.9,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 5,
                },
              }),
            }}>
            <View style={[AppStyles.AppLogoStyle, {}]}>
              <Image
                style={{height: 140, width: 140}}
                source={AppImages.APP_MAIN_ICON}
              />
            </View>
            <Text
              style={{
                fontFamily: AppFonts.bold,
                fontSize: 12,
                color: AppColors.DarkText,
                textAlign: 'center',
              }}>
              WelCome to શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ,{'\n'} ઊંઝા{' '}
            </Text>
            <Text
              style={{
                fontFamily: AppFonts.bold,
                fontSize: 15,
                color: AppColors.DarkText,
                alignSelf: 'flex-start',
              }}>
              Profile Details
            </Text>

            <ProfileText
              firstText={'Sign In Using Your Register Mobile Number'}
              secondText={'9999999999'}
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
            <TouchableOpacity
              activeOpacity={1}
              style={{position: 'absolute', right: 20, bottom: 20}}
              onPress={() => setModelOpen(true)}>
              <Image
                style={{}}
                source={require('../../../assets/images/lock_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
      <ModalView
        open={modelOpen}
        item={deleteItem}
        first={'yes'}
        title={'Change Password'}
        press={() => {
          setModelOpen(false);
          RootNavigation.navigate(AppScreens.NEW_PASSWORD_SCREEN, {
            screen: 'UserSignIn',
            return: 'profile',
          });
        }}
        message={'Do you want to change the Password ?'}
        // onDelete={deleteItemList}
        onCancel={() => {
          setDeleteItem(null);
          setModelOpen(false);
        }}
      />
    </View>
  );
};

export default ProfileScreen;
