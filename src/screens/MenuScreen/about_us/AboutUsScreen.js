import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import MainToolbar from '../../../components/MainToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {MySelection} from '../../../components/SimpleTextInput';
import {AppConstValue} from '../../../utils/AppConstValue';
import BorderView from '../../../components/BorderView';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const members = [
  {
    id: 0,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 1,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 2,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 3,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 4,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 5,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 6,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 7,
    title: 'પ્રમુખ શ્રી',
    name: 'રાજેશ ભાઈ પટેલ',
    number: 1,
    status: 0,
  },
  {
    id: 8,
    title: 'પ્રમુખ શ્રી',
    name: 'કારોબારી સભ્યશ્રી',
    number: 1,
    status: 1,
  },
  {
    id: 8,
    title: 'પ્રમુખ શ્રી',
    name: 'કારોબારી સભ્યશ્રી',
    number: 1,
    status: 1,
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
  // const [range, setRange] = useState([]);
  const [value, setValue] = useState('Select year');
  const [valueId, setValueId] = useState('');
  // const [members, setMembers] = useState(null);

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
            paddingTop: 10,
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
                elevation: 15,
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
              }}
            />
          </View>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
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
        </View>

        {/* <View
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
        </View> */}
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
      {props?.item?.status == 0 ? (
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
              height: 15,
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
                marginLeft: 15,
              }}>
              {props?.item?.name}
            </Text>
            <Text
              style={{
                color: AppColors.DarkText,
                fontFamily: AppFonts.bold,
                fontSize: 12,
                marginLeft: 15,
              }}>
              {props?.item?.name}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: AppColors.fadeBackground,
              borderRadius: 10,
              // paddingBottom: 30,
              // paddingTop: 15,
            }}>
            <TouchableOpacity
              activeOpacity={AppConstValue.ButtonOpacity}
              style={{
                backgroundColor: AppColors.BackgroundSecondColor,
                height: 45,
                borderRadius: 10,

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
                {props?.item.name}
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
          </View>
        </View>
      )}
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
