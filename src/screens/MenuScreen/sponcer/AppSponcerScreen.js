import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {getSalahkarMember} from '../../../../networking/CallApi';

import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppImages} from '../../../utils/AppImages';
import {
  AsyncStorageConst,
  getString,
} from '../../../../utils/AsyncStorageHelper';
import * as RootNavigation from '../../../utils/RootNavigation';
import ShimmerCustomView from '../../../components/ShimmerCustomView';
import {AppFonts} from '../../../utils/AppFonts';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getBhumiSlah, getJevanSlah} from '../../../networking/CallApi';
import ZoomImage from '../../../components/ZoomImage';

const members = [
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
    number: '1234',
  },
];

const AppSponcerScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [isLoading, setLoading] = useState(true);
  const [members, setMembers] = useState(null);
  const status = props?.route?.params?.menu;
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (status == 'ભુમિ સભાસદ સભ્ય') {
      getBhumiSlah({page: page}, response => {
        setTotalPage(response?.last_page);
        if (response?.status) {
          var list = members == null ? [] : [...members];
          if (page == 1) {
            setMembers(response?.data);
          } else {
            setMembers([...list, ...response?.data]);
          }
          // setMembers(response?.data);
          setLoading(false);
        }
        response => {
          console.log('error', response);
        };
      });
    } else {
      getJevanSlah(
        {page: page},
        response => {
          setTotalPage(response?.last_page);
          if (response?.status) {
            var list = members == null ? [] : [...members];
            if (page == 1) {
              setMembers(response?.data);
            } else {
              setMembers([...list, ...response?.data]);
            }
            // setMembers(response?.data);
            setLoading(false);
          }
        },
        response => {
          console.log('error', response);
        },
      );
    }
  }, [page]);

  // useEffect(()=>{

  // },[])

  // console.warn(status)

  // const [members, setMembers] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   getSalahkarMember(
  //     response => {
  //       printLog('AdvicerMember', JSON.stringify(response));
  //       if (!response?.status) {
  //         setMembers([]);
  //       } else {
  //         setMembers(response?.data);
  //       }
  //       setLoading(false);
  //     },
  //     error => {
  //       setLoading(false);
  //       setMembers([]);
  //     },
  //   );
  // }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={'સલાહકાર મેમ્બર'}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar text={status} />
        <ZoomImage
          visible={open}
          images={images}
          dismiss={() => setOpen(false)}
        />
        <View
          style={{
            // marginTop: '5%',
            width: '100%',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            paddingBottom: 15,
            flex: 0.9,

            // backgroundColor: 'red',
            // ...Platform.select({
            //   ios: {
            //     shadowColor: '#D5D5D5',
            //     shadowOffset: {width: 0, height: -1},
            //     shadowOpacity: 0.9,
            //     shadowRadius: 3,
            //   },
            //   android: {
            //     elevation: 5,
            //   },
            // }),
          }}>
          {/* <View style={{width: '100%'}}>
            <MemberCell change={true} status={status} />
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width: '20%',
                flex: 1.5,
              }}>
              {'પરિવાર સુરક્ષા સહાય' + ' નંબર'}
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width: '25%',
                paddingLeft: 10,
                flex: 2.0,
              }}>
              નામ
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width: '13%',
                flex: 1.75,
                // marginLeft: 5,
              }}>
              ગામ
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width: '13%',
                flex: 1.75,
                // marginLeft: 5,
              }}>
              શાખ
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width: '30%',
                flex: 2.3,
                paddingLeft:10
              }}>
              મોબાઈલ નંબર
            </Text>
            {/* <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                // width:'7%'
                flex: 0.7,
                textAlign: 'center',
              }}>
              ફોટો
            </Text> */}
          </View>
          {/* <View
            style={{
              backgroundColor: AppColors.LightText,
              height: 1,
              width: '100%',
            }}
          /> */}

          {isLoading && members == null ? (
            <View
              style={{
                marginTop: 15,
                width: '95%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : members?.length == 0 ? (
            <View>
              <Text
                style={{
                  padding: 50,
                  marginTop: 20,
                  fontSize: 14,
                  fontFamily: AppFonts.semiBold,
                  color: AppColors.LightText,
                }}>
                No Data Found
              </Text>
            </View>
          ) : (
            <FlatList
              contentContainerStyle={{paddingBottom: 10, paddingHorizontal: 15}}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              onEndReached={() => LoadMore()}
              style={{width: '100%'}}
              data={members}
              renderItem={({item, index}) => (
                <MemberCell
                  item={item}
                  index={index}
                  status={status}
                  imgPress={() => {
                    setImages([{url: item?.image}]);
                    setOpen(item?.image == '' ? false : true);
                  }}
                />
              )}
            />
          )}
        </View>

        {/* <FooterTextCell title={`સમાજ ના હીત માં રહેવુ મારો અધિકાર છે`} /> */}
        <BorderView
          text={'સમાજ સાથે રહીને દાન કરવું તેજ મારી ફરજ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default AppSponcerScreen;

export const MemberCell = props => {
  const [open, setOpen] = useState(false);

  // const images = [
  //   {
  //     url: props?.items != null && props?.item?.image,
  //     props: {source: props?.items != null && props?.items?.image},
  //   },
  // ];

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: props?.item ? 10 : 10,
        paddingHorizontal: 5,
        // borderBottomColor: '#e2e2e2',
        // borderBottomWidth: props?.item ? 1 : 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: props?.change ? '#F3F3F3' : '#fff',
        marginTop: 10,
        borderRadius: 8,
        ...Platform.select({
          ios: {
            shadowColor: '#D5D5D5',
            shadowOffset: {width: 0, height: -1},
            shadowOpacity: props?.change ? 0 : 0.9,
            shadowRadius: 3,
          },
          android: {
            elevation: props?.change ? 0 : 5,
          },
        }),
      }}>
      <Text
        style={[
          styles.heading,
          {
            // width: '20%',
            flex: 0.8,
            color: AppColors.DarkText,
            // textAlign: props?.item ? 'center' : 'auto',
            // paddingLeft: props?.item ? 0 : '2%',
          },
        ]}>
        {props?.item
          ? `${
              props?.item?.sabhy_number == undefined
                ? props?.item?.boomi_number
                : props?.item?.sabhy_number
            }`
          : props?.status + ' નંબર'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            // width: '25%',
            flex: 2.5,
            color: AppColors.DarkText,
          },
        ]}>
        {props?.item ? `${props?.item?.name}` : 'નામ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            // width: '13%',
            flex: 1.75,
            color: AppColors.DarkText,
            marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.village}` : 'ગામ'}
      </Text>

      <Text
        style={[
          styles.heading,
          {
            // width: '13%',
            flex: 1.75,
            color: AppColors.DarkText,
            marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.shakh}` : 'ગામ'}
      </Text>
      {/* {props?.status != 'drawer' ? (
        <Text
          style={[
            styles.heading,
            {
              width: '10%',
              color: AppColors.DarkText,
              // marginLeft: 5,
            },
          ]}>
          {props?.status != 'drawer'
            ? props?.item
              ? `${props?.item?.hodo}`
              : 'હોદો'
            : null}
        </Text>
      ) : null} */}
      <View
        style={{
          // flexDirection: 'row',
          // width: '30%',
          flex: 2.5,
          // alignItems: 'center',
          paddingLeft: 5,
        }}>
        <Text style={[styles.heading, {color: AppColors.DarkText}]}>
          {props?.item
            ? `${props?.item?.country_code + props?.item?.phone}`
            : 'મોબાઈલ નંબર'}
        </Text>
        {!props?.change ? (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={1}
              style={{paddingHorizontal: 4, paddingBottom: 2.5}}
              onPress={() =>
                Linking.openURL(
                  `tel:${props?.item?.country_code + props?.item?.phone}`,
                )
              }>
              <Image source={AppImages.CIRCLE_CALL_ICON} 
              style={{height:9,width:9,resizeMode:'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 4,
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
              <Image source={AppImages.WHATSAPP_ICON} />
            </TouchableOpacity>
          </View>
        ) : null}

        {/* {props?.item && props?.item?.phone !== 'NA' ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              Linking.openURL(`tel:${props?.item?.phone}`);
            }}>
            <Image
              source={AppImages.PHONE_ICON}
              style={{height: 12, width: 12, marginStart: 5}}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )} */}
      </View>

      {/* <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        {props?.item ? (
          <TouchableOpacity activeOpacity={1} onPress={props?.imgPress}>
            <Image
              style={{
                height: 15,
                width: 15,
                backgroundColor: '#F2F2F2',
                resizeMode: 'contain',
                // borderColor: 'black',
                // borderWidth: 1,
                borderRadius: 10,
                marginBottom: 2,
              }}
              source={
                props?.item?.image == ''
                  ? AppImages.MEMBER_IMAGE
                  : {uri: props?.item?.image}
              }
            />
          </TouchableOpacity>
        ) : (
          <Text style={[styles.heading, {color: AppColors.DarkText}]}>
            ફોટો
          </Text>
        )}
      </View> */}

      {/* <Text
        style={[
          styles.heading,
          {
            
          },
        ]}>
        {props?.item ? `${props?.item?.city}` : 'Photo'}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: AppFonts.semiBold,
    fontSize: 10,
    color: AppColors.black,
    justifyContent: 'center',
  },
});

export const ListMember = props => {
  return (
    <View
      style={{width: '95%', height: 30, marginVertical: 10, ...props?.styles}}>
      <ShimmerCustomView />
    </View>
  );
};
