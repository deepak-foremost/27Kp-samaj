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

const ContactUsScreen = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
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
            paddingTop: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <ScreenToolbar text={'CONTACT US'} />
        </View>
        <View
          style={{
            marginTop: -40,
            
            alignItems: 'center',
            width: '90%',
            borderRadius: 10,
            backgroundColor: 'white',
            alignSelf:'center',
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
          <ScrollView
            style={{width: '90%', borderRadius: 15}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: '100%',

                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: AppColors.BackgroundColor,
                paddingTop: 30,
              }}>
              <Text
                style={{
                  paddingHorizontal: 24,
                  fontSize: 12,
                  fontFamily: AppFonts.medium,
                  color: AppColors.DarkText,
                }}>
                એપ્લિકેશન માં ફર્સ્ટ પેજ પર જાહેરાત મૂકવા માટે અને "Sign in
                Using Your Mobile" નીચે આપેલ નંબર પર સર્પક કરવો.
              </Text>

              <Image
                style={{
                  height: 2,
                  backgroundColor: AppColors.line_color,
                  width: '90%',
                  marginTop: 30,
                }}
              />

              <FlatList
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
                  height: 2,
                  backgroundColor: AppColors.line_color,
                  width: '90%',
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
                    width: '90%',
                    marginTop: 10,
                  },
                ]}>
                <Text
                  style={[
                    {
                      fontSize: 12,
                      fontFamily: AppFonts.bold,
                      color: AppColors.DarkText,
                      alignSelf: 'flex-start',
                      marginLeft: 10,
                    },
                  ]}>
                  Office Address : Nikol, Ahmedabad
                </Text>
              </View>

              <Image
                style={{
                  height: 2,
                  backgroundColor: AppColors.line_color,
                  width: '90%',
                  marginTop: 10,
                }}
              />

              <AppButton
                text={'Enter Your Application Feedback'}
                buttonStyle={{
                  marginVertical: 15,
                  backgroundColor: '#46ACD9',
                  marginBottom: 30,
                }}
                width={'85%'}
                buttonPress={() =>
                  RootNavigation.push(
                    props?.navigation,
                    AppScreens.FEEDBACK_SCREEN,
                    NaN,
                  )
                }
              />
            </View>
          </ScrollView>
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </SafeAreaView>
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
        width: '90%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: props?.item?.item?.id == 3 ? '#fff' : AppColors.line_color,
        ...props.styles,

        marginHorizontal: 10,
      }}>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 13,
          fontFamily: AppFonts.semiBold,
          marginLeft: 10,
        }}>
        {props?.item?.item?.name}
      </Text>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 13,
          fontFamily: AppFonts.semiBold,
        }}>
        {props?.item?.item?.city}
      </Text>
      <Text
        style={{
          color: AppColors.DarkText,
          fontSize: 13,
          fontFamily: AppFonts.semiBold,
        }}>
        {props?.item?.item?.designation}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 3,
          paddingVertical: 5,
        }}>
        <Text
          style={{
            color: AppColors.DarkText,
            fontSize: 13,
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
          style={{marginStart: 10, marginEnd: 5}}
          onPress={() =>
            Linking.openURL(
              `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
            )
          }>
          {/* <Image source={AppImages.CALL_ICON} style={{height: 20, width: 20}} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
