import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {AppColors} from '../utils/AppColors';
import { AppFonts } from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';
export const SponcerCell = props => {
  return (
    <View
      style={{
        width: '90%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: AppColors.purple,
        backgroundColor: AppColors.backgroundColor,
        borderWidth: 1,
        ...props?.style,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: AppFonts.semiBold,
          color: AppColors.black,
        }}>
        {props?.member}
      </Text>
    </View>
  );
};

export const SponcerImageCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        marginTop: 15,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Image
          source={props?.left_image}
          style={{height: 75, width: 63, resizeMode: 'contain'}}
        />
        <Text style={Styles.name_text_style}>{props?.left_name}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 14,
            fontFamily: AppFonts.semiBold,
            color: AppColors.black,
          }}>
          {props?.member}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 14,
            marginTop: 16,
            fontFamily: AppFonts.semiBold,
            color: AppColors.black,
          }}>
          {props?.city}
        </Text>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Image
          source={props?.right_image}
          style={{height: 75, width: 63, resizeMode: 'contain'}}
        />
        <Text style={Styles.name_text_style}>{props?.right_name}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  name_text_style: {
    width: 90,
    fontFamily: AppFonts.semiBold,
    fontSize: 11,
    textAlign: 'center',
    color: AppColors.black,
    paddingTop: 10,
  },
});
