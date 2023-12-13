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
  const status = props?.route?.params.menu;
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
                fontSize: 8,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
                width: '20%',
              }}>
              {status + ' નંબર'}
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
              }}>
              નામ
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
              }}>
              ગામ
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
              }}>
              મોબાઈલ નંબર
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: AppFonts.semiBold,
                color: AppColors.DarkText,
              }}>
              ફોટો
            </Text>
          </View>
          {/* <View
            style={{
              backgroundColor: AppColors.LightText,
              height: 1,
              width: '100%',
            }}
          /> */}

          {isLoading && members == null ? (
            <View style={{marginTop: 15,paddingHorizontal:15}}>
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
              <ListMember />
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
                No Members Available
              </Text>
            </View>
          ) : (
            <FlatList
              contentContainerStyle={{paddingBottom: 10,paddingHorizontal:15}}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{width: '100%'}}
              data={members}
              renderItem={({item, index}) => (
                <MemberCell item={item} index={index} status={status} />
              )}
            />
          )}
        </View>

        {/* <FooterTextCell title={`સમાજ ના હીત માં રહેવુ મારો અધિકાર છે`} /> */}
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default AppSponcerScreen;

export const MemberCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: props?.item ? 10 : 10,
        paddingHorizontal: 10,
        // borderBottomColor: '#e2e2e2',
        // borderBottomWidth: props?.item ? 1 : 0,
        justifyContent: 'space-between',
        // alignItems:'center',
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
            width: '20%',

            color: AppColors.DarkText,

            // textAlign: props?.item ? 'center' : 'auto',
            // paddingLeft: props?.item ? 0 : '2%',
          },
        ]}>
        {props?.item ? `${props?.item?.number}.` : props?.status + ' નંબર'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            width: '25%',
            color: AppColors.DarkText,
          },
        ]}>
        {props?.item ? `${props?.item?.name}` : 'નામ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            width: '13%',
            color: AppColors.DarkText,

            // marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.address}` : 'ગામ'}
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
          flexDirection: 'row',
          width: '25%',
          marginLeft: 10,
          alignItems: 'center',
        }}>
        <Text style={[styles.heading, {color: AppColors.DarkText}]}>
          {props?.item ? `${props?.item?.phone}` : 'મોબાઈલ નંબર'}
        </Text>
        {!props?.change ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={1} style={{paddingHorizontal: 2.5,paddingBottom:2.5}}
            onPress={()=> Linking.openURL(`tel:${'9510135458'}`)}>
              <Image source={AppImages.CIRCLE_CALL_ICON} />
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={1}
            style={{justifyContent:'center',alignItems:'center',paddingHorizontal:2.5,paddingBottom:2.5}}
              onPress={() =>
                Linking.openURL(
                  `whatsapp://send?phone=${'9510135458'}`,
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
      <View
        style={{
          width: '7%',
          // justifyContent: 'center',
          alignItems: 'flex-end',
          // marginLeft: 10,
        }}>
        {props?.item ? (
          <Image
            style={{
              height: 15,
              width: 15,
              // borderColor: 'black',
              // borderWidth: 1,
              // borderRadius: 10,
            }}
            source={require('../../../assets/images/small_man_image.png')}
          />
        ) : (
          <Text style={[styles.heading, {color: AppColors.DarkText}]}>
            ફોટો
          </Text>
        )}
      </View>

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
    fontSize: 9,
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
