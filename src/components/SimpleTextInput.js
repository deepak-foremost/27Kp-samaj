import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppColors} from '../utils/AppColors';
import {printLog} from '../utils/AppConstValue';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';
import {PhoneWithCountry} from './PhoneWithCountry';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CountryPicker from 'react-native-country-picker-modal';
import {CustomDatePicker} from './CustomDatePicker';

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
            color: AppColors.DarkText,
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
              fontFamily: AppFonts.semiBold,
              fontSize: 16,
              flex: 1,
              textAlignVertical: 'center',
              paddingStart: 20,
              color: AppColors.black,
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
          color: AppColors.black,
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
        height: 45,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.black,
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
          height: 45,
          flex: 1,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: AppColors.line_color,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.regular,
            fontSize: 12,
            flex: 1,
            paddingStart: 5,
            color: props?.value ? AppColors.black : AppColors.line_color,
          }}>
          {props?.value ? props?.value : props?.placeholder}
        </Text>
        <Image
          style={{resizeMode: 'contain'}}
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
                color: AppColors.black,
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
          color: AppColors.black,
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
          ...Platform.select({
            ios: {
              paddingBottom: 10,
            },
            android: {
              height: 45,
            },
          }),
        }}>
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={AppColors.line_color}
          multiline={true}
          style={{
            fontFamily: AppFonts.regular,
            color: AppColors.black,
            fontSize: 12,
            marginStart: 5,
            minheight: 40,
            marginTop: 2.5,
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
  const [Visible, setVisible] = useState(false);
  const [country, setCountry] = useState('+91');
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.black,
          fontSize: 12,
          alignItems: 'center',
          textAlignVertical: 'center',
        }}>
        {props?.label} :{' '}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderBottomColor: AppColors.line_color,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          // onPressIn={onPressIn}
          // onPressOut={onPressOut}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}
          onPress={() => setVisible(!Visible)}
          activeOpacity={0.9}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: AppFonts.regular,
              color: AppColors.black,
            }}>
            {country}
          </Text>
          <Image
            style={[{marginLeft: 5}, props?.icon]}
            source={AppImages.DROP_DOWN_ICON}
          />
        </TouchableOpacity>

        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={AppColors.line_color}
          multiline={true}
          style={{
            fontFamily: AppFonts.regular,
            color: AppColors.black,
            fontSize: 12,
            marginStart: 5,
            minheight: 40,
            flex: 1,
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

      <CountryPicker
        visible={Visible}
        containerButtonStyle={{width: '0%', height: 0}}
        withFilter
        withAlphaFilter
        withCallingCode={true}
        theme={{
          fontSize: 14,
          color: 'white',
          fontFamily: 'Nunito-SemiBold',
        }}
        onSelect={cod => {
          setCountry('+' + cod.callingCode);
          setVisible(false);
        }}
        onClose={() => setVisible(false)}
      />
    </View>
  );
};

export const DaySelection = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        marginHorizontal: 5,
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          color: AppColors.black,
        }}>
        {props?.text}
        {':'}
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
            color: AppColors.black,
          }}>
          ✓
        </Text>
      </View>
    </View>
  );
};

export const BoxTextInput = props => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        // justifyContent: 'center',
        minHeight: 80,
        ...props?.styles,

        // alignItems:'center'
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.black,
          fontSize: 12,
          ...props.textStyle,
          // alignItems: 'center',
          // textAlignVertical: 'center',
        }}>
        {props?.label} :{' '}
      </Text>
      <View
        style={{
          flex: 1,
          borderColor: AppColors.line_color,
          borderWidth: 1,
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
            minHeight: 45,
            paddingTop: Platform.OS == 'android' ? -20 : 0,
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

export const DateSelection = props => {
  const [openDatePicker, setDatePicker] = useState(false);
  const [dob, setDOB] = useState(null);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        height: 25,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          color: AppColors.black,
          fontSize: 12,
          textAlignVertical: 'center',
        }}>
        {props.text}
      </Text>

      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={() => setDatePicker(true)}
        style={{
          flex: 1,
          flexDirection: 'row',
          borderBottomColor: AppColors.line_color,
          borderBottomWidth: 1,
          height: '100%',
          marginStart: 5,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.regular,
            color:
              props?.placeholder == null
                ? AppColors?.line_color
                : AppColors.black,
            fontSize: 12,
            // marginStart: 5,
          }}>
          {props?.placeholder}
        </Text>
        {/* <Image
          style={{
            width: 1.5,
            height: '80%',
            marginHorizontal: 5,
            backgroundColor: AppColors.fade,
          }}
        /> */}
      </TouchableOpacity>

      {/* <DatePicker
        modal
        mode="date"
        open={openDatePicker}
        maximumDate={new Date()}
        date={dob == null ? new Date() : dob}
        onConfirm={date => {
          setDatePicker(false);
          setDOB(date);
        }}
        onCancel={() => {
          setDatePicker(false);
        }}
      /> */}
      <CustomDatePicker
        // onChangeDob={i =>
        //   props?.expiry
        //     ? setDOB(moment(i).format('MM-YYYY'))
        //     : // : console.log('dateformat', moment(i).format('DD-MM-YYYY'))
        //       setDOB(moment(i).format('DD-MM-YYYY'))
        // }
        onChangeDob={props?.onChangeDob}
        isOpened={openDatePicker}
        onClose={() => setDatePicker(false)}
        title={props.title}
        expiry={props?.expiry}
        value={props?.value}
      />
    </View>
  );
};
