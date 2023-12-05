import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import AppButton from '../../../components/AppButton';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {MySelection} from '../../../components/SimpleTextInput';
// import {getCities, getSearch} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog, ShowMessage} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import {ListMember} from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import BorderView from '../../../components/BorderView';
import {getString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const list = [
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '9999999999',
    dob: '31/05/1991',
    age: '32',
    height: '165 CM',
    weight: '75 Kg',
    blood_group: 'A+',
    family_main_member_with_relation: 'પોતે',
    marital_status: ' Married',
    study: ' B.Tech',
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '9999999999',
    dob: '31/05/1991',
    age: '32',
    height: '165 CM',
    weight: '75 Kg',
    blood_group: 'A+',
    family_main_member_with_relation: 'પોતે',
    marital_status: ' Married',
    study: ' B.Tech',
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '999999999',
    dob: '31/05/1991',
    age: '32',
    height: '165 CM',
    weight: '75 Kg',
    blood_group: 'A+',
    family_main_member_with_relation: 'પોતે',
    marital_status: ' Married',
    study: ' B.Tech',
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
];

const SearchScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [cityId, setCityId] = useState(0);
  const [gender, setGender] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [status, setStatus] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [country, setCountry] = useState('Foreign Country');
  const [study, setStudy] = useState('');

  const [result, setResult] = useState([]);

  useEffect(() => {
    getString('village', response => {
      setCities(response);
    });
  }, [cities, setCities]);

  //   useEffect(() => {
  //     getCities(
  //       response => {
  //         var temp = [];
  //         temp.push({
  //           name: 'All',
  //           id: 0,
  //         });

  //         setCity('All');
  //         setCityId(0);

  //         for (let i = 0; i < response?.data?.length; i++) {
  //           temp.push({
  //             name: response?.data[i]?.name,
  //             id: response?.data[i]?.id,
  //           });
  //         }

  //         setCities(temp);
  //       },
  //       error => {},
  //     );
  //   }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            paddingTop: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'SEARCH'} />
        </View>

        {/* <Image
        source={AppImages.CALL_ICON}
        style={{
          height: '20%',
          resizeMode: 'cover',
          width: '100%',
          position: 'absolute',
        }}
      /> */}

        {/* <AppDrawerHeader
        title={'Search'}
        background={false}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

        <View
          style={{
            marginTop: -40,
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: AppColors.BackgroundColor,
            paddingTop: 15,
            paddingHorizontal: 24,
            borderRadius: 10,
            backgroundColor: 'white',
            ...Platform.select({
              ios: {
                shadowColor: '#D5D5D5',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.9,
                shadowRadius: 3,
              },
              android: {
                elevation: 15,
              },
            }),
          }}>
          {/* Heading */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                flex: 1,
                fontFamily: AppFonts.medium,
                fontSize: 12,
                color: AppColors.DarkText,
              }}>
              Search Family Member Here
            </Text>

            <TouchableOpacity
              activeOpacity={AppConstValue.ButtonOpacity}
              onPress={() => {
                setCities('');
                setCity('');
                setGender('');
                setFrom('');
                setTo('');
                setStatus('');
                setResult([]);
                setBloodGroup('');
                setStudy('');
                setCountry('');
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 12,

                  color: AppColors.BackgroundSecondColor,
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>

          {/* village // gender */}
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 1,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`Village`}
                placeholder={`Village`}
                data={cities == null ? [] : cities}
                value={city}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setCity(item?.name);
                  setCityId(item?.id);
                }}
              />
            </View>
            <Image style={{width: 10}} />

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 0.8,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`લિંગ :`}
                placeholder={`લિંગ`}
                data={staticArray.gender}
                value={gender}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setGender(item?.name);
                }}
              />
            </View>

            <Image style={{width: 10}} />

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 1,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`લગ્ન સ્થિતિ`}
                placeholder={`લગ્ન સ્થિતિ`}
                data={staticArray.merriage_status}
                value={status}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setStatus(item?.name);
                }}
              />
            </View>
          </View>

          <View
            style={[
              AppStyles.boxStyle,
              {
                // backgroundColor: AppColors.LightText,
                width: '100%',

                flexDirection: 'row',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: AppFonts.medium,
                color: AppColors.DarkText,
                width: '18%',
                paddingStart: 10,
                fontSize: 12,
              }}>
              ઉંમર
            </Text>
            <TouchableOpacity
              activeOpacity={AppConstValue.ButtonOpacity}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '41%',
                height: 35,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: AppFonts.medium,
                  color: AppColors.DarkText,
                  marginHorizontal: 5,
                  fontSize: 12,
                }}>
                {`FROM : `}
              </Text>
              <View style={{flex: 1}}>
                <MySelection
                  label={`0`}
                  placeholder={`0`}
                  data={staticArray.getAgeList()}
                  value={from}
                  onItemSelect={item => {
                    printLog(JSON.stringify(item?.item));

                    if (to == '' || item?.name <= to) {
                      setFrom(item?.name);
                    } else if (to < item?.name) {
                      setFrom(item?.name);
                      setTo('');
                    } else {
                    }
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={AppConstValue.ButtonOpacity}
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40%',
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderWidth: 0,
                },
              ]}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: AppFonts.medium,
                  color: AppColors.DarkText,
                  marginHorizontal: 5,
                  fontSize: 12,
                }}>
                {`TO : `}
              </Text>
              <View style={{flex: 1}}>
                <MySelection
                  label={`0`}
                  placeholder={`Selecte Age`}
                  data={staticArray.getAgeList()}
                  value={to}
                  onItemSelect={item => {
                    printLog(JSON.stringify(item?.item));
                    if (from == '' || from <= item?.name) {
                      setTo(item?.name);
                    } else if (from > item?.name) {
                      ShowMessage('Please select age greater than from');
                    }
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={
              {flexDirection: 'row', marginVertical: 10}
              //     [
              //   AppStyles.boxStyle,
              //   {
              //     backgroundColor: AppColors.LightText,
              //     width: '100%',
              //     flexDirection: 'row',
              //     marginVertical: 10,
              //     borderRadius: 3,
              //     paddingStart: 5,
              //     justifyContent: 'center',
              //     alignItems: 'center',
              //   },
              // ]
            }>
            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 0.3,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`બલ્ડ ગ્રુપ :`}
                placeholder={`બલ્ડ ગ્રુપ`}
                data={staticArray.bloodGroup}
                value={bloodGroup}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setBloodGroup(item?.name);
                }}
              />
            </View>

            <Image style={{width: 10}} />

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 0.3,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`અભ્યાસ :`}
                placeholder={`અભ્યાસ`}
                data={staticArray.studies}
                value={study}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setStudy(item?.name);
                  // setCityId(item?.id);
                }}
              />
            </View>

            <Image style={{width: 10}} />

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  flex: 0.42,
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <MySelection
                label={`Foreign Country :`}
                placeholder={`Foreign Country :`}
                data={staticArray.foriegnCountry}
                textStyle={{fontSize: 8}}
                value={country}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.item));
                  setCountry(item?.name);
                  setCityId(item?.id);
                }}
              />
            </View>
            {/* <MySelection
              label={`લગ્ન સ્થિતિ`}
              placeholder={`લગ્ન સ્થિતિ`}
              data={staticArray.merriage_status}
              value={status}
              onItemSelect={item => {
                printLog(JSON.stringify(item?.item));
                setStatus(item?.name);
              }}
            /> */}
          </View>

          <AppButton
            text={`Search`}
            width={'30%'}
            buttonStyle={{
              alignSelf: 'flex-end',
              width: '40%',
              borderRadius: 30,
              marginBottom: 10,
              height: 25,
            }}
            buttonPress={() => {
              setResult(list);
              //   setResult(null);
              //   getSearch(
              //     {
              //       city_id: cityId,
              //       city: cityId == 0 ? '' : city,
              //       marital_status: status,
              //       gender: gender,
              //       age: `${from}-${to}`,
              //     },
              //     response => {
              //       if (response?.status) {
              //         setResult(response?.data);
              //       } else {
              //         setResult([]);
              //       }
              //     },
              //     error => {
              //       setResult([]);
              //     },
              //   );
            }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled>
          {result?.length == 0 ? (
            <></>
          ) : (
            <View
              style={{
                marginTop: '5%',
                width: '100%',
                flex: 1,
                marginBottom: 20,
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: AppColors.BackgroundColor,
                borderRadius: 10,
                backgroundColor: AppColors.fadeBackground,

                // ...Platform.select({
                //   ios: {
                //     shadowColor: '#D5D5D5',
                //     shadowOffset: {width: 0, height: -1},
                //     shadowOpacity: 0.9,
                //     shadowRadius: 3,
                //   },
                //   android: {
                //     elevation: 15,
                //   },
                // }),
              }}>
              {result == null ? (
                <View style={{flex: 1, paddingTop: 10}}>
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                </View>
              ) : result.length == 0 ? (
                <></>
              ) : (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingBottom: 20,
                  }}
                  data={result == null ? [] : result}
                  ListHeaderComponent={
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        paddingVertical: 5,
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          width: 15,
                          color: AppColors.DarkText,
                          fontFamily: AppFonts.semiBold,
                          fontSize: 10,
                        }}>
                        ક્રમ
                      </Text>
                      <Text
                        style={{
                          flex: 1.4,
                          color: AppColors.DarkText,
                          fontFamily: AppFonts.semiBold,
                          fontSize: 10,
                          marginLeft: 10,
                        }}>
                        નામ
                      </Text>
                      <Text
                        style={{
                          flex: 1,
                          color: AppColors.DarkText,
                          fontFamily: AppFonts.semiBold,
                          fontSize: 10,
                        }}>
                        ગામ
                      </Text>
                      <Text
                        style={{
                          flex: 1.3,
                          color: AppColors.DarkText,
                          fontFamily: AppFonts.semiBold,
                          fontSize: 10,
                        }}>
                        મોબાઈલ નંબર
                      </Text>
                      <Text
                        style={{
                          flex: 0.8,
                          color: AppColors.DarkText,
                          fontFamily: AppFonts.semiBold,
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        ફોટો
                      </Text>
                    </View>
                  }
                  renderItem={({item, index}) => (
                    <AboutCell
                      index={index}
                      item={item}
                      onClick={() =>
                        RootNavigation.push(
                          props?.navigation,
                          AppScreens.MEMBER_DETAIL_SCREEN,
                          item,
                        )
                      }
                    />
                  )}
                />
              )}
            </View>
          )}
          <BorderView
            text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
            backgroundColor={AppColors.BackgroundSecondColor}
            style={result.length == 0 && styles.last}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  last: {
    position: 'absolute',
    bottom: 20,
  },
});

export default SearchScreen;

const AboutCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        backgroundColor: AppColors.BackgroundColor,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        paddingLeft: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            width: 15,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
          }}>
          {props?.index + 1}.
        </Text>
        <Text
          style={{
            flex: 1.5,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            marginLeft: 10,
          }}>
          {props?.item?.name}
        </Text>

        {/* <Image
          style={{
            height: 14,
            marginVertical: 13,
            width: 1,
            marginRight: 5,
            backgroundColor: AppColors.light_grey,
          }}
        /> */}
        <Text
          style={{
            flex: 1,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            marginLeft: 5,
          }}>
          {props?.item?.city}
        </Text>
        {/* <Image
          style={{
            height: 14,
            marginVertical: 13,
            width: 1,
            marginRight: 5,
            backgroundColor: AppColors.Orange,
          }}
        /> */}
        {/* <TouchableOpacity
          style={{marginStart: 5,}}
          activeOpacity={AppConstValue.ButtonOpacity}
          onPress={() => {
            props?.item?.phone == '-'
              ? Linking.openURL(
                  `tel:${props?.item?.country_code + '' + props?.item?.phone}`,
                )
              : NaN;
          }}> */}
        {/* <Image
            source={
              props?.item?.phone?.length < 8 == '-' ? NaN : AppImages.CALL_ICON
            }
            style={{height: 15, width: 15, resizeMode: 'cover'}}
          /> */}
        {/* </TouchableOpacity> */}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={1}
          onPress={() => Linking.openURL(`telprompt:${props?.item?.phone}`)}>
          <Text
            style={{
              // flex: 1.2,
              color: AppColors.DarkText,
              fontFamily: AppFonts.semiBold,
              fontSize: 10,
            }}>
            {props?.item?.phone == '-'
              ? ''
              : props?.item?.country_code + props?.item?.phone}
          </Text>
          <Image style={{marginHorizontal: 5}} source={AppImages.CALL_ICON} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=hello&phone=${props?.item?.phone}`,
            )
          }>
          <Image
            style={{height: 10, width: 10}}
            source={require('../../../assets/images/whatsapp_icon.png')}
          />
        </TouchableOpacity>

        <View
          style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={AppImages.SMALL_MAN_IMAGE} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
