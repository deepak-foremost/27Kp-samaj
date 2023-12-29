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
import {getSalahkarMember} from '../../../networking/CallApi';

const members = [
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
  {
    name: 'પૌરાણિક માન્યતાઓ',
    phone: '888888888',
    address: 'શંકરપુરા',
    hodo: 'ન્યતાઓ',
  },
];

const AdvicerMember = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [isLoading, setLoading] = useState(true);
  const status = props?.route?.params.status;

  const [members, setMembers] = useState(null);

  useEffect(() => {
    setLoading(true);
    getSalahkarMember(
      response => {
        printLog('AdvicerMember', JSON.stringify(response));
        if (!response?.status) {
          setMembers([]);
        } else {
          setMembers(response?.data);
        }
        setLoading(false);
      },
      error => {
        setLoading(false);
        setMembers([]);
      },
    );
  }, []);

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
        <ScreenToolbar
          text={status == 'drawer' ? 'SUPPORT MEMBER' : 'કારોબારી સભ્યશ્રી'}
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
          <View style={{width: '100%', paddingHorizontal: 15}}>
            <MemberCell
              change={true}
              status={status}
              style={{paddingVertical: 5}}
            />
          </View>
          {/* <View
            style={{
              backgroundColor: AppColors.LightText,
              height: 1,
              width: '100%',
            }}
          /> */}

          {isLoading && members == null ? (
            <View style={{marginTop: 15, paddingHorizontal: 15}}>
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
              contentContainerStyle={{paddingBottom: 10, paddingHorizontal: 15}}
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

export default AdvicerMember;

export const MemberCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: props?.item ? 10 : 15,
        paddingHorizontal: 10,
        // borderBottomColor: '#e2e2e2',
        // borderBottomWidth: props?.item ? 1 : 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: props?.change ? AppColors.fadeBackground : '#fff',
        marginTop: 15,
        borderRadius: 8,
        ...props.style,
        ...Platform.select({
          ios: {
            shadowColor: '#D5D5D5',
            shadowOffset: {width: 0, height: -1},
            shadowOpacity: props?.change ? 0 : 0.9,
            shadowRadius: 3,
          },
          android: {
            elevation: props?.change ? 0 : 3,
          },
        }),
      }}>
      <Text
        style={[
          styles.heading,
          {
            width: '5%',

            color: AppColors.DarkText,

            // textAlign: props?.item ? 'center' : 'auto',
            // paddingLeft: props?.item ? 0 : '2%',
          },
        ]}>
        {props?.item ? `${props?.index + 1}.` : 'ક્રમ'}
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
            width: '20%',
            color: AppColors.DarkText,

            // marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.city}` : 'ગામ'}
      </Text>

      {/* {props?.status != 'drawer' ? (
        <Text
          style={[
            styles.heading,
            {
              width: '15%',
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
          width: '30%',
          // marginLeft: 10,
          alignItems: 'center',
        }}>
        <Text style={[styles.heading, {color: AppColors.DarkText}]}>
          {props?.item ? `${'+91 ' + props?.item?.phone}` : 'મોબાઈલ નંબર'}
        </Text>
        {!props?.change ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 2.5,
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{paddingHorizontal: 2.5, marginLeft: 3}}
              onPress={() =>
                Linking.openURL(`tel:${'+91 ' + props?.item?.phone}`)
              }>
              <Image source={AppImages.CIRCLE_CALL_ICON} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={1}
              onPress={() =>
                Linking.openURL(
                  `whatsapp://send?phone=${props?.item?.phone}`,
                  // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
                )
              }>
              <Image source={AppImages.WHATSAPP_ICON} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View
        style={{
          width: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          paddingBottom: 2.5,
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
          <Text
            style={[
              styles.heading,
              {color: AppColors.DarkText, marginRight: 5},
            ]}>
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

export const BusinessBox = props => {
  return (
    <View style={{width: '30%', height: 100, margin: 5, ...props?.styles}}>
      <ShimmerCustomView />
    </View>
  );
};

export const BusinessDirectoryBox = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: '90%',
        height: 150,
        paddingVertical: 10,
        marginTop: 20,
      }}>
      <View style={{width: 100, height: 100, margin: 5}}>
        <ShimmerCustomView />
      </View>
      <View style={{height: 120, flex: 1, paddingVertical: 10}}>
        <View
          style={{
            width: 140,
            height: 20,
            marginLeft: 15,
          }}>
          <ShimmerCustomView />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View
            style={{
              width: 100,
              height: 15,
              marginLeft: 15,
            }}>
            <ShimmerCustomView />
          </View>
          <View
            style={{
              width: 50,
              height: 15,
              marginLeft: 10,
            }}>
            <ShimmerCustomView />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View
            style={{
              width: 100,
              height: 15,
              marginLeft: 15,
            }}>
            <ShimmerCustomView />
          </View>
          <View
            style={{
              width: 50,
              height: 15,
              marginLeft: 10,
            }}>
            <ShimmerCustomView />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View
            style={{
              width: 100,
              height: 15,
              marginLeft: 15,
            }}>
            <ShimmerCustomView />
          </View>
          <View
            style={{
              width: 50,
              height: 15,
              marginLeft: 10,
            }}>
            <ShimmerCustomView />
          </View>
        </View>
      </View>
    </View>
  );
};
