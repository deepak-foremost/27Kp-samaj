import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {MyDropDownView} from '../../../../components/MyDropDownView';
import {MySelection} from '../../../components/SimpleTextInput';
// import {getCities, getVillageMembers} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstFuncations';
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

const list = [
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
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const [cityId, setCityId] = useState('');
  const [member, setMember] = useState(null);

  useEffect(() => {
    setMember(list);
  });

  //   useEffect(() => {
  //     getCities(
  //       response => {
  //         if (response?.status) {
  //           var temp = [];

  //           for (let i = 0; i < response?.data?.length; i++) {
  //             temp.push({
  //               name: response?.data[i]?.name,
  //               id: response?.data[i]?.id,
  //             });
  //             if (i == 0) {
  //               setValue(response?.data[i]?.name);
  //               setCityId(response?.data[i]?.id);
  //             }
  //           }
  //           setCities(temp);
  //         }
  //       },
  //       error => {
  //         printLog('StatisticScreen', error);
  //       },
  //     );
  //   }, []);

  //   useEffect(() => {
  //     if (cityId != '') {
  //       setMember(null);
  //       getVillageMembers(
  //         {city: value},
  //         response => {
  //           printLog('getVillageMembers', JSON.stringify(response));
  //           if (response?.status) {
  //             setMember(response?.data);
  //           } else {
  //             setMember([]);
  //           }
  //         },
  //         error => {
  //           printLog('getVillageMembers', error);
  //           setMember([]);
  //         },
  //       );
  //     }
  //   }, [cityId]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
      }}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            paddingTop: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'VILLAGE MEMBER DETAILS'} />
        </View>
        <View style={{flex: 1}}>
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
                  elevation: 15,
                },
              }),
            }}>
            <Text
              style={{
                fontFamily: AppFonts.medium,
                fontSize: 12,
                color: AppColors.DarkText,
                marginLeft:12,
                alignSelf:'flex-start'
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

          <View
            style={{
              marginTop: '5%',
              width: '90%',
              flex: 0.8,
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: AppColors.backgroundColor,
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
                  elevation: 15,
                },
              }),
            }}>
            <View style={{flex: 1, width: '95%', alignItems: 'center'}}>
              <Image
                source={AppImages.ICON_TEST_VILLAGE}
                style={{
                  marginVertical:10,
                  
                  resizeMode: 'contain',
                  width: '97%',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  width: '95%',
                 
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
                    flex: 1,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                  }}>
                  નામ
                </Text>
                <Text
                  style={{
                    flex: 0.5,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                  }}>
                  હાલ નું રહેઠાણ
                </Text>
                <Text
                  style={{
                    flex: 1,
                    color: AppColors.DarkText,
                    fontFamily: AppFonts.semiBold,
                    fontSize: 10,
                    textAlign: 'center',
                  }}>
                  મોબાઈલ નંબર
                </Text>
              </View>

              {member == null ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingTop: 15,
                  }}>
                  <ListMember styles={{height: 25}} />
                  <ListMember styles={{height: 25}} />
                  <ListMember styles={{height: 25}} />
                  <ListMember styles={{height: 25}} />
                  <ListMember styles={{height: 25}} />
                </View>
              ) : member.length == 0 ? (
                <Text
                  style={{
                    fontFamily: AppFonts.bold,
                    color: AppColors.lineColor,
                    fontSize: 15,
                    flex: 1,
                    textAlignVertical: 'center',
                  }}>
                  No List Found
                </Text>
              ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 15,
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
          </View>
        </View>

        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />

        {/* <FooterTextCell title={`સમાજ ના પ્રેમ માટે અમુક કામ તો કરી જ શકીએ...`} /> */}
      </View>
    </SafeAreaView>
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
        backgroundColor: AppColors.backgroundColor,
       
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height:30
        // borderBottomColor: AppColors.light_grey,
        // borderBottomWidth: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center',}}>
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
            flex: 1,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            textTransform: 'capitalize',
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
          style={{flexDirection: 'row', flex: 1}}
          activeOpacity={0.9}
          onPress={() => Linking.openURL(`tel:${props?.item?.phone}`)}>
          {/* <Image
            source={AppImages.ICON_CALL}
            style={{height: 15, width: 15, marginRight: 5}}
          /> */}
          <Text
            style={{
              color: AppColors.DarkText,
              fontFamily: AppFonts.semiBold,
              fontSize: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            {props?.item?.phone}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
