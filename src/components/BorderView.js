import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import {AppFonts} from '../utils/AppFonts';

const BorderView = props => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        ...props.borderStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
          ...props.style,
        }}>
        <View
          style={{
            backgroundColor: props?.backgroundColor,
            height: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            width: '10%',
          }}></View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: AppFonts.regular,
            color: '#78789D',
            paddingTop: 2.5,
          }}>
          {props?.text}
        </Text>
        <View
          style={{
            backgroundColor: props?.backgroundColor,
            height: 5,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            width: '10%',
          }}></View>
      </View>
      <View
        style={{
          height: 25,
          backgroundColor: props?.backgroundColor,
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}></View>
    </View>
  );
};

export default BorderView;
