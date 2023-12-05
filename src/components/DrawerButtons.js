import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import * as RootNavigation from '../utils/RootNavigation';
import {AppImages} from '../utils/AppImages';
import { AppScreens } from '../utils/AppScreens';

const DrawerButtons = props => {
  // const [show,setShow]=useState('');
  // console.warn(props?.item?.item?.index)
  return (
    <TouchableOpacity
    onPressIn={props?.pressIn}
      style={{
        width: '100%',
        paddingLeft: 30,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props?.item?.item?.index==props?.show ? '#0F50BB' : null,
        paddingVertical: 8,
      }}
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={
      props?.onChange
      }>
      {props?.item?.item?.index==props?.show ? (
        <Image style={{left:25,position:'absolute',}} source={AppImages.BUTTON_ICON} />
      ) : null}

      <Image style={{marginLeft:20}} source={props?.item?.item?.src}/>

      <Text
        style={{
          fontFamily: AppFonts.medium,
          fontSize: 14,
          color: '#F7F7F7',
          marginLeft:20
        }}>
        {props?.item?.item?.menu}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButtons;
