import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import {AppConstValue} from '../utils/AppConstValue';

const AppPasswordView = props => {
  const [open, setOpen] = useState(false);
  return (
    // <View
    //   style={{
    //     height: 65,
    //     justifyContent: 'space-between',
    //     marginTop: 20,
    //     width: '100%',
    //   }}>
    //   <Text
    //     style={{
    //       fontFamily: AppFonts.semiBold,
    //       fontSize: 12,
    //       color: AppColors.DarkText,
    //     }}>
    //     {props?.text}
    //   </Text>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //       paddingBottom: 5,
    //       borderBottomWidth: 1,
    //       borderBottomColor: '#EAEAFF',
    //     }}>
    //     <Image source={AppImages.KEY_SMALL_ICON} style={{}} />
    //     <TextInput
    //       secureTextEntry={open ? false : true}
    //       style={{
    //         fontSize: 14,
    //         fontFamily: AppFonts.regular,
    //         marginLeft: 20,
    //         flex: 1,
    //       }}
    //       placeholder={props?.placeholder}
    //       placeholderTextColor={'#38385E'}
    //       onChangeText={props?.onChangeText}
    //     />
    //     <TouchableOpacity
    //       style={{
    //         height: 30,
    //         width: 30,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //       activeOpacity={AppConstValue.ButtonOpacity}
    //       onPress={() => setOpen(!open)}>
    //       <Image source={open ? AppImages.EYE_OPEN : AppImages.EYE_CLOSE} />
    //     </TouchableOpacity>
    //   </View>
    // </View>
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
        <View style={{flexDirection: 'row'}}>
          <TextInput
          secureTextEntry={open ? false : true}
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
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={1}
            onPress={() => setOpen(!open)}>
            <Image source={open ? AppImages.EYE_OPEN : AppImages.EYE_CLOSE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AppPasswordView;
