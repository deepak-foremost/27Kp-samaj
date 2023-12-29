import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import LoaderView from '../utils/LoaderView';

const AppButton = props => {
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
      {/* <Image
        style={{position: 'absolute', left: 30, ...props.imgStyle}}
        source={props?.src}
      /> */}
      {props?.loading ? (
        <View>
          <LoaderView style={{width: '25%', height: 30}} color={props?.color} />
        </View>
      ) : (
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 14,
            color: '#fff',
            width: '100%',
            textAlign: 'center',
            paddingTop: 2.5,
            ...props.textStyle,
          }}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
