import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StyleSheet,
  Linking,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
import {MySelection} from '../../../components/SimpleTextInput';
// import {
//   getCities,
//   getFamilies,
//   getFamilyDetail,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppStyles} from '../../../utils/AppStyles';
import BorderView from '../../../components/BorderView';
import {getString} from '../../../utils/AsyncStorageHelper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, getFamilies} from '../../../networking/CallApi';

const myList = [
  {
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'શંકરપુરા',
    photo: require('../../../assets/images/phone_icon.png'),
    phone: 888888888,
    title: 'પ્રમુખ',
  },
  {
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'શંકરપુરા',
    photo: require('../../../assets/images/phone_icon.png'),
    phone: 888888888,
    title: 'પ્રમુખ',
  },
  {
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'શંકરપુરા',
    photo: require('../../../assets/images/phone_icon.png'),
    phone: 888888888,
    title: 'પ્રમુખ',
  },
];

const VariousBusiness = props => {
  //   const [myList, setMyList] = useState([null]);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('All');
  const [cityId, setCityId] = useState('0');
  const [counts, setCount] = useState(0);

  useEffect(() => {
    getCities(
      response => {
        if (response?.status) {
          var temp = [];
          temp.push({name: 'All', id: 0});
          setValue('All');
          setCityId(0);
          getCounts(0);
          for (let i = 0; i < response?.data?.length; i++) {
            if (i == 0) {
            }
            temp.push({
              name: response?.data[i]?.name,
              id: response?.data[i]?.id,
            });
          }
          setCities(temp);
        }
      },
      error => {
        printLog('StatisticScreen', error);
      },
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <Image
      source={AppImages.APP_SPONCER_LINE}
      style={{
        height: '20%',
        resizeMode: 'cover',
        width: '100%',
        position: 'absolute',
      }}
    /> */}

      {/* <AppDrawerHeader
      title={'Family member details'}
      background={false}
      leadIcon={AppImages.BACK_ICON}
      leadIconClick={() => RootNavigation.goBack()}
    /> */}

      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'વિવિધ શહેર કારોબારી'} />
        </View>
        <View style={{flex: 0.9}}>
          <View
            style={{
              marginTop: -40,
              width: '90%',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: AppColors.BackgroundColor,
              padding: 10,
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
            <Text
              style={{
                fontFamily: AppFonts.medium,
                fontSize: 12,
                color: AppColors.DarkText,
                alignSelf: 'flex-start',
                marginLeft: 10,
              }}>
              Please select વિવિધ શહેર કારોબારી
            </Text>

            <View
              style={[
                AppStyles.boxStyle,
                {
                  //   backgroundColor: AppColors.LightText,
                  width: '95%',
                  flexDirection: 'row',
                  marginVertical: 15,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 13,
                  color: AppColors.DarkText,
                  textAlign: 'right',
                  padding: 10,
                }}>
                કારોબારી :
              </Text>

              <MySelection
                label={`select વિવિધ શહેર કારોબારી`}
                placeholder={`select કારોબારી`}
                data={cities}
                value={value}
                onItemSelect={item => {
                  printLog(JSON.stringify(item?.name + '---' + item?.id));
                  setValue(item?.name);
                  setCityId(item?.id);
                  getList(item?.id);
                }}
              />
            </View>
          </View>
          {myList == null || myList?.length > 0 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                paddingHorizontal: 10,
                paddingTop: 15,
                paddingBottom: 5,
                alignSelf: 'center',
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
                  width: '10%',
                }}>
                હોદો
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: AppFonts.semiBold,
                  color: AppColors.DarkText,
                  width: '28%',
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
          {
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
                    width: '90%',
                    alignSelf: 'center',
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
                        width: '10%',
                        color: AppColors.DarkText,
                      },
                    ]}>
                    {item ? `${item?.title}` : 'હોદો'}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      flexDirection: 'row',
                      width: '28%',
                      // marginLeft: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => Linking.openURL(`tel:${'9510135458'}`)}>
                    <Text style={[styles.heading, {color: AppColors.DarkText}]}>
                      {item ? `${item?.phone}` : 'મોબાઈલ નંબર'}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{paddingHorizontal: 2.5, marginBottom: 2.5}}
                        onPress={() => Linking.openURL(`tel:${item?.phone}`)}>
                        <Image source={AppImages.CIRCLE_CALL_ICON} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                        marginBottom: 2.5,
                      }}
                      onPress={() =>
                        Linking.openURL(
                          `whatsapp://send?phone=${item?.phone}`,
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
                      paddingBottom: 2.5,
                      // marginLeft: 10,
                    }}>
                    {/* {props?.item ? ( */}
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
                    {/* ) : ( */}
                    {/* // <Text style={[styles.heading, {color: AppColors.DarkText}]}>
                    //   ફોટો
                    // </Text> */}
                    {/* //   )} */}
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
          }

          {/* <FooterTextCell title={`પરિવાર નુ ખુબ ખુબ સ્વાગત છે`} /> */}
        </View>
      </View>
      <BorderView
        text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
        backgroundColor={AppColors.BackgroundSecondColor}
      />
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

export default VariousBusiness;
