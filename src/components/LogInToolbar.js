import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import {AppFonts} from '../utils/AppFonts';
import * as RootNavigation from '../utils/RootNavigation';
import {AppConstValue} from '../utils/AppConstValue';

const LogInToolbar = props => {
  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        flexDirection: 'row',
        ...props.style,
      }}>
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        style={{
          position: 'absolute',
          left: 15,
          height: 40,
          width: 40,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => RootNavigation.goBack()}>
        <Image style={{...props.imgStyle}} source={AppImages.BACK_ICON} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
          fontFamily: AppFonts.semiBold,
          ...props.textStyle,
        }}>
        {props?.text}
      </Text>
    </View>
  );
};

export default LogInToolbar;
