import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import MainToolbar from '../../../components/MainToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {MySelection} from '../../../components/SimpleTextInput';
import {AppConstValue, printLog} from '../../../utils/AppConstValue';
import BorderView from '../../../components/BorderView';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  getAboutKarobari,
  getAboutUsMember,
  getYearRange,
} from '../../../networking/CallApi';
import {ListMember} from './AboutUsDetailScreen';
import {ScrollView} from 'react-native-gesture-handler';

const members = [
  {
    id: 0,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 1,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 2,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 3,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 4,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 5,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 6,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 7,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    city: 'મહેસાણા',
    number: 1,
    status: 1,
  },
  {
    id: 8,
    title: 'પ્રમુખ શ્રી',
    name: 'કારોબારી સભ્યશ્રી',
    city: 'મહેસાણા',
    number: 2,
    status: 0,
  },
  {
    id: 8,
    title: 'પ્રમુખ શ્રી',
    name: 'કારોબારી સભ્યશ્રી',
    city: 'મહેસાણા',
    number: 2,
    status: 0,
  },
];

const range = [
  {
    name: '2022 to 2024',
  },
  {
    name: '2024 to 2026',
  },
  {
    name: '2026 to 2028',
  },
  {
    name: '2028 to 2030',
  },
  {
    name: '2030 to 2032',
  },
];

const AboutUsScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [range, setRange] = useState([]);
  const [value, setValue] = useState('Select year');
  const [valueId, setValueId] = useState('');
  const [members, setMembers] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [karobari, setKarobari] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getYearRange(
      response => {
        printLog('getYearRange', JSON.stringify(response));
        if (response?.status) {
          var data = [];
          for (let i = 0; i < response?.data?.length; i++) {
            data.push({
              name: response?.data[i]?.range,
              id: response?.data[i]?.id,
            });

            if (i == 0) {
              setValue(response?.data[i]?.range);
              setValueId(response?.data[i]?.id);
            }
          }
          setRange(data);
        }
      },
      error => {
        printLog('getYearRange', error);
      },
    );
  }, []);

  useEffect(() => {
    setShow(false)
    setLoading(true);
    getAboutUsMember(
      `range_id=${valueId}`,
      response => {
        printLog('getAboutUsMember', JSON.stringify(response));
        if (response?.status) {
          setMembers(response?.data);
          if (response?.exists != 0) {
            setShow(true);
          }
          setLoading(false);
        } else {
          setMembers([]);
          setLoading(false);
        }
      },
      error => {
        printLog('getAboutUsMember', error);
        setMembers([]);
        setLoading(false);
      },
    );
  }, [valueId]);

  // useEffect(() => {
  //   setLoading(true);
  //   getAboutKarobari(
  //     `range_id=${valueId}`,
  //     response => {
  //       printLog('getAboutUskarobari', JSON.stringify(response));
  //       if (response?.status) {
  //         setKarobari(response?.data);
  //         setShow(true);
  //         setLoading(false);
  //       } else {
  //         setKarobari(null);
  //         setLoading(false);
  //         setShow(false);
  //       }
  //     },
  //     error => {
  //       printLog('getAboutUsKarobarieror', error);
  //       setKarobari(null);
  //       setLoading(false);
  //     },
  //   );
  // }, [valueId]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'ABOUT US'} />
        </View>

        <View
          style={{
            marginTop: -40,
            marginHorizontal: 15,
            alignItems: 'flex-start',
            alignSelf: 'center',
            backgroundColor: AppColors.backgroundColor,
            paddingHorizontal: 22,
            paddingTop: 15,
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
            }}>
            Please Select Year
          </Text>

          <View
            style={{
              backgroundColor: AppColors.drop_down_bg,
              width: '100%',
              flexDirection: 'row',
              // marginTop:-50,
              borderRadius: 5,
              paddingStart: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#DEDEDE',
              borderWidth: 1,
              marginVertical: 15,
            }}>
            <MySelection
              label={value}
              placeholder={`Select Year`}
              data={range}
              value={value}
              onItemSelect={item => {
                // printLog(JSON.stringify(item?.item));
                setValue(item?.name);
                setValueId(item?.id);
                // setShow(false);
              }}
            />
          </View>
        </View>
        <View style={{flex: 0.9, paddingVertical: 10}}>
          <ScrollView>
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  width: '95%',
                  alignSelf: 'center',
                }}>
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
              </View>
            ) : (
              <View>
                {members?.length == 0 && !show ? (
                  <Text
                    style={{
                      fontSize: 14,
                      color: AppColors.LightText,
                      alignSelf: 'center',
                      marginTop: 50,
                      fontFamily: AppFonts.semiBold,
                    }}>
                   No Data Found
                  </Text>
                ) : (
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingBottom: 10,
                    }}
                    data={members == null ? [] : members}
                    renderItem={({item, index}) => (
                      <AboutCell
                        index={index}
                        item={item}
                        onClick={() => {
                          // printLog('AboutCell', JSON.stringify(item));
                          RootNavigation.push(
                            props?.navigation,
                            AppScreens.ABOUT_US_DETAIL_SCREEN,
                            {item: item},
                          );
                        }}
                      />
                    )}
                  />
                )}
              </View>
            )}
            {show && karobari?.length != 0 ? (
              <View
                style={{
                  backgroundColor: AppColors.fadeBackground,
                  paddingBottom: 10,
                  paddingTop: 5,
                }}>
                <TouchableOpacity
                  activeOpacity={AppConstValue.ButtonOpacity}
                  style={{
                    backgroundColor: AppColors.BackgroundSecondColor,
                    height: 45,
                    borderRadius: 10,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    elevation: 3,
                  }}
                  onPress={() =>
                    RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
                      status: 'main',
                      range: valueId,
                      karobari: karobari,
                    })
                  }>
                  <Text
                    style={{
                      fontFamily: AppFonts.bold,
                      fontSize: 10,
                      color: '#fff',
                      alignSelf: 'center',
                    }}>
                    કારોબારી સભ્યશ્રી
                  </Text>
                  <View
                    style={{
                      position: 'absolute',
                      right: 15,
                      backgroundColor: '#FFFFFF',
                      padding: 5,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        fontFamily: AppFonts.bold,
                        fontSize: 10,
                        color: AppColors.DarkText,
                        paddingTop: 2.5,
                      }}>
                      Click Here
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </ScrollView>
        </View>

        <BorderView
          text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default AboutUsScreen;

const AboutCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        flexDirection: 'row',
        height: 45,
        marginHorizontal: 15,
        backgroundColor: AppColors.BackgroundSecondColor,
        marginTop: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.9,
            shadowRadius: 3,
          },
          android: {
            elevation: 5,
          },
        }),
      }}>
      {
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: AppFonts.bold,
              fontSize: 12,
              flex: 0.25,
              color: '#F3F3F3',
              textAlign: 'center',
              justifyContent: 'center',
              height: 30,
              textAlignVertical: 'center',
            }}>
            {props?.item?.title}
          </Text>

          <TouchableOpacity
            onPress={props?.onClick}
            activeOpacity={AppConstValue.ButtonOpacity}
            style={{
              backgroundColor: '#F3F3F3',
              height: '100%',
              flex: 0.75,
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: AppColors.DarkText,
                fontFamily: AppFonts.bold,
                fontSize: 12,
                marginLeft: 5,
              }}>
              {props?.item?.name}
            </Text>
            <Text
              style={{
                color: AppColors.DarkText,
                fontFamily: AppFonts.bold,
                fontSize: 12,
                marginLeft: 5,
              }}>
              {props?.item?.city}
            </Text>
          </TouchableOpacity>
        </View>

        //  (
        //   <View style={{flex: 1}}>
        //     <View
        //       style={{
        //         backgroundColor: AppColors.fadeBackground,
        //         borderRadius: 10,
        //         // paddingBottom: 30,
        //         // paddingTop: 15,
        //       }}>
        //       <TouchableOpacity
        //         activeOpacity={AppConstValue.ButtonOpacity}
        //         style={{
        //           backgroundColor: AppColors.BackgroundSecondColor,
        //           height: 45,
        //           borderRadius: 10,

        //           flexDirection: 'row',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           paddingHorizontal: 15,
        //         }}>
        //         <Text
        //           style={{
        //             fontFamily: AppFonts.bold,
        //             fontSize: 10,
        //             color: '#fff',
        //             alignSelf: 'center',
        //           }}>
        //           {props?.item.name}
        //         </Text>
        //         <TouchableOpacity
        //           activeOpacity={AppConstValue.ButtonOpacity}
        //           onPress={() =>
        //             RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
        //               status: 'main',
        //             })
        //           }
        //           style={{
        //             position: 'absolute',
        //             right: 15,
        //             backgroundColor: '#FFFFFF',
        //             padding: 4,
        //             borderRadius: 8,
        //           }}>
        //           <Text
        //             style={{
        //               fontFamily: AppFonts.bold,
        //               fontSize: 10,
        //               color: 'black',
        //               marginTop: 2,
        //             }}>
        //             Click Here
        //           </Text>
        //         </TouchableOpacity>
        //       </TouchableOpacity>
        //     </View>
        //   </View>
        // )
      }
    </TouchableOpacity>
  );
};

const DifferentAboutCell = props => {
  <View
    style={{
      backgroundColor: AppColors.fadeBackground,
      paddingBottom: 30,
      paddingTop: 15,
    }}>
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          fontFamily: AppFonts.bold,
          fontSize: 10,
          color: '#fff',
          alignSelf: 'center',
        }}>
        કારોબારી સભ્યશ્રી
      </Text>
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={() =>
          RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
            status: 'main',
          })
        }
        style={{
          position: 'absolute',
          right: 15,
          backgroundColor: '#FFFFFF',
          padding: 5,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.bold,
            fontSize: 10,
            color: '#EB7E01',
          }}>
          Click Here
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>;
};
