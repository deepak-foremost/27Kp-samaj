import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';

const TextInputView = props => {
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
        <Image
          source={props?.src}
          style={{tintColor: '#303590'}}
        />
        <TextInput
          style={{
            fontSize: 14,
            fontFamily: AppFonts.regular,
            marginLeft: 20,
            flex: 1,
          }}
          onChangeText={props?.onChangeText}
          placeholderTextColor={'#38385E'}
          placeholder={props?.placeholder}
        />
        <TouchableOpacity>
          <Image style={{tintColor:'#303590'}} source={props?.rightImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputView;
