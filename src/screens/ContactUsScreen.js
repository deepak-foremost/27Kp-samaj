import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
} from 'react-native';
import AppButton from '../components/AppButton';
// import {AppDrawerHeader} from '../../../components/AppDrawerHeader';
import {SponcerModal} from '../components/SponcerModal';
import {AppColors} from '../utils/AppColors';
import {AppFonts} from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';
import {AppScreens} from '../utils/AppScreens';
import {AppStyles} from '../utils/AppStyles';
import * as RootNavigation from '../utils/RootNavigation';
import {staticArray} from '../utils/staticArray';
import ScreenToolbar from '../components/ScreenToolbar';
import BorderView from '../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ContactUsScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
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
        title={'Contact Us'}
        background={false}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <View
          style={{
            backgroundColor: AppColors.BackgroundSecondColor,
            height: 120,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'CONTACT US'} />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: '95%',
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: -30,
              flex: 0.9,
            }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '95%',
                borderRadius: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                paddingTop: 15,
                paddingHorizontal: 5,

                ...Platform.select({
                  ios: {
                    shadowColor: '#D5D5D5',
                    shadowOffset: {width: 0, height: 5},
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
                  paddingHorizontal: 10,
                  fontSize: 11,
                  fontFamily: AppFonts.medium,
                  color: AppColors.DarkText,
                  textAlign: 'center',
                  width: '100%',
                }}>
                એપ્લિકેશન માં ફર્સ્ટ પેજ પર જાહેરાત મૂકવા માટે અને "Sign in
                Using Your Mobile" નીચે આપેલ નંબર પર સર્પક કરવો.
              </Text>

              {/* <Image
                style={{
                  height: 2,
                  backgroundColor: AppColors.line_color,
                  width: '90%',
                  marginTop: 30,
                }}
              /> */}

              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{alignItems: 'center', marginTop: 10}}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={staticArray.ContactPerson}
                renderItem={(item, index) => (
                  <ContactCell item={item} index={index} />
                )}
              />

              {/* <Image
              style={{
                height: 2,
                backgroundColor: AppColors.LightText,
                width: '90%',
                marginTop: 10,
              }}
            /> */}

              {/* <SponcerModal /> */}

              {/* <Image
              style={{
                height: 2,
                backgroundColor: AppColors.LightText,
                width: '90%',
                marginTop: 30,
              }}
            /> */}
              {/* <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'red',
                width: '90%',
                borderRadius: 10,
                marginTop: 15,
              }}>
              <ContactCell
                item={{
                  item: {
                    name: 'વેબસાઇટ / મોબાઈલ એપ ડેવલોપર સંપર્ક :',
                    code: '+91',
                    phone: '8733075256',
                  },
                }}
                index={0}
              />
            </View> */}
              <Image
                style={{
                  height: 1,
                  backgroundColor: AppColors.line_color,
                  width: '95%',
                  marginTop: 20,
                }}
              />
              <View
                style={[
                  AppStyles.boxStyle,
                  {
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '95%',
                    marginTop: 10,
                  },
                ]}>
                <Text
                  style={[
                    {
                      fontSize: 11,
                      fontFamily: AppFonts.bold,
                      color: AppColors.DarkText,
                      alignSelf: 'flex-start',
                      marginLeft: 10,
                    },
                  ]}>
                  Office Address: Full Address-Nikol, Ahmedabad
                </Text>
              </View>

              <Image
                style={{
                  height: 1,
                  backgroundColor: AppColors.line_color,
                  width: '95%',
                  marginTop: 10,
                }}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: AppColors.BackgroundSecondColor,
                  width: '95%',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingVertical: 10,
                  marginTop: 15,
                  marginBottom: 30,
                  flexDirection: 'row',
                }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 11,
                    fontFamily: AppFonts.semiBold,
                    color: '#fff',
                    width: '85%',
                    textAlign: 'center',
                  }}>
                  Website / Mobile Application Developer Contact Number : Dhaval
                  Patel : +91 : 9510135458{' '}
                </Text>

                {
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{marginLeft: 5, marginBottom: 5}}
                    onPress={() => Linking.openURL(`tel:${'9510135458'}`)}>
                    <Image source={AppImages.CIRCLE_CALL_ICON} />
                  </TouchableOpacity>
                }

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    paddingHorizontal: 2.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                  onPress={() =>
                    Linking.openURL(
                      `whatsapp://send?text=hello&phone=${'9510135458'}`,
                    )
                  }>
                  {<Image source={AppImages.WHATSAPP_ICON} />}
                </TouchableOpacity>
              </TouchableOpacity>

              {/* <AppButton
                text={
                  'Website / Mobile Application Developer Contact Number : Dhaval Patel : +91 : 9510135458'
                }
                buttonStyle={{
                  marginVertical: 15,
                  backgroundColor: AppColors.BackgroundSecondColor,
                  marginBottom: 30,
                  width: '95%',
                }}
                textStyle={{
                  width: '95%',
                  fontSize: 11,
                  alignSelf: 'center',
                  marginLeft: 0,
                  lineHeight: 20,
                }}
                // buttonPress={() =>
                //   RootNavigation.push(
                //     props?.navigation,
                //     AppScreens.FEEDBACK_SCREEN,
                //     NaN,
                //   )
                // }
              /> */}
            </View>
          </View>
          <BorderView
            text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
            backgroundColor={AppColors.BackgroundSecondColor}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactUsScreen;

const ContactCell = props => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        width: '92%',
        flexDirection: 'row',
        // borderBottomWidth: 1,
        borderColor: props?.item?.item?.id == 3 ? '#fff' : AppColors.line_color,
        ...props.styles,
        backgroundColor: '#FF9C9C',
        marginTop: 10,
        borderRadius: 9,
      }}>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 11,
          fontFamily: AppFonts.semiBold,
          marginLeft: 10,
        }}>
        {props?.item?.item?.name}
      </Text>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 11,
          fontFamily: AppFonts.semiBold,
        }}>
        {props?.item?.item?.city}
      </Text>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 11,
          fontFamily: AppFonts.semiBold,
        }}>
        {props?.item?.item?.designation}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: AppColors.DarkText,
            fontSize: 11,
            fontFamily: AppFonts.semiBold,
          }}>
          {`${props?.item?.item?.code} ${props?.item?.item?.phone}`}
        </Text>

        {/* <TouchableOpacity
          activeOpacity={0.9}
          style={{marginStart: 10, marginEnd: 5}}
          onPress={() =>
            Linking.openURL(`: https://wa.me/${props?.detailText}`)
          }>
          <Image
            source={AppImages.ICON_WHATSAPP}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          activeOpacity={0.9}
          style={{paddingStart: 10, paddingEnd: 5, paddingBottom: 2.5}}
          onPress={() =>
            Linking.openURL(
              `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
            )
          }>
          <Image source={AppImages.CIRCLE_CALL_ICON} style={{}} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={{paddingStart: 5, paddingBottom: 2.5}}
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?phone=${props?.item?.item?.code}${props?.item?.item?.phone}`,
              // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
            )
          }>
          <Image source={AppImages.WHATSAPP_ICON} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
