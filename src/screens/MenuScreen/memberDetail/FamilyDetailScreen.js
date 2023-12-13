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
  Platform,
  PermissionsAndroid,
  Linking,
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
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';
import {getFamilyMembersList} from '../../../networking/CallApi';

const list = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

const FamilyDetailScreen = props => {
  const [filePath, setFilePath] = useState('');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(list);
  }, [members]);

  // const isPermitted = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'External Storage Write Permission',
  //           message: 'App needs access to Storage data',
  //         },
  //       );
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       alert('Write permission err', err);
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // };

  // const createPDF = async () => {
  //   if (await isPermitted()) {
  //     try {
  //       let options = {
  //         //Content to print
  //         html: '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
  //         //File Name
  //         fileName: 'myPdf',
  //         //File directory
  //         directory: 'Documents',
  //       };
  //       let file = await RNHTMLtoPDF.convert(options);
  //       console.log(file.filePath);
  //       setFilePath(file.filePath);
  //     } catch (error) {
  //       console.log('error---in file', error);
  //     }
  //   }
  // };

  const [visible, setVisible] = useState([]);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;

  var item = props?.route?.params?.item;
  // MyLog('FamilyDetailScreen', JSON.stringify(props?.route?.params?.item));
  // const [members, setMembers] = useState(null);
  // useEffect(() => {
  //   getString(AsyncStorageConst.allDetails,
  //     response=>{
  //     console.log('token-->',JSON.stringify(response))
  //   })
  //   getFamilyMembersList(
  //     {id: item?.id, flag: 'all'},
  //     response => {
  //       printLog('SUCCESS', JSON.stringify(response));
  //       if (response?.status) {
  //         setMembers(response?.data);
  //       } else {
  //         setMembers([]);
  //       }
  //     },
  //     error => {
  //       printLog('ERROR', JSON.stringify(error));
  //       setMembers([]);
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
      {/* <AppDrawerHeader
        title={`${item?.family_id} : ${item?.name}`}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={item.name.toUpperCase()} />
        <View style={{flex:0.9}}>
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
              marginTop: 5,
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
            renderItem={({item, index}) => {
              printLog(`ITEM$${index}`, JSON.stringify(item?.item));
              return (
                <View style={{}}>
                  <FamilyMermberCell
                    // saveButton={() => createPDF()}
                    index={index}
                    item={item}
                    visible={[...visible]}
                    onClick={
                      () =>
                        // setVisible([...index])
                        {
                          const newList = [...members];
                          newList[index].is_selected =
                            !newList[index].is_selected;
                          setMembers(newList);
                        }
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
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
        {/* <FooterTextCell title={`પરિવાર નુ ખુબ ખુબ અભિનંદન`} /> */}
      </View>
    </View>
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
        // paddingHorizontal: 14,
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
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent:
            // props?.visible == props?.item?.id ? 'center' : 'flex-start',
            props?.visible.includes(props.index) ? 'center' : 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            color: AppColors.black,
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
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            color:
              props?.item?.index % 2 == 1 ? AppColors.black : AppColors.black,
            paddingVertical: 10,
          }}>{`${props?.item?.name}`}</Text>
        <Image
          style={{
            alignSelf: 'center',
            tintColor: '#C5C5C5',
            position: 'absolute',
            right: 10,
          }}
          source={
            props?.item?.is_selected
              ? AppImages.DROP_UP_ICON
              : AppImages.DROP_DOWN_GRAY
          }
        />
      </View>
      {props?.item?.is_selected ? (
        <MemberDetailCell item={props?.item} saveButton={props?.saveButton} />
      ) : null}
    </TouchableOpacity>
  );
};

export const MemberDetailCell = props => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 15,
        marginTop: -2,
        ...Platform.select({
          ios: {
            // shadowColor: '#D5D5D5',
            // shadowOffset: {width: 0, height: 5},
            // shadowOpacity: 0.9,
            // shadowRadius: 3,
          },
          android: {
            elevation: 0,
          },
        }),
      }}>
      <View style={{alignItems: 'flex-start', flex: 1}}>
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
            width: '100%',
            borderRadius: 54,
            flexDirection: 'row',
            justifyContent: 'center',
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
              width: '30%',
              resizeMode: 'stretch',
              borderRadius: 10,
              marginHorizontal: 5,
            }}
          />
          <Image
            //   source={{uri: item?.image}}
            source={AppImages.MEMBER_IMAGE}
            style={{
              height: 65,
              width: '30%',
              resizeMode: 'stretch',
              borderRadius: 10,
              marginHorizontal: 5,
            }}
          />
          <Image
            //   source={{uri: item?.image}}
            source={AppImages.MEMBER_IMAGE}
            style={{
              height: 65,
              width: '30%',
              resizeMode: 'stretch',
              borderRadius: 10,
              marginHorizontal: 5,
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
              marginTop: 10,
              // marginBottom:5
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
          style={{}}
          title={'શાખ :'}
          detailText={props?.item?.shakh}
          textStyle={{color: AppColors.BackgroundSecondColor}}
        />

        <MemberDetail title={'મોસાળ :'} detailText={props?.item?.mosal} />
        <MemberDetail title={'સાસરું: '} detailText={props?.item?.mosal} />

        <View style={{flexDirection: 'row'}}>
          <MemberDetail
            title={'જન્મ તારીખ :'}
            style={{}}
            detailText={
              props?.item?.dob != '' && props?.item?.dob != undefined
                ? moment(props?.item?.dob, 'YYYY-MM-DD').format('DD-MM-YYYY')
                : ' '
            }
          />
          <MemberDetail
            style={{marginLeft: 10}}
            title={' |  Age :'}
            detailText={props?.item?.age}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <MemberDetail
            style={{}}
            title={'ઊંચાઈ :'}
            detailText={props?.item?.height}
          />
          <MemberDetail
            style={{}}
            title={'  |  વજન :'}
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
        <MemberDetail title={'વ્યવસાય :'} detailText={props?.item?.business} />
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <MemberDetail
            title={'મોબાઇલ નંબર :'}
            detailText={props?.item?.phone}
            contact
          />

          <TouchableOpacity
            activeOpacity={1}
            style={{
              paddingBottom: 2.5,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}
            onPress={() =>
              Linking.openURL(
                `tel:${'9510135458'}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            <Image
              style={{marginHorizontal: 5}}
              source={AppImages.CIRCLE_CALL_ICON}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 15,
              width: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
              paddingBottom: 2.5,
            }}
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?phone=${'9510135458'}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            <Image style={{}} source={AppImages.WHATSAPP_ICON} />
          </TouchableOpacity>
        </View>

        <MemberDetail title={'Email ID :'} detailText={props?.item?.email} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MemberDetail
            title={'જીવન સહાય સભાસદ નં :'}
            detailText={1234}
            style={{}}
          />
          <TouchableOpacity
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() =>
              RootNavigation.navigate(AppScreens.SOCIAL_SERVICE, {
                status: 'main',
              })
            }
            style={{
              marginLeft: 10,
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              borderRadius: 8,
              alignItems: 'center',
              paddingBottom: 2.5,
            }}>
            <LinearGradient
              colors={['#FF56AE', '#FF56AE', '#FF56AE']}
              style={{padding: 3, borderRadius: 8, paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  fontSize: 6,
                  color: 'white',
                }}>
                ePay Now
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MemberDetail title={'ભુમિ સભાસદ નં:'} detailText={1234} style={{}} />
          {/* <TouchableOpacity
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() =>
              RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
                status: 'main',
              })
            }
            style={{
              marginHorizontal: 15,
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <LinearGradient
              colors={['#3C5AFF', '#3C5AFF', '#1B74FF']}
              style={{padding: 3, borderRadius: 8, paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  fontSize: 6,
                  color: 'white',
                }}>
                Click Here
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </View>
      {!props?.notShow && (
        <TouchableOpacity
          onPress={props?.saveButton}
          activeOpacity={1}
          style={{
            alignSelf: 'flex-end',
            marginTop: 10,
          }}>
          <Image source={require('../../../assets/images/save_icon.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};
