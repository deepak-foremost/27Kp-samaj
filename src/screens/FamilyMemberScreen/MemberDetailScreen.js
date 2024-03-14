import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Linking,
  Modal,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {getSingleFamilies} from '../../../../networking/CallApi';
import {AppColors} from '../../utils/AppColors';
import {AppConstValue, printLog} from '../../utils/AppConstValue';
import {AppFonts} from '../../utils/AppFonts';
import {AppImages} from '../../utils/AppImages';
import {AppScreens} from '../../utils/AppScreens';
import {AppStyles} from '../../utils/AppStyles';
import * as RootNavigation from '../../utils/RootNavigation';
import {MemberDetail} from '../MenuScreen/about_us/AboutUsDetailScreen';
import {ListMember} from '../MenuScreen/advisour_member/AdvicerMember';
import ScreenToolbar from '../../components/ScreenToolbar';
import BorderView from '../../components/BorderView';
import AppButton from '../../components/AppButton';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MemberDetailCell} from '../MenuScreen/memberDetail/FamilyDetailScreen';
import ImageViewer from 'react-native-image-zoom-viewer';
import ZoomImage from '../../components/ZoomImage';
import {handleGeneratePDF} from '../../utils/PdfGenerate';

const member = [
  {
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
    business_address: 'અમદાવાદ',
    foreign_country: 'USA',
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
  },
];

const MembersDetailScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  var item = props?.route?.params;
  // printLog('MembersDetailScreen', JSON.stringify(item));
  const [member, setMember] = useState(item);
  const [isVisible, setVisible] = useState(false);
  const [imageList, setImageList] = useState(null);

  const [one, setOne] = useState(null);
  const images = [
    {
      url:
        one == 0 && imageList != null
          ? imageList[0]?.image
          : one == 1 && imageList != null
          ? imageList[1]?.image
          : one == 2 && imageList != null && imageList[2]?.image,
    },
  ];

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,
        },
      ]}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={item?.name} />
        {/* <Modal visible={isVisible} transparent>
          <ImageViewer
            imageUrls={images}
            // index={currentPosition}
            onSwipeDown={() => setVisible(false)}
            enablePreload
            enableSwipeDown
            renderHeader={() => (
              <View style={{paddingTop: 20}}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setVisible(false);
                  }}
                  style={{
                    height: 20,
                    width: 30,
                    marginRight: 10,
                    alignSelf: 'flex-end',
                    backgroundColor: AppColors.BackgroundColor,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={AppImages.ICON_CLOSE}
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </Modal> */}
        <ZoomImage
          visible={isVisible}
          images={images}
          dismiss={() => setVisible(false)}
        />

        {/* <AppDrawerHeader
        family_id
        title={`${item?.family_id} : ${item?.name}`}
        leadIcon={AppImages.BACK_ICON}
        leadIconClick={() => RootNavigation.goBack()}
        onFamilyIdClick={() => {}}
      /> */}

        <View
          style={{
            marginTop: 20,
            width: '90%',
            // flex: 1,
            marginBottom: 20,
            alignItems: 'flex-start',
            alignSelf: 'center',
            backgroundColor: AppColors.BackgroundColor,
            // padding: 15,
            // paddingVertical: 25,
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
          {member == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.BackgroundColor,
                alignItems: 'center',
                paddingHorizontal: 10,
                width: '95%',
                // paddingTop: 15,
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{width: '100%'}}>
              <MemberDetailCell
                item={item}
                notShow={false}
                saveButton={() => handleGeneratePDF(item)}
                styles={{paddingVertical: -15}}
                imgPress={i => {
                  setOne(i);
                  setImageList(item?.images);
                  setVisible(true);
                }}
              />
            </ScrollView>
          )}
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <BorderView
            text={'સેવા કરવી તે મારી અમુલ્ય ફરજ છે'}
            backgroundColor={AppColors.BackgroundSecondColor}
          />
        </View>
        {/* <FooterTextCell title={`''સૌનો સાથ...27 સમાજ નો વિકાસ''`} /> */}
      </View>
    </View>
  );
};

export default MembersDetailScreen;

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
        elevation: 5,
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
