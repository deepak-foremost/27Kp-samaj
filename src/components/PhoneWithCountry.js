import React, {useState} from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColors} from '../utils/AppColors';
import {printLog} from '../utils/AppConstValue';
import {AppConstValue} from '../utils/AppConstValue';
import { AppFonts } from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';
import {staticArray} from '../utils/staticArray';
import { MySelection } from './SimpleTextInput';


export const PhoneWithCountry = props => {
  var countryCode = [
    {code: '+91', country: 'India'},
    {code: '+1', country: 'Canada'},
  ];
  const [isEditing, setEditing] = useState(false);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: 50,
        borderBottomColor: AppColors.light_grey,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...props?.containerStyle,
      }}>
      <View style={{width: '28%'}}>
        <MySelection
          label={`+91`}
          placeholder={`+91`}
          data={staticArray.countryList}
          value={props?.countryCode}
          onItemSelect={item => {
            props?.onCountry(item);
          }}
        />
      </View>
      <Image
        source={AppImages.ICON_COUNTRY_CODE}
        style={{
          height: 16,
          width: 1,
          resizeMode: 'center',
          backgroundColor: AppColors.lineColor,
          marginRight: 5,
        }}
      />

      <TextInput
        style={{
          flex: 1,
          fontFamily: AppFonts.semiBold,
          fontSize: 15,
          color: AppColors.black,
          ...props?.textStyle,
        }}
        placeholder={props?.placeholder}
        value={props?.defaultText}
        keyboardType={'phone-pad'}
        maxLength={10}
        onChangeText={text => props?.onChangeText(text)}
        placeholderTextColor={AppColors.lineColor}
      />
    </View>
  );
};
