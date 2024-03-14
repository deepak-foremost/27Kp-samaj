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
import {getCities, getProfile} from '../../networking/CallApi';
import {printLog} from '../../utils/AppConstValue';
import AsyncStorage from '@react-native-community/async-storage';

const sponserList = [
  {
    name: 'પટેલ મફતલાલ જીવરામદાસ (રામદેવ ગ્રુપ, ઠાકરાસણ)',
  },
  {
    name: 'પટેલ હીરાભાઈ જોઈતારામ (લીહોડા, ભુત)',
  },
  {
    name: 'સ્વ.પટેલ જીતેન્દ્રકુમાર બાબુલાલ (ચાણસ્મીયા, હાજીપુર)',
  },
  {
    name: 'પટેલ અલ્પેશકુમાર વીરાભાઈ (સત્વમ ગ્રુપ, મકતુપુર)',
  },
];

const SponserScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var screen_name = AppScreens.FirstScreen;
  const [status, setStatus] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    async function check() {
      let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
      console.log('Status', JSON.parse(token)?.data?.id);
      setId(JSON.parse(token)?.data?.id);
      if (JSON.parse(token)?.status) {
        setStatus(JSON.parse(token)?.status);

        // var status = token?.status;
        // console.log('check--', status);
      }
    }
    check();
    getProfile(
      {
        id: id,
      },
      response => {
        if (response.status) {
          console.log(response);
        } else {
          console.log('failed');
        }
      },
      error => {
        console.log('error', error);
      },
    );
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
        {
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: 30,
        },
      ]}>
      <StatusBar backgroundColor={AppColors.BackgroundSecondColor} />
      <View style={AppStyles.AppLogoStyle}>
        <Image
          style={{height: 160, width: 160}}
          source={AppImages.APP_MAIN_ICON}
        />
      </View>
      <Text
        style={{
          fontSize: 19,
          color: 'white',
          fontFamily: AppFonts.semiBold,
          textAlign: 'center',
          width: '80%',
        }}>
        શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ{'\n'} ઊંઝા
      </Text>

      <View>
        <Text
          style={{
            fontSize: 16,
            color: AppColors.BackgroundSecondColor,
            backgroundColor: '#fff',
            fontFamily: AppFonts.semiBold,
            paddingHorizontal: 25,
            borderRadius: 20,
            paddingTop: 7,
            paddingBottom: 5,
            marginBottom: 10,
            textAlign: 'center',
          }}>
          પરિવાર પરિચય એપ્લિકેશન સ્પોન્સર
        </Text>
        {sponserList.map(item => (
          <Text
            style={{
              fontSize: 14,
              fontFamily: AppFonts.semiBold,
              color: '#fff',
              borderColor: '#fff',
              borderWidth: 1,
              marginTop: 10,
              paddingHorizontal: 15,
              textAlign: 'center',
              paddingTop: 7,
              paddingBottom: 5,
            }}>
            {item.name}
          </Text>
        ))}
      </View>
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          fontFamily: AppFonts.semiBold,
          textAlign: 'center',
          lineHeight: 35,
        }}>
        Welcome {'\n'} Let’s Get Started!
      </Text>

      <AppButton
        text={'Get Started!'}
        buttonStyle={{
          backgroundColor: '#fff',
        }}
        textStyle={{color: 'black'}}
        buttonPress={
          () =>
            RootNavigation.navigate(AppScreens.SPONSER_IMAGE, {
              status: status,
            })
          // status
          //   ? RootNavigation.forcePush(props, AppScreens.HOME_SCREEN, {
          //       status: status,
          //     })
          //   : RootNavigation.navigate(screen_name, {status: status})
        }
      />
    </View>
  );
};

export default SponserScreen;
