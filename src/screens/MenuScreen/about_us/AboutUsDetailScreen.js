import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Platform,
  StyleSheet,
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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {printLog} from '../../../utils/AppConstValue';
import {getAboutUsListById} from '../../../networking/CallApi';
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
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const mobile = route.params.item.number;

  // const title=route?.item?.name;
  // console.warn(title);

  // const [myList, setMyList] = useState(null);

  // useEffect(() => {
  //   printLog('AboutUsDetailScreen', JSON.stringify(props?.route?.params));

  //   getAboutUsListById(
  //     {id: route?.params?.item?.id},
  //     response => {
  //       printLog('getAboutUsListById', JSON.stringify(response));
  //       if (response?.status) {
  //         setMyList(response?.data);
  //       } else {
  //         setMyList([]);
  //       }
  //     },
  //     error => {
  //       printLog('getAboutUsListById', JSON.stringify(error));
  //       setMyList([]);
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
        <View style={{flex: 1}}>
          <View
            style={{
              marginTop: '5%',
              width: '90%',
              paddingHorizontal: 15,

              flex: 0.45,
              marginBottom: 30,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent:'center',
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
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 10,
                  paddingTop: 15,
                  paddingBottom: 5,
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '5%',
                  }}>
                  {'ક્રમ'}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '25%',
                  }}>
                  નામ
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '15%',
                  }}>
                  ગામ
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '13%',
                  }}>
                  હોદો
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '25%',
                  }}>
                  મોબાઈલ નંબર
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.DarkText,
                    width: '7%',

                    textAlign: 'right',
                  }}>
                  ફોટો
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
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Image
                  source={AppImages.MEMBER_IMAGE}
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: 'contain',
                    // borderRadius: 80,
                    // borderColor: '#0C65F7',
                    // borderWidth: 1,
                  }}
                />

                {/* <MemberDetail title={'નામ :'} detailText={myList[0]?.name} /> */}
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: AppFonts.semiBold,
                    color: AppColors.BackgroundSecondColor,
                    marginTop: 25,
                    marginBottom: 10,
                  }}>
                  {myList[0]?.name}
                </Text>
                <AboutUsMemberDetail
                  title={'Village Name'}
                  detailText={myList[0]?.city}
                  style={{marginBottom: 10}}
                />
                <AboutUsMemberDetail
                  title={'Phone Number'}
                  detailText={'+91 9999990099'}
                  press={() => Linking.openURL(`tel:${919999990099}`)}
                  iconOne
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
                      flexDirection: 'row',
                      paddingVertical: props?.item ? 10 : 10,
                      paddingHorizontal: 10,
                      justifyContent: 'space-between',
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
                          width: '5%',
                          color: AppColors.DarkText,
                        },
                      ]}>
                      {index + 1}
                    </Text>
                    <Text
                      style={[
                        styles.heading,
                        {
                          width: '25%',
                          color: AppColors.DarkText,
                        },
                      ]}>
                      {item ? `${item?.name}` : 'નામ'}
                    </Text>
                    <Text
                      style={[
                        styles.heading,
                        {
                          width: '15%',
                          color: AppColors.DarkText,
                        },
                      ]}>
                      {item ? `${item?.city}` : 'ગામ'}
                    </Text>
                    <Text
                      style={[
                        styles.heading,
                        {
                          width: '13%',
                          color: AppColors.DarkText,
                        },
                      ]}>
                      {item ? `${item?.title}` : 'હોદો'}
                    </Text>

                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        flexDirection: 'row',
                        width: '25%',
                        marginLeft: 10,
                        alignItems: 'center',
                      }}
                      onPress={() => Linking.openURL(`tel:${'9510135458'}`)}>
                      <Text
                        style={[styles.heading, {color: AppColors.DarkText}]}>
                        {item ? `${item?.phone}` : 'મોબાઈલ નંબર'}
                      </Text>

                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          activeOpacity={1}
                          style={{paddingHorizontal: 2.5}}
                          onPress={() =>
                            Linking.openURL(`tel:${'9510135458'}`)
                          }>
                          <Image source={AppImages.CIRCLE_CALL_ICON} />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingHorizontal: 5,
                          paddingVertical: 2.5,
                        }}
                        onPress={() =>
                          Linking.openURL(
                            `whatsapp://send?phone=${'9510135458'}`,
                            // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
                          )
                        }>
                        <Image source={AppImages.WHATSAPP_ICON} />
                      </TouchableOpacity>
                    </TouchableOpacity>

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
                        <Text
                          style={[styles.heading, {color: AppColors.DarkText}]}>
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
                  // <View
                  //   style={{
                  //     marginHorizontal: 1,
                  //     flexDirection: 'row',
                  //     marginTop: 10,
                  //     paddingVertical: 5,
                  //     alignItems: 'center',
                  //     alignSelf: 'center',
                  //     backgroundColor: AppColors.BackgroundColor,
                  //     borderRadius: 10,
                  //     backgroundColor: 'white',
                  //     ...Platform.select({
                  //       ios: {
                  //         shadowColor: '#D5D5D5',
                  //         shadowOffset: {width: 0, height: -1},
                  //         shadowOpacity: 0.9,
                  //         shadowRadius: 3,
                  //       },
                  //       android: {
                  //         elevation: 2,
                  //       },
                  //     }),
                  //   }}>
                  //   <Text
                  //     style={{
                  //       width: '10%',
                  //       color: AppColors.black,
                  //       fontFamily: AppFonts.semiBold,
                  //       fontSize: 10,
                  //       textAlign: 'center',
                  //     }}>
                  //     {index + 1}
                  //   </Text>
                  //   <Text
                  //     style={{
                  //       width: '30%',
                  //       paddingStart: 10,
                  //       color: AppColors.black,
                  //       fontFamily: AppFonts.semiBold,
                  //       fontSize: 10,
                  //     }}>
                  //     {item?.name}
                  //   </Text>
                  //   <TouchableOpacity
                  //     activeOpacity={0.9}
                  //     onPress={() => Linking.openURL(`tel:${item?.phone}`)}
                  //     style={{
                  //       width: '35%',
                  //       height: '100%',
                  //       paddingStart: 10,
                  //       flexDirection: 'row',
                  //       alignItems: 'center',
                  //     }}>
                  //     <Text
                  //       style={{
                  //         color: AppColors.black,
                  //         fontFamily: AppFonts.semiBold,
                  //         fontSize: 10,
                  //       }}>
                  //       {item?.phone}
                  //     </Text>

                  //     <Image
                  //       source={AppImages.CALL_ICON}
                  //       style={{height: 14, width: 14, marginHorizontal: 5}}
                  //     />
                  //   </TouchableOpacity>
                  //   <Text
                  //     style={{
                  //       width: '25%',
                  //       paddingStart: 10,
                  //       color: AppColors.black,
                  //       fontFamily: AppFonts.semiBold,
                  //       fontSize: 10,
                  //     }}>
                  //     {item?.city}
                  //   </Text>
                  // </View>
                )}
              />
            )}
          </View>
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
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
export default AboutUsDetailScreen;

export const MemberDetail = props => {
  return (
    <View
      style={{
        // marginTop: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // width: '100%',
        ...props.style,
        flexDirection: 'row',
        
      }}>
      <Text
        style={{
          color: AppColors.black,
          fontFamily: AppFonts.semiBold,
          fontSize: 13,
          textAlign: 'center',
          lineHeight:20
        }}>
        {props?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props?.icon ? (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `tel:${props?.item?.phone}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            {' '}
            <Image source={AppImages.CIRCLE_CALL_ICON} />
          </TouchableOpacity>
        ) : null}

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
        activeOpacity={1}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#A4A4A4',
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            textAlign: 'left',
            marginRight: 8,
            textAlignVertical: 'center',

            ...props?.textStyle,
          }}>
          {props?.detailText}
        </Text>
        {props?.iconOne ? (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              alignItems: 'center',
              paddingBottom: 2.5,
            }}
            onPress={props?.press}>
            <Image style={{}} source={AppImages.CIRCLE_CALL_ICON} />
          </TouchableOpacity>
        ) : null}
        {props?.iconTwo ? (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?phone=${'9510135458'}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            <Image source={AppImages.WHATSAPP_ICON} />
          </TouchableOpacity>
        ) : null}
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
