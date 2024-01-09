import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';

const ProfileText = props => {
  return (
    <View style={{alignSelf: 'flex-start'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{tintColor: AppColors.BackgroundSecondColor}}
          source={props?.src}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: AppFonts.medium,
            color: '#A8A8A8',
            marginLeft: 10,
            ...props.firstStyle,
          }}>
          {props?.firstText}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: AppFonts.medium,
          fontSize: 13,
          color: AppColors.DarkText,
          marginLeft: 25,
          marginTop: 5,
        }}>
        {props?.secondText}
      </Text>
    </View>
  );
};

export default ProfileText;
