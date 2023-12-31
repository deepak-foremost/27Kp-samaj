import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import AppButton from '../../components/AppButton';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
  BoxTextInput,
  DateSelection,
  HorizontalSelection,
  HorizontalTextInput,
  MyMobileNumber,
} from '../../components/SimpleTextInput';
// import {getCities, getRelation} from '../../../../networking/CallApi';
import {AppColors} from '../../utils/AppColors';
import {getAge, printLog, ShowMessage} from '../../utils/AppConstValue';
import {AppConstValue} from '../../utils/AppConstValue';
import {AppFonts} from '../../utils/AppFonts';
import {AppImages} from '../../utils/AppImages';
import {safeAreaBottomHeight} from '../../utils/AppScreens';
import {AppStyles} from '../../utils/AppStyles';
import * as RootNavigation from '../../utils/RootNavigation';
import {staticArray} from '../../utils/staticArray';
import * as ImagePicker from 'react-native-image-picker';
import moment from 'moment';
// import {Apis} from '../../../../networking/Apis';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst, getString} from '../../utils/AsyncStorageHelper';
import DatePicker from 'react-native-date-picker';
import ScreenToolbar from '../../components/ScreenToolbar';
// import LoaderView from '../../../../utils/LoaderView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BorderView from '../../components/BorderView';
import LoaderView from '../../utils/LoaderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, getRelation} from '../../networking/CallApi';
import {Api} from '../../networking/Api';
import {showMessage} from 'react-native-flash-message';

const AddMemberScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var memberItem = props?.route?.params?.item;

  const [loading, setLoading] = useState(false);

  const [cities, setCities] = useState([]);
  const [relationships, setRelations] = useState([]);

  const [city, setCity] = useState(null);
  const [familyId, setFamilyId] = useState(user?.family_id);
  const [name, setName] = useState('');
  const [familyMember, setFamilyMember] = useState('');
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState('');
  const [weigth, setWeight] = useState('');
  const [blood, setBlood] = useState('');
  const [relation, setRelation] = useState(null);
  const [status, setStatus] = useState(null);
  const [study, setStudy] = useState('');
  const [business, setBusiness] = useState('');
  const [course, setCourse] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [country_code, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [mosal, setMosal] = useState('');
  const [hobby, setHobby] = useState('');
  const [sasru, setsasru] = useState('');
  const [email, setEmail] = useState('');
  const [jeevan_sahay_nubmer, Setjeevan_sahay_nubmer] = useState('');
  const [boomi_nubmer, setBoomi_nubmer] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState(null);
  const [dob, setDOB] = useState(null);
  const [openDatePicker, setDatePicker] = useState(false);
  var payload = new FormData();
  const [user, setUser] = useState(null);
  const [visiting, setVisiting] = useState('');
  const [visitingOne, setVisitingOne] = useState('');
  const [VisitingTwo, setVisitingTwo] = useState('');
  const [foriegn_country_code, setForeignCountryCode] = useState('+91');
  const [foriegn_number, setForeignNumber] = useState('');
  const [foreign_country_name, setForeignCountry] = useState('');

  useEffect(() => {
    getString(AsyncStorageConst.user, res => {
      setUser(res);
      printLog('USER', JSON.stringify(res));
      setFamilyId(res?.family_id);
    });
    setBlood(memberItem?.blood_group);
    // printLog('FamilyMemberDetailScreen memberItem', JSON.stringify(memberItem));
    getCities(
      response => {
        printLog('FamilyMemberDetailScreen', JSON.stringify(response));
        if (response?.status) {
          var temp = [];
          for (let i = 0; i < response?.data?.length; i++) {
            temp.push({
              name: response?.data[i]?.name,
              id: response?.data[i]?.id,
            });
          }
          setCities(temp);
        }
      },
      error => {
        printLog('FamilyMemberDetailScreen', JSON.stringify(error));
      },
    );

    getRelation(
      response => {
        var temp_list = [];
        printLog('RelationsShips', JSON.stringify(response));
        if (response?.status) {
          for (let i = 0; i < response?.data?.length; i++) {
            temp_list.push({
              name: response?.data[i]?.name,
              label: response?.data[i]?.name,
              value: response?.data[i]?.name,
            });
          }
          setRelations(temp_list);
        }
      },
      error => {},
    );
  }, []);

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
            setImage(response?.assets[0]);
          } else if (first == 2) {
            setVisitingOne(response?.assets[0]);
          } else {
            setVisitingTwo(response?.assets[0]);
          }
          // if (visiting != '') {

          //   setVisiting('')
          // } else {

          // }
        }
      },
    );
  };

  useEffect(() => {
    // console.log('detail', memberItem);
    if (memberItem != undefined && memberItem != null) {
      console.log('phone', memberItem?.phone);
      setCity(memberItem?.city);
      setFamilyMember(memberItem?.name);
      setGender(memberItem?.gender);
      setHeight(memberItem?.height);
      setWeight(memberItem?.weight);
      setAge(JSON.stringify(memberItem?.age));
      setStudy(memberItem?.study);
      setBusiness(memberItem?.business);
      setBusinessAddress(memberItem?.business_address);
      setHomeAddress(memberItem?.current_address);
      setCountryCode(memberItem?.country_code);
      setPhone(memberItem?.phone);
      setMosal(memberItem?.mosal);
      setHobby(memberItem?.shakh);
      setEmail(memberItem?.email);
      setImage(memberItem?.image);
      setBlood(memberItem?.blood_group);
      setDOB(new Date(memberItem?.dob));
      setRelation(memberItem?.family_main_member_with_relation);
      setStatus(memberItem?.marital_status);
      setForeignCountry(memberItem?.foreign_country_name);
      Setjeevan_sahay_nubmer(memberItem?.jeevan_sahay_nubmer);
      setsasru(memberItem?.sasru);
      setBoomi_nubmer(memberItem?.boomi_nubmer);
    }
  }, []);

  const [isAdding, setAdding] = useState(false);

  // useEffect(() => {
  //   getString('village', response => {
  //     setCities(response);
  //   });
  // }, [cities, setCities]);

  const addMembers = async () => {
    let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);

    if (memberItem != undefined) {
      payload.append('id', memberItem?.id);
    }
    payload.append('name', familyMember);
    payload.append('email', email);
    payload.append('gender', gender);
    payload.append('city', city);
    payload.append('height', height);
    payload.append('weight', weigth);
    payload.append('age', age);
    payload.append('blood_group', blood);
    payload.append('family_main_member_with_relation', relation);
    payload.append('marital_status', status);
    payload.append('study', study);
    payload.append('business', business);
    payload.append('business_address', businessAddress);
    payload.append('current_address', homeAddress);
    payload.append('mosal', mosal);
    payload.append('shakh', hobby);
    payload.append('country_code', country_code);
    payload.append('phone', phone);
    payload.append('foreign_country_name', foreign_country_name);
    payload.append('jeevan_sahay_nubmer', jeevan_sahay_nubmer);
    payload.append('sasru', sasru);
    payload.append('boomi_nubmer', boomi_nubmer);
    payload.append('dob', moment(dob).format('YYYY-MM-DD'));
    if (image?.uri != undefined) {
      payload.append('image', {
        uri:
          Platform.OS === 'android'
            ? image?.uri
            : image?.uri.replace('file://', ''),
        name: image?.fileName,
        type: image?.type,
      });
    }
    printLog(
      'PARAMS',
      JSON.stringify(payload) +
        ' ' +
        (token?.token == undefined ? JSON.parse(token)?.token : token?.token),
    );
    setLoading(true);
    fetch(
      memberItem == undefined ? Api.POST_ADD_MEMBER : Api.POST_UPDATE_MEMBER,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization:
            'Bearer ' +
            (token?.token == undefined
              ? JSON.parse(token)?.token
              : token?.token),
        },
        body: payload,
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        // return responseJson
        ShowMessage(responseJson?.message);
        printLog('responseJson', JSON.stringify(responseJson));
        if (responseJson?.status) {
          RootNavigation?.goBack();
        }
        setLoading(false);
      })
      .catch(error => {
        printLog('responseJson Error', JSON.stringify(error));
        ShowMessage(error);
        setLoading(false);
      });
  };
  // React.useLayoutEffect(() => {

  //   props.navigation.setOptions({
  //     headerShown: true,
  //     headerTitleAlign: 'center',
  //     headerStyle: {
  //       height: 60,
  //       borderBottomColor: '#D9D9D9',
  //       borderBottomWidth: 0,
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //     },
  //     headerTitle: () => <View style={{alignItems: 'center'}}></View>,
  //     headerLeft: () => (
  //       <View style={{paddingStart: 20}}>{/* <BackButton /> */}</View>
  //     ),
  //   });
  // }
  // , [props.navigation]);

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
        title={
          memberItem == undefined ? 'Add Family Member' : 'Edit Family Member'
        }
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar
          text={
            memberItem == undefined ? 'Add Family Member' : 'Edit Family Member'
          }
        />
        <View style={{flex: 1}}>
          <AppButton
            text={'Mobile Number : 9999999999'}
            textStyle={{marginHorizontal: 5}}
            buttonStyle={{
              width: '85%',
              alignSelf: 'center',
              marginTop: 15,
              borderRadius: 20,
              height: 40,
            }}
          />

          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            extraScrollHeight={40}>
            {/* Form */}
            <View
              style={{
                marginVertical: '5%',
                width: '90%',
                alignSelf: 'center',
                backgroundColor: AppColors.backgroundColor,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
                backgroundColor: '#fff',
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
                label={`નામ:`}
                defaultText={familyMember}
                onChangeText={setFamilyMember}
              />

              <HorizontalSelection
                label={`લિંગ`}
                placeholder={`લિંગ`}
                data={[{name: 'Male'}, {name: 'Female'}]}
                value={gender}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setGender(item?.name);
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '49%'}}>
                  <HorizontalSelection
                    label={`ગામ`}
                    placeholder={`ગામ`}
                    data={cities == null ? [] : cities}
                    value={city}
                    onItemSelect={item => {
                      // printLog(JSON.stringify(item?.item));
                      setCity(item?.name);
                    }}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`શાખ `}
                    defaultText={hobby}
                    onChangeText={setHobby}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`મોસાળ`}
                    defaultText={mosal}
                    onChangeText={setMosal}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`સાસરું`}
                    defaultText={sasru}
                    onChangeText={setsasru}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '49%'}}>
                  <DateSelection
                    text={'જન્મ તારીખ:'}
                    title={'જન્મ તારીખ'}
                    onChangeDob={i => setDOB(i)}
                    value={dob}
                    placeholder={
                      dob == null
                        ? 'DD/MM/YYYY'
                        : moment(dob).format('YYYY-MM-DD')
                    }
                  />
                </View>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`ઉંમર`}
                    placeholder={``}
                    defaultText={age}
                    type="phone-pad"
                    onChangeText={i => setAge(i)}
                  />
                  {/* <Text
                    style={{
                      fontFamily: AppFonts.regular,
                      color:
                        dob == null ? AppColors?.lineColor : AppColors.black,
                      fontSize: 13,
                    }}>
                    Age :{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: AppFonts.regular,
                      color:
                        dob == null ? AppColors?.lineColor : AppColors.black,
                      fontSize: 13,
                    }}>
                    {dob == null ? '' : getAge(dob)}
                  </Text> */}
                </View>
              </View>

              <HorizontalSelection
                label={`બ્લડ ગ્રુપ`}
                defaultText={blood}
                placeholder={`બ્લડ ગ્રુપ`}
                data={[
                  {name: 'A+'},
                  {name: 'A-'},
                  {name: 'B+'},
                  {name: 'B-'},
                  {name: 'O+'},
                  {name: 'O-'},
                  {name: 'AB+'},
                  {name: 'AB-'},
                ]}
                value={blood}
                onItemSelect={item => {
                  printLog('blood', item?.name);
                  setBlood(item?.name);
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`ઊંચાઈ`}
                    placeholder={`ft.inch`}
                    defaultText={height}
                    type="phone-pad"
                    onChangeText={setHeight}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`વજન`}
                    placeholder={`KG`}
                    type="phone-pad"
                    defaultText={weigth}
                    onChangeText={setWeight}
                  />
                </View>
              </View>

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
                  fontSize: 13,
                  textAlignVertical: 'center',
                }}>
                જન્મ તારીખ :
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
                    color: dob == null ? AppColors?.lineColor : AppColors.black,
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
            </View> */}

              <HorizontalSelection
                label={`કુટુંબ ના વડા સાથે નો સંબંધ`}
                defaultText={``}
                placeholder={`કુટુંબ ના વડા સાથે નો સંબંધ`}
                data={staticArray.relationWithHead}
                value={relation}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setRelation(item?.name);
                }}
              />

              <HorizontalSelection
                label={`લગ્ન સ્થિતિ`}
                placeholder={`લગ્ન સ્થિતિ`}
                defaultText={``}
                data={[
                  {name: 'Single'},
                  {name: 'Married'},
                  {name: 'Widowed'},
                  {name: 'Divorced'},
                  {name: 'Separated'},
                ]}
                value={status}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setStatus(item?.name);
                }}
              />
              <HorizontalSelection
                label={`અભ્યાસ:`}
                defaultText={`અભ્યાસ:`}
                placeholder={`અભ્યાસ`}
                data={staticArray.studies}
                value={study}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setStudy(item?.name);
                }}
              />

              <BoxTextInput
                styles={{flexDirection: 'coloum', minHeight: 120}}
                textStyle={{marginBottom: 10}}
                label={`હાલ ના રહેઠાણ નુ સરનામું`}
                defaultText={homeAddress}
                onChangeText={setHomeAddress}
              />

              <HorizontalTextInput
                label={`વ્યવસાય`}
                defaultText={business}
                onChangeText={setBusiness}
              />
              <BoxTextInput
                styles={{flexDirection: 'coloum'}}
                textStyle={{marginBottom: 10}}
                label={`વ્યવસાયનું સરનામું`}
                defaultText={businessAddress}
                onChangeText={setBusinessAddress}
              />

              <MyMobileNumber
                label={`મોબાઇલ નંબર`}
                defaultText={phone}
                countryCode={country_code}
                phone={phone}
                type={'numeric'}
                setCountryCode={item => {
                  setCountryCode(item?.name);
                }}
                onChangeText={setPhone}
              />
              <HorizontalTextInput
                label={`Email ID`}
                defaultText={email}
                type="email-address"
                onChangeText={setEmail}
              />
              <HorizontalSelection
                label={`ફોરેન Country Name`}
                placeholder={`ફોરેન Country Name`}
                defaultText={``}
                data={staticArray.foriegnCountry}
                value={foreign_country_name}
                onItemSelect={item => {
                  // printLog(JSON.stringify(item?.item));
                  setForeignCountry(item?.name);
                }}
              />
              <MyMobileNumber
                label={`ફોરેન Number : `}
                countryCode={foriegn_country_code}
                phone={foriegn_number}
                type={'numeric'}
                setCountryCode={item => {
                  setForeignCountryCode(item?.name);
                }}
                onChangeText={setForeignNumber}
              />
              <HorizontalTextInput
                label={`ભુમિ સભાસદ નં:`}
                defaultText={boomi_nubmer}
                type="numeric"
                onChangeText={setBoomi_nubmer}
              />
              <HorizontalTextInput
                label={`જીવન સહાય સભાસદ નં:`}
                defaultText={jeevan_sahay_nubmer}
                type="numeric"
                onChangeText={Setjeevan_sahay_nubmer}
              />

              {/* <HorizontalTextInput
              label={`Family ID`}
              defaultText={familyId}
              onChangeText={setFamilyId}
            /> */}
              {/* <HorizontalTextInput
                label={`કુટુંબ ના વ્યકિતનું નામ`}
                defaultText={familyMember}
                onChangeText={setFamilyMember}
              /> */}

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
              {/* COURSE NAME
              <HorizontalTextInput
                label={`Course Name`}
                defaultText={course}
                onChangeText={setCourse}
              /> */}

              {/* <HorizontalTextInput
              label={`ફોરેન Country Name`}
              defaultText={homeAddress}
              onChangeText={setHomeAddress}
            /> */}

              {/* <View
              style={{
                flexDirection: 'row',
                height: 35,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.regular,
                  color: AppColors.black,
                  fontSize: 13,
                  marginRight: 10,
                  textAlignVertical: 'center',
                }}>
                Photo :
              </Text>

              <ButtonCell
                title={`Browse`}
                onClick={() => {
                  getMyImage();
                }}
              />

              {image == '' ? (
                <></>
              ) : (
                <View
                  style={{
                    width: '100%',
                    resizeMode: 'center',
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor: AppColors?.backgroundSecondColor,
                  }}>
                  <Image
                    source={
                      typeof image == 'object'
                        ? image
                        : {uri: memberItem?.image}
                    }
                    style={{
                      height: 160,
                      width: '100%',
                      resizeMode: 'center',
                    }}
                  />
                </View>
              )}
            </View> */}

              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: AppFonts.semiBold,
                      color: AppColors.black,
                    }}>
                    ફોટો :{' '}
                  </Text>
                  <AppButton
                    buttonPress={() => {
                      if (image == '') {
                        getMyImage(1);
                      } else if (visitingOne == '') {
                        getMyImage(2);
                      } else {
                        getMyImage(3);
                      }
                    }}
                    text={'Browse'}
                    textStyle={{marginLeft: 0, fontSize: 12}}
                    buttonStyle={{
                      width: 100,
                      height: 25,
                      backgroundColor:
                        image == ''
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
                    ફોટો :{' '}
                  </Text>
                  <AppButton
                    buttonPress={() => getMyImage(false)}
                    text={'Browse'}
                    textStyle={{marginLeft: 0}}
                    buttonStyle={{
                      width: 100,
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
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5,
                    height: 90,
                    paddingTop: 15,
                  }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '30%',
                      height: '100%',
                    }}
                    onPress={() => (image != '' ? getMyImage(1) : null)}>
                    <Image
                      style={{width: '100%', height: 80, borderRadius: 5}}
                      source={
                        image == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {
                              uri: image?.uri == undefined ? image : image?.uri,
                            }
                      }
                    />
                    <Image
                      style={{position: 'absolute', right: 5, top: 5}}
                      source={require('../../assets/images/cancel_icon.png')}
                    />
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={{width: '30%'}}
                    onPress={() => getMyImage(1)}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'contain',
                        borderRadius: 10,
                      }}
                      source={
                        image == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {
                              uri: image?.uri == undefined ? image : image?.uri,
                            }
                      }>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          height: 24,
                          width: 24,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          right: 0,
                        }}
                        onPress={() => getMyImage(1)}>
                        <Image
                          source={require('../../assets/images/cancel_icon.png')}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '30%',
                      height: '100%',
                    }}
                    onPress={() => (visitingOne != '' ? getMyImage(2) : null)}>
                    <Image
                      style={{width: '100%', height: 80, borderRadius: 5}}
                      source={
                        visitingOne == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {
                              uri:
                                visitingOne?.uri == undefined
                                  ? visitingOne
                                  : visitingOne?.uri,
                            }
                      }
                    />
                    <Image
                      style={{position: 'absolute', right: 5, top: 5}}
                      source={require('../../assets/images/cancel_icon.png')}
                    />
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={{width: '30%'}}
                    onPress={() => getMyImage(2)}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 5,
                        marginLeft: 5,
                        borderRadius: 10,
                      }}
                      source={
                        visitingOne == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {uri: visitingOne?.uri}
                      }>
                      <TouchableOpacity
                        style={{
                          height: 24,
                          width: 24,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          right: 0,
                        }}
                        onPress={() => getMyImage(2)}>
                        <Image
                          source={require('../../assets/images/cancel_icon.png')}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      width: '30%',
                      height: '100%',
                    }}
                    onPress={() => (VisitingTwo != '' ? getMyImage(3) : null)}>
                    <Image
                      style={{width: '100%', height: 80, borderRadius: 5}}
                      source={
                        VisitingTwo == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {
                              uri:
                                VisitingTwo?.uri == undefined
                                  ? VisitingTwo
                                  : VisitingTwo?.uri,
                            }
                      }
                    />
                    <Image
                      style={{position: 'absolute', right: 5, top: 5}}
                      source={require('../../assets/images/cancel_icon.png')}
                    />
                  </TouchableOpacity>

                  {/* <TouchableOpacity
                    style={{
                      width: '30%',
                      borderRadius: 20,
                    }}>
                    <ImageBackground
                      source={
                        VisitingTwo == ''
                          ? require('../../assets/images/visiting_card.png')
                          : {uri: VisitingTwo?.uri}
                      }
                      style={{width: '100%', height: '100%', borderRadius: 20}}>
                      <TouchableOpacity
                        style={{
                          height: 24,
                          width: 24,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          right: 0,
                        }}
                        onPress={() => getMyImage(3)}>
                        <Image
                          source={require('../../assets/images/cancel_icon.png')}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                   
                  </TouchableOpacity> */}
                </View>
              </View>

              {loading ? (
                <LoaderView
                  color={AppColors.BackgroundSecondColor}
                  style={{width: '50%', height: 35, marginVertical: 20}}
                />
              ) : (
                <AppButton
                  width={'50%'}
                  text={memberItem == undefined ? `Submit` : `Update`}
                  buttonStyle={{
                    width: '50%',
                    height: 40,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginVertical: 20,
                  }}
                  buttonPress={() => {
                    //   if (city == null) {
                    //     showMessage('Please Select City');
                    //   } else if (familyMember?.trim() == '') {
                    //     ShowMessage('Please enter name');
                    //   } else if (gender == null) {
                    //     ShowMessage('Please select gender');
                    //   } else if (dob == null) {
                    //     ShowMessage('Please select Date of Birth');
                    //   } else if (image == undefined || image == null) {
                    //     ShowMessage('Please selcet photo');
                    //   } else {
                    //     setAdding(true);
                    addMembers();
                    //   }
                  }}
                  // isLoading={loading}
                />
              )}
            </View>
            <BorderView
              text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
              backgroundColor={AppColors.BackgroundSecondColor}
              borderStyle={{position: ''}}
            />

            {/* Footer */}
          </KeyboardAwareScrollView>
        </View>

        {/* <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraScrollHeight={40}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{paddingBottom: 150}}>
          <ScrollView>
            
          </ScrollView>
        </KeyboardAwareScrollView> */}

        {/* <View style={{height:100}}>
          <BorderView text={'gv'}/>
        </View> */}
      </View>
    </View>
  );
};

export const AddBorder = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          height: 5,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          width: '10%',
        }}></View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: AppFonts.regular,
          color: '#78789D',
        }}>
        સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ
      </Text>
      <View
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          height: 5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          width: '10%',
        }}></View>
    </View>
  );
};

export default AddMemberScreen;

export const ButtonCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={() => props?.onClick()}
      style={{
        backgroundColor: '#9A9A9A',
        height: 22,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        ...props?.styles,
      }}>
      <Text
        style={{
          fontFamily: AppFonts.regular,
          fontSize: 11,
          paddingHorizontal: 10,
          color: AppColors.BackgroundColor,
        }}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};
