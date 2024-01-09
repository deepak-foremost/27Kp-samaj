import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import {AppFonts} from '../utils/AppFonts';
import * as RootNavigation from '../utils/RootNavigation';
import {AppConstValue} from '../utils/AppConstValue';

const MainToolbar = props => {
  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 15,
        ...props.style,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={AppConstValue.ButtonOpacity}
          style={{
            // position: 'absolute',
            // left: 10,
            height: 40,
            width: 40,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={props?.leftPress}>
          <Image style={{}} source={props?.leftSrc} />
        </TouchableOpacity>

        <View
          style={{
            padding: 2,
            backgroundColor: '#fff',
            borderRadius: 30,
            marginHorizontal: 5,
          }}>
          <Image
            style={{}}
            source={require('../assets/images/small_app_icon.png')}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontFamily: AppFonts.semiBold,
            paddingTop: 2.5,
            ...props.txtStyle,
          }}>
          {props?.text}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        // onPress={() => Linking.openURL(`tel:${props?.phone}`)}
        style={{
          // position: 'absolute',
          // right: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* <Image
          style={{marginHorizontal: 5}}
          source={require('../assets/images/toolbar_phone_icon.png')}
        /> */}

        <Text
          style={{
            fontSize: 13,
            fontFamily: AppFonts.semiBold,
            color: '#fff',
            paddingTop: 2.5,
          }}>
          {props?.phone}
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        style={{
          position: 'absolute',
          right: 10,
          height: 40,
          width: 40,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props?.rightPress}>
        <Image style={{}} source={props?.rightSrc} />
      </TouchableOpacity> */}
    </View>
  );
};

export default MainToolbar;
