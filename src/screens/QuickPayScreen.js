import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import LogInToolbar from '../components/LogInToolbar';
import {AppImages} from '../utils/AppImages';
import {AppFonts} from '../utils/AppFonts';
import {AppStyles} from '../utils/AppStyles';
import AppButton from '../components/AppButton';
import BorderView from '../components/BorderView';

const QuickPayScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.Orange}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <LogInToolbar
          text={'Quick Pay'}
          style={{backgroundColor: AppColors.Orange}}
        />

        {/* TopView */}

        <View
          style={{
            flex: 0.3,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image source={AppImages.PAYMENT_ICON} />

          <Text
            style={{
              color: '#000',
              fontSize: 22,
              fontFamily: AppFonts.semiBold,
            }}>
            Quick Pay
          </Text>
        </View>

        {/* BottomView  */}
        <View style={[{flex: 0.5,backgroundColor:'green',justifyContent:'space-around',paddingVertical:10},AppStyles.OutlineBackground]}>
         
            <Text
              style={{
                color: AppColors.DarkText,
                fontSize: 12,
                fontFamily: AppFonts.semiBold,
                
              }}>
              Scan and Pay
            </Text>

            <Image source={require('../assets/images/scanner.png')}
            style={{}}/>

            <AppButton
              text={'Thank You'}
              buttonStyle={{
                width: '100%',
                
                alignSelf: 'center',
                backgroundColor:AppColors.Orange
              }}
            />
          </View>
        </View>

        <BorderView
            text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
            backgroundColor={AppColors.Orange}
          />
     
    </SafeAreaView>
  );
};

export default QuickPayScreen;
