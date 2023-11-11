import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';

const AppInputView = props => {
  return (
    <View
      style={{
        height: 65,
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          color: AppColors.DarkText,
        }}>
        {props?.text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#EAEAFF',
        }}>
        <Image source={AppImages.PHONE_SMALL_ICON} style={{}} />

        <TextInput
          style={{
            fontSize: 14,
            fontFamily: AppFonts.regular,
            marginLeft: 20,
            flex: 1,
            color: AppColors.DarkText,
          }}
          keyboardType="numeric"
          placeholderTextColor={'#38385E'}
          placeholder={props?.placeholder}
          onChangeText={props?.onChangeText}
        />
      </View>
    </View>
  );
};

export default AppInputView;
