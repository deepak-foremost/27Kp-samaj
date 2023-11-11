import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {getFamilyMembersList} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens, MyLog} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {ListMember} from '../advisour_member/AdvicerMember';
import BorderView from '../../../components/BorderView';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {MemberDetail} from '../about_us/AboutUsDetailScreen';

const members = [
  {
    id:0,
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
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    id:1,
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
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    id:2,
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
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
];

const FamilyDetailScreen = props => {
  const [visible,setVisible]=useState(-1);
  
  var item = props?.route?.params?.item;
  // MyLog('FamilyDetailScreen', JSON.stringify(props?.route?.params?.item));
  // const [members, setMembers] = useState(null);
  //   useEffect(() => {
  //     getFamilyMembersList(
  //       {id: item?.id, flag: 'all'},
  //       response => {
  //         printLog('SUCCESS', JSON.stringify(response));
  //         if (response?.status) {
  //           setMembers(response?.data);
  //         } else {
  //           setMembers([]);
  //         }
  //       },
  //       error => {
  //         printLog('ERROR', JSON.stringify(error));
  //         setMembers([]);
  //       },
  //     );
  //   }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
      }}>
      {/* <AppDrawerHeader
        title={`${item?.family_id} : ${item?.name}`}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={item.name} />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 22,
            marginTop: 15,
            backgroundColor: AppColors.BackgroundSecondColor,
            marginHorizontal: 15,
            borderRadius: 8,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: AppFonts.semiBold,
              fontSize: 13,
            }}>
            {`મોં : ${item?.family_id}`}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: AppFonts.semiBold,
              fontSize: 13,
              marginTop: 10,
            }}>
            {`ગામ : ${item?.city}`}
          </Text>
        </View>

        {members == null ? (
          <View
            style={{
              flex: 1,
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
        ) : members?.length == 0 ? (
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
            contentContainerStyle={{paddingVertical: 15}}
            data={members == null ? [] : members}
            renderItem={(item, index) => {
              printLog(`ITEM$${index}`, JSON.stringify(item?.item));
              return (
                <View style={{}}>
                  <FamilyMermberCell
                    index={index}
                    item={item?.item}
                    visible={visible}
                    onClick={() =>
                     
                      visible==item?.index ? setVisible(-1) : setVisible(item?.index)
                      // RootNavigation.push(
                      //   props?.navigation,
                      //   AppScreens.MEMBER_DETAIL_SCREEN,
                      //   item?.item,
                      // )
                    }
                  />
                  {/* {
                    item?.item.id==visible ? ( <MemberDetailCell item={item?.item} />):
                    null
                  } */}
                 
                </View>
              );
            }}
          />
        )}
        {/* <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        /> */}
        {/* <FooterTextCell title={`પરિવાર નુ ખુબ ખુબ અભિનંદન`} /> */}
      </View>
    </SafeAreaView>
  );
};

export default FamilyDetailScreen;

const FamilyMermberCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        // flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 5,
        marginHorizontal: 17,
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
      {/* <Image
        source={AppImages.FAMILY_MEMBER_ICON}
        style={{
          height: 19,
          width: 10,
          alignSelf: 'center',
          marginRight: 10,
          resizeMode: 'contain',
          tintColor: '#BDBDBD',
        }}
      /> */}
      <View style={{flexDirection:'row',flex:1}}> 
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 11,
          color: AppColors.DarkText,
          paddingVertical: 10,
          marginRight: 10,
        }}>
        {props?.item?.family_main_member_with_relation}
      </Text>
      <Image
        style={{
          height: '40%',
          width: 2,
          backgroundColor: AppColors.LightText,
          alignSelf: 'center',
          marginRight: 10,
          resizeMode: 'contain',
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          fontFamily: AppFonts.semiBold,
          fontSize: 11,
          color:
            props?.item?.index % 2 == 1 ? AppColors.Red : AppColors.DarkText,
          paddingVertical: 10,
        }}>{`${props?.item?.name}`}</Text>
      <Image
        style={{alignSelf: 'center', tintColor: '#C5C5C5'}}
        source={props?.visible==props?.item?.id ?  AppImages.DROP_UP_ICON :AppImages.DROP_DOWN_GRAY }
      />
      </View>
      {
        props?.visible==props?.item?.id ? ( <MemberDetailCell />): null
      }
     
    </TouchableOpacity>
  );
};

const MemberDetailCell = props => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius:8,
        backgroundColor: '#fff',
        padding: 15,
        marginTop:-7,
        ...Platform.select({
          ios: {
            shadowColor: '#D5D5D5',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.9,
            shadowRadius: 3,
          },
          android: {
            elevation: 0,
          },
        }),
      }}>
      <View style={{alignItems: 'center'}}>
        {/* <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 11,
              color: AppColors.DarkText,
            }}>
            {props?.item?.family_main_member_with_relation}
            {' | '}
          </Text>
          <Text
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 11,
              color: AppColors.DarkText,
            }}>
            {props?.item?.name}
          </Text>
        </View> */}

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
              marginVertical: 5,
            }}>
            {props?.item?.phone}
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
          detailText={props?.item?.city}
          textStyle={{color: AppColors.BackgroundSecondColor}}
        />
        <MemberDetail
          style={{marginBottom: 10}}
          title={'શાખ :'}
          detailText={props?.item?.shakh}
          textStyle={{color: AppColors.BackgroundSecondColor}}
        />

        <MemberDetail title={'મોસાળ :'} detailText={props?.item?.mosal} />
        <MemberDetail title={'સાસરું: '} detailText={props?.item?.mosal} />

        <View style={{flexDirection: 'row'}}>
          <MemberDetail
            title={'જન્મ તારીખ :'}
            style={{width: '35%'}}
            detailText={
              props?.item?.dob != '' && props?.item?.dob != undefined
                ? moment(props?.item?.dob, 'YYYY-MM-DD').format('DD-MM-YYYY')
                : ''
            }
          />
          <MemberDetail
            style={{width: '35%'}}
            title={'|   Age :'}
            detailText={props?.item?.age}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <MemberDetail
            style={{width: '30%'}}
            title={'ઊંચાઈ :'}
            detailText={props?.item?.height}
          />
          <MemberDetail
            style={{width: '30%'}}
            title={'વજન :'}
            detailText={props?.item?.weight}
          />
        </View>
        <MemberDetail
          title={'બ્લડ ગ્રુપ :'}
          detailText={props?.item?.blood_group}
        />
        <MemberDetail
          title={'કુટુંબ ના વડા સાથે નો સંબંધ :'}
          detailText={props?.item?.family_main_member_with_relation}
        />
        <MemberDetail
          title={'લગ્ન સ્થિતિ :'}
          detailText={props?.item?.marital_status}
        />
        <MemberDetail title={'અભ્યાસ :'} detailText={props?.item?.study} />
        <MemberDetail
          title={'હાલ નો વ્યવસાય :'}
          detailText={props?.item?.business}
        />
        <MemberDetail
          title={'વ્યવસાયનું સરનામું :'}
          detailText={props?.item?.business_address}
        />
        <MemberDetail
          title={'હાલ ના રહેઠાણ નુ સરનામું :'}
          detailText={props?.item?.current_address}
        />
        <MemberDetail
          title={'મોબાઇલ નંબર :'}
          detailText={props?.item?.phone}
          contact
        />

        <MemberDetail title={'Email ID :'} detailText={props?.item?.email} />
      </View>
    </View>
  );
};
