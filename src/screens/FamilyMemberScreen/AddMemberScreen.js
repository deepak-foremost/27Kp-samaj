import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native';
import AppButton from '../../components/AppButton';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
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
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
// import {Apis} from '../../../../networking/Apis';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst, getString} from '../../utils/AsyncStorageHelper';
import DatePicker from 'react-native-date-picker';
import ScreenToolbar from '../../components/ScreenToolbar';
// import LoaderView from '../../../../utils/LoaderView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddMemberScreen = props => {
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
  const [businessAddress, setBusinessAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [country_code, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [mosal, setMosal] = useState('');
  const [hobby, setHobby] = useState('');
  const [fatherinlaw, setFatherinLaw] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [age,setAge]=useState('');
  const [dob, setDOB] = useState(null);
  const [openDatePicker, setDatePicker] = useState(false);
  var payload = new FormData();
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     getString(AsyncStorageConst.user, res => {
  //       setUser(res);
  //       printLog('USER', JSON.stringify(res));
  //       setFamilyId(res?.family_id);
  //     });
  //     setBlood(memberItem?.blood_group);
  //     printLog('FamilyMemberDetailScreen memberItem', JSON.stringify(memberItem));
  //     getCities(
  //       response => {
  //         printLog('FamilyMemberDetailScreen', JSON.stringify(response));
  //         if (response?.status) {
  //           var temp = [];
  //           for (let i = 0; i < response?.data?.length; i++) {
  //             temp.push({
  //               name: response?.data[i]?.name,
  //               id: response?.data[i]?.id,
  //             });
  //           }
  //           setCities(temp);
  //         }
  //       },
  //       error => {
  //         printLog('FamilyMemberDetailScreen', JSON.stringify(error));
  //       },
  //     );

  //     getRelation(
  //       response => {
  //         var temp_list = [];
  //         printLog('RelationsShips', JSON.stringify(response));
  //         if (response?.status) {
  //           for (let i = 0; i < response?.data?.length; i++) {
  //             temp_list.push({
  //               name: response?.data[i]?.name,
  //               label: response?.data[i]?.name,
  //               value: response?.data[i]?.name,
  //             });
  //           }
  //           setRelations(temp_list);
  //         }
  //       },
  //       error => {},
  //     );
  //   }, []);

  //   const getMyImage = () => {
  //     ImagePicker.launchImageLibrary(
  //       {
  //         storageOptions: {
  //           skipBackup: true,
  //           path: 'images',
  //         },
  //         mediaType: 'photo',
  //         quality: 0.8,
  //       },

  //       response => {
  //         printLog('Respuesta =', JSON.stringify(response));
  //         if (response.didCancel) {
  //           printLog('response : ', 'didCancel');
  //         } else if (response.error) {
  //           printLog('Error : ', error);
  //         } else {
  //           setImage(response?.assets[0]);
  //         }
  //       },
  //     );
  //   };

  //   useEffect(() => {
  //     if (memberItem != undefined && memberItem != null) {
  //       setCity(memberItem?.city);
  //       setFamilyMember(memberItem?.name);
  //       setGender(memberItem?.gender);
  //       setHeight(memberItem?.height);
  //       setWeight(memberItem?.weight);
  //       setStudy(memberItem?.study);
  //       setBusiness(memberItem?.business);
  //       setBusinessAddress(memberItem?.business_address);
  //       setHomeAddress(memberItem?.current_address);
  //       setCountryCode(memberItem?.country_code);
  //       setPhone(memberItem?.phone);
  //       setMosal(memberItem?.mosal);
  //       setHobby(memberItem?.shakh);
  //       setEmail(memberItem?.email);
  //       setImage(memberItem?.image);
  //       setBlood(memberItem?.blood_group);
  //       setDOB(new Date(memberItem?.dob));
  //       setRelation(memberItem?.family_main_member_with_relation);
  //       setStatus(memberItem?.marital_status);
  //     }
  //   }, []);

  const [isAdding, setAdding] = useState(false);
  //   const addMembers = async () => {
  //     let token = await AsyncStorage.getItem(AsyncStorageConst.allDetails);

  //     if (memberItem != undefined) {
  //       payload.append('id', memberItem?.id);
  //     }

  //     payload.append('name', familyMember);
  //     payload.append('email', email);
  //     payload.append('gender', gender);
  //     payload.append('city', city);
  //     payload.append('height', height);
  //     payload.append('weight', weigth);
  //     payload.append('blood_group', blood);
  //     payload.append('family_main_member_with_relation', relation);
  //     payload.append('marital_status', status);
  //     payload.append('study', study);
  //     payload.append('business', business);
  //     payload.append('business_address', businessAddress);
  //     payload.append('current_address', homeAddress);
  //     payload.append('mosal', mosal);
  //     payload.append('shakh', hobby);
  //     payload.append('country_code', country_code);
  //     payload.append('phone', phone);
  //     payload.append('dob', moment(dob).format('YYYY-MM-DD'));
  //     if (image?.uri != undefined) {
  //       payload.append('image', {
  //         uri:
  //           Platform.OS === 'android'
  //             ? image?.uri
  //             : image?.uri.replace('file://', ''),
  //         name: image?.fileName,
  //         type: image?.type,
  //       });
  //     }
  //     printLog(
  //       'PARAMS',
  //       JSON.stringify(payload) +
  //         ' ' +
  //         (token?.token == undefined ? JSON.parse(token)?.token : token?.token),
  //     );
  //     setLoading(true);
  //     fetch(
  //       memberItem == undefined ? Apis.POST_ADD_MEMBER : Apis.POST_UPDATE_MEMBER,
  //       {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //           Authorization:
  //             'Bearer ' +
  //             (token?.token == undefined
  //               ? JSON.parse(token)?.token
  //               : token?.token),
  //         },
  //         body: payload,
  //       },
  //     )
  //       .then(response => response.json())
  //       .then(responseJson => {
  //         // return responseJson
  //         ShowMessage(responseJson?.message);
  //         printLog('responseJson', JSON.stringify(responseJson));
  //         if (responseJson?.status) {
  //           RootNavigation?.goBack();
  //         }
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         printLog('responseJson Error', JSON.stringify(error));
  //         ShowMessage(error);
  //         setLoading(false);
  //       });
  //   };

  return (
    <SafeAreaView
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,

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
        <ScreenToolbar text={ memberItem == undefined ? 'Add Family Member' : 'Edit Family Member'} />
        <AppButton
          text={'Mobile Number : 9999999999'}
          buttonStyle={{
            width: '60%',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 20,
            height: 40,
          }}
        />
        <ScrollView
          nestedScrollEnabled
          style={{
            flex: 1,
            backgroundColor: AppColors.backgroundSecondColor,
            width: '100%',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
       
            <KeyboardAwareScrollView
            enableOnAndroid={true}
            extraScrollHeight={10}
              style={{
                marginTop: '5%',
                width: '90%',
                alignSelf: 'center',
                backgroundColor: AppColors.backgroundColor,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
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
              }}>
              <HorizontalTextInput
               
                label={`નામ:`}
                defaultText={name}
                onChangeText={setName}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <HorizontalSelection
                    label={`ગામ`}
                    placeholder={`ગામ`}
                    data={cities == null ? [] : cities}
                    value={city}
                    onItemSelect={item => {
                      printLog(JSON.stringify(item?.item));
                      setCity(item?.name);
                    }}
                  />
                </View>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`સાસરું`}
                    defaultText={fatherinlaw}
                    onChangeText={setFatherinLaw}
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
                    label={`શાખ `}
                    defaultText={hobby}
                    onChangeText={setHobby}
                  />
                </View>
              </View>

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
                      color:
                        dob == null ? AppColors?.lineColor : AppColors.black,
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

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                  <HorizontalTextInput
                    label={`ઊંચાઈ`}
                    placeholder={`CM`}
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

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '49%'}}>
                <HorizontalTextInput
                    label={`ઉંમર`}
                    placeholder={``}
                    defaultText={age}
                    type="phone-pad"
                    onChangeText={setAge}
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
                <View style={{width: '49%'}}>
                <HorizontalSelection
                label={`બ્લડ ગ્રુપ`}
                defaultText={blood}
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
                  printLog(JSON.stringify(item?.item));
                  setBlood(item?.name);
                }}
              />
                </View>
              </View>

              <HorizontalTextInput
               
                label={`Family ID`}
                defaultText={familyId}
                onChangeText={setFamilyId}
              />
              <HorizontalTextInput
                label={`કુટુંબ ના વ્યકિતનું નામ`}
                defaultText={familyMember}
                onChangeText={setFamilyMember}
              />
              <HorizontalSelection
                label={`લિંગ`}
                placeholder={`લિંગ`}
                data={[{name: 'Male'}, {name: 'Female'}]}
                value={gender}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setGender(item?.name);
                }}
              />

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
              />

             
              <HorizontalSelection
                label={`કુટુંબ ના વડા સાથે નો સંબંધ`}
                defaultText={``}
                data={relationships}
                value={relation}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setRelation(item?.name);
                }}
              />
              <HorizontalSelection
                label={`લગ્ન સ્થિતિ`}
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
                  printLog(JSON.stringify(item?.item));
                  setStatus(item?.name);
                }}
              />
              <HorizontalTextInput
                label={`અભ્યાસ`}
                defaultText={study}
                onChangeText={setStudy}
              />
              <HorizontalTextInput
                label={`હાલ નો વ્યવસાય`}
                defaultText={business}
                onChangeText={setBusiness}
              />
              <HorizontalTextInput
                label={`વ્યવસાયનું સરનામું`}
                defaultText={businessAddress}
                onChangeText={setBusinessAddress}
              />
              <HorizontalTextInput
                label={`હાલ ના રહેઠાણ નુ સરનામું`}
                defaultText={homeAddress}
                onChangeText={setHomeAddress}
              />

              <MyMobileNumber
                label={`મોબાઇલ નંબર`}
                countryCode={country_code}
                phone={phone}
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
              <View
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
              </View>
              {loading ? (
                <LoaderView
                  style={{width: '50%', height: 35, marginVertical: 20}}
                />
              ) : (
                <AppButton
                  width={'50%'}
                  text={`Submit`}
                  buttonStyle={{
                    width: '50%',
                    height: 40,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginVertical: 20,
                  }}
                  onClick={() => {
                    if (city == null) {
                      ShowMessage('Please Select City');
                    } else if (familyMember?.trim() == '') {
                      ShowMessage('Please enter name');
                    } else if (gender == null) {
                      ShowMessage('Please select gender');
                    } else if (dob == null) {
                      ShowMessage('Please select Date of Birth');
                    } else if (image == undefined || image == null) {
                      ShowMessage('Please selcet photo');
                    } else {
                      setAdding(true);
                      addMembers();
                    }
                  }}
                  isLoading={loading}
                />
              )}
            </KeyboardAwareScrollView>
         
        </ScrollView>
      </View>
    </SafeAreaView>
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
        ...props?.styles,
        paddingHorizontal:15
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
