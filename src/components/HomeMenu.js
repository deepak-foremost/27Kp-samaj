import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {AppStyles} from '../utils/AppStyles';
import {AppImages} from '../utils/AppImages';
import {AppColors} from '../utils/AppColors';
import {AppFonts} from '../utils/AppFonts';
import {AppConstValue} from '../utils/AppConstValue';
import * as RootNavigation from '../utils/RootNavigation';
import {getString} from '../utils/AsyncStorageHelper';

const HomeMenuButton = props => {
  const width = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={() => RootNavigation.navigate(props?.item?.item?.screen)}
      style={[
        {
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingVertical: 5,
          height: width / 3 - 26,
          borderRadius: 10,
          flex: 1,
          margin: 6,

          // ...Platform.select({
          //   ios: {
          //     shadowColor: '#D5D5D5',
          //     shadowOffset: {width: 0, height: -1},
          //     shadowOpacity: 0.9,
          //     shadowRadius: 3,
          //   },
          //   android: {
          //     elevation: 3,
          //   },
          // }),
          borderColor: AppColors.BackgroundSecondColor,
          borderRadius: 15,
          borderTopLeftRadius: 0,
          borderWidth: 1.5,
        },
      ]}>
      <Image style={{}} source={props?.item?.item?.icon} />
      <Text
        style={{
          fontSize: 10,
          fontFamily: AppFonts.bold,
          color: AppColors.BackgroundSecondColor,
          textAlign: 'center',
          marginHorizontal: 5,
        }}>
        {props?.item?.item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeMenuButton;
