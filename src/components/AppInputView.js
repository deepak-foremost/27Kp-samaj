import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import CountryPicker from 'react-native-country-picker-modal';

const AppInputView = props => {
  const [Visible, setVisible] = useState(false);
  const [country, setCountry] = useState('+91');
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
          color: AppColors.black,
        }}>
        {props?.text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#EAEAFF',
          height:45
        }}>
        <Image source={AppImages.PHONE_SMALL_ICON}  />

        <TouchableOpacity
          // onPressIn={onPressIn}
          // onPressOut={onPressOut}
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}
          onPress={props?.open}
          activeOpacity={0.9}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito-SemiBold',
              color: '#383838',
            }}>
            {props?.code}
          </Text>
          <Image
            style={[{marginLeft: 10},props?.icon]}
            source={require('../assets/images/country_icon.png')}
          />
        </TouchableOpacity>

        <CountryPicker
          visible={props?.Visible}
          containerButtonStyle={{width: '0%', height: 0}}
          withFilter
          withAlphaFilter
          withFlag
          withCallingCode={true}
          theme={{
            fontSize: 14,
            color: 'white',
            fontFamily: 'Nunito-SemiBold',
          }}
          // onSelect={cod => {
          //   setCountry('+'+cod.callingCode);
          //   setVisible(false);
          // }}
          onSelect={props?.selectCode}
          onClose={props?.close}
        />

        <TextInput
          style={{
            fontSize: 14,
            fontFamily: AppFonts.regular,
            marginLeft: 20,
            flex: 1,
            color: AppColors.black,
            marginTop:2.5
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
