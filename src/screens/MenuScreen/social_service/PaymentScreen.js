import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {
  HorizontalSelection,
  HorizontalTextInput,
} from '../../../components/SimpleTextInput';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PaymentScreen = ({route}) => {
  const headerText = route?.params?.text;
  const mobileNumber = route?.params?.value.split('-')[0];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [method, setMethod] = useState('card');
  const [cardNo, setCardNo] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upi, setUpi] = useState('');
  const [check, setCheck] = useState(false);

  return (
    <View
      style={{
        backgroundColor: AppColors.Orange,
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScreenToolbar
          styles={{backgroundColor: AppColors.Orange}}
          text={'સમાજ સેવા સહાય'}
        />

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
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                width: '90%',

                alignSelf: 'center',
                backgroundColor: AppColors.backgroundColor,
                // paddingVertical: 15,
                // paddingHorizontal: 15,
                marginBottom: 15,
                marginTop:5,
                borderRadius: 10,
                backgroundColor: '#fff',
                marginHorizontal: 15,
                paddingHorizontal: 10,
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
              <HorizontalTextInput
                label={`Mobile No`}
                defaultText={phone}
                onChangeText={setPhone}
                type={'numeric'}
              />
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
              </View>
              {method == 'card' && (
                <View style={{flex: 1}}>
                  <HorizontalTextInput
                    label={`Card Number `}
                    defaultText={cardNo}
                    onChangeText={setCardNo}
                    type={'numeric'}
                  />
                  <HorizontalTextInput
                    label={`Expiry Date `}
                    defaultText={expiry}
                    onChangeText={setExpiry}
                  />
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
                <View style={{flex: 1}}>
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
                    flex: 1,
                    justifyContent: 'space-evenly',
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
                      style={{height: 90, width: 90}}
                      source={require('../../../assets/images/scanner.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  // position: 'absolute',
                  // bottom: 15,
                  width: '100%',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 15,
                }}>
                <AppButton
                  text={'Cancel'}
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
                  buttonStyle={{
                    width: '48%',
                    height: 40,
                    borderRadius: 30,
                    backgroundColor: AppColors.Orange,
                  }}
                />
              </View>
            </View>
          </View>
          <BorderView
            backgroundColor={AppColors.Orange}
            text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          />
        </KeyboardAwareScrollView>
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
        width: '32%',
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
          color: props?.show ? '#FFF' : '#1F1F39',
          textAlign: 'center',
        }}>
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
};
