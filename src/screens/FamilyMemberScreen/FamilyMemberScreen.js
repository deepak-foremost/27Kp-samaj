import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Modal,
  RefreshControl,
  SafeAreaView,
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {deleteMyMember, getMyFamilies} from '../../../../networking/CallApi';
import {AppColors} from '../../utils/AppColors';
import {printLog, ShowMessage} from '../../utils/AppConstValue';
import {AppConstValue} from '../../utils/AppConstValue';
import {AppFonts} from '../../utils/AppFonts';
import {AppImages} from '../../utils/AppImages';
import {AppScreens} from '../../utils/AppScreens';
import {AppStyles} from '../../utils/AppStyles';
// import LoaderView from '../../utils/LoaderView';
import * as RootNavigation from '../../utils/RootNavigation';
import {ListMember} from '../MenuScreen/advisour_member/AdvicerMember';
import ScreenToolbar from '../../components/ScreenToolbar';
import BorderView from '../../components/BorderView';

import {MemberDetail} from '../MenuScreen/about_us/AboutUsDetailScreen';
import {MemberDetailCell} from '../MenuScreen/memberDetail/FamilyDetailScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {deleteMyMember, getMyFamilies} from '../../networking/CallApi';
import LoaderView from '../../utils/LoaderView';
import ZoomImage from '../../components/ZoomImage';

const list = [
  {
    index: 0,
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '99999 99999',
    dob: '31/05/1991',
    age: '32',
    height: '5 ft.',
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
    index: 1,
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '99999 99999',
    dob: '31/05/1991',
    age: '32',
    height: '5 ft.',
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
    index: 2,
    name: 'પટેલ ધવલ વિષ્ણુભાઈ',
    city: 'શંકરપુરા',
    phone: '99999 99999',
    dob: '31/05/1991',
    age: '32',
    height: '5 ft.',
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

const FamilyMembersScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [isVisible, setVisible] = useState(-1);
  const [families, setFamilies] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  // const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [imageList, setImageLIst] = useState(null);
  const [count, setCount] = useState('');

  const images = [
    {
      url:
        count == 0 && imageList != null
          ? imageList[0]?.image
          : count == 1 && imageList != null
          ? imageList[1]?.image
          : count == 2 && imageList != null && imageList[2]?.image,
      // url:number==1 && imageList[1]?.image,
      // url:number==2 && imageList[2]?.image
      // props: {source: items != null && items?.image},
    },
  ];

  // useEffect(() => {
  //   setFamilies(list);
  // });

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  const getData = () => {
    getMyFamilies(
      '',
      response => {
        printLog('FamilyMembersScreen', JSON.stringify(response));
        setTotalPage(response?.last_page);
        if (response?.status) {
          setFamilies(response?.data);
        } else {
          setFamilies([]);
        }
        setRefreshing(false);
      },
      error => {
        setFamilies([]);
        setRefreshing(false);
      },
    );
  };

  const deleteItemList = res => {
    ShowMessage(res?.message);

    if (res?.status) {
      var deleteIndex = families.indexOf(deleteItem);
      printLog('deleteIndex', deleteIndex);
      if (deleteIndex > -1) {
        families.splice(deleteIndex, 1);
      }
      setFamilies(families);
      setDeleteItem(null);
      setModelOpen(false);
    }
  };

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getData();
    });

    return () => {
      willFocusSubscription;
    };
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   setPage(1);
  //   setTotalPage(1);
  //   // console.log('change list----->', families);
  // }, [families]);

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,
        },
      ]}>
      {/* <AppDrawerHeader
        title={'Edit Family Member'}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
        rightIcon={AppImages.ICON_ADD_MEMBER}
        onMoreClick={() =>
          RootNavigation.navigate(AppScreens.AddMemberScreen, {})
        }
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ZoomImage
          visible={open}
          images={images}
          dismiss={() => setOpen(false)}
        />
        <ScreenToolbar
          text={'EDIT FAMILY MEMBER'}
          secondText={'+ADD'}
          secondPress={() => {
            setTotalPage(1);
            setPage(1);
            RootNavigation.navigate(AppScreens.ADD_MEMBER_SCREEN);
          }}
        />
        <View style={{flex: 0.9}}>
          {families == null ? (
            <View
              style={{
                flex: 1,
                // backgroundColor: AppColors.BackgroundColor,
                alignItems: 'center',
                width: '95%',
                paddingTop: 15,
                alignSelf: 'center',
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : families?.length == 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 15,
                  color: AppColors?.LightText,
                }}>
                No Data Found
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 20}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={families == null ? [] : families}
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              // }
              renderItem={({item, index}) => (
                <View>
                  <FamilyMermberCell
                    index={index}
                    item={item}
                    isVisible={isVisible}
                    viewClick={() => {
                      const newList = [...families];
                      newList[index].is_selected = !newList[index].is_selected;
                      setFamilies(newList);
                    }}
                    deleteClick={() => {
                      setDeleteItem(item);
                      setModelOpen(true);
                    }}
                    editClick={() => {
                      setTotalPage(1);
                      setPage(1);
                      RootNavigation.push(
                        props?.navigation,
                        AppScreens.ADD_MEMBER_SCREEN,
                        {item: item},
                      );
                    }}
                    imgPress={i => {
                      setOpen(true);
                      setCount(i);
                      setImageLIst(item?.images);
                    }}
                    // onClick={type => {
                    //   if (type == 'edit' || type == 'view') {
                    //     RootNavigation.push(
                    //       props?.navigation,
                    //       type == 'view'
                    //         ? isVisible == item?.index
                    //           ? setVisible(-1)
                    //           : setVisible(item?.index)
                    //         : AppScreens.ADD_MEMBER_SCREEN,
                    //       {item: item},
                    //     );
                    //   } else {
                    //     setDeleteItem(item);
                    //     setModelOpen(true);
                    //   }
                    // }}
                  />
                  {/* {isVisible == item?.index ? (
                    <MemberDetailCell item={item} />
                  ) : null} */}
                </View>
              )}
            />
          )}
        </View>
        <BorderView
          text={'ફેમિલી પરિવારનું હાર્દિક પુર્વક સ્વાગત છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />

        {/* <FooterTextCell title={`સમાજ એજ મારું "Family" છે.`} /> */}

        <ModalView
          open={modelOpen}
          item={deleteItem}
          onDelete={res => deleteItemList(res)}
          onCancel={() => {
            setDeleteItem(null);
            setModelOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default FamilyMembersScreen;

const FamilyMermberCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={() => (props?.item?.is_selected ? null : props?.editClick())}
      style={{
        // paddingHorizontal: 14,
        paddingVertical: 5,
        marginHorizontal: 17,
        justifyContent: 'center',
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        borderRadius: 10,
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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingHorizontal:14}}>
        <Image
          source={
            props?.item?.images[0]?.image == undefined
              ? AppImages.MEMBER_IMAGE
              : {uri: props?.item?.images[0]?.image}
          }
          style={{
            marginRight: 10,
            height: 20,
            width: 20,
            borderRadius: 15,
            resizeMode: 'contain',
            backgroundColor: '#F2F2F2',
          }}
        />
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 13,
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
            backgroundColor: AppColors.black,
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
            fontSize: 13,
            color:
              props?.item?.index == 0 || props?.item?.index / 2 == 1
                ? AppColors.DarkText
                : AppColors.DarkText,
            paddingVertical: 10,
          }}>
          {props?.item?.name}
        </Text>
        <OptionMenuCell
          icon={AppImages.EYE_ICON}
          onClick={() => props?.viewClick()}
          styles={{}}
        />
        <OptionMenuCell
          icon={AppImages.ICON_EDIT}
          onClick={() => props?.editClick()}
          styles={{}}
        />

        <OptionMenuCell
          icon={AppImages.ICON_DELETE}
          onClick={() => props?.deleteClick()}
        />
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
            width: 30,
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={() => props?.viewClick()}>
          <Image
            source={
              props?.item?.is_selected
                ? AppImages.DROP_UP_ICON
                : AppImages.DROP_DOWN_GRAY
            }
          />
        </TouchableOpacity>
      </View>
      {props?.item?.is_selected ? (
        <MemberDetailCell
          item={props?.item}
          notShow={true}
          imgPress={props?.imgPress}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const OptionMenuCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        height: 40,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={props?.icon} style={{resizeMode: 'contain'}} />
    </TouchableOpacity>
  );
};

const ModalView = props => {
  const [deleteLoader, setDeleteLoader] = useState(false);
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props?.open}
      onRequestClose={() => {
        printLog('Modal has been closed.');
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={styles.modal}>
          <Text style={styles.modelTextTitle}>Delete Member</Text>

          <Text style={styles.modelTextSubTitle}>
            Are you sure you want to delete Member?
          </Text>
          {deleteLoader ? (
            <View>
              <LoaderView
                style={{width: '25%', height: 30}}
                color={AppColors.BackgroundSecondColor}
              />
            </View>
          ) : (
            // <></>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 40,
                alignSelf: 'stretch',
                marginHorizontal: 20,
                marginBottom: Platform.OS == 'ios' ? 30 : 20,
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: AppColors.BackgroundSecondColor,
                marginTop: 40,
              }}
              onPress={() => {
                setDeleteLoader(true);
                deleteMyMember(
                  {member_id: `${props?.item?.id}`},
                  response => {
                    setDeleteLoader(false);
                    props?.onDelete(response);
                    printLog('onSuccess', JSON.stringify(response));
                  },
                  e => {
                    printLog('onFailure', JSON.stringify(e));
                    props?.onCancel();
                  },
                );
              }}>
              <Text
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  fontFamily: AppFonts.semiBold,
                  color: 'white',
                  textAlign: 'center',
                }}>
                Yes, Delete
              </Text>
            </TouchableOpacity>
          )}
          {deleteLoader ? (
            <></>
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                props?.onCancel();
              }}>
              <Text
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  fontFamily: AppFonts.semiBold,
                  color: 'black',
                  textAlign: 'center',
                }}>
                No
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

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

// const MemberDetailCell = props => {
//   return (
//     <View
//       style={{
//         borderBottomLeftRadius: 8,
//         borderBottomRightRadius: 8,
//         backgroundColor: '#fff',
//         padding: 15,

//         marginTop:-10,
//         // ...Platform.select({
//         //   ios: {
//         //     shadowColor: '#D5D5D5',
//         //     shadowOffset: {width: 0, height: 5},
//         //     shadowOpacity: 0.9,
//         //     shadowRadius: 3,
//         //   },
//         //   android: {},
//         // }),
//       }}>
//       <View style={{alignItems: 'center'}}>
//         {/* <View
//           style={{
//             flexDirection: 'row',
//             alignSelf: 'flex-start',
//           }}>
//           <Text
//             style={{
//               fontFamily: AppFonts.semiBold,
//               fontSize: 11,
//               color: AppColors.DarkText,
//             }}>
//             {props?.item?.family_main_member_with_relation}
//             {' | '}
//           </Text>
//           <Text
//             style={{
//               fontFamily: AppFonts.semiBold,
//               fontSize: 11,
//               color: AppColors.DarkText,
//             }}>
//             {props?.item?.name}
//           </Text>
//         </View> */}

//         <View
//           style={{
//             height: 65,
//             width: 65,
//             borderRadius: 54,
//             backgroundColor: AppColors.BackgroundSecondColor,
//           }}>
//           {/* <Image
//                   source={AppImages.placeholder_user}
//                   style={{
//                     height: 109,
//                     width: 109,
//                     borderRadius: 10,
//                   }}
//                 /> */}

//           <Image
//             //   source={{uri: item?.image}}
//             source={AppImages.MEMBER_IMAGE}
//             style={{
//               height: 65,
//               width: 65,
//               resizeMode: 'stretch',
//               borderRadius: 10,
//             }}
//           />
//         </View>
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={() => {
//             RootNavigation.push(
//               props?.navigation,
//               AppScreens.FamilyDetailScreen,
//               {
//                 item: {...item, id: item?.user_id},
//               },
//             );
//           }}>
//           <Text
//             style={{
//               fontFamily: AppFonts.semiBold,
//               fontSize: 14,
//               color: AppColors.BackgroundSecondColor,
//               marginVertical: 5,
//             }}>
//             {props?.item?.phone}
//           </Text>
//           {/* <MemberDetail
//                     title={'Family Id :'}
//                     detailText={item?.family_id}
//                     textStyle={{
//                       textDecorationLine: 'underline',
//                       color: 'blue',
//                     }}
//                   /> */}
//         </TouchableOpacity>

//         <MemberDetail
//           style={{marginTop: 0}}
//           title={'ગામ :'}
//           detailText={props?.item?.city}
//           textStyle={{color: AppColors.BackgroundSecondColor}}
//         />
//         <MemberDetail
//           style={{marginBottom: 10}}
//           title={'શાખ :'}
//           detailText={props?.item?.shakh}
//           textStyle={{color: AppColors.BackgroundSecondColor}}
//         />

//         <MemberDetail title={'મોસાળ :'} detailText={props?.item?.mosal} />
//         <MemberDetail title={'સાસરું: '} detailText={props?.item?.mosal} />

//         <View style={{flexDirection: 'row'}}>
//           <MemberDetail
//             title={'જન્મ તારીખ :'}
//             style={{width: '35%'}}
//             detailText={
//               props?.item?.dob != '' && props?.item?.dob != undefined
//                 ? moment(props?.item?.dob, 'YYYY-MM-DD').format('DD-MM-YYYY')
//                 : ''
//             }
//           />
//           <MemberDetail
//             style={{width: '35%'}}
//             title={'|   Age :'}
//             detailText={props?.item?.age}
//           />
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <MemberDetail
//             style={{width: '30%'}}
//             title={'ઊંચાઈ :'}
//             detailText={props?.item?.height}
//           />
//           <MemberDetail
//             style={{width: '30%'}}
//             title={'વજન :'}
//             detailText={props?.item?.weight}
//           />
//         </View>
//         <MemberDetail
//           title={'બ્લડ ગ્રુપ :'}
//           detailText={props?.item?.blood_group}
//         />
//         <MemberDetail
//           title={'કુટુંબ ના વડા સાથે નો સંબંધ :'}
//           detailText={props?.item?.family_main_member_with_relation}
//         />
//         <MemberDetail
//           title={'લગ્ન સ્થિતિ :'}
//           detailText={props?.item?.marital_status}
//         />
//         <MemberDetail title={'અભ્યાસ :'} detailText={props?.item?.study} />
//         <MemberDetail
//           title={'હાલ નો વ્યવસાય :'}
//           detailText={props?.item?.business}
//         />
//         <MemberDetail
//           title={'વ્યવસાયનું સરનામું :'}
//           detailText={props?.item?.business_address}
//         />
//         <MemberDetail
//           title={'હાલ ના રહેઠાણ નુ સરનામું :'}
//           detailText={props?.item?.current_address}
//         />
//         <MemberDetail
//           title={'મોબાઇલ નંબર :'}
//           detailText={props?.item?.phone}
//           contact
//         />

//         <MemberDetail title={'Email ID :'} detailText={props?.item?.email} />
//       </View>
//     </View>
//   );
// };
