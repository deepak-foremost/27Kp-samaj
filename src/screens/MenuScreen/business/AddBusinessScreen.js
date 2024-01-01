import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import AppButton from '../../../components/AppButton';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
  BoxTextInput,
  DateSelection,
  DaySelection,
  HorizontalDetailInput,
  HorizontalSelection,
  HorizontalTextInput,
  MyMobileNumber,
  MySelection,
} from '../../../components/SimpleTextInput';
// import {getCategories, getCities} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
// import {safeAreaBottomHeight} from '../../../utils/AppScreens';
import {AppStyles} from '../../../utils/AppStyles';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AddBorder, ButtonCell} from '../../FamilyMemberScreen/AddMemberScreen';
import * as ImagePicker from 'react-native-image-picker';
import {printLog, ShowMessage} from '../../../utils/AppConstValue';
import {staticArray} from '../../../utils/staticArray';
// import {Apis} from '../../../../networking/Apis';
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';
import AsyncStorage from '@react-native-community/async-storage';
import ScreenToolbar from '../../../components/ScreenToolbar';
import EditBusiness from '../../../components/EditBusiness';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppInputView from '../../../components/AppInputView';
import {CustomDatePicker} from '../../../components/CustomDatePicker';
import {getCategories, getCities} from '../../../networking/CallApi';
import {Api} from '../../../networking/Api';
import {showMessage} from 'react-native-flash-message';
import LoaderView from '../../../utils/LoaderView';
import moment from 'moment';

// import LoaderView from '../../../utils/LoaderView';
// import {set} from 'react-native-reanimated';

const AddBusinessScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var bussinessItem = props?.route?.params?.item;
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCityId, setCityId] = useState('');
  const [catId, setCatId] = useState('');
  const [firm, setFirm] = useState('');
  const [owner1, setOwner1] = useState('');
  const [owner2, setOwner2] = useState('');
  const [owner3, setOwner3] = useState('');
  const [owner4, setOwner4] = useState('');
  const [address, setAddress] = useState('');
  const [Description, setDescription] = useState('');
  const [product, setProduct] = useState('');
  const [startTime, setStart] = useState('');
  const [endTime, setClose] = useState('');
  const [code, setCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [visiting, setVisiting] = useState('');
  const [visitingOne, setVisitingOne] = useState('');
  const [allCities, setAlLCities] = useState([]);
  const [week, setWeek] = useState(staticArray.week);
  const [business_type, setBusiness_type] = useState('Own');
  const [city, setCity] = useState('');
  const [openDatePicker, setDatePicker] = useState(false);
  const [dob, setDOB] = useState(null);
  const [startAdd, setStartAdd] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [owner_name_4, setOwner_name_4] = useState('');

  useEffect(() => {
    getCities(
      response => {
        printLog('NewUserScreen', response?.status);
        setAlLCities(response?.data);
      },
      error => {
        printLog('NewUserScreen', error);
      },
    );
  }, []);

  useEffect(() => {
    printLog('AddBusinessScreen', bussinessItem);

    if (bussinessItem != undefined) {
      console.log(
        'date',
        bussinessItem?.business_start_date + bussinessItem?.business_end_date,
      );
      setFirm(bussinessItem?.firm);
      setCategory(bussinessItem?.category_name);
      setCatId(bussinessItem?.category_id);
      setBusiness_type(bussinessItem?.business_type);
      setOwner1(bussinessItem?.owner_name_1);
      setOwner2(bussinessItem?.owner_name_2);
      setOwner3(bussinessItem?.owner_name_3);
      setOwner4(bussinessItem?.owner_name_4);
      setAddress(bussinessItem?.address);
      setProduct(bussinessItem?.products);
      setStart(bussinessItem?.from_time);
      setStartDate(bussinessItem?.business_start_date);
      setEndDate(bussinessItem?.business_end_date);
      setClose(bussinessItem?.to_time);
      setCode(bussinessItem?.country_code);
      setSelectedCity(bussinessItem?.city);
      setMobile(bussinessItem?.business_phone);
      setEmail(bussinessItem?.business_email);
      setWebsite(bussinessItem?.website);
      setVisiting(bussinessItem?.visting_card_photo);
      setBusiness_type(bussinessItem?.business_type);
      console.log('uri', bussinessItem?.visting_card_photo);
      var daysList = [];
      for (let c = 0; c < bussinessItem?.business_hours?.length; c++) {
        daysList.push({
          day: bussinessItem?.business_hours[c]?.day,
          status: bussinessItem?.business_hours[c]?.status == '1',
        });
      }
      setWeek(daysList);
    }
    getCategories(
      response => {
        if (response?.status) {
          var data = [];
          var selected = -1;
          for (let i = 0; i < response?.data?.length; i++) {
            data.push({
              name: response?.data[i]?.name,
              id: response?.data[i]?.id,
            });
          }
          setCategories(data);
        }
      },
      error => {},
    );
  }, [selectedCategory, setCategory]);

  const addNewBusiness = async () => {
    setLoading(true);

    var payload = new FormData();
    let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
    printLog('tokenPrint----', token);

    payload.append('category_id', catId);
    payload.append('firm', firm);
    payload.append('business_type', business_type);
    payload.append('owner_name_1', owner1);
    payload.append('owner_name_2', owner2);
    payload.append('owner_name_3', owner3);
    payload.append('owner_name_4', owner4);
    payload.append('address', address);
    payload.append('products', product);
    payload.append('country_code', code);
    payload.append('business_phone', mobile);
    payload.append('business_email', email);
    payload.append('website', website);
    payload.append('from_time', startTime);
    payload.append('to_time', endTime);
    payload.append('city', selectedCity);
    payload.append('business_start_date', startDate);
    payload.append('business_end_date', endDate);
    payload.append('business_hourse', JSON.stringify(week));

    payload.append('visting_card_photo', {
      uri:
        Platform.OS === 'android'
          ? visiting?.uri
          : visiting?.uri.replace('file://', ''),
      name: visiting?.fileName,
      type: visiting?.type,
    });
    printLog('PARAMS', JSON.stringify(payload));

    fetch(Api.POST_ADD_BUSINESS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization:
          'Bearer ' +
          (token?.token == undefined ? JSON.parse(token)?.token : token?.token),
      },
      body: payload,
    })
      .then(response => response.json())
      .then(responseJson => {
        // return responseJson
        printLog('responseJson-->', JSON.stringify(responseJson));
        ShowMessage(responseJson?.message);
        if (responseJson?.status) {
          RootNavigation?.goBack();
        }
        setLoading(false);
      })
      .catch(error => {
        ShowMessage(JSON.stringify(error));
        printLog('responseJson Error', JSON.stringify(error));
        setLoading(false);
      });
  };

  //

  const updateBusiness = async () => {
    setLoading(true);
    let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
    printLog(JSON.stringify(selectedCategory?.id));
    var payload = new FormData();
    if (startDate != null) {
      payload.append('business_start_date', startDate);
    }
    if (endDate != null) {
      payload.append('business_end_date', endDate);
    }

    payload.append('business_id', bussinessItem?.id);
    payload.append('category_id', catId);
    payload.append('business_type', business_type);
    payload.append('firm', firm);
    {
      owner1 != null && payload.append('owner_name_1', owner1);
    }
    {
      owner2 != null && payload.append('owner_name_2', owner2);
    }
    {
      owner3 != null && payload.append('owner_name_3', owner3);
    }
    {
      owner4 != null && payload.append('owner_name_4', owner4);
    }
    payload.append('address', address);
    payload.append('products', product);
    payload.append('country_code', code);
    payload.append('business_phone', mobile);
    payload.append('business_email', email);
    payload.append('website', website);
    payload.append('city', selectedCity);
    payload.append('from_time', startTime);
    payload.append('to_time', endTime);

    payload.append('business_hourse', JSON.stringify(week));

    if (visiting?.uri != undefined)
      payload.append('visting_card_photo', {
        uri:
          Platform.OS === 'android'
            ? visiting?.uri
            : visiting?.uri.replace('file://', ''),
        name: visiting?.fileName,
        type: visiting?.type,
      });
    printLog('PARAMS', JSON.stringify(payload));

    fetch(Api.POST_UPDATE_BUSINESS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization:
          'Bearer ' +
          (token?.token == undefined ? JSON.parse(token)?.token : token?.token),
      },
      body: payload,
    })
      .then(response => response.json())
      .then(responseJson => {
        // return responseJson
        printLog('responseJson', JSON.stringify(responseJson));
        ShowMessage(responseJson?.message);
        if (responseJson?.status) {
          RootNavigation?.goBack();
        }
        setLoading(false);
      })
      .catch(error => {
        ShowMessage(JSON.stringify(error));
        printLog('responseJson Error', JSON.stringify(error));
        setLoading(false);
      });
  };

  const getMyImage = first => {
    ImagePicker.launchImageLibrary(
      {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      response => {
        // printLog('Respuesta =', JSON.stringify(response?.assets[0]));
        if (response.didCancel) {
          printLog('response : ', 'didCancel');
        } else if (response.error) {
          printLog('Error : ', error);
        } else {
          // setVisiting(response?.assets[0]);
          if (first == 1) {
            setVisiting(response?.assets[0]);
          } else {
            setVisitingOne(response?.assets[0]);
          }
        }
      },
    );
  };

  // useEffect(() => {
  //   getString('village', response => {
  //     setAlLCities(response);
  //   });
  // }, [allCities, setAlLCities]);

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,
          //   paddingBottom: safeAreaBottomHeight(),
        },
      ]}>
      {/* <AppDrawerHeader
        title={bussinessItem != undefined ? 'Edit Business' : 'Add Business'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar
          text={
            bussinessItem != undefined
              ? 'EDIT BUSINESS'
              : 'ADD BUSINESS DETAILS'
          }
        />
        <View style={{flex: 1}}>
          <AppButton
            text={'Mobile Number : 9999999999'}
            buttonStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 15,
              borderRadius: 20,
              height: 40,
              marginBottom: 15,
            }}
          />

          {/* <EditBusiness /> */}

          {/* <ScrollView
          nestedScrollEnabled
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: AppColors.backgroundSecondColor,
            width: '100%',
            borderRadius: 10,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}> */}
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            extraScrollHeight={40}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              // flex: 1,
              paddingBottom: Platform.OS == 'android' && -270,
            }}
            showsVerticalScrollIndicator={false}>
            {/* <View
              style={{
                marginTop: '5%',
                width: '100%',
                alignSelf: 'center',
                backgroundColor: AppColors.backgroundColor,
                paddingHorizontal: 15,
                borderRadius: 10,
                flex: 1,
                backgroundColor: 'white',
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
              }}> */}
            <View
              style={{
                marginVertical: '5%',
                width: '90%',
                alignSelf: 'center',
                backgroundColor: AppColors.backgroundColor,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
                backgroundColor: 'white',
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
              <HorizontalSelection
                label={`Category`}
                placeholder={`Select Category`}
                data={categories == null ? [] : categories}
                value={selectedCategory}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setCategory(item?.name);
                  setCatId(item?.id);
                }}
              />
              <HorizontalTextInput
                label={`Firm`}
                onChangeText={setFirm}
                defaultText={firm}
              />

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => setBusiness_type('Own')}>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                      fontSize: 12,
                      alignItems: 'center',
                      textAlignVertical: 'center',
                    }}>
                    Own Business:
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      // backgroundColor: '#0C65F7',
                      marginHorizontal: 10,
                      borderColor: '#AFCCFC',
                      borderWidth: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {business_type == 'Own' && (
                      <View
                        style={{
                          height: 9,
                          width: 9,
                          borderRadius: 15,
                          backgroundColor: '#0C65F7',
                          opacity: 1,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 15,
                  }}
                  onPress={() => setBusiness_type('partnership')}>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                      fontSize: 12,
                      alignItems: 'center',
                      textAlignVertical: 'center',
                    }}>
                    Partnership Business:
                  </Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      // backgroundColor: '#0C65F7',
                      marginHorizontal: 10,
                      borderColor: '#AFCCFC',
                      borderWidth: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {business_type == 'partnership' && (
                      <View
                        style={{
                          height: 9,
                          width: 9,
                          borderRadius: 15,
                          backgroundColor: '#0C65F7',
                          opacity: 1,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              <HorizontalTextInput
                label={`Owner Name 1`}
                onChangeText={setOwner1}
                defaultText={owner1}
              />
              <HorizontalTextInput
                label={`Owner Name 2`}
                onChangeText={setOwner2}
                defaultText={owner2}
              />
              <HorizontalTextInput
                label={`Owner Name 3`}
                onChangeText={setOwner3}
                defaultText={owner3}
              />
              <HorizontalTextInput
                label={`Owner Name 4`}
                onChangeText={setOwner4}
                defaultText={owner4}
              />

              <HorizontalSelection
                label={`Village`}
                placeholder={`Select Village`}
                data={allCities == null ? [] : allCities}
                value={selectedCity}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setSelectedCity(item?.name);
                  setCityId(item?.id);
                }}
              />

              {/* <HorizontalTextInput
                label={`Address`}
                onChangeText={setAddress}
                defaultText={address}
              /> */}
              <BoxTextInput
                label={`Address`}
                onChangeText={setAddress}
                defaultText={address}
              />

              {/* <HorizontalTextInput
                label={`Description :`}
                onChangeText={setDescription}
                defaultText={Description}
              /> */}

              <BoxTextInput
                label={`Description`}
                onChangeText={setProduct}
                defaultText={product}
              />
              {/* <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '49%'}}>
                <HorizontalTextInput
                  label={`Time  From`}
                  defaultText={''}
                  onChangeText={''}
                  styles={{marginTop: 0}}
                />
              </View>
              <View style={{width: '49%'}}>
                <HorizontalTextInput
                  label={`Time  To`}
                  defaultText={''}
                  onChangeText={''}
                  styles={{marginTop: 0}}
                />
              </View>
            </View> */}

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <HorizontalSelection
                    label={`Time  From`}
                    placeholder={`Select Time`}
                    data={staticArray.timeList}
                    value={startTime}
                    onItemSelect={item => {
                      printLog(JSON.stringify(item?.item));
                      setStart(item?.name);
                    }}
                  />
                </View>

                <View style={{flex: 1, marginStart: 10}}>
                  <HorizontalSelection
                    label={`To`}
                    placeholder={`Select Time`}
                    data={staticArray.timeList}
                    value={endTime}
                    onItemSelect={item => {
                      printLog(JSON.stringify(item?.item));
                      setClose(item?.name);
                    }}
                  />
                </View>
              </View>

              {/* <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  <DaySelection text={'Monday'} />
                  <DaySelection text={'Tuseday'} />
                  <DaySelection text={'Wednesday'} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',

                    marginTop: 20,
                  }}>
                  <DaySelection text={'Thursday'} />
                  <DaySelection text={'Friday'} />
                  <DaySelection text={'Saturday'} />
                </View>

                <View style={{width: '100%', marginTop: 20}}>
                  <DaySelection text={'Sunday'} />
                </View> */}

              {/* <HorizontalDetailInput
                  label={`Products`}
                  ChangeText={setProduct}
                  value={product}
                /> */}

              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={week}
                  numColumns={3}
                  renderItem={({item, index}) => (
                    <CheckBoxCell
                      item={item}
                      index={index}
                      onPress={() => {
                        var temp = [...week];
                        temp[index] = {
                          ...item,
                          status: !item?.status,
                        };
                        setWeek(temp);
                      }}
                    />
                  )}
                />
              </View>

              <MyMobileNumber
                // placeholder={mobile}
                type={'numeric'}
                label={`Mobile No`}
                countryCode={code}
                phone={mobile}
                defaultText={mobile}
                setCountryCode={item => {
                  setCode(item?.name);
                }}
                onChangeText={setMobile}
              />

              <HorizontalTextInput
                label={`Email`}
                onChangeText={setEmail}
                type="email-address"
                defaultText={email}
              />

              <DateSelection
                text={'Bussiness Start Date:'}
                title={'Select Bussiness Start Date'}
                placeholder={
                  startDate == '' || startDate == null
                    ? 'YYYY-MM-DD'
                    : startDate
                }
                onChangeDob={i => setStartDate(moment(i).format('YYYY-MM-DD'))}
              />

              <DateSelection
                text={'Bussiness End Date:'}
                title={'Select Bussiness End Date'}
                placeholder={
                  endDate == '' || endDate == null ? 'YYYY-MM-DD' : endDate
                }
                onChangeDob={i => setEndDate(moment(i).format('YYYY-MM-DD'))}
              />
              {/* <HorizontalTextInput
              label={`Bussiness Start Date`}
              onChangeText={setWebsite}
              defaultText={website}
            /> */}
              {/* <HorizontalTextInput
              label={`Bussiness End Date:`}
              onChangeText={setWebsite}
              defaultText={website}
            /> */}
              <HorizontalTextInput
                label={`Website`}
                onChangeText={setWebsite}
                defaultText={website}
              />

              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                    }}>
                    Visiting Card :{' '}
                  </Text>
                  <AppButton
                    buttonPress={() => getMyImage(visiting == '' ? 1 : 2)}
                    text={'Browse'}
                    textStyle={{marginLeft: 0, fontSize: 12}}
                    buttonStyle={{
                      width: 80,
                      height: 25,
                      backgroundColor:
                        visiting == ''
                          ? '#9A9A9A'
                          : AppColors.BackgroundSecondColor,
                      borderRadius: 30,
                      marginLeft: 15,
                    }}
                  />
                </View>

                {/* <View style={{flexDirection: 'row', paddingVertical: 10}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                    }}>
                    Visiting Card :{' '}
                  </Text>
                  <AppButton
                    buttonPress={() => getMyImage(false)}
                    text={'Browse'}
                    textStyle={{marginLeft: 0, fontSize: 12}}
                    buttonStyle={{
                      width: 80,
                      height: 25,
                      backgroundColor:
                        visitingOne == ''
                          ? '#9A9A9A'
                          : AppColors.BackgroundSecondColor,
                      borderRadius: 30,
                      marginLeft: 15,
                    }}
                  />
                </View> */}

                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    paddingTop: 20,
                  }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '48%',
                      height: '100%',
                    }}
                    onPress={() => (visiting != '' ? getMyImage(1) : null)}>
                    <Image
                      style={{width: '100%', height: 50, borderRadius: 5}}
                      source={
                        visiting == ''
                          ? require('../../../assets/images/visiting_card.png')
                          : {
                              uri:
                                visiting?.uri == undefined
                                  ? visiting
                                  : visiting?.uri,
                            }
                      }
                    />
                    <Image
                      style={{position: 'absolute', right: 5, top: 5}}
                      source={require('../../../assets/images/cancel_icon.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '48%',
                      height: '100%',
                    }}
                    onPress={() => (visitingOne != '' ? getMyImage(2) : null)}>
                    <Image
                      style={{
                        marginHorizontal: 5,
                        borderRadius: 5,
                        width: '100%',
                        height: 50,
                      }}
                      source={
                        visitingOne == ''
                          ? require('../../../assets/images/visiting_card.png')
                          : {uri: visitingOne?.uri}
                      }
                    />
                    <Image
                      style={{position: 'absolute', right: 0, top: 5}}
                      source={require('../../../assets/images/cancel_icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View
              style={{
                flexDirection: 'row',
                
                alignItems: 'center',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 35,
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                      fontSize: 13,
                      textAlignVertical: 'center',
                    }}>
                    Visiting Card or Photo:
                  </Text>
                  <ButtonCell
                    title={`Browse`}
                    styles={{
                      marginHorizontal: 10,
                      width: '30%',
                      paddingHorizontal: 5,
                      backgroundColor:
                        visiting == '' ? '#BFBFBF' : AppColors.success,
                    }}
                    onClick={() => {
                      getMyImage();
                    }}
                  />

                
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    height: 35,
                    alignItems: 'center',
                    marginTop: 5,
                    backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      fontFamily: AppFonts.regular,
                      color: AppColors.black,
                      fontSize: 13,
                      textAlignVertical: 'center',
                    }}>
                    Visiting Card or Photo :
                  </Text>
                  <ButtonCell
                    title={`Browse`}
                    styles={{
                      marginHorizontal: 10,
                      width: '30%',
                      paddingHorizontal: 5,
                      backgroundColor:
                        visiting == '' ? '#BFBFBF' : AppColors.success,
                    }}
                    onClick={() => {
                      getMyImage();
                    }}
                  />

                
                </View>
            
              </View>

              {visiting != '' ? (
                <></>
              ) : (
                <View
                  style={{
                    width: 50,
                    height: 100,

                    borderRadius: 5,

                    // backgroundColor: AppColors?.Red,
                  }}>
                  <Image
                    source={
                      typeof visiting == 'object'
                        ? visiting
                        : require('../../../assets/images/visiting_card.png')
                      // {uri: bussinessItem?.visting_card_photo}
                    }
                    style={{
                      width: 70,
                      height: 100,
                      resizeMode: 'stretch',
                      borderRadius: 30,
                    }}
                  />
                </View>
              )}

              {visiting != '' ? (
                <></>
              ) : (
                <View
                  style={{
                    width: 50,
                    height: 100,

                    borderRadius: 5,

                    // backgroundColor: AppColors?.Red,
                  }}>
                  <Image
                    source={
                      typeof visiting == 'object'
                        ? visiting
                        : require('../../../assets/images/visiting_card.png')
                      // {uri: bussinessItem?.visting_card_photo}
                    }
                    style={{
                      width: 70,
                      height: 100,
                      resizeMode: 'stretch',
                      borderRadius: 30,
                    }}
                  />
                </View>
              )}
            </View> */}

              {loading ? (
                <LoaderView
                  color={AppColors.BackgroundSecondColor}
                  style={{width: '50%', height: 35, marginVertical: 20}}
                />
              ) : (
                // <></>
                <AppButton
                  width={'50%'}
                  text={bussinessItem != undefined ? 'Update' : `Submit`}
                  buttonStyle={{
                    marginVertical: 20,
                    alignSelf: 'center',
                    borderRadius: 20,
                    width: '50%',
                    height: 40,
                  }}
                  isLoading={loading}
                  buttonPress={() => {
                    if (selectedCategory == null) {
                      showMessage('Please select category');
                    } else if (firm == undefined || firm?.trim() == '') {
                      ShowMessage('Please enter firm name');
                    } else if (owner1 == undefined || owner1?.trim() == '') {
                      ShowMessage('Please enter owner name');
                    } else if (address == undefined || address?.trim() == '') {
                      ShowMessage('Please enter address');
                    } else if (selectedCity == null) {
                      ShowMessage('Please select villiage');
                    } else if (visiting == undefined) {
                      ShowMessage('Please upload visiting card');
                    } else {
                      bussinessItem == undefined
                        ? addNewBusiness()
                        : updateBusiness();
                    }
                  }}
                />
              )}
              {/* </View> */}
            </View>
            <BorderView
              text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
              backgroundColor={AppColors.BackgroundSecondColor}
              borderStyle={{position: ''}}
            />
          </KeyboardAwareScrollView>
        </View>

        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default AddBusinessScreen;

const CheckBoxCell = props => {
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onPress}
      style={{
        flexDirection: 'row',
        width: '33.33%',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text
        numberOfLines={1}
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          flex: 1,
          color: AppColors.black,
        }}>
        {props?.item?.day} :{' '}
      </Text>

      <View
        activeOpacity={1}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          height: 15,
          width: 15,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 11,
            fontFamily: AppFonts.semiBold,
          }}>
          {props?.item?.status || props?.item?.status == '1' ? '✓' : ''}
        </Text>
      </View>

      {/* <Image
        source={
          props?.item?.status || props?.item?.status == '1'
            ? AppImages.ICON_CHECKED_BOX
            : AppImages.ICON_UNCHECK
        }
        style={{height: 20, width: 20, marginRight: 10}}
      /> */}
    </TouchableOpacity>
  );
};

{
  /* <View
                  style={{
                    width: '100%',
                    resizeMode: 'center',
                    height: 160,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor: AppColors?.backgroundSecondColor,
                  }}>
                  {visiting != '' ? (
                    <></>
                  ) : (
                    <View
                      style={{
                        width: '30%',

                        // height: 150,
                        borderRadius: 5,
                        // marginVertical: 10,
                        // backgroundColor: AppColors?.Orange,
                        paddingRight: 15,
                      }}>
                      <Image
                        source={
                          typeof visiting == 'object'
                            ? visiting
                            : require('../../../assets/images/visiting_card.png')
                          // {uri: bussinessItem?.visting_card_photo}
                        }
                        style={{
                          width: '100%',
                          // height: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                  )}
                </View> */
}
