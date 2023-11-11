import React, {useState} from 'react';
import {AppStyles} from '../../../utils/AppStyles';
import {View, ScrollView, Image, Text, SafeAreaView} from 'react-native';
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

const BusinessDetaiLScreen = props => {
  const [item, setItem] = useState(props?.route?.params?.item);

  //   printLog('ITEM_OD_BUSIESS', JSON.stringify(item));
  //   var week = JSON.parse(item?.business_hourse);
  return (
    <SafeAreaView
      style={[
        AppStyles.AppMainBackground,
        {backgroundColor: AppColors.BackgroundSecondColor},
      ]}>
      {/* <AppDrawerHeader
        title={item?.firm}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}

      <View style={{backgroundColor: AppColors.fadeBackground, flex: 1}}>
        <ScreenToolbar text={item?.firm.toUpperCase()} />

        <View
          style={{
            width: '90%',
            backgroundColor: '#fff',
            margin: 15,
            borderRadius: 8,
            paddingTop: 15,
            alignSelf:'center',
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
          <Image
            style={{
              alignSelf: 'center',
              resizeMode: 'contain',
              backgroundColor: AppColors.backgroundColor,
              borderRadius: 100,
              height:112,
              width:121
            }}
            source={
              require('../../../assets/images/directory_image.png')
              // {uri: item?.visting_card_photo}
            }
          />

          <ScrollView
            style={{
              width: '90%',
              alignSelf: 'center',

              backgroundColor: AppColors.backgroundColor,
              paddingVertical: 20,
              paddingHorizontal: 5,
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            <View style={{paddingHorizontal: '5%',alignItems:'center'}}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  fontSize: 20,
                  color: AppColors.black,
                  textTransform: 'capitalize',
                }}>
                {item?.firm}
              </Text>
              <SimpleDoubleLine
                title={'Owner Name :'}
                value={item?.owner_name_1}
                containerStyle={{}}
              />
              <SimpleDoubleLine
                title={'Category :'}
                value={item?.category_name}
                containerStyle={{}}
              />
              <SimpleDoubleLine
                title={'Address :'}
                value={item?.address}
                containerStyle={{}}
              />

              <SimpleDoubleLine
                title={'Mobile No  :'}
                value={item?.phone}
                containerStyle={{}}
              />
            </View>
            
            <DeviderLine />
            <View style={{paddingHorizontal: '5%'}}>
              <SimpleDoubleLine title={'Products :'} value={item?.products} />
              <SimpleDoubleLine
                title={'Time :'}
                value={`${item?.from_time} to ${item?.to_time}`}
                containerStyle={{marginTop: 10}}
                textStyles={{textTransform: 'uppercase'}}
              />
              {/* {printLog(
              'BusinessDetaiLScreen',
              JSON.stringify(JSON.parse(item?.business_hourse)),
            )} */}
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* {week?.map((item, index) => (
                <WeekDayCell
                  day={`${item?.day} :`}
                  icon={
                    item?.status ? AppImages.ICON_TRUE : AppImages.ICON_FALSE
                  }
                />
              ))} */}
              </View>
            </View>
            <DeviderLine />
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
            </View>
          </ScrollView>
        </View>
        <BorderView backgroundColor={AppColors.BackgroundSecondColor} text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}/>
      </View>
    </SafeAreaView>
  );
};

export default BusinessDetaiLScreen;
