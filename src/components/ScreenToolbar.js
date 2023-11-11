import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import * as RootNavigation from '../utils/RootNavigation';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';

const ScreenToolbar = props => {
  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        ...props.styles,
      }}>
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        style={{
          position: 'absolute',
          left: 10,
          height: 40,
          width: 40,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => RootNavigation.goBack()}>
        <Image style={{}} source={AppImages.ROUND_BACK_ICON} />
      </TouchableOpacity>

      <Text
        style={{fontSize: 16, color: '#fff', fontFamily: AppFonts.semiBold}}>
        {props?.text}
      </Text>
      <TouchableOpacity style={{position:'absolute',right:10}}
      activeOpacity={1}
      onPress={props?.secondPress}>
        <Text
          style={{fontSize: 16, color: '#fff', fontFamily: AppFonts.semiBold}}>
         {props?.secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenToolbar;
