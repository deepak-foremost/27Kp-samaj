import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {MySelection} from '../../../components/SimpleTextInput';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SocialService = () => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [btnOpacity, setBtnOpacity] = useState('life');
  const [value, setValue] = useState('1234 - Dhaval Ahm');
  const [valueId, setValueId] = useState('');
  const [text, setText] = useState('જીવન સહાય સભાસદ સભ્ય');
  return (
    <View
      style={{
        backgroundColor: AppColors.Orange,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <StatusBar backgroundColor={AppColors.Orange} />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScreenToolbar
          styles={{backgroundColor: AppColors.Orange}}
          text={'Quick Pay'}
        />
        <View style={{flex: 0.5, justifyContent: 'space-evenly'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              width: '90%',
              alignItems: 'center',
              marginHorizontal: 15,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor:
                  btnOpacity == 'life' ? AppColors.Orange : '#8E8E8E',
                width: '45%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                paddingVertical: 5,

                // opacity: btnOpacity == 'life' ? 1 : 0.5,
              }}
              onPress={() => {
                setBtnOpacity('life');
                setText('જીવન સહાય સભાસદ સભ્ય');
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 14,
                  color: btnOpacity == 'life' ? '#fff' : '#F3F3F3',
                  width: '60%',
                  textAlign: 'center',
                  lineHeight: 20,
                }}>
                જીવન સહાય સભાસદ સભ્ય
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor:
                  btnOpacity == 'bhumi' ? AppColors.Orange : '#8E8E8E',
                width: '45%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                paddingVertical: 5,

                // opacity: btnOpacity == 'bhumi' ? 1 : 0.5,
              }}
              onPress={() => {
                setBtnOpacity('bhumi');
                setText('ભુમિ સભાસદ સભ્ય');
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 14,
                  color: btnOpacity == 'bhumi' ? '#fff' : '#F3F3F3',
                  width: '60%',
                  textAlign: 'center',
                  lineHeight: 20,
                }}>
                ભુમિ સભાસદ સભ્ય
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: '#262626',
              fontSize: 14,
              fontFamily: AppFonts.semiBold,
              alignSelf: 'center',
            }}>
            Enter the જીવન સહાય સભાસદ સભ્ય નંબર{' '}
          </Text>

          <View
            style={{
              backgroundColor: AppColors.BackgroundColor,
              width: '90%',
              flexDirection: 'row',
              // marginTop:-50,
              borderRadius: 5,
              paddingStart: 5,
              justifyContent: 'center',
              alignItems: 'center',

              marginHorizontal: 15,

              ...Platform.select({
                ios: {
                  shadowColor: '#D5D5D5',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.9,
                  shadowRadius: 5,
                },
                android: {
                  elevation: 5,
                },
              }),
            }}>
            <MySelection
              label={value}
              placeholder={`Select Number`}
              //   data={range}
              value={value}
              onItemSelect={item => {
                // printLog(JSON.stringify(item?.item));
                setValue(item?.name);
                setValueId(item?.id);
              }}
            />
          </View>

          <AppButton
            text={'Quick Pay'}
            buttonStyle={{
              width: '90%',
              marginHorizontal: 15,
              borderRadius: 30,
              height: 40,
              marginTop: 20,
              backgroundColor: AppColors.Orange,
            }}
            textStyle={{fontSize: 24}}
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.PAYMENT_SCREEN, {
                text: text,
                value: value,
              })
            }
          />
        </View>

        <View
          style={{flex: 0.5, justifyContent: 'center', paddingHorizontal: 15}}>
          <Text
            style={{
              fontSize: 14,
              color: '#262626',
              fontFamily: AppFonts.semiBold,
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
              lineHeight: 30,
            }}>
            Payment Successfully For Year 2023{'\n'} Payment Failed{'\n'}{' '}
            Payment Pending For Year 2023{'\n'} No Due Payment For Year 2023
          </Text>
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.Orange}
        />
      </View>
    </View>
  );
};

export default SocialService;
