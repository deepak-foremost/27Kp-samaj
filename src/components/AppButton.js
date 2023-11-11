import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import { AppColors } from '../utils/AppColors';

const AppButton = props => {
  return (
    <TouchableOpacity
      onPress={props?.buttonPress}
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        width: '85%',
        borderRadius: 10,
        height: 50,
        backgroundColor: AppColors.BackgroundSecondColor,
        justifyContent: 'center',
        alignItems: 'center',
        ...props.buttonStyle,
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 14,
          color: '#fff',
          ...props.textStyle,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
