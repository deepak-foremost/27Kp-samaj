import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';

const MainButton = props => {
  return (
    <TouchableOpacity
      onPress={props?.buttonPress}
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        width: '85%',
        borderRadius: 10,
        height: 52,
        backgroundColor: AppColors.BackgroundSecondColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...props.buttonStyle,
      }}>
      <Image
        style={{position: 'absolute', left: 30, ...props.imgStyle}}
        source={props?.src}
      />
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 14,
          color: '#fff',
          width: '70%',
          textAlign: 'center',
          marginLeft:15,
          ...props.textStyle,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;