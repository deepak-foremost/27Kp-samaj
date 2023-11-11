import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import {AppFonts} from '../utils/AppFonts';

const BorderView = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'absolute',
        bottom:40,
        width:'100%',
        ...props.style
      }}>
      <View
        style={{
          backgroundColor: props?.backgroundColor,
          height: 5,
          borderTopRightRadius: 5,
          borderBottomRightRadius:5,
          width: '10%',
        }}></View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: AppFonts.regular,
          color: '#78789D',
        }}>
        {props?.text}
      </Text>
      <View
        style={{
          backgroundColor: props?.backgroundColor,
          height: 5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius:5,
          width: '10%',
        }}></View>
    </View>
  );
};

export default BorderView;
