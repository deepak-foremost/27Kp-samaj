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
  const [isLoading, setLoading] = useState(true);
  const status=props?.route?.params.status
  
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
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
      }}>
      {/* <AppDrawerHeader
        title={'સલાહકાર મેમ્બર'}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar text={status=='drawer' ? 'SUPPORT MEMBER':'કારોબારી સભ્યશ્રી'} />

        <View
          style={{
            marginTop: '5%',
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            paddingBottom: 15,
            backgroundColor: '#fff',
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
          <View style={{paddingHorizontal: 5, width: '100%'}}>
            <MemberCell 
            status={status}/>
          </View>
          <View
            style={{
              backgroundColor: AppColors.LightText,
              height: 1,
              width: '100%',
            }}
          />

          {isLoading && members == null ? (
            <View style={{marginTop: 15}}>
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
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{width: '100%', paddingHorizontal: 10}}
              data={members}
              renderItem={({item, index}) => (
                <MemberCell item={item} index={index} 
                status={status}/>
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
    </SafeAreaView>
  );
};

export default AdvicerMember;

export const MemberCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: props?.item ? 10 : 15,
        // borderBottomColor: '#e2e2e2',
        // borderBottomWidth: props?.item ? 1 : 0,
      }}>
      <Text
        style={[
          styles.heading,
          {
            width: '5%',
            marginLeft: 5,
            color:AppColors.DarkText

            // textAlign: props?.item ? 'center' : 'auto',
            // paddingLeft: props?.item ? 0 : '2%',
          },
        ]}>
        {props?.item ? `${props?.index + 1}` : 'ક્રમ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            width: '30%',
            color:AppColors.DarkText
          },
        ]}>
        {props?.item ? `${props?.item?.name}` : 'નામ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            width: '15%',
            color:AppColors.DarkText,

            marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.address}` : 'ગામ'}
      </Text>
      
      <Text
        style={[
          styles.heading,
          {
            width: '15%',
            color:AppColors.DarkText,

            marginLeft: 5,
          },
        ]}>
        {props?.status!='drawer' ? (props?.item ? `${props?.item?.hodo}` : 'હોદો'): null}
      </Text>
      <View
        style={{
          flexDirection: 'row',

          width: '20%',
          marginLeft: 5,
        }}>
        <Text style={[styles.heading, {color:AppColors.DarkText}]}>
          {props?.item ? `${props?.item?.phone}` : 'મોબાઈલ નંબર'}
        </Text>

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
          width: '10%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 5,
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
          <Text style={[styles.heading,{color:AppColors.DarkText}]}>ફોટો</Text>
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
