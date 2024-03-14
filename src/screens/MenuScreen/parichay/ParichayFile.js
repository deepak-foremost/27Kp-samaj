import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Linking,
  RefreshControl,
  SafeAreaView,
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {getParipatr} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import {ListMember} from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getParipatr} from '../../../networking/CallApi';

const list = [
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
];

const ParichayFileScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [files, setFiles] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const loadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  // useEffect(() => {
  //   setFiles(list);
  // });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getParipatr(
      {page: page},
      onSuccess => {
        printLog('getParipatr', JSON.stringify(onSuccess));
        printLog('getStatus', onSuccess?.status);
        if (onSuccess?.status) {
          setFiles(onSuccess?.data);
        } else {
          setFiles([]);
        }
        setRefreshing(false);
      },
      onFailure => {
        printLog('getParipatr', JSON.stringify(onFailure));
        setFiles([]);
        setRefreshing(false);
      },
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    getParipatr(
      {page: page},
      onSuccess => {
        printLog('getParipatr', JSON.stringify(onSuccess));
        setTotalPage(onSuccess?.last_page);
        if (onSuccess?.status) {
          var list = files == null ? [] : [...files];
          if (page == 1) {
            setFiles(onSuccess?.data);
          } else {
            setFiles([...list, ...onSuccess?.data]);
          }
          setLoading(false);
        } else {
          setFiles([]);
        }
      },
      onFailure => {
        printLog('getParipatr', JSON.stringify(onFailure));
        setFiles([]);
      },
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={'પરિપત્ર ફાઇલ'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'પરિપત્ર ફાઈલ '} />
        <View style={{flex: 0.9}}>
          {files == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.backgroundColor,
                alignItems: 'center',
                paddingTop: 15,
                width: '95%',
                alignSelf: 'center',
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : files?.length == 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 15,
                  color:AppColors.LightText,
                }}>
                No Data Found
              </Text>
            </View>
          ) : (
            <View style={{flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
                onEndReached={() => {
                  loadMore();
                }}
                data={files == null ? [] : files}
                renderItem={({item, index}) => (
                  <FileCell item={item} index={index} />
                )}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
            </View>
          )}
        </View>
        <BorderView
          text={'સમાજના કોઈપણ કાર્યોમાં સાથ સહકાર આપવો'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default ParichayFileScreen;

const FileCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Linking.openURL(props?.item?.document);
        }}>
        <Image
          source={AppImages.ICON_PDF_LIST}
          style={{
            marginHorizontal: 10,
            // resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 0,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: AppFonts.medium,
            fontSize: 12,
            textAlignVertical: 'center',
            color: AppColors.DarkText,
            flex: 1,
            alignContent: 'center',
          }}>
          {props?.item?.title}
        </Text>

        <View
          style={{
            backgroundColor: AppColors.DarkText,
            borderRadius: 15,
            padding: 3,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.medium,
              fontSize: 7,
              color: '#fff',
              paddingTop: 2.5,
            }}>
            {props?.item?.circular_date}
          </Text>
        </View>
      </View>

      {/* <Image
        style={{
          alignSelf: 'center',
          height: '75%',
          width: 1,
          backgroundColor: '#EBEBEB',
        }}
      /> */}
    </TouchableOpacity>
  );
};
