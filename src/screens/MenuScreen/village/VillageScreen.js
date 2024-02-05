import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {MyDropDownView} from '../../../../components/MyDropDownView';
import {MySelection} from '../../../components/SimpleTextInput';
// import {getCities, getVillageMembers} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {fontProximaNova} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
// import {AppScreens} from '../../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {ListMember} from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import BorderView from '../../../components/BorderView';
import {getString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, getVillageMembers} from '../../../networking/CallApi';

const member = [
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
    phone: '888888888',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
    phone: '888888888',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
    phone: '888888888',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
    phone: '888888888',
  },
];

const VillageScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const [cityId, setCityId] = useState('');
  const [member, setMember] = useState(null);
  const [city, setCity] = useState('');

  // useEffect(() => {
  //   setMember(list);
  // });

  // useEffect(() => {
  //   getString('village', response => {
  //     setCities(response);
  //   });
  // }, [cities, setCities]);

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

  useEffect(() => {
    if (cityId != '') {
      console.log('call--', value);
      setMember(null);
      getVillageMembers(
        {city: value},
        response => {
          printLog('getVillageMembers', JSON.stringify(response?.data));
          if (response?.status) {
            setMember(response?.data);
          } else {
            setMember([]);
          }
        },
        error => {
          printLog('getVillageMembers', error);
          setMember([]);
        },
      );
    } else {
      // getVillageMembers(
      //   '',
      //   response => {
      //     printLog('getVillageMembers', JSON.stringify(response?.data));
      //     if (response?.status) {
      //       setMember(response?.data);
      //     } else {
      //       setMember([]);
      //     }
      //   },
      //   error => {
      //     printLog('getVillageMembers', error);
      //     setMember([]);
      //   },
      // );
    }
  }, [cityId]);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'VILLAGE MEMBER DETAILS'} />
        </View>
        <View style={{flex: 0.9}}>
          {/* <Image
          source={AppImages.APP_SPONCER_LINE}
          style={{
            height: '20%',
            resizeMode: 'cover',
            width: '100%',
            position: 'absolute',
          }}
        /> */}

          {/* <AppDrawerHeader
          title={'Village Member Details'}
          background={false}
          leadIcon={AppImages.ICON_BACK}
          leadIconClick={() => RootNavigation.goBack()}
        /> */}

          <View
            style={{
              marginTop: -40,
              width: '90%',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: AppColors.backgroundColor,
              padding: 22,
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
            <Text
              style={{
                fontFamily: AppFonts.medium,
                fontSize: 12,
                color: AppColors.DarkText,
                marginLeft: 12,
                alignSelf: 'flex-start',
              }}>
              Please Select Village
            </Text>

            <View
              style={[
                AppStyles.boxStyle,
                {
                  backgroundColor: AppColors.drop_down_bg,
                  width: '95%',
                  flexDirection: 'row',
                  marginTop: 15,
                  borderRadius: 3,
                  paddingStart: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 13,
                  color: AppColors.DarkText,
                  textAlign: 'right',
                  padding: 10,
                }}>
                ગામ :
              </Text>
              <MySelection
                label={`Select Village`}
                placeholder={`Select Village`}
                data={cities}
                value={value}
                onItemSelect={item => {
                  setValue(item?.name);
                  setCityId(item?.id);
                }}
              />
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingTop: 20,
              alignSelf: 'center',
            }}
            showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
              <View style={{width: '100%', alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/images/villageimage.png')}
                  style={
                    {
                      // marginVertical: 10,
                      // // resizeMode: 'contain',
                      // width: '90%',
                      // borderRadius: 15,
                      // backgroundColor: '#F2F2F2',
                      // height:100
                    }
                  }
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  width: '90%',

                  justifyContent: 'space-between',
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
                    flex: 0.9,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                    paddingLeft: 10,
                  }}>
                  નામ
                </Text>
                <Text
                  style={{
                    flex: 0.6,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                  }}>
                  હાલ નું રહેઠાણ
                </Text>
                <Text
                  style={{
                    flex: 0.8,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                    textAlign: 'left',
                  }}>
                  મોબાઈલ નંબર
                </Text>
              </View>

              {member == null ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingTop: 15,
                    width: '100%',
                  }}>
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                  <ListMember styles={{height: 35}} />
                </View>
              ) : member.length == 0 ? (
                <Text
                  style={{
                    fontFamily: AppFonts.bold,
                    color: AppColors.LightText,
                    fontSize: 12,
                    marginTop: 50,
                  }}>
                  No Data Found
                </Text>
              ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingBottom: 20,
                  }}
                  data={member == null ? [] : member}
                  renderItem={({item, index}) => (
                    <AboutCell
                      index={index}
                      item={item}
                      onClick={
                        () => {}
                        // RootNavigation.push(
                        //   props?.navigation,
                        //   AppScreens.AboutUsDetailScreen,
                        //   props?.item,
                        // )
                      }
                    />
                  )}
                />
              )}
            </View>
          </ScrollView>

          {/* <View
            style={{
              marginTop: '5%',
              width: '90%',
              flex: 0.8,
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: AppColors.fadeBackground,
              borderRadius: 10,

              ...Platform.select({
                ios: {
                  shadowColor: '#D5D5D5',
                  shadowOffset: {width: 0, height: -1},
                  shadowOpacity: 0.9,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 15,
                },
              }),
            }}></View> */}
        </View>

        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />

        {/* <FooterTextCell title={`સમાજ ના પ્રેમ માટે અમુક કામ તો કરી જ શકીએ...`} /> */}
      </View>
    </View>
  );
};

export default VillageScreen;

const AboutCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 10,
        elevation: 5,
        // borderBottomColor: AppColors.light_grey,
        // borderBottomWidth: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            flex: 0.9,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            textTransform: 'capitalize',
            paddingLeft: 10,
          }}>
          {props?.item?.name}
        </Text>

        <Image
          style={{
            height: 14,
            marginVertical: 13,
            width: 1,
            marginRight: 5,
            backgroundColor: AppColors.light_grey,
          }}
        />
        <Text
          style={{
            flex: 0.5,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            textTransform: 'capitalize',
          }}>
          {props?.item?.city}
        </Text>
        <Image
          style={{
            height: 14,
            marginVertical: 13,
            width: 1,
            marginRight: 5,
            backgroundColor: AppColors.light_grey,
          }}
        />
        <TouchableOpacity
          style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}
          activeOpacity={0.9}
          onPress={() =>
            Linking.openURL(
              `tel:${props?.item?.country_code + props?.item?.phone}`,
            )
          }>
          <Text
            style={{
              color: AppColors.DarkText,
              fontFamily: AppFonts.semiBold,
              fontSize: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            {props?.item?.country_code + props?.item?.phone}
          </Text>
          <Image
            source={AppImages.CIRCLE_CALL_ICON}
            style={{marginRight: 5, marginBottom: 2.5}}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 20,
              width: 15,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 2.5,
            }}
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?phone=${
                  props?.item?.country_code + props?.item?.phone
                }`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            <Image source={AppImages.WHATSAPP_ICON} style={{}} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
