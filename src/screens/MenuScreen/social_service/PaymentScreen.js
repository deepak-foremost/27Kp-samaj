import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {
  DateSelection,
  HorizontalSelection,
  HorizontalTextInput,
  MyMobileNumber,
} from '../../../components/SimpleTextInput';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LogInToolbar from '../../../components/LogInToolbar';
import {getCities} from '../../../networking/CallApi';
import {AppConstValue, printLog} from '../../../utils/AppConstValue';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import {CustomExpiryPicker} from '../../../components/CustomExpiryPicker';

const PaymentScreen = ({route}) => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const headerText = route?.params?.text;
  const mobileNumber = route?.params?.value.split('-')[0];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [cityId, setCityId] = useState('');
  const [method, setMethod] = useState('card');
  const [cardNo, setCardNo] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upi, setUpi] = useState('');
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState('');
  const [code, setCode] = useState('+91');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || new Date();

      setOpen(false);
      setDate(moment(selectedDate).format('MM-YYYY'));
      console.log('date', date);
    },
    [date, open],
  );

  useEffect(() => {
    getCities(
      response => {
        if (response?.status) {
          var temp = [];
          for (let i = 0; i < response?.data?.length; i++) {
            temp.push({
              name: response?.data[i]?.name,
              id: response?.data[i]?.id,
            });
            if (i == 0) {
              setValue(response?.data[i]?.name);
              setCityId(response?.data[i]?.id);
            }
          }
          setCities(temp);
        }
      },
      error => {
        printLog('StatisticScreen', error);
      },
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.Orange,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {/* <ScreenToolbar
          styles={{backgroundColor: AppColors.Orange}}
          text={'સમાજ સેવા સહાય'}
        /> */}
        <LogInToolbar
          text={'સમાજ સેવા સહાય'}
          imgStyle={{tintColor: 'black'}}
          textStyle={{color: 'black'}}
          style={{
            backgroundColor: AppColors.Orange,
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: AppFonts.semiBold,
              color: '#262626',
              alignSelf: 'center',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            {headerText + ' > Payment Method'}
          </Text>

          <KeyboardAwareScrollView
            contentContainerStyle={{
              // width: '100%',
              // alignSelf: 'center',
              // justifyContent: 'center',
              // alignItems: 'center',
              flexGrow: 1,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: AppColors.BackgroundColor,
                // paddingVertical: 15,
                paddingHorizontal: 15,
                marginTop: 10,
                marginBottom: 15,
                borderRadius: 10,
                backgroundColor: '#fff',
                marginHorizontal: 15,
                alignItems: 'center',
                flex: 1,
                ...Platform.select({
                  ios: {
                    shadowColor: '#D5D5D5',
                    shadowOffset: {width: 0, height: -1},
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                  },
                  android: {
                    elevation: 5,
                  },
                }),
              }}>
              <HorizontalTextInput
                label={`Name`}
                defaultText={name}
                onChangeText={setName}
              />

              <MyMobileNumber
                // placeholder={'vjbrb'}
                type={'numeric'}
                label={`Mobile No`}
                countryCode={code}
                phone={phone}
                setCountryCode={item => {
                  setCode(item?.name);
                }}
                onChangeText={setPhone}
              />

              {/* <HorizontalTextInput
                label={`Mobile No`}
                defaultText={phone}
                onChangeText={setPhone}
                type={'numeric'}
              /> */}
              <HorizontalSelection
                label={`Village`}
                placeholder={`ગામ`}
                data={cities == null ? [] : cities}
                value={city}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setCity(item?.name);
                }}
              />
              <HorizontalTextInput
                label={`જીવન સહાય સભાસદ સભ્ય નંબર.`}
                defaultText={mobileNumber}
                onChangeText={setName}
              />

              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 25,
                  marginBottom: 15,
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <PaymentBox
                  text={'Card'}
                  press={() => setMethod('card')}
                  show={method == 'card' ? true : false}
                />
                <PaymentBox
                  text={'Bank UPI Number'}
                  press={() => setMethod('upi')}
                  show={method == 'upi' ? true : false}
                />
                <PaymentBox
                  text={'Barcode' + '\n' + 'Scan'}
                  press={() => setMethod('barcode')}
                  show={method == 'barcode' ? true : false}
                />
                <PaymentBox
                  text={'Net' + '\n' + 'Banking'}
                  press={() => setMethod('banking')}
                  show={method == 'banking' ? true : false}
                />
              </View>
              {method == 'card' && (
                <View style={{flex: 1}}>
                  <HorizontalTextInput
                    label={`Card Number `}
                    defaultText={cardNo}
                    onChangeText={setCardNo}
                    type={'numeric'}
                  />

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
                      {'Expiry Date'}
                    </Text>

                    <TouchableOpacity
                      activeOpacity={AppConstValue.ButtonOpacity}
                      onPress={() => setOpen(true)}
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
                            date == ''
                              ? AppColors?.line_color
                              : AppColors.black,
                          fontSize: 12,
                          marginStart: 5,
                        }}>
                        {date == '' ? 'MM/YYYY' : date}
                      </Text>
                      <Image
                        style={{
                          width: 1.5,
                          height: '80%',
                          marginHorizontal: 5,
                          backgroundColor: AppColors.BackgroundColor,
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* <DateSelection
                    text={'Expiry Date:'}
                    title={'Expiry Date'}
                    expiry={true}
                  /> */}
                  {open && (
                    <MonthPicker
                      onChange={onValueChange}
                      mode="number"
                      //  autoTheme={false}
                      dividerHeight={250}
                      //androidVariant="nativeAndroid"
                      date={new Date()}
                      value={new Date()}
                      onItemSelect={i => console.log('select', i)}
                    />
                  )}

                  {/* <HorizontalTextInput
                    label={`Expiry Date `}
                    defaultText={expiry}
                    onChangeText={setExpiry}
                  /> */}
                  <HorizontalTextInput
                    label={`CVC`}
                    defaultText={cvv}
                    onChangeText={setCvv}
                    type={'numeric'}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-start',
                      marginTop: 15,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        borderColor: '#1F1F39',
                        borderWidth: 1,
                        height: 15,
                        width: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => setCheck(!check)}>
                      {check && (
                        <Text
                          style={{
                            color: AppColors.DarkText,
                            fontSize: 11,
                            fontFamily: AppFonts.semiBold,
                          }}>
                          ✓
                        </Text>
                      )}
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: AppFonts.semiBold,
                        color: '#A4A4A4',
                        marginLeft: 15,
                      }}>
                      Save the Card{' '}
                    </Text>
                  </View>
                </View>
              )}
              {method == 'upi' && (
                <View style={{flex: 1, height: 130}}>
                  <HorizontalTextInput
                    label={`Bank UPI Number`}
                    defaultText={upi}
                    onChangeText={setUpi}
                  />
                </View>
              )}
              {method == 'barcode' && (
                <View
                  style={{
                    width: '100%',
                    height: 130,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: AppFonts.semiBold,
                      color: '#1F1F39',
                    }}>
                    Barcode Scan And Payment
                  </Text>
                  <TouchableOpacity style={{}} activeOpacity={1}>
                    <Image
                      style={{height: 90, width: 90, marginTop: 10}}
                      source={require('../../../assets/images/scanner.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {method == 'banking' && (
                <View style={{flex: 1, height: 130}}>
                  <HorizontalTextInput
                    label={`User Name`}
                    defaultText={userName}
                    onChangeText={setUserName}
                    // type={'numeric'}
                  />
                  <HorizontalTextInput
                    label={`Password`}
                    defaultText={password}
                    onChangeText={setPassword}
                  />
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  // position: 'absolute',
                  // bottom: 15,
                  width: '100%',
                  justifyContent: 'space-between',
                  // marginHorizontal: 15,
                  marginVertical: 25,
                }}>
                <AppButton
                  text={'Cancel'}
                  textStyle={{color: 'black'}}
                  buttonStyle={{
                    width: '48%',
                    height: 40,
                    borderRadius: 30,
                    backgroundColor: AppColors.Orange,
                  }}
                  buttonPress={() => RootNavigation.goBack()}
                />
                <AppButton
                  text={'Pay'}
                  textStyle={{color: 'black'}}
                  buttonStyle={{
                    width: '48%',
                    height: 40,
                    borderRadius: 30,
                    backgroundColor: AppColors.Orange,
                  }}
                />
              </View>
            </View>
            <BorderView
              style={{flex: 1, alignItems: 'center'}}
              backgroundColor={AppColors.Orange}
              text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
              borderStyle={{height: 60, position: ''}}
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

export const PaymentBox = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '24%',
        borderRadius: 15,
        borderColor: AppColors.Orange,
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props?.show ? AppColors.Orange : '#fff',
      }}
      onPress={props?.press}>
      <Text
        style={{
          fontSize: 12,
          fontFamily: AppFonts.semiBold,
          color: props?.show ? 'black' : '#1F1F39',
          textAlign: 'center',
        }}>
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
};
