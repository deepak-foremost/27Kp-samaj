import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';
import AsyncStorage from '@react-native-community/async-storage';
import {getProfile} from '../../../networking/CallApi';

const ProfileScreen = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [data, setData] = useState();
  const inset = useSafeAreaInsets();
  const [screen, setScreen] = useState('');
  const [id, setId] = useState('');
  const StatusBarHeight = inset.top;

  useEffect(() => {
    async function check() {
      let Details = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
      console.log('Status', JSON.parse(Details)?.data?.id);
      setData(JSON.parse(Details)?.data);
      setId(JSON.parse(Details)?.data?.id);
      let token = await AsyncStorage.getItem(AsyncStorageConst.screen);
      setScreen(token);
      console.log('details', JSON.parse(Details)?.data?.phone);
    }
    check();
    // getProfile(
    //   {
    //     id: id,
    //   },
    //   response => {
    //     if (response.status) {
    //       console.log(response);
    //       setData(response);
    //     } else {
    //       console.log('failed');
    //     }
    //   },
    //   error => {
    //     console.log('error', error);
    //   },
    // );
  }, []);
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
              firstText={
                screen == 'User Signin'
                  ? 'Guest Sign-In'
                  : 'Sign In Using Your Register Mobile Number'
              }
              firstStyle={{fontSize: screen == 'User Signin' ? 13 : 12}}
              secondText={data?.country_code + ' ' + data?.phone}
              src={AppImages.PHONE_SMALL_ICON}
            />
            <ProfileText
              firstText={'Member Name'}
              secondText={data?.name}
              src={AppImages.NAME_SMALL_ICON}
            />
            <ProfileText
              firstText={'Village'}
              secondText={data?.city}
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
            screen: 'UserNot',
            return: 'profile',
            status: true,
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
