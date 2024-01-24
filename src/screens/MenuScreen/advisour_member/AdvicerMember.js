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
import {
  getAboutKarobari,
  getSalahkarMember,
  getYearRange,
} from '../../../networking/CallApi';
import ZoomImage from '../../../components/ZoomImage';

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
  const [value, setValue] = useState('Select year');
  const [valueId, setValueId] = useState('');
  const [range, setRange] = useState([]);
  const [members, setMembers] = useState(null);
  const rangeid = props?.route?.params?.range;
  const karobari = props?.route?.params?.karobari;
  const [items, setItem] = useState();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const images = [
    {
      url: items != null && items?.image,
      props: {source: items != null && items?.image},
    },
  ];

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  // useEffect(() => {
  //   getYearRange(
  //     response => {
  //       printLog('getYearRange', JSON.stringify(response));
  //       if (response?.status) {
  //         var data = [];
  //         for (let i = 0; i < response?.data?.length; i++) {
  //           data.push({
  //             name: response?.data[i]?.range,
  //             id: response?.data[i]?.id,
  //           });
  //           if (i == 0) {
  //             setValue(response?.data[i]?.range);
  //             setValueId(response?.data[i]?.id);
  //           }
  //         }

  //         setRange(data);
  //       }
  //     },
  //     error => {
  //       printLog('getYearRange', error);
  //     },
  //   );
  // }, []);

  useEffect(() => {
    setLoading(true);
    if (status == 'drawer') {
      getSalahkarMember(
        {page: page},
        response => {
          printLog('AdvicerMember', JSON.stringify(response));
          setTotalPage(response?.last_page);
          if (response?.status) {
            var list = members == null ? [] : [...members];
            if (page == 1) {
              setMembers(response?.data);
            } else {
              setMembers([...list, ...response?.data]);
            }
            // setMembers([]);
          } else {
            setMembers([]);
          }
          setLoading(false);
        },
        error => {
          setLoading(false);
          setMembers([]);
        },
      );
    } else {
      console.log('karobari', karobari);
      setMembers(karobari);
      // console.warn(rangeid);
      // getYearRange(
      //   response => {
      //     printLog('getYearRange', JSON.stringify(response));
      //     if (response?.status) {
      //       var data = [];
      //       for (let i = 0; i < response?.data?.length; i++) {
      //         data.push({
      //           name: response?.data[i]?.range,
      //           id: response?.data[i]?.id,
      //         });
      //         if (i == 0) {
      //           setValue(response?.data[i]?.range);
      //           setValueId(response?.data[i]?.id);
      //         }
      //       }

      //       setRange(data);
      //     }
      //   },
      //   error => {
      //     printLog('getYearRange', error);
      //   },
      // );
    }
  }, [page]);

  // useEffect(() => {
  //   setLoading(true);
  //   if (status != 'drawer') {
  //     getAboutKarobari(
  //       `range_id=${valueId}`,
  //       response => {
  //         printLog('getAboutUskarobari', JSON.stringify(response));
  //         if (response?.status) {
  //           setMembers(response?.data);
  //           setLoading(false);
  //         } else {
  //           setMembers([]);
  //           setLoading(false);
  //         }
  //       },
  //       error => {
  //         printLog('getAboutUsMember', error);
  //         setMembers([]);
  //         setLoading(false);
  //       },
  //     );
  //   } else {
  //     console.log('karobari', karobari);
  //     setMembers(karobari);
  //   }
  // }, [valueId]);

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
        <ZoomImage
          visible={open}
          images={images}
          dismiss={() => setOpen(false)}
        />
        {/* <View
          style={{
            flex: 0.88,
            marginTop: '5%',
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: AppColors.backgroundColor,
            borderRadius: 10,
            paddingBottom: 10,
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
          <View style={{paddingHorizontal: 5, width: '100%'}}>
          
            <MemberCell status={status} />
          </View>
          <View
            style={{
              backgroundColor: AppColors.line_color,
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
                  fontFamily: fontProximaNova.semiBold,
                  color: AppColors.light_grey,
                }}>
                No Members Available
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{width: '100%'}}
              data={members}
              renderItem={({item, index}) => (
                <MemberCell item={item} index={index} status={status} />
              )}
            />
          )}
        </View> */}

        <View
          style={{
            // marginTop: '5%',
            width: '100%',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            paddingBottom: 15,
            flex: 0.9,
          }}>
          <View style={{width: '100%', paddingHorizontal: 15}}>
            <AboutKarobariCell
              change={true}
              status={status}
              style={{paddingVertical: 5}}
            />
          </View>

          {isLoading && members == null ? (
            <View style={{marginTop: 15, width: '95%', alignItems: 'center'}}>
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
              contentContainerStyle={{
                paddingBottom: 10,
                paddingHorizontal: 15,
              }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              onEndReached={() => {
                LoadMore();
              }}
              style={{width: '100%'}}
              data={members}
              renderItem={({item, index}) => (
                <View>
                  {status == 'drawer' ? (
                    <AboutKarobariCell
                      item={item}
                      index={index}
                      status={status}
                      imgPress={() => {
                        setItem(item);
                        setOpen(item?.image == '' ? false : true);
                      }}
                    />
                  ) : (
                    <AboutKarobariCell
                      item={item}
                      index={index}
                      status={status}
                      imgPress={() => {
                        setItem(item);
                        setOpen(item?.image == '' ? false : true);
                      }}
                    />
                  )}
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
    </View>
  );
};

export default AdvicerMember;

// export const MemberCell = props => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         paddingVertical: props?.item ? 10 : 15,
//         paddingHorizontal: 5,
//         // borderBottomColor: '#e2e2e2',
//         // borderBottomWidth: props?.item ? 1 : 0,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: props?.change ? AppColors.fadeBackground : '#fff',
//         marginTop: 15,
//         borderRadius: 8,
//         ...props.style,
//         ...Platform.select({
//           ios: {
//             shadowColor: '#D5D5D5',
//             shadowOffset: {width: 0, height: -1},
//             shadowOpacity: props?.change ? 0 : 0.9,
//             shadowRadius: 3,
//           },
//           android: {
//             elevation: props?.change ? 0 : 3,
//           },
//         }),
//       }}>
//       <Text
//         style={[
//           styles.heading,
//           {
//             width: '5%',

//             color: AppColors.DarkText,

//             // textAlign: props?.item ? 'center' : 'auto',
//             // paddingLeft: props?.item ? 0 : '2%',
//           },
//         ]}>
//         {props?.item ? `${props?.index + 1}.` : 'ક્રમ'}
//       </Text>
//       <Text
//         style={[
//           styles.heading,
//           {
//             width: '30%',
//             color: AppColors.DarkText,
//           },
//         ]}>
//         {props?.item ? `${props?.item?.name}` : 'નામ'}
//       </Text>
//       <Text
//         style={[
//           styles.heading,
//           {
//             width: '23%',
//             color: AppColors.DarkText,
//             // marginLeft: 5,
//           },
//         ]}>
//         {props?.item ? `${props?.item?.city}` : 'ગામ'}
//       </Text>
//       <View
//         style={{
//           flexDirection: 'row',
//           width: '27%',
//           // marginLeft: 10,
//           marginRight: 5,
//           alignItems: 'center',
//         }}>
//         <Text
//           style={[styles.heading, {color: AppColors.DarkText, fontSize: 9}]}>
//           {props?.item
//             ? `${props?.item?.country_code + props?.item?.phone}`
//             : 'મોબાઈલ નંબર'}
//         </Text>
//         {!props?.change ? (
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               paddingBottom: 2.5,
//             }}>
//             <TouchableOpacity
//               activeOpacity={1}
//               style={{paddingHorizontal: 2.5, marginLeft: 3}}
//               onPress={() =>
//                 Linking.openURL(
//                   `tel:${props?.item?.country_code + props?.item?.phone}`,
//                 )
//               }>
//               <Image source={AppImages.CIRCLE_CALL_ICON} />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 padding: 5,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//               activeOpacity={1}
//               onPress={() =>
//                 Linking.openURL(
//                   `whatsapp://send?phone=${
//                     props?.item?.country_code + props?.item?.phone
//                   }`,
//                   // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
//                 )
//               }>
//               <Image source={AppImages.WHATSAPP_ICON} />
//             </TouchableOpacity>
//           </View>
//         ) : null}
//       </View>
//       <TouchableOpacity
//         activeOpacity={1}
//         style={{
//           width: '7%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginLeft: 10,
//           paddingBottom: 2.5,
//         }}
//         onPress={props?.imgPress}>
//         {props?.item ? (
//           <Image
//             style={{
//               height: 15,
//               width: 15,
//               // borderColor: 'black',
//               // borderWidth: 1,
//               borderRadius: 10,
//               backgroundColor: '#F2F2F2',
//               // resizeMode:'contain'
//             }}
//             source={
//               props?.item?.image == ''
//                 ? AppImages.MEMBER_IMAGE
//                 : {uri: props?.item?.image}
//             }
//           />
//         ) : (
//           <Text
//             style={[
//               styles.heading,
//               {color: AppColors.DarkText, marginRight: 5},
//             ]}>
//             ફોટો
//           </Text>
//         )}
//       </TouchableOpacity>

//       {/* <Text
//         style={[
//           styles.heading,
//           {

//           },
//         ]}>
//         {props?.item ? `${props?.item?.city}` : 'Photo'}
//       </Text> */}
//     </View>
//   );
// };

export const AboutKarobariCell = props => {
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
            // width: '5%',
            flex: 0.4,
            fontSize: 9,
            color: AppColors.DarkText,
            // textAlign: props?.item ? 'center' : 'auto',
            paddingRight: props?.item ? 0 : 5,
          },
        ]}>
        {props?.item ? `${props?.index + 1}.` : 'ક્રમ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            // width: props?.status == 'drawer'? '30%':'25%',
            flex: props?.status == 'drawer' ? 2.5 : 2,
            color: AppColors.DarkText,
            fontSize: 9,
            paddingRight: 3,
          },
        ]}>
        {props?.item ? `${props?.item?.name}` : 'નામ'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            // width:props?.status == 'drawer'? '20%':'15%',
            flex: props?.status == 'drawer' ? 2 : 1.5,
            color: AppColors.DarkText,
            fontSize: 9,
            // marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.city}` : 'ગામ'}
      </Text>
      {props?.status != 'drawer' ? (
        <Text
          style={[
            styles.heading,
            {
              // width: '20%',
              flex: 2,
              color: AppColors.DarkText,
              fontSize: 9,
            },
          ]}>
          {props?.item ? `${props?.item?.hodo}` : 'હોદો'}
        </Text>
      ) : null}
      <View
        style={{
          flexDirection: props?.status == 'drawer' ? 'row' : '',
          // width:props?.status == 'drawer'? '35%':'26%',
          flex: props?.status == 'drawer' ? 3.5 : 2.5,
          // marginLeft: 10,
          paddingLeft: 5,
        }}>
        <Text
          style={[styles.heading, {color: AppColors.DarkText, fontSize: 9}]}>
          {props?.item
            ? `${props?.item?.country_code + props?.item?.phone}`
            : 'મોબાઈલ નંબર'}
        </Text>
        {!props?.change ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 2.5,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{paddingHorizontal: 2.5, paddingLeft: 3}}
              onPress={() =>
                Linking.openURL(
                  `tel:${props?.item?.country_code + props?.item?.phone}`,
                )
              }>
              <Image source={AppImages.CIRCLE_CALL_ICON} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
              }}
              activeOpacity={1}
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
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          // width: '7%',
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          // marginLeft: 5,
          paddingBottom: 2.5,
        }}
        onPress={props?.imgPress}>
        {props?.item ? (
          <Image
            style={{
              height: 15,
              width: 15,
              // borderColor: 'black',
              // borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#F2F2F2',
              // resizeMode:'contain'
            }}
            source={
              props?.item?.image == ''
                ? AppImages.MEMBER_IMAGE
                : {uri: props?.item?.image}
            }
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
      </TouchableOpacity>
    </View>
  );
};

const MemberCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: props?.item ? 13 : 10,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: props?.item ? 1 : 0,
      }}>
      <Text
        style={[
          styles.heading,
          {
            flex: 0.6,
            textAlign: props?.item ? 'center' : 'auto',
            paddingLeft: props?.item ? 0 : '2%',
          },
        ]}>
        {props?.item ? `${props?.index + 1}` : 'ક્રમ.'}
      </Text>
      <Text
        style={[
          styles.heading,
          {
            flex: props?.status != 'drawer' ? 2 : 2.5,
            paddingLeft: props?.item ? '3%' : 0,
          },
        ]}>
        {props?.item ? `${props?.item?.name}` : 'નામ'}
      </Text>

      <Text
        style={[
          styles.heading,
          {
            flex: 1.5,
            marginLeft: 5,
          },
        ]}>
        {props?.item ? `${props?.item?.city}` : 'ગામ'}
      </Text>
      {props?.status != 'drawer' ? (
        <Text
          style={[
            styles.heading,
            {
              flex: 1.6,
              marginHorizontal: 2,
            },
          ]}>
          {props?.item ? `${props?.item?.hodo}` : 'હોદો'}
        </Text>
      ) : (
        <></>
      )}
      <View
        style={{
          flexDirection: 'row',
          flex: 2.9,
          alignItems: 'center',
          // paddingLeft: props?.item ? '3%' : 0,
        }}>
        <Text
          style={[
            styles.heading,
            {
              paddingLeft: props?.item ? '3%' : 0,
              fontSize: 9,
            },
          ]}>
          {props?.item
            ? `${props?.item?.country_code + props?.item?.phone}`
            : 'મોબાઈલ નંબર'}
        </Text>

        {props?.item && props?.item?.phone !== 'NA' ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                Linking.openURL(
                  `tel:${props?.item?.country_code + props?.item?.phone}`,
                );
              }}>
              <Image
                source={AppImages.CIRCLE_CALL_ICON}
                style={{marginStart: 5}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Linking.openURL(
                  `whatsapp://send?phone=${
                    props?.item?.country_code + props?.item?.phone
                  }`,
                  // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
                );
              }}>
              <Image
                source={AppImages.WHATSAPP_ICON}
                style={{marginStart: 5}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 0.9,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          paddingBottom: 2.5,
        }}
        onPress={props?.imgPress}>
        {props?.item ? (
          <Image
            style={{
              height: 15,
              width: 15,
              // borderColor: 'black',
              // borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#F2F2F2',
              // resizeMode:'contain'
            }}
            source={
              props?.item?.image == ''
                ? AppImages.MEMBER_IMAGE
                : {uri: props?.item?.image}
            }
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
      </TouchableOpacity>
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
        // paddingHorizontal: 15,
        width: '95%',
        height: 150,
        paddingVertical: 10,
        // marginTop: 20,
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
