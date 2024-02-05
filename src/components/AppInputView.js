import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {AppImages} from '../utils/AppImages';
import CountryPicker from 'react-native-country-picker-modal';
import {staticArray} from '../utils/staticArray';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Keyboard } from 'react-native';

const AppInputView = props => {
  const [Visible, setVisible] = useState(null);
  const [country, setCountry] = useState('+91');
  const [data, setData] = useState(staticArray.countryCodes);
  const [filteredData, setFilteredData] = useState(staticArray.countryCodes);
  const [searchText, setSearchText] = useState('');
  const Search = text => {
    // setSearchText(text);
    // Filter the data based on the search text
    const filtered = data.filter(item =>
      item.code.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredData(filtered);
  };
  const ref = useRef();
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
          height: 45,
        }}>
        <Image source={AppImages.PHONE_SMALL_ICON} />

        <TouchableOpacity
          // onPressIn={onPressIn}
          // onPressOut={onPressOut}
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}
          onPress={() => ref?.current?.open()}
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
            style={[{marginLeft: 10}, props?.icon]}
            source={require('../assets/images/country_icon.png')}
          />
        </TouchableOpacity>
        {/* <Modal visible={Visible}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: 45,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomColor: AppColors.line_color,
                borderBottomWidth: 1,
                paddingHorizontal: 15,
              }}>
              <Text style={{fontSize: 16, color: AppColors.DarkText}}>
                Select Country Code
              </Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setVisible(false)}>
                <Image
                  style={{height: 15, width: 15}}
                  source={AppImages.ICON_CLOSE}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{paddingHorizontal: 15}}
              data={staticArray.countryCodes}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    width: '100%',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    props?.selectCode(item);
                    setVisible(false);
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: AppColors.DarkText,
                      flex: 1,
                      fontFamily: AppFonts.medium,
                    }}>
                    {item.code}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.medium,
                    }}>
                    {'+' + item.country}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal> */}
        <RBSheet
          ref={ref}
          openDuration={250}
          height={350}
          customStyles={{
            container: {
              width: '100%',
              justifyContent: 'center',
              // alignItems: 'center',
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
              onPress={() => {
                setFilteredData(data);
                ref?.current?.close();
              }}>
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
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: AppColors.line_color,
              alignItems: 'center',
              paddingLeft: 15,
            }}>
            <Image
              style={{height: 15, width: 15, tintColor: AppColors.LightText}}
              source={AppImages.SEARCH_ICON}
            />
            <TextInput
              style={{
                height: 35,
                color: AppColors.DarkText,
                fontSize: 12,
                flex: 1,
                margin: 5,
              }}
              placeholder="Search Country"
              placeholderTextColor={AppColors.LightText}
              onChangeText={i => Search(i)}
            />
          </View>
          <View style={{flex: 1}}>
            {/* <View
            style={{
              height: 45,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomColor: AppColors.line_color,
              borderBottomWidth: 1,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 16, color: AppColors.DarkText}}>
              Select Country Code
            </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setVisible(false)}>
              <Image
                style={{height: 15, width: 15}}
                source={AppImages.ICON_CLOSE}
              />
            </TouchableOpacity>
          </View> */}
            <FlatList
              contentContainerStyle={{}}
              data={filteredData}
              keyboardShouldPersistTaps='handled'
              // keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    justifyContent: 'flex-start',
                    borderBottomColor: AppColors.line_color,
                    borderBottomWidth: 1,
                  }}
                  onPress={() => {
                    props?.onItemSelect(item);
                    ref?.current?.close();
                    setFilteredData(data);
                    Keyboard.dismiss();
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: AppColors.DarkText,
                      marginLeft: 15,
                      fontFamily: AppFonts.medium,
                    }}>
                    {item.code}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.medium,
                      marginLeft: 15,
                    }}>
                    {'+' + item.country}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </RBSheet>
        {/* <CountryPicker
          visible={props?.Visible}
          containerButtonStyle={{width: '0%', height: 0}}
          flatListProps={{}}
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
        /> */}

        <TextInput
          style={{
            fontSize: 14,
            fontFamily: AppFonts.regular,
            marginLeft: 20,
            flex: 1,
            color: AppColors.black,
            marginTop: 2.5,
          }}
          keyboardType="numeric"
          placeholderTextColor={'#38385E'}
          placeholder={props?.placeholder}
          onChangeText={props?.onChangeText}
          defaultValue={props?.defaultText}
          maxLength={10}
        />
      </View>
    </View>
  );
};

export default AppInputView;
