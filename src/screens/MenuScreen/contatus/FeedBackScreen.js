import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../../../components/AppButton';
import moment from 'moment';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
  BoxTextInput,
  DateSelection,
  DaySelection,
  HorizontalDetailInput,
  HorizontalSelection,
  HorizontalTextInput,
  MyMobileNumber,
} from '../../../components/SimpleTextInput';
// import {
//   getCities,
//   getSuggestionData,
//   postAddFeedback,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {
  AppConstValue,
  printLog,
  ShowMessage,
} from '../../../utils/AppConstValue';
import {AppImages} from '../../../utils/AppImages';
// import LoaderView from '../../../utils/LoaderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AddBorder} from '../../FamilyMemberScreen/AddMemberScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppFonts} from '../../../utils/AppFonts';
import DatePicker from 'react-native-date-picker';
import {getString} from '../../../utils/AsyncStorageHelper';
import {staticArray} from '../../../utils/staticArray';
import {
  getCities,
  getSuggestionData,
  postAddFeedback,
} from '../../../networking/CallApi';

const FeedBackScreen = props => {
  const [openDatePicker, setDatePicker] = useState(false);
  const [dob, setDOB] = useState(null);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [suggestion, setSuggestion] = useState(null);
  const [suggestionID, setSuggestionID] = useState('0');
  const [suggestionList, setSuggestionList] = useState([]);

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  // const [option, setOption] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('DD/MM/YYYY');
  const [isLoading, setLoading] = useState(false);
  const [country_code, setCountryCode] = useState('+91');

  // useEffect(() => {
  //   getString('village', response => {
  //     setCities(response);
  //   });
  // }, [cities, setCities]);

  useEffect(() => {
    getCities(
      response => {
        var temp = [];

        for (let i = 0; i < response?.data?.length; i++) {
          temp.push({
            name: response?.data[i]?.name,
            id: response?.data[i]?.id,
          });
        }

        setCities(temp);
      },
      error => {},
      ``,
    );

    getSuggestionData(
      response => {
        var temp = [];

        for (let i = 0; i < response?.data?.length; i++) {
          temp.push({
            name: response?.data[i]?.name,
            id: response?.data[i]?.id,
          });
        }

        setSuggestionList(temp);
      },
      error => {},
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={'Feedback'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: AppColors.fadeBackground,
        }}>
        <ScreenToolbar text={'FEEDBACK'} />

        {/* <AppButton
          text={'Mobile Number : 9999999999'}
          width={'85%'}
          buttonStyle={{
            marginTop: 20,
            width: '75%',
            borderRadius: 30,
            height: 40,
            alignSelf: 'center',
          }}
        /> */}

        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1, paddingBottom: -250}}
          showsVerticalScrollIndicator={false}>
          {/* <HorizontalSelection
          label={`Choose Option`}
          placeholder={`Choose Option`}
          data={suggestionList == null ? [] : suggestionList}
          value={suggestion}
          onItemSelect={item => {
            printLog(JSON.stringify(item?.item));
            setSuggestion(item?.name);
            setSuggestionID(item?.id);
          }}
        /> */}
          <View style={{flex: 1}}>
            <View
              style={{
                marginVertical: '6%',
                width: '90%',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                paddingBottom: 30,

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
              <HorizontalSelection
                label={`Choose Option`}
                placeholder={`Choose Option`}
                data={suggestionList == [] ? [] : suggestionList}
                value={suggestion}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setSuggestion(item?.name);
                  setSuggestionID(item?.id);
                }}
              />

              <HorizontalTextInput
                label={`Your Name`}
                defaultText={name}
                onChangeText={setName}
              />

              <MyMobileNumber
                contact={true}
                label={`Your Mobile`}
                countryCode={country_code}
                phone={phone}
                type={'numeric'}
                setCountryCode={item => {
                  setCountryCode('+' + item?.callingCode);
                }}
                onChangeText={setPhone}
              />

              {/* <View
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
                  color: AppColors.extraDark,
                  fontSize: 12,
                  textAlignVertical: 'center',
                }}>
                Date :
              </Text>

              <TouchableOpacity
                activeOpacity={AppConstValue.ButtonOpacity}
                onPress={() => {
                  setDatePicker(true);
                }}
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
                    color: dob == null ? 'gray' : AppColors.black,
                    fontSize: 13,
                    marginStart: 5,
                  }}>
                  {dob == null
                    ? 'DD-MM-YYYY'
                    : moment(dob).format('DD-MM-YYYY')}
                </Text>
                <Image
                  style={{
                    width: 1.5,
                    height: '80%',
                    marginHorizontal: 5,
                    backgroundColor: AppColors.backgroundSecondColor,
                  }}
                />
              </TouchableOpacity>
            </View>

            <DatePicker
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

              {/* <DateSelection
                text={'Date : '}
                title={'Select Date'}
                placeholder={date}
                onChangeDob={i => setDate(moment(i).format('YYYY-MM-DD'))}
              /> */}

              <HorizontalSelection
                label={`Village`}
                placeholder={`Village`}
                data={cities == null ? [] : cities}
                value={city}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setCity(item?.name);
                }}
              />
              {/* <HorizontalTextInput
            label={`Message`}
            defaultText={message}
            onChangeText={setMessage}
          /> */}
              <BoxTextInput
                label={`Message`}
                defaultText={message}
                onChangeText={setMessage}
              />
              {/* <HorizontalDetailInput
              label={`Write your message`}
              value={message}
              ChangeText={setMessage}
            /> */}

              {
                // isLoading ? (
                // <View style={{height: 45, width: '55%'}}>
                //   {/* <LoaderView /> */}
                // </View>
                // ) :
                <AppButton
                  loading={isLoading}
                  color={'#fff'}
                  text={'Submit'}
                  width={'55%'}
                  buttonStyle={{
                    marginTop: 15,
                    width: '50%',
                    borderRadius: 30,
                    height: 40,
                  }}
                  buttonPress={() => {
                    if (suggestion == null) {
                      ShowMessage('Please select suggestion');
                    } else if (name.trim == '') {
                      ShowMessage('Please enter name');
                    } else if (phone.trim == '') {
                      ShowMessage('Please enter phone');
                    } else if (city == null) {
                      ShowMessage('Please select city');
                    } else if (message.trim == '') {
                      ShowMessage('Please enter message');
                    } else {
                      setLoading(true);
                      postAddFeedback(
                        {
                          suggestion_id: suggestionID,
                          name: name,
                          phone: phone,
                          city: city,
                          message: message,
                          country_code: country_code,
                        },
                        response => {
                          ShowMessage(response?.message);
                          if (response?.status) {
                            setLoading(false);
                            RootNavigation?.goBack();
                          }
                        },
                        error => {
                          ShowMessage(error);
                          setLoading(false);
                        },
                      );
                    }
                  }}
                />
              }
            </View>
          </View>
          <BorderView
            backgroundColor={AppColors.BackgroundSecondColor}
            text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
            borderStyle={{position: ''}}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default FeedBackScreen;
