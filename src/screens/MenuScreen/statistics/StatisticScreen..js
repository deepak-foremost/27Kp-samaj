import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {MyDropDownView} from '../../../../components/MyDropDownView';
import {MySelection} from '../../../components/SimpleTextInput';
// import {getCities, getStatistics} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
// import {AppScreens} from '../../../../utils/AppScreens';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {getString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {staticArray} from '../../../../utils/staticArray';

const count = [
  {
    id: 0,
    count: '354',
    name: 'ટોટલ ગામ',
  },
  {
    id: 1,
    count: '354',
    name: 'ટોટલ રજીસ્ટર ફૅમિલી ',
  },
  {
    id: 2,
    count: '354',
    name: 'ટોટલ સભ્યો',
  },
  {
    id: 3,
    count: '354',
    name: 'ટોટલ પુરૂષ',
  },
  {
    id: 4,
    count: '354',
    name: 'ટોટલ સ્ત્રી',
  },
  {
    id: 5,
    count: '354',
    name: 'અપરિણીત પુરુષ (20 વર્ષથી ઉપર)',
  },
  {
    id: 6,
    count: '354',
    name: 'અપરિણીત સ્ત્રી' + '\n' + '(20 વર્ષથી ઉપર)',
  },
  {
    id: 7,
    count: '354',
    name: 'પુરૂષ (60 વર્ષથી ઉપર)',
  },
  {
    id: 8,
    count: '354',
    name: 'સ્ત્રી (60 વર્ષથી ઉપર)',
  },
  {
    id: 9,
    count: '354',
    name: 'અપરિણીત સ્ત્રી' + '\n' + '(20 વર્ષથી ઉપર)',
  },
  {
    id: 10,
    count: '354',
    name: 'પરિણીત પુરુષ ',
  },
];

const StatisticScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('All');
  const [cityId, setCityId] = useState('0');
  const [counts, getCounts] = useState(0);

  useEffect(() => {
    getString('village', response => {
      setCities(response);
    });
  }, [cities, setCities]);
  // const [count, setCount] = useState(null);

  //   useEffect(() => {
  //     getCities(
  //       response => {
  //         if (response?.status) {
  //           var temp = [];
  //           temp.push({name: 'All', id: 0});
  //           setValue('All');
  //           setCityId(0);
  //           getCounts(0);
  //           for (let i = 0; i < response?.data?.length; i++) {
  //             if (i == 0) {
  //             }
  //             temp.push({
  //               name: response?.data[i]?.name,
  //               id: response?.data[i]?.id,
  //             });
  //           }
  //           setCities(temp);
  //         }
  //       },
  //       error => {
  //         printLog('StatisticScreen', error);
  //       },
  //     );
  //   }, []);

  //   const getCounts = id => {
  //     getStatistics(
  //       {city_id: id},
  //       response => {
  //         printLog('fetchStatistic', JSON.stringify(response));
  //         if (response?.status) {
  //           setCount([
  //             {name: 'ટોટલ ગામ', count: response?.data?.total_city},
  //             {name: 'ટોટલ ફેમિલી', count: response?.data?.total_family},
  //             {name: 'ટોટલ સભ્યો', count: response?.data?.total_member},
  //             {name: 'ટોટલ પુરુષ', count: response?.data?.total_male},
  //             {name: 'ટોટલ સ્ત્રી', count: response?.data?.total_female},
  //             {
  //               name: 'અપરણિત પુરુષ \n(૨૦ વર્ષથી ઉપર)',
  //               count: response?.data?.total_unmarried_male,
  //             },
  //             {
  //               name: 'અપરણિત સ્ત્રી\n(૨૦ વર્ષથી ઉપર)',
  //               count: response?.data?.total_unmarried_female,
  //             },
  //             {name: 'પરણિત પુરુષ', count: response?.data?.total_married_male},
  //             {
  //               name: 'પરણિત સ્ત્રી',
  //               count: response?.data?.total_married_female,
  //             },
  //           ]);
  //         } else {
  //           setCount([]);
  //         }
  //       },
  //       error => {
  //         printLog('fetchStatistic', error);
  //         setCount([]);
  //       },
  //     );
  //   };

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
          <ScreenToolbar text={'STATISTICS'} />
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
        title={'Statistics'}
        background={false}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

        <View
          style={{
            marginTop: -40,
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: AppColors.BackgroundColor,
            padding: 22,
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
          <Text
            style={{
              fontFamily: AppFonts.medium,
              fontSize: 12,
              color: AppColors.DarkText,
              alignSelf: 'flex-start',
              marginLeft: 10,
            }}>
            Please Select Village Below
          </Text>

          <View
            style={{
              width: '95%',
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#DEDEDE',
              borderWidth: 1,
            }}>
            <MySelection
              label={`Select Village`}
              placeholder={`Select Village`}
              data={cities}
              value={value}
              onItemSelect={item => {
                printLog(JSON.stringify(item?.item));
                setValue(item?.name);
                setCityId(item?.id);
                getCounts(item?.id);
              }}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
                // paddingStart: 15,
                paddingTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={count == null ? [] : count}
              renderItem={(item, index) => (
                <MenuComponent index={index} item={item} onClick={() => {}} />
              )}
            />
          </View>

          <BorderView
            text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
            backgroundColor={AppColors.BackgroundSecondColor}
          />
        </ScrollView>

        {/* <FooterTextCell title={`સમાજ એજ મારુ પરિવાર છે`} /> */}
      </View>
    </View>
  );
};

export default StatisticScreen;

export const MenuComponent = props => {
  let {height, width} = Dimensions.get('window');

  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        width: width / 3 - 8,
        justifyContent: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: AppColors.Red,
          height: width / 3 - 26,
          borderRadius: 10,
          flex: 1,
          margin: 10,
          backgroundColor: AppColors.BackgroundColor,
          ...Platform.select({
            ios: {
              shadowColor: 'gray',
              shadowOffset: {width: 0, height: -1},
              shadowOpacity: 0.9,
              shadowRadius: 3,
            },
            android: {
              elevation: 3,
            },
          }),
        }}>
        <Text
          style={{
            color: AppColors.DarkText,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: AppFonts.semiBold,
            fontSize: 29,

            alignSelf: 'center',
          }}>
          {props?.item?.item?.count}
        </Text>
        <Text
          style={{
            color: AppColors.DarkText,
            textAlign: 'center',
            fontFamily: AppFonts.regular,
            fontSize: 10,
            width: '70%',
          }}>
          {props?.item?.item?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
