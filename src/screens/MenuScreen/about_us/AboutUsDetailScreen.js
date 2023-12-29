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
  Modal,
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
import ImageViewer from 'react-native-image-zoom-viewer';
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

  const title = route.params.item.title;
  const name = route.params.item.name;
  // console.warn(route.params.item.title);

  const [myList, setMyList] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    // printLog('AboutUsDetailScreen', JSON.stringify(props?.route?.params));
    getAboutUsListById(
      {id: route?.params?.item?.id},
      response => {
        printLog('getAboutUsListById', JSON.stringify(response));
        if (response?.status) {
          setMyList(response?.data);
          setLoading();
        } else {
          setMyList([]);
          setLoading(false);
        }
      },
      error => {
        printLog('getAboutUsListById', JSON.stringify(error));
        setMyList([]);
      },
    );
  }, []);

  const images = [
    {
      url: myList != null && myList[0]?.photo,
      props: {source: myList != null && myList[0]?.photo},
    },
  ];

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

        <ScreenToolbar text={title + ' : ' + name} />
        <Modal visible={isVisible} transparent>
          <ImageViewer
            imageUrls={images}
            // index={currentPosition}
            onSwipeDown={() => setVisible(false)}
            enablePreload
            enableSwipeDown
            renderHeader={() => (
              <View style={{paddingTop: 20}}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setVisible(false);
                  }}
                  style={{
                    height: 20,
                    width: 30,
                    marginRight: 10,
                    alignSelf: 'flex-end',
                    backgroundColor: AppColors.BackgroundColor,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={AppImages.ICON_CLOSE}
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </Modal>
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
                  elevation: 5,
                },
              }),
            }}>
            {myList != null ? (
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    myList[0]?.photo == '' ? null : setVisible(true);
                  }}>
                  <Image
                    source={
                      myList[0]?.photo == ''
                        ? AppImages.MEMBER_IMAGE
                        : {uri: myList[0]?.photo}
                    }
                    // source={AppImages.MEMBER_IMAGE}
                    style={{
                      height: 110,
                      width: 110,
                      resizeMode: 'contain',
                      backgroundColor: '#F2F2F2',
                      borderRadius: 15,
                      // borderRadius: 80,
                      // borderColor: '#0C65F7',
                      // borderWidth: 1,
                    }}
                  />
                </TouchableOpacity>
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
                  detailText={'+91 ' + myList[0]?.phone}
                  press={() =>
                    Linking.openURL(`tel:${'+91 ' + myList[0]?.phone}`)
                  }
                  iconOne
                />
              </View>
            ) : (
              <View>
                <ProfileView />
              </View>
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
          lineHeight: 20,
        }}>
        {props?.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 1,
          ...props.styles,
        }}>
        {props?.icon ? (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `tel:${props?.item?.phone + ' ' + props?.item?.phone}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            {' '}
            <Image source={AppImages.CIRCLE_CALL_ICON} />
          </TouchableOpacity>
        ) : null}

        <Text
          numberOfLines={3}
          style={{
            color: '#A4A4A4',
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            // textAlign: 'center',
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
                `whatsapp://send?phone=${props?.detailText}`,
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

const ProfileView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 120, height: 120}}>
        <ShimmerCustomView />
      </View>
      <View style={{width: 70, height: 20, marginVertical: 20}}>
        <ShimmerCustomView />
      </View>
      <View style={{width: 120, height: 20, marginTop: 15}}>
        <ShimmerCustomView />
      </View>
      <View style={{width: 70, height: 15, marginTop: 5}}>
        <ShimmerCustomView />
      </View>
      <View style={{width: 120, height: 20, marginTop: 15}}>
        <ShimmerCustomView />
      </View>
      <View style={{width: 70, height: 15, marginTop: 5}}>
        <ShimmerCustomView />
      </View>
    </View>
  );
};
