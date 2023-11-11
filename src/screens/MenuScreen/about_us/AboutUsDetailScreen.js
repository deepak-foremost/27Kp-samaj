import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {getAboutUsListById} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
// import { printLog } from '../../../utils/AppConstValue';
// import {AppConstValue} from '../../../../utils/AppConstValue';

import {AppFonts} from '../../../utils/AppFonts';

import {AppImages} from '../../../utils/AppImages';
// import {AppScreens} from '../../../../utils/AppScreens';
// import {AppStyles} from '../../../../utils/AppStyles';

import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import ShimmerCustomView from '../../../components/ShimmerCustomView';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
// import {ListMember} from '../advisour_member/AdvicerMemberScreeen';

const myList = [
  {
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'પૌરાણિક માન્યતાઓ',
    photo: require('../../../assets/images/phone_icon.png'),
    phone: 888888888,
  },
  {
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'પૌરાણિક માન્યતાઓ',
    photo: require('../../../assets/images/phone_icon.png'),
    phone: 888888888,
  },
];

const AboutUsDetailScreen = ({props, route}) => {
  const mobile = route.params.item.number;
  console.warn(mobile);
  // const title=route?.item?.name;
  // console.warn(title);

  //   const [myList, setMyList] = useState(null);

  //   useEffect(() => {
  //     printLog('AboutUsDetailScreen', JSON.stringify(props?.route?.params));

  //     getAboutUsListById(
  //       {id: props?.route?.params?.id},
  //       response => {
  //         printLog('getAboutUsListById', JSON.stringify(response));
  //         if (response?.status) {
  //           setMyList(response?.data);
  //         } else {
  //           setMyList([]);
  //         }
  //       },
  //       error => {
  //         printLog('getAboutUsListById', JSON.stringify(error));
  //         setMyList([]);
  //       },
  //     );
  //   }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
      }}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        {/* <Image
          source={AppImages.FORM_ICON}
          style={{
            height: '20%',
            resizeMode: 'cover',
            width: '100%',
            position: 'absolute',
          }}
        /> */}

        <ScreenToolbar text={'પ્રમુખ શ્રી : રાજેશ ભાઈ પટેલ'} />

        {/* <AppDrawerHeader
        title={props?.route?.params?.title}
        background={false}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

        <View
          style={{
            marginTop: '5%',
            width: '90%',
            flex: 0.6,
            marginBottom: 30,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
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
          {myList == null || (myList?.length > 1 && mobile == 2) ? (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  width: '10%',
                  color: AppColors.black,
                  fontFamily: AppFonts.semiBold,
                  fontSize: 10,
                }}>
                ક્રમ
              </Text>
              <Text
                style={{
                  paddingStart: 10,
                  width: '30%',
                  color: AppColors.black,
                  fontFamily: AppFonts.semiBold,
                  fontSize: 10,
                }}>
                નામ
              </Text>
              <Text
                style={{
                  width: '35%',
                  paddingStart: 10,
                  color: AppColors.black,
                  fontFamily: AppFonts.semiBold,
                  fontSize: 10,
                }}>
                Mobile No
              </Text>
              <Text
                style={{
                  width: '25%',
                  paddingStart: 10,
                  color: AppColors.black,
                  fontFamily: AppFonts.semiBold,
                  fontSize: 10,
                }}>
                Village
              </Text>
            </View>
          ) : (
            <></>
          )}
          {myList == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.BackgroundColor,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              <ListMember styles={{height: 20}} />
              <ListMember styles={{height: 20}} />
              <ListMember styles={{height: 20}} />
              <ListMember styles={{height: 20}} />
              <ListMember styles={{height: 20}} />
            </View>
          ) : (myList != null && myList?.length == 1) || mobile == 1 ? (
            <View style={{alignItems: 'center', width: '100%'}}>
              <Image
                source={require('../../../assets/images/member_image.png')}
                style={{
                  height: 109,
                  width: 109,
                  resizeMode: 'contain',
                  backgroundColor: AppColors.BackgroundColor,
                  borderRadius: 80,
                  borderColor: '#0C65F7',
                  borderWidth: 1,
                }}
              />

              {/* <MemberDetail title={'નામ :'} detailText={myList[0]?.name} /> */}
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: AppFonts.semiBold,
                  color: AppColors.BackgroundSecondColor,
                  marginTop: 25,
                  marginBottom: 15,
                }}>
                {myList[0]?.name}
              </Text>
              <AboutUsMemberDetail
                title={'Vilalge Name'}
                detailText={myList[0]?.city}
                style={{marginBottom: 15}}
              />
              <AboutUsMemberDetail
                title={'Phone Number'}
                detailText={'+91 9999990099'}
                icon
              />
            </View>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
                width: '100%',
              }}
              data={myList == null ? [] : myList}
              renderItem={({item, index}) => (
                <View
                  style={{
                    marginHorizontal: 1,
                    flexDirection: 'row',
                    marginTop: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: AppColors.BackgroundColor,
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
                        elevation: 2,
                      },
                    }),
                  }}>
                  <Text
                    style={{
                      width: '10%',
                      color: AppColors.black,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                      textAlign: 'center',
                    }}>
                    {index + 1}
                  </Text>
                  <Text
                    style={{
                      width: '30%',
                      paddingStart: 10,
                      color: AppColors.black,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                    }}>
                    {item?.name}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => Linking.openURL(`tel:${item?.phone}`)}
                    style={{
                      width: '35%',
                      height: '100%',
                      paddingStart: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: AppColors.black,
                        fontFamily: AppFonts.semiBold,
                        fontSize: 10,
                      }}>
                      {item?.phone}
                    </Text>

                    <Image
                      source={AppImages.CALL_ICON}
                      style={{height: 14, width: 14, marginHorizontal: 5}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      width: '25%',
                      paddingStart: 10,
                      color: AppColors.black,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                    }}>
                    {item?.city}
                  </Text>
                </View>
              )}
            />
          )}
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutUsDetailScreen;

export const MemberDetail = props => {
  return (
    <View
      style={{
        marginTop: 3,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        ...props.style,
        flexDirection:'row'
      }}>
      <Text
        style={{
          color: AppColors.black,
          fontFamily: AppFonts.semiBold,
          fontSize: 13,
          textAlign: 'center',
        }}>
        {props?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        {props?.icon ? <Image source={AppImages.CALL_ICON} /> : null}

        <Text
          style={{
            color: '#A4A4A4',
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            textAlign: 'center',
            marginLeft: 10,
            ...props?.textStyle,
          }}>
          {props?.detailText}
        </Text>
      </View>

      {/* {props?.contact ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 30,
          }}>
         
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => Linking.openURL(`tel:${props?.detailText}`)}
            style={{
              height: 24,
              width: 24,
              borderRadius: 15,
              borderColor: 'gray',
              borderWidth: 1,
            }}>
           
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )} */}
    </View>
  );
};

export const AboutUsMemberDetail = props => {
  return (
    <View
      style={{
        marginTop: 10,
        justifyContent: 'center',
        width: '100%',
        ...props.style,
        
      }}>
      <Text
        style={{
          color: AppColors.DarkText,
          fontFamily: AppFonts.semiBold,
          fontSize: 13,
          textAlign: 'center',
        }}>
        {props?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
        {props?.icon ? <Image source={AppImages.CALL_ICON} /> : null}

        <Text
          style={{
            color: '#A4A4A4',
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            textAlign: 'center',
            marginLeft: 10,
            ...props?.textStyle,
          }}>
          {props?.detailText}
        </Text>
      </View>

     
    </View>
  );
};

export const ListMember = props => {
  return (
    <View
      style={{width: '95%', height: 30, marginVertical: 10, ...props?.styles}}>
      <ShimmerCustomView />
    </View>
  );
};
