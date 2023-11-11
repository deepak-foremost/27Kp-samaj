import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {AppColors} from '../../../utils/AppColors';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import {ListMember} from '../advisour_member/AdvicerMember';
import ImageViewer from 'react-native-image-zoom-viewer';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';

const list = [
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
  },
  {
    name: 'પટેલ ધવલ વિષ્ણુભાઈ ',
    city: 'શંકરપુરા',
  },
];

const AppSponcerScreen = props => {
  const Detail = props?.route?.params.detail;
  const [sponcers, setSponcer] = useState(staticArray.AppSponcerList);
  const [isOpen, setOpen] = useState(false);
  const [currentPosition, setPosition] = useState(0);
  const [images, setImages] = useState([
    {
      url: 'https://fdhosting.ca/patidarsamaj/public/image1.jpg',
    },
  ]);

  //  const [images, setImages] = useState([
  //    {
  //      url: 'https://fdhosting.ca/patidarsamaj/public/image1.jpg',
  //    },
  //    {
  //      url: 'https://fdhosting.ca/patidarsamaj/public/image1.jpg',
  //    },
  //    {
  //      url: 'https://fdhosting.ca/patidarsamaj/public/image1.jpg',
  //    },
  //    {
  //      url: 'https://fdhosting.ca/patidarsamaj/public/image1.jpg',
  //    },
  //  ]);

  useState(() => {
    // getAppSponcerList(
    //   response => {
    //     if (response?.status) {
    //       setSponcer(response?.data);
    //     } else {
    //       setSponcer([]);
    //     }
    //   },
    //   error => {
    //     setSponcer([]);
    //   },
    // );
  }, []);

  useEffect(() => {
    setSponcer(list);
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        width: '100%',
      }}>
      {/* <AppDrawerHeader
        title={'પરિવાર પરિચય Application Sponsor'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar
          text={
            Detail == 'sponcer' ? 'જીવન સહાય સભાસદ સભ્ય ' : 'ભુમિ સભાસદ સભ્ય '
          }
        />
        <View
          style={{
            flex: 0.5,
            backgroundColor: '#fff',
            margin: 15,
            borderRadius: 15,
          }}>
          {sponcers == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.BackgroundColor,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingTop: 15,
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
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : sponcers?.length == 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: AppColors.BackgroundColor,
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  color: AppColors.lineColor,
                  fontSize: 15,
                }}>
                No List Found
              </Text>
            </View>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingBottom: 20,
              }}
              data={sponcers}
              ListHeaderComponent={
              
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 21,
                    paddingVertical: 5,   
                    justifyContent:'space-between'
                  }}>
                  <Text
                    style={{
                      // width: 15,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                    }}>
                    ક્રમ
                  </Text>
                  <Text
                    style={{
                      // flex: 1.5,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                      textAlign:'left'
                    }}>
                    નામ{'    '}
                  </Text>
                  <Text
                    style={{
                      // flex: 1,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                      textAlign:'center'
                    }}>
                    {'    '}ગામ
                  </Text>
                  <Text
                    style={{
                      // flex: 1.2,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                    }}>
                    મોબાઈલ નંબર
                  </Text>
                  <Text
                    style={{
                      // flex: 1,
                      color: AppColors.DarkText,
                      fontFamily: AppFonts.semiBold,
                      fontSize: 10,
                      
                    }}>{'       '}</Text>
                </View>
              }
              renderItem={({item, index}) => (
                <AboutCell
                  index={index}
                  item={item}
                  onClick={() =>
                    RootNavigation.push(
                      props?.navigation,
                      AppScreens.MEMBER_DETAIL_SCREEN,
                      item,
                    )
                  }
                />
              )}
            />
            // <FlatList
            //   showsHorizontalScrollIndicator={false}
            //   showsVerticalScrollIndicator={false}
            //   contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 15}}
            //   data={sponcers}
            //   renderItem={({item, index}) => (
            //     <SponcerCell
            //       item={item}
            //       index={index}
            //       onClick={() => {
            //         setPosition(0);
            //         // setPosition(index);
            //         setOpen(true);
            //       }}
            //     />
            //   )}
            // />
          )}

          <Modal visible={isOpen} transparent={true}>
            <ImageViewer
              imageUrls={images}
              index={currentPosition}
              onSwipeDown={() => setOpen(false)}
              enablePreload
              enableSwipeDown
              renderIndicator={() => <></>}
              renderHeader={() => (
                <View style={{paddingTop: 20}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen(false);
                    }}
                    style={{
                      height: 20,
                      width: 30,
                      marginRight: 10,
                      alignSelf: 'flex-end',
                      backgroundColor: AppColors.backgroundColor,
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
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </SafeAreaView>
  );
};

export default AppSponcerScreen;

const SponcerCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 5,
        backgroundColor: AppColors.backgroundColor,
        marginTop: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 14,
          flex: 1,
          color: AppColors.black,
          paddingVertical: 10,
        }}
        numberOfLines={1}>
        {props?.item?.name}
      </Text>

      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={props?.onClick}
        style={{
          backgroundColor: AppColors.red,
          borderRadius: 13,
          height: 23,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            color: AppColors.backgroundColor,
            fontFamily: AppFonts.bold,
            fontSize: 14,
          }}>{`Click Here`}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const AboutCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        backgroundColor: AppColors.BackgroundColor,
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 5,
        width: '100%',
       
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          justifyContent:'space-between',
          width:'100%'
        }}>
        <Text
          style={{
            width: 15,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
          }}>
          {props?.index + 1}.
        </Text>
        <Text
          style={{
            // flex: 1.5,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            // marginLeft: 10,
          }}>
          {props?.item?.name}
        </Text>

        {/* <Image
            style={{
              height: 14,
              marginVertical: 13,
              width: 1,
              marginRight: 5,
              backgroundColor: AppColors.light_grey,
            }}
          /> */}
        <Text
          style={{
            // flex: 1,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            // marginLeft: 5,
          }}>
          {props?.item?.city}
        </Text>
        {/* <Image
            style={{
              height: 14,
              marginVertical: 13,
              width: 1,
              marginRight: 5,
              backgroundColor: AppColors.Orange,
            }}
          /> */}
        {/* <TouchableOpacity
            style={{marginStart: 5,}}
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() => {
              props?.item?.phone == '-'
                ? Linking.openURL(
                    `tel:${props?.item?.country_code + '' + props?.item?.phone}`,
                  )
                : NaN;
            }}> */}
        {/* <Image
              source={
                props?.item?.phone?.length < 8 == '-' ? NaN : AppImages.CALL_ICON
              }
              style={{height: 15, width: 15, resizeMode: 'cover'}}
            /> */}
        {/* </TouchableOpacity> */}
        <Text
          style={{
            // flex: 1.2,
            color: AppColors.DarkText,
            fontFamily: AppFonts.semiBold,
            fontSize: 10,
            textAlign: 'center',
          }}>
          {props?.item?.phone == '-'
            ? ''
            : props?.item?.country_code + props?.item?.phone}
        </Text>
        <TouchableOpacity
          activeOpacity={AppConstValue.ButtonOpacity}
          onPress={props?.onClick}
          style={{
            backgroundColor: '#EB7E01',
            borderRadius: 13,
            height: 23,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
              color: AppColors.BackgroundColor,
              fontFamily: AppFonts.bold,
              fontSize: 10,
            }}>{`Quick Pay`}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
