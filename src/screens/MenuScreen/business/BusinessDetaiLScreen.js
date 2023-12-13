import React, {useState} from 'react';
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

const BusinessDetaiLScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [item, setItem] = useState(props?.route?.params?.item);
  const DoNotShow = props?.route?.params?.show;

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
                    elevation: 15,
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
                <Image
                  style={{
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    backgroundColor: AppColors.black,

                    height: 90,
                    width: '47%',
                    marginRight: 5,
                    resizeMode: 'cover',
                    borderRadius: 15,
                  }}
                  source={
                    require('../../../assets/images/directory_image.png')
                    // {uri: item?.visting_card_photo}
                  }
                />
                <Image
                  style={{
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    backgroundColor: AppColors.backgroundColor,

                    height: 90,
                    width: '47%',
                    marginLeft: 10,
                    resizeMode: 'cover',
                    borderRadius: 15,
                  }}
                  source={
                    require('../../../assets/images/directory_image.png')
                    // {uri: item?.visting_card_photo}
                  }
                />
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
                  title={'Own Business :'}
                  value={'Yes'}
                  containerStyle={{marginTop: 10, marginBottom: 10}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 1  :'}
                  value={item?.owner_name_1}
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 2 :'}
                  value={item?.owner_name_1}
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 3 :'}
                  value={item?.owner_name_1}
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 4 :'}
                  value={item?.owner_name_1}
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Village : '}
                  value={'Ahmedabad'}
                  containerStyle={{marginTop: 10}}
                />
                <DeviderLine Style={{marginTop: 15}} />

                <SimpleDoubleLine
                  title={'Address :'}
                  value={'Lorem ipsum here is there Lorem Iusm is dine.'}
                  containerStyle={{}}
                />

                <SimpleDoubleLine
                  title={'Description :'}
                  value={'Lorem ipsum here is there Lorem Iusm is dine.'}
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
                  value={'9:30 AM to 7:00 PM.'}
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
                    title={'Monday :'}
                    value={'✓'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    title={'Tuesday:'}
                    value={'✓'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    title={'Wednesday :'}
                    value={'✓'}
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
                    title={'Thursday :'}
                    value={'✓'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    title={'Friday :'}
                    value={'✓'}
                    containerStyle={{width: '33%'}}
                  />
                  <SimpleDoubleLine
                    title={'Saturday :'}
                    value={'✓'}
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
                    title={'Sunday :'}
                    value={'✓'}
                    containerStyle={{width: '33%'}}
                  />
                </View>

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Bussiness Start Date:'}
                  value={'10/06/2012'}
                  containerStyle={{}}
                />

                <SimpleDoubleLine
                  title={'Bussiness End Date:'}
                  value={'10/06/2022'}
                  containerStyle={{marginTop: 10}}
                />

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Website :'}
                  value={' www.google.com'}
                  containerStyle={{marginTop: 10}}
                />
                <SimpleDoubleLine
                  title={'Mobile No : '}
                  value={'+91 9999999999'}
                  containerStyle={{marginTop: 10}}
                />
                <SimpleDoubleLine
                  title={'E-Mail ID : '}
                  value={'Patel@gmail.com'}
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
