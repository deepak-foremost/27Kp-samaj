import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppColors} from '../utils/AppColors';
import {printLog} from '../utils/AppConstValue';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';
import {PhoneWithCountry} from './PhoneWithCountry';

export const MySelection = props => {
  const ref = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        height: 35,
        alignItems: 'center',
        ...props?.containerStyle,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          ref?.current?.open();
        }}
        style={{
          flexDirection: 'row',
          height: 35,
          flex: 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: AppFonts.medium,
            fontSize: 12,
            flex: 1,
            paddingStart: 5,
            color: props?.value ? '#0A3C5D' : AppColors.DarkText,
            ...props.textStyle,
          }}>
          {props?.value ? props?.value : props?.label}
        </Text>
        <Image
          style={{
            height: 10,
            width: 10,
            marginRight: 5,
            resizeMode: 'contain',
          }}
          source={AppImages.DROP_DOWN_ICON}
        />
      </TouchableOpacity>

      <RBSheet
        ref={ref}
        openDuration={250}
        customStyles={{
          container: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            color: AppColors.black,
            borderBottomColor: AppColors.LightText,
            borderBottomWidth: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.bold,
              fontSize: 16,
              flex: 1,
              textAlignVertical: 'center',
              paddingStart: 20,
            }}>
            {props?.placeholder ? props?.placeholder : 'Select Option'}
          </Text>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            activeOpacity={1}
            onPress={() => ref?.current?.close()}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: AppFonts.bold,
                fontSize: 16,
                textAlignVertical: 'center',
                paddingHorizontal: 20,
                color: '#303590',
              }}>
              {'Close'}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
          data={props?.data == null ? [] : props?.data}
          renderItem={({item, index}) => {
            // printLog('FlatList', JSON.stringify(item));
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  props?.onItemSelect(item);
                  ref?.current?.close();
                }}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  marginHorizontal: 10,
                  borderBottomColor: AppColors.LightText,
                  borderBottomWidth: 0.5,
                }}>
                <Text style={{color: AppColors.black}}>{item?.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </RBSheet>
    </View>
  );
};

export const HorizontalDetailInput = props => {
  return (
    <View style={{width: '100%', flexDirection: 'row', marginTop: 20}}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.extraDark,
          fontSize: 12,
        }}>
        {props?.label} :{' '}
      </Text>

      <TextInput
        style={{
          fontFamily: AppFonts.regular,
          color: AppColors.black,
          fontSize: 13,
          marginStart: 10,
          textAlignVertical: 'top',
          paddingHorizontal: 5,
          borderColor: AppColors.line_color,
          borderWidth: 1,
          flex: 1,
          borderRadius: 5,
          minHeight: 70,
        }}
        multiline
        value={props?.value}
        keyboardType={props?.type ? props?.type : 'default'}
        onChangeText={props?.ChangeText}
      />
    </View>
  );
};

export const HorizontalSelection = props => {
  const ref = useRef();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        height: 35,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.extraDark,
          fontSize: 12,
          textAlignVertical: 'center',
        }}>
        {props?.label} :{' '}
      </Text>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          ref?.current?.open();
        }}
        style={{
          flexDirection: 'row',
          height: 35,
          flex: 1,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: AppColors.line_color,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.regular,
            fontSize: 13,
            flex: 1,
            paddingStart: 5,
            color: props?.value ? AppColors.black : AppColors.line_color,
          }}>
          {props?.value ? props?.value : props?.placeholder}
        </Text>
        <Image
          style={{ resizeMode: 'contain'}}
          source={AppImages.DROP_DOWN_ICON}
        />
      </TouchableOpacity>

      <RBSheet
        ref={ref}
        openDuration={250}
        height={350}
        customStyles={{
          container: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            color: AppColors.black,
            borderBottomColor: AppColors.light_grey,
            borderBottomWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.bold,
              fontSize: 16,
              flex: 1,
              textAlignVertical: 'center',
              paddingStart: 20,
              color: AppColors.black,
            }}>
            {props?.placeholder ? props?.placeholder : 'Select Option'}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => ref?.current?.close()}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: AppFonts.bold,
                fontSize: 16,
                textAlignVertical: 'center',
                paddingHorizontal: 20,
                color: AppColors.red,
              }}>
              {'Close'}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
          data={props?.data == null ? [] : props?.data}
          renderItem={({item, index}) => {
            printLog('FlatList', JSON.stringify(item));
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  props?.onItemSelect(item);
                  ref?.current?.close();
                }}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  marginHorizontal: 10,
                  borderBottomColor: AppColors.light_grey,
                  borderBottomWidth: 0.5,
                }}>
                <Text style={{color: AppColors.black}}>{item?.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </RBSheet>
    </View>
  );
};

export const HorizontalTextInput = props => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        ...props?.styles,
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.extraDark,
          fontSize: 12,
          alignItems: 'center',
          textAlignVertical: 'center',
        }}>
        {props?.label} :{' '}
      </Text>
      <View
        style={{
          flex: 1,
          borderBottomColor: AppColors.line_color,
          borderBottomWidth: 1,
        }}>
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={AppColors.lineColor}
          multiline={true}
          style={{
            fontFamily: AppFonts.regular,
            color: AppColors.black,
            fontSize: 12,
            marginStart: 5,
            height: 35,
          }}
          numberOfLines={1}
          maxLength={props?.contact ? 10 : 1000}
          value={props?.defaultText}
          onChangeText={props?.onChangeText}
          editable={props?.diseble == undefined}
          selectTextOnFocus={props?.diseble == undefined}
          keyboardType={props?.type ? props?.type : 'default'}
        />
      </View>
    </View>
  );
};

export const MyMobileNumber = props => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20}}>
      <Text
        style={{
          fontFamily: AppFonts.regular,
          color: AppColors.black,
          fontSize: 13,
          alignItems: 'center',
          textAlignVertical: 'center',
        }}>
        {props?.label} :{' '}
      </Text>
      <PhoneWithCountry
        containerStyle={{width: '74%', height: 35, alignItems: 'center',borderBottomColor:AppColors.line_color}}
        placeholder={'Mobile No'}
        textStyle={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.extraDark,
          fontSize: 12,
          marginStart: 5,
          height: 35,
        }}
        defaultText={props?.phone}
        onChangeText={props?.onChangeText}
        countryCode={props?.countryCode}
        onCountry={item => {
          printLog('PhoneWithCountry', JSON.stringify(item?.name));
          props?.setCountryCode(item);
        }}
      />
    </View>
  );
};

export const DaySelection = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width:'30%',
        alignItems: 'center',
        marginHorizontal:5,
        justifyContent:'space-between'
      }}>
      <Text
        style={{
         
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          color: AppColors.extraDark,
        }}>
       {props?.text}{':'}
      </Text>
      <View
        style={{
          width: 15,
          height: 15,
          borderColor: 'gray',
          borderWidth: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: AppFonts.semiBold,
            color: AppColors.extraDark,
          }}>
          ✓
        </Text>
      </View>
    </View>
  );
};
