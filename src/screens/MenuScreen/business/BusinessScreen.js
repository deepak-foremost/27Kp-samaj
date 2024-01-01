import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  RefreshControl,
} from 'react-native';

// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
  BusinessDirectoryCell,
  GridListComponent,
  HorizontalMenuComponent,
} from '../../../components/HorizontalMenuComponent';
// import {
//   getBusinessAllList,
//   getBusinessList,
//   getCategories,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import BorderView from '../../../components/BorderView';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getBusinessAllList, getCategories} from '../../../networking/CallApi';
import {
  BusinessBox,
  BusinessDirectoryBox,
} from '../advisour_member/AdvicerMember';

const categories = [
  {
    name: 'Jewellery Shop',
  },
  {
    name: 'House Builder',
  },
  {
    name: 'Medical',
  },
  {
    name: 'Hardware',
  },
  {
    name: 'Gift Articles',
  },
  {
    name: 'Electronics',
  },
];

const businsesses = [
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
  },
];

const BusinessScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [pos, setPos] = useState(0);
  const [catItem, setCatItem] = useState(null);
  const [businsesses, setBusinsesses] = useState(null);
  const [categories, setCategories] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onRefresh = () => {
    pos == 0
      ? getCategories(
          response => {
            printLog('getBusinessList', JSON.stringify(response));
            if (response?.status) {
              setCategories(response?.data);
            } else {
              setCategories([]);
            }
          },
          error => {
            setCategories([]);
          },
        )
      : getBusinessAllList(
          {id: catItem?.id == undefined ? 0 : catItem?.id},
          response => {
            printLog('getBusinessList', JSON.stringify(response));
            if (response?.status) {
              setBusinsesses(response?.data);
            } else {
              setBusinsesses([]);
            }
          },
          error => {
            printLog('getBusinessList', error);
            setBusinsesses([]);
          },
        );
  };

  useEffect(() => {
    setLoading(true);
    pos == 0
      ? getCategories(
          response => {
            printLog('getBusinessList', JSON.stringify(response));
            if (response?.status) {
              setCategories(response?.data);
            } else {
              setCategories([]);
            }
            setLoading(false);
          },
          error => {
            setCategories([]);
          },
        )
      : console.log('itemId--', catItem?.id);
    getBusinessAllList(
      {category_id: catItem?.id == undefined ? 0 : catItem?.id},
      response => {
        printLog('getBusinessList', JSON.stringify(response));
        if (response?.status) {
          setBusinsesses(response?.data);
        } else {
          setBusinsesses([]);
        }
        setLoading(false);
      },
      error => {
        printLog('getBusinessList', error);
        setBusinsesses([]);
      },
    );
  }, [pos]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={'Business Details'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'BUSINESS DETAILS'} />
        <HorizontalMenuComponent
          setValue={pos}
          onChange={value => {
            setPos(value);
            setCatItem(null);
          }}
        />
        <View style={{flex: 0.9, paddingTop: 10}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            // refreshControl={
            //   // <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
          >
            {isLoading ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 17,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}>
                {pos == 0 ? (
                  <View
                    style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                    <BusinessBox />
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <BusinessDirectoryBox />
                    <BusinessDirectoryBox />
                    <BusinessDirectoryBox />
                    {/* <BusinessBox styles={{width: '90%'}} />
                    <BusinessBox styles={{width: '90%'}} />
                    <BusinessBox styles={{width: '90%'}} /> */}
                    {/* <BusinessBox />
                  <BusinessBox />
                  <BusinessBox />
                  <BusinessBox />
                  <BusinessBox />
                  <BusinessBox />
                  <BusinessBox /> */}
                  </View>
                )}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 17,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  justifyContent: 'center',
                  flex:1
                }}>
                {pos == 0 ? (
                  categories?.map((item, index) => (
                    <GridListComponent
                      item={item}
                      index={index}
                      onSelectItem={() => {
                        setPos(1);
                        setCatItem(item);
                      }}
                    />
                  ))
                ) : businsesses?.length == 0 ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: AppFonts.bold,
                        color: AppColors.black,
                        fontSize: 15,
                      }}>
                      No List Found
                    </Text>
                  </View>
                ) : (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // refreshControl={
                    //   refreshing=refreshing
                    // }
                    numColumns={1}
                    contentContainerStyle={{}}
                    data={businsesses == null ? [] : businsesses}
                    renderItem={({item, index}) => (
                      <BusinessDirectoryCell
                        is_family_id={1}
                        item={item}
                        index={index}
                        onClicked={type =>
                          RootNavigation.push(
                            props?.navigation,
                            AppScreens.BUSINESS_DETAIL_SCREEN,
                            {
                              item: item,
                            },
                          )
                        }
                      />
                    )}
                  />
                )}
              </View>
            )}
          </ScrollView>
        </View>
        <BorderView
          text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default BusinessScreen;

const FileCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.backgroundColor,
        marginTop: 15,
        height: 74,
        marginHorizontal: 20,
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
      <View style={{paddingVertical: 17, marginHorizontal: 17, flex: 1}}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: AppFonts.regular,
            fontSize: 13,
            lineHeight: 18,
            color: AppColors.purple,
          }}>
          રૅશનાલીઝમના રંગ ભાગ 1
        </Text>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 13,
              paddingEnd: 5,
              color: AppColors.black,
            }}>
            Date :
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 13,
              color: '#B7B7B7',
            }}>
            22/09/2021
          </Text>
        </View>
      </View>
      <Image
        style={{
          alignSelf: 'center',
          height: '75%',
          width: 1,
          backgroundColor: '#EBEBEB',
        }}
      />
      <Image
        source={AppImages.ICON_PDF_LIST}
        style={{
          height: 26,
          width: 24,
          marginHorizontal: 17,
          resizeMode: 'contain',
        }}
      />
    </TouchableOpacity>
  );
};

const MenuPage = props => {
  const [pos, setPos] = useState(0);

  return (
    <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
      <TouchableOpacity
        style={{width: '50%'}}
        onPress={() => setPos(0)}
        activeOpacity={AppConstValue.ButtonOpacity}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 15,
            color: pos == 0 ? AppColors.black : AppColors.lineColor,
            padding: 10,
            textAlign: 'center',
          }}>
          Search By Category
        </Text>
        <View>
          <Image style={{backgroundColor: AppColors.lineColor, height: 2}} />
          <Image
            style={{
              backgroundColor: pos == 0 ? AppColors.red : '#00000000',
              alignSelf: 'center',
              height: 2,
              width: '85%',
              position: 'absolute',
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: '50%'}}
        onPress={() => setPos(1)}
        activeOpacity={AppConstValue.ButtonOpacity}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 15,
            color: pos == 1 ? AppColors.black : AppColors.lineColor,
            padding: 10,
            textAlign: 'center',
          }}>
          Business Directory
        </Text>
        <View>
          <Image style={{backgroundColor: AppColors.lineColor, height: 2}} />
          <Image
            style={{
              backgroundColor: pos == 1 ? AppColors.red : '#00000000',
              alignSelf: 'center',
              height: 2,
              width: '85%',
              position: 'absolute',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
