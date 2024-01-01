import React, {useEffect, useState} from 'react';
import {AppStyles} from '../../../utils/AppStyles';
import {
  View,
  ScrollView,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppColors} from '../../../utils/AppColors';
import {AppFonts} from '../../../utils/AppFonts';
import {
  LinkCell,
  SimpleDoubleLine,
  WeekDayCell,
} from '../../../components/HorizontalMenuComponent';
import {DeviderLine} from '../../../components/LineCell';
import {printLog} from '../../../utils/AppConstValue';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddBorder} from '../../FamilyMemberScreen/AddMemberScreen';
import moment from 'moment';
import ZoomImage from '../../../components/ZoomImage';

const BusinessDetaiLScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [item, setItem] = useState(props?.route?.params?.item);
  const DoNotShow = props?.route?.params?.show;
  const [days, setDayes] = useState([]);
  const [open, setOpen] = useState(false);

  // const images = [
  //   {
  //     url: item != null && item?.image,
  //     props: {source: item != null && item?.image},
  //   },
  // ];

  useEffect(() => {
    console.log('details-->', item?.business_hours[3]?.status);
  });

  //   printLog('ITEM_OD_BUSIESS', JSON.stringify(item));
  //   var week = JSON.parse(item?.business_hourse);
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
        title={item?.firm}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar text={item?.firm.toUpperCase()} />
        {/* <ZoomImage visible={open} items={item} dismiss={() => setOpen(false)} /> */}
        <View style={{flex: 0.9}}>
          <ScrollView
            contentContainerStyle={{
              width: '100%',
              alignSelf: 'center',
              flexGrow: 1,
              paddingBottom: 20,
              backgroundColor: AppColors.backgroundColor,

              // paddingHorizontal: 5,
            }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#fff',
                marginHorizontal: 15,
                borderRadius: 8,
                paddingVertical: 15,

                marginTop: 15,
                flex: 1,
                alignSelf: 'center',
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
              <View
                style={{
                  flexDirection: 'row',
                  width: '95%',
                  justifyContent: 'center',
                  marginBottom: 15,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '47%', marginRight: 5}}
                  activeOpacity={1}
                  onPress={() =>
                    item?.visting_card_photo != null && setOpen(true)
                  }>
                  <Image
                    style={{
                      alignSelf: 'center',
                      // resizeMode: 'contain',
                      backgroundColor: '#F2F2F2',
                      height: 120,
                      width: '100%',

                      resizeMode: 'contain',
                      borderRadius: 15,
                    }}
                    source={
                      // require('../../../assets/images/directory_image.png')
                      {uri: item?.visting_card_photo}
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: '47%', marginLeft: 10}}
                  activeOpacity={1}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      resizeMode: 'contain',
                      backgroundColor: '#F2F2F2',
                      height: 120,
                      width: '100%',
                      resizeMode: 'contain',
                      borderRadius: 15,
                    }}
                    source={
                      item?.visting_card_photo_two == '' ||
                      item?.visting_card_photo_two == undefined
                        ? AppImages.MEMBER_IMAGE
                        : // require('../../../assets/images/directory_image.png')
                          {uri: item?.visting_card_photo_two}
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: '5%'}}>
                <Text
                  style={{
                    fontFamily: AppFonts.semiBold,
                    fontSize: 16,
                    color: AppColors.black,
                    textTransform: 'capitalize',
                    marginBottom: 10,
                  }}>
                  {item?.firm}
                </Text>
                <SimpleDoubleLine
                  title={'Category :'}
                  value={item?.category_name}
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Firm :'}
                  value={item?.firm}
                  containerStyle={{marginTop: 5}}
                />
                <SimpleDoubleLine
                  title={'Business Type'}
                  value={item?.business_type}
                  containerStyle={{marginTop: 10, marginBottom: 10}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 1  :'}
                  value={
                    item?.owner_name_1 == '' || null
                      ? 'N/A'
                      : item?.owner_name_1
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 2 :'}
                  value={
                    item?.owner_name_2 == null || 'null'
                      ? 'N/A'
                      : item?.owner_name_2
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 3 :'}
                  value={
                    item?.owner_name_3 == null || 'null'
                      ? 'N/A'
                      : item?.owner_name_3
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 4 :'}
                  value={
                    item?.owner_name_4 == 'null' || null
                      ? 'N/A'
                      : item?.owner_name_4
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Village : '}
                  value={item?.city}
                  containerStyle={{marginTop: 10}}
                />
                <DeviderLine Style={{marginTop: 15}} />

                <SimpleDoubleLine
                  title={'Address :'}
                  value={item?.address}
                  containerStyle={{}}
                />

                <SimpleDoubleLine
                  title={'Description :'}
                  value={item?.products}
                  containerStyle={{marginTop: 10}}
                />

                {/* <SimpleDoubleLine
                title={'Mobile No  :'}
                value={item?.phone}
                containerStyle={{}}
              /> */}

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Time :'}
                  value={
                    moment(item?.from_time, ['HH:mm']).format('hh:mm A') +
                    '  TO  ' +
                    moment(item?.to_time, ['HH:mm']).format('hh:mm A')
                  }
                  containerStyle={{}}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    width: '100%',

                    justifyContent: 'space-between',
                  }}>
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[0]?.day}
                    value={item?.business_hours[0]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[1]?.day}
                    value={item?.business_hours[1]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[2]?.day}
                    value={item?.business_hours[2]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[3]?.day}
                    value={item?.business_hours[3]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[4]?.day}
                    value={item?.business_hours[4]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[5]?.day}
                    value={item?.business_hours[5]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <SimpleDoubleLine
                    textStyles={{paddingTop: 2}}
                    title={item?.business_hours[6]?.day}
                    value={item?.business_hours[6]?.status == 1 ? '✓' : '╳'}
                    containerStyle={{width: '33%'}}
                  />
                </View>

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Bussiness Start Date:'}
                  value={item?.business_start_date}
                  containerStyle={{}}
                />

                <SimpleDoubleLine
                  title={'Bussiness End Date:'}
                  value={item?.business_end_date}
                  containerStyle={{marginTop: 10}}
                />

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Website :'}
                  value={item?.website}
                  containerStyle={{marginTop: 10}}
                />
                <SimpleDoubleLine
                  title={'Mobile No : '}
                  value={item?.country_code + ' ' + item?.business_phone}
                  containerStyle={{marginTop: 10}}
                />
                <SimpleDoubleLine
                  title={'E-Mail ID : '}
                  value={item?.business_email}
                  containerStyle={{marginTop: 10}}
                />
              </View>
              {!DoNotShow && (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    position: 'absolute',
                    right: 15,
                    bottom: 0,
                  }}>
                  <Image
                    source={require('../../../assets/images/save_icon.png')}
                  />
                </TouchableOpacity>
              )}

              {/* <View style={{paddingHorizontal: '5%'}}>
              <SimpleDoubleLine title={'Products :'} value={item?.products} />
              <SimpleDoubleLine
                title={'Time :'}
                value={`${item?.from_time} to ${item?.to_time}`}
                containerStyle={{marginTop: 10}}
                textStyles={{textTransform: 'uppercase'}}
              /> */}
              {/* {printLog(
              'BusinessDetaiLScreen',
              JSON.stringify(JSON.parse(item?.business_hourse)),
            )} */}
              {/* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}> */}
              {/* {week?.map((item, index) => (
                <WeekDayCell
                  day={`${item?.day} :`}
                  icon={
                    item?.status ? AppImages.ICON_TRUE : AppImages.ICON_FALSE
                  }
                />
              ))} */}
              {/* </View> */}
              {/* </View> */}
              {/* <DeviderLine />
            <View style={{paddingHorizontal: '5%'}}>
              {item?.owner_name_2 != undefined && item?.owner_name_2 != '' ? (
                <LinkCell
                  title={`Owner 2 : ${item?.owner_name_2}`}
                  value={''}
                />
              ) : (
                <></>
              )}

              {item?.owner_name_3 != undefined && item?.owner_name_3 != '' ? (
                <LinkCell
                  title={`Owner 3 : ${item?.owner_name_3}`}
                  value={''}
                />
              ) : (
                <></>
              )}

              <LinkCell
                contact
                title={`Phone Number :`}
                value={item?.business_phone}
                containerStyle={{marginTop: 10}}
              />

              <LinkCell
                title={'Email Id :'}
                value={item?.business_email}
                containerStyle={{marginTop: 10}}
              />
              <LinkCell
                title={'Website :'}
                value={item?.website}
                containerStyle={{marginTop: 10}}
                textStyle={{
                  color: AppColors.purple,
                  textDecorationLine: 'underline',
                }}
              />
            </View> */}
            </View>
            {/* <AddBorder text={'hjvv'} /> */}
          </ScrollView>
        </View>
        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
        />
      </View>
    </View>
  );
};

export default BusinessDetaiLScreen;
