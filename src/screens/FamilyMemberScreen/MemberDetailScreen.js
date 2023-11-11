import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {getSingleFamilies} from '../../../../networking/CallApi';
import {AppColors} from '../../utils/AppColors';
import {printLog} from '../../utils/AppConstValue';
import {AppFonts} from '../../utils/AppFonts';
import {AppImages} from '../../utils/AppImages';
import {AppScreens} from '../../utils/AppScreens';
import {AppStyles} from '../../utils/AppStyles';
import * as RootNavigation from '../../utils/RootNavigation';
import {MemberDetail} from '../MenuScreen/about_us/AboutUsDetailScreen';
import {ListMember} from '../MenuScreen/advisour_member/AdvicerMember';
import ScreenToolbar from '../../components/ScreenToolbar';
import BorderView from '../../components/BorderView';

const member = [
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '99999 99999',
    dob: '31/05/1991',
    age: '32',
    height: '165 CM',
    weight: '75 Kg',
    blood_group: 'A+',
    family_main_member_with_relation: 'પોતે',
    marital_status: ' Married',
    study: ' B.Tech',
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
  },
];

const MembersDetailScreen = props => {
  var item = props?.route?.params;
  // printLog('MembersDetailScreen', JSON.stringify(item));
    const [member, setMember] = useState(item);

  //   useEffect(() => {
  //     const willFocusSubscription = props.navigation.addListener('focus', () => {
  //       getMemberDetail();
  //     });

  //     return () => {
  //       willFocusSubscription;
  //     };
  //   }, []);

  //   const getMemberDetail = () => {
  //     getSingleFamilies(
  //       {id: item?.id},
  //       response => {
  //         printLog('MembersDetailScreen', JSON.stringify(response));
  //         if (response?.status) {
  //           setMember(response?.data);
  //         } else {
  //           setMember([]);
  //         }
  //       },
  //       error => {
  //         setMember([]);
  //       },
  //     );
  //   };

  //   useEffect(() => {
  //     getMemberDetail();
  //   }, []);

  return (
    <SafeAreaView
      style={[
        AppStyles.AppMainBackground,
        {backgroundColor: AppColors.BackgroundSecondColor},
      ]}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'પટેલ ધવલ વિષ્ણુભાઈ'} />

        {/* <AppDrawerHeader
        family_id
        title={`${item?.family_id} : ${item?.name}`}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
        onFamilyIdClick={() => {}}
      /> */}

        <View
          style={{
            marginTop: '5%',
            width: '90%',
            flex: 0.85,
            marginBottom: 20,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: AppColors.BackgroundColor,
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
          {member == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.BackgroundColor,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{width: '100%'}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      fontSize: 11,
                      color: AppColors.DarkText,
                    }}>
                    {item?.family_main_member_with_relation}
                    {' | '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      fontSize: 11,
                      color: AppColors.DarkText,
                    }}>
                    {item?.name}
                  </Text>
                </View>

                <View
                  style={{
                    height: 65,
                    width: 65,
                    borderRadius: 54,
                    backgroundColor: AppColors.BackgroundSecondColor,
                  }}>
                  {/* <Image
                  source={AppImages.placeholder_user}
                  style={{
                    height: 109,
                    width: 109,
                    borderRadius: 10,
                  }}
                /> */}

                  <Image
                    //   source={{uri: item?.image}}
                    source={AppImages.MEMBER_IMAGE}
                    style={{
                      height: 65,
                      width: 65,
                      resizeMode: 'stretch',
                      borderRadius: 10,
                    }}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    RootNavigation.push(
                      props?.navigation,
                      AppScreens.FamilyDetailScreen,
                      {
                        item: {...item, id: item?.user_id},
                      },
                    );
                  }}>
                  <Text
                    style={{
                      fontFamily: AppFonts.semiBold,
                      fontSize: 14,
                      color: AppColors.BackgroundSecondColor,
                      marginVertical: 10,
                    }}>
                    {item?.phone}
                  </Text>
                  {/* <MemberDetail
                    title={'Family Id :'}
                    detailText={item?.family_id}
                    textStyle={{
                      textDecorationLine: 'underline',
                      color: 'blue',
                    }}
                  /> */}
                </TouchableOpacity>

                <MemberDetail
                  style={{marginTop: 0}}
                  title={'ગામ :'}
                  detailText={item?.city}
                  textStyle={{color: AppColors.BackgroundSecondColor}}
                />
                <MemberDetail
                  style={{marginBottom: 10}}
                  title={'શાખ :'}
                  detailText={item?.shakh}
                  textStyle={{color: AppColors.BackgroundSecondColor}}
                />

                <MemberDetail title={'મોસાળ :'} detailText={item?.mosal} />
                <MemberDetail title={'સાસરું: '} detailText={item?.mosal} />

                <View style={{flexDirection: 'row'}}>
                  <MemberDetail
                    title={'જન્મ તારીખ :'}
                    style={{width: '35%'}}
                    detailText={
                      item?.dob != '' && item?.dob != undefined
                        ? moment(item?.dob, 'YYYY-MM-DD').format('DD-MM-YYYY')
                        : ''
                    }
                  />
                  <MemberDetail
                    style={{width: '35%'}}
                    title={' Age :'}
                    detailText={item?.age}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MemberDetail
                    style={{width: '30%'}}
                    title={'ઊંચાઈ :'}
                    detailText={item?.height}
                  />
                  <MemberDetail
                    style={{width: '30%'}}
                    title={'વજન :'}
                    detailText={item?.weight}
                  />
                </View>
                <MemberDetail
                  title={'બ્લડ ગ્રુપ :'}
                  detailText={item?.blood_group}
                />
                <MemberDetail
                  title={'કુટુંબ ના વડા સાથે નો સંબંધ :'}
                  detailText={item?.family_main_member_with_relation}
                />
                <MemberDetail
                  title={'લગ્ન સ્થિતિ :'}
                  detailText={item?.marital_status}
                />
                <MemberDetail title={'અભ્યાસ :'} detailText={item?.study} />
                <MemberDetail
                  title={'હાલ નો વ્યવસાય :'}
                  detailText={item?.business}
                />
                <MemberDetail
                  title={'વ્યવસાયનું સરનામું :'}
                  detailText={item?.business_address}
                />
                <MemberDetail
                  title={'હાલ ના રહેઠાણ નુ સરનામું :'}
                  detailText={item?.current_address}
                />
                <MemberDetail
                  title={'મોબાઇલ નંબર :'}
                  detailText={item?.phone}
                  contact
                />

                <MemberDetail title={'Email ID :'} detailText={item?.email} />
              </View>
            </ScrollView>
          )}
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
        {/* <FooterTextCell title={`''સૌનો સાથ...27 સમાજ નો વિકાસ''`} /> */}
      </View>
    </SafeAreaView>
  );
};

export default MembersDetailScreen;

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    alignContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#D5D5D5',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.9,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
        borderTopColor: '#fff',
      },
    }),
  },
  modelTextTitle: {
    fontSize: 16,
    width: '100%',
    paddingVertical: 5,
    fontFamily: AppFonts.semiBold,
    color: '#202020',
    textAlign: 'center',
    marginBottom: 20,
  },
  modelTextSubTitle: {
    width: '80%',
    textAlign: 'center',
    fontFamily: AppFonts.semiBold,
    color: '#828282',
  },
});
