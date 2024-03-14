import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from './AppColors';

export const AppStyles = StyleSheet.create({
  AppMainBackground: {
    backgroundColor: AppColors.BackgroundColor,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  AppLogoStyle: {
    height: 170,
    width: 170,
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppColors.BackgroundSecondColor,
    alignItems: 'center',
  },
  SafeAreabackground: {
    backgroundColor: AppColors.BackgroundSecondColor,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  OutlineBackground:{
    marginHorizontal: 25,
    borderColor: '#EAEAFF',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 0,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  boxStyle:{
    borderColor:'#DEDEDE',
    borderWidth:1,
    borderRadius:3
  }
});
