import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
import {MySelection} from '../../../components/SimpleTextInput';
// import {
//   getCities,
//   getFamilies,
//   getFamilyDetail,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import BorderView from '../../../components/BorderView';
import {getString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, getFamilies} from '../../../networking/CallApi';
import {ListMember} from '../advisour_member/AdvicerMember';

const family = [
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    family_id: '99999 999999',
    city: 'અમીપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    family_id: '99999 999999',
    city: 'અમીપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    family_id: '99999 999999',
    city: 'અમીપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    family_id: '99999 999999',
    city: 'અમીપુરા',
  },
];

const FamilyMemberDetailScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const [cityId, setCityId] = useState('');
  const [city, setCity] = useState('');
  const [isloading, setLoading] = useState(false);

  // useEffect(() => {
  //   getString('village', response => {
  //     setCities(response);
  //   });
  // }, [cities, setCities]);

  const [family, setFamily] = useState([]);

  useEffect(() => {
    setLoading(true);
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
    if (cityId != '') getList(cityId);
  }, [cityId != '']);

  const getList = id => {
    setLoading(true);
    getFamilies(
      {city_id: id},
      response => {
        printLog('getFamily', JSON.stringify(response));
        if (response?.status) {
          printLog('getFamily', JSON.stringify(response));
          setFamily(response?.data);
          setLoading(false);
        }
      },
      error => {},
    );
  };

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
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
        title={'Family member details'}
        background={false}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,

            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'FAMILY MEMBER DETAILS'} />
        </View>
        <View style={{flex: 0.9}}>
          <View
            style={{
              marginTop: -40,
              width: '90%',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: AppColors.BackgroundColor,
              padding: 10,
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
                alignSelf: 'flex-start',
                marginLeft: 10,
              }}>
              Please Select Village
            </Text>

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  width: '95%',
                  flexDirection: 'row',
                  marginVertical: 15,
                  borderRadius: 3,
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
                  printLog(JSON.stringify(item?.name + '---' + item?.id));
                  setValue(item?.name);
                  setCityId(item?.id);
                  getList(item?.id);
                }}
              />
            </View>
          </View>

          {isloading ? (
            <View
              style={{
                justifyContent: 'center',
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 20}}
              data={family == null ? [] : family}
              renderItem={({item, index}) => (
                <FamilyMermberCell
                  index={index}
                  item={item}
                  onClick={() =>
                    RootNavigation.navigate(AppScreens.FAMILY_DETAIL_SCREEN, {
                      item: item,
                    })
                  }
                />
              )}
            />
          )}
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
        {/* <FooterTextCell title={`પરિવાર નુ ખુબ ખુબ સ્વાગત છે`} /> */}
      </View>
    </View>
  );
};

export default FamilyMemberDetailScreen;

const FamilyMermberCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 5,
        marginHorizontal: 17,
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        borderRadius: 10,
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
          fontFamily: AppFonts.semiBold,
          fontSize: 11,
          color: AppColors.DarkText,
          paddingVertical: 10,
        }}>
        {props?.item?.family_id}
      </Text>
      <Image
        style={{
          height: '40%',
          width: 2,
          alignSelf: 'center',
          backgroundColor: AppColors.DarkText,
          marginHorizontal: 16,
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          fontFamily: AppFonts.semiBold,
          fontSize: 11,
          color:
            props?.item?.index == 0 || props?.item?.index / 2 == 1
              ? AppColors.DarkText
              : AppColors.DarkText,
          paddingVertical: 10,
        }}>{`${props?.item?.name}`}</Text>
    </TouchableOpacity>
  );
};
