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
  Linking,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppColors} from '../../../utils/AppColors';
import {AppFonts} from '../../../utils/AppFonts';
import {
  DoubleLineButton,
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
import RNHTMLToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorageConst} from '../../../utils/AsyncStorageHelper';

const BusinessDetaiLScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [item, setItem] = useState(props?.route?.params?.item);
  const DoNotShow = props?.route?.params?.show;
  const [days, setDayes] = useState([]);
  const [open, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [HeaderPhone, setHeaderPhone] = useState('');
  const [name, setName] = useState('');
  const image = require('../../../assets/images/app_main_icon.png');
  const imageUri = Image.resolveAssetSource(image).uri;

  useEffect(() => {
    async function check() {
      let Details = await AsyncStorage.getItem(AsyncStorageConst.allDetails);
      let data = JSON.parse(Details)?.data;
      setHeaderPhone(data?.country_code + ' ' + data?.phone);
      setName(data?.name);
      // console.log('details', JSON.stringify(data));
    }
    check();
  }, []);

  const generatePDF = async userData => {
    const htmlContent = ` <html>
<style type="text/css">
.header_div{
  display: inline-block;
  width: 100%;
  background-color:  #049AB5;
  padding: 13px 0px;
}
.header_div p{
  margin: 0px;
  font-size: 25px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  padding-top: 13px;
}
.header_div img{
  float: left;
  width: 82px;
  margin-left: 25px;
}
.header_div h5{
  margin: 0px;
  font-size: 18px;
  color: #fff;
  font-weight: 700; 
  text-align: center; 
  margin-top: 10px;
}
.footer_divbox{
  margin: 0 auto;
  text-align: center;
  height:auto;
  position: fixed;
  bottom: 0;
  left:0;
  right:0;
  margin-top:10px;
  width:100%
}
.footer_divbox h3{
  max-width: 680px;
  border: 2px solid #000;
  border-radius: 50px;
  padding: 15px 0px;
  font-size: 21px;
  color: #000;
  margin: 0 auto;
}
.profile_img{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
   width: 100%;
   margin-bottom: 20px;
   height:150px
   margin-top:20px;
   text-align: center;
 }
 .profile_img img{
   width: 42%;
   border-radius: 15px;
   float: left;
   border-radius: 15px;
   margin-left:10px;
   object-fit: cover;
   height:190;
 }
 .profile_img default{
   width: 48%;
   border-radius: 15px;
   float: left;
   border-radius: 15px;
   margin-left:10px;
   object-fit: contain;
   height:190;
 }
.address_textbox{
  display: inline-block;
  width: 100%;
  align-self: center;
  height:auto;
}
.address_textbox p{
  margin: 0px;
  color: #000;
  font-size: 16px;
  width: 100%;
}
.address_textbox label{
    font-weight: bold;
  color: #000;
  background-color: #6BE5E8;
  border: 1px solid #000;
  padding: 5px 4px;
  width: 34%;
  text-align: center;
  float: left;
  margin-right: 2px;
}
.address_textbox span{
  border: 1px solid #000;
  padding: 5px 4px;
  width: 59%;
  display: inline-block;
  min-height: 18px
}
.address_textbox ul{
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  margin-top: 1px;
}
.address_textbox ul li{
  width: 43%;
list-style-type: none;
float: left;    
color: #000;
margin: 0px;
font-size: 16px;
margin-bottom: 1px;

}
.address_textbox ul li img{
  width: 20px;
  
}
.user_namediv{
  display: inline-block;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  margin-bottom:20
}
.user_namediv span{
  font-weight: bold;
  color: #000;
  background-color: #6BE5E8;
  border: 0px solid #000;
  padding: 9px 46px;      
  text-align: center;      
  margin-right: 5px;
  border-radius: 50px;
}
.address_textbox1{
  display: inline-block;
  width: 100%;
  align-self: center;
  height:auto;
  /*margin-bottom: 20px;
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 20px;*/
}
.address_textbox1 p{
  margin: 0px;
  color: #000;
  font-size: 16px;
  margin:0 auto;
  display: flex;
  justify-content: center;
}
.address_textbox1 label{
    font-weight: bold;
  color: #000;
  background-color: #6BE5E8;
  border: 1px solid #000;
  padding: 3px 2px;
  width: 31%;
  text-align: center;
  float: left;
  margin-right: 1px;
}
.address_textbox1 span{
  border: 1px solid #000;
  padding: 2px 2px;
  width: 53.47%;
  display: inline-block;
  margin-top: 2px;
}
</style>
<body>
<div class="container">
<div class="header_div">
<img src=${imageUri}/>
    <p>${'શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ, ઊંઝા'}</p>
    <h5>બિજનેસ માહિતી</h5>
  </div>
<div class="user_namediv">
<span>${item?.owner_name_1}</span>
<span>${item?.country_code + ' ' + item?.business_phone}</span>
</div>
<div class="profile_img">
  		<img class=${
        item?.images[0]?.visting_card_photo != undefined ? 'default' : 'img'
      } src=${
      item?.images[0]?.visting_card_photo == undefined
        ? 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
        : item?.images[0]?.visting_card_photo
    }>
		<img src=${
      item?.images[1]?.visting_card_photo == undefined
        ? 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
        : item?.images[1]?.visting_card_photo
    }>
	</div>
  <div class="address_textbox1">
  <p><label>Category</label>  <span>${item?.category_name}</span> </p>
  <p><label>Firm</label>  <span>${item?.firm}</span> </p>
  </div>
  <div class="address_textbox">
  <ul>
    <li><p><label>Own Business</label>  <span>${
      item?.business_type == 'Own' ? 'yes' : ''
    }</span></p></li>
    <li><p><label>Part. Business</label>  <span>${
      item?.business_type == 'Partnership' ? 'yes' : ''
    }</span></p></li>
  </ul>
  </div>
  <div class="address_textbox1">
  <p><label>Owner Name 1</label>  <span>${item?.owner_name_1}</span> </p>
  <p><label>Owner Name 2</label>  <span>${item?.owner_name_2}</span> </p>
  <p><label>Owner Name 3</label>  <span>${item?.owner_name_3}</span> </p>
  <p><label>Village</label>  <span>${item?.city}</span> </p>
  <p><label>Business Address</label>  <span>${item?.address}</span> </p>
  <p><label>Description</label>  <span>${item?.products}</span> </p>
  </div>
  <div class="address_textbox">
  <ul>
<li><p><label>Start Time</label>  <span>${moment(item?.from_time, [
      'HH:mm',
    ]).format('hh:mm A')}</span></p></li>
<li><p><label>End Time</label>  <span>${moment(item?.to_time, ['HH:mm']).format(
      'hh:mm A',
    )}</span></p></li>
</ul>
  <ul>
    <li><p><label>${item?.business_hours[0]?.day}</label>  <span>${
      item?.business_hours[0]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
    <li><p><label>${item?.business_hours[1]?.day}</label>  <span>${
      item?.business_hours[1]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
  </ul>
  <ul>
  <li><p><label>${item?.business_hours[2]?.day}</label>  <span>${
      item?.business_hours[2]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
  <li><p><label>${item?.business_hours[3]?.day}</label>  <span>${
      item?.business_hours[3]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
</ul>
<ul>
<li><p><label>${item?.business_hours[4]?.day}</label>  <span>${
      item?.business_hours[4]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
<li><p><label>${item?.business_hours[5]?.day}</label>  <span>${
      item?.business_hours[5]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span></p></li>
</ul>
  </div>
  <div class="address_textbox1">
  <p><label>${item?.business_hours[6]?.day}</label>  <span>${
      item?.business_hours[6]?.status == 1 ? '  ✓ ' : '  ╳ '
    }</span> </p>
  <p><label>Mobile Number</label>  <span>${
    item?.country_code + ' ' + item?.business_phone
  }</span> </p>
  <p><label>Email ID</label>  <span>${item?.business_email}</span> </p>
  <p><label>Website</label>  <span>${item?.website}</span> </p>
  </div>
  <div class="footer_divbox">
      <h3>મારો સમાજ.... મારો ફરજ,<br>સૌનો સાથ.. સૌનો વિશ્વાસ અને સમાજનો વિકાસ</h3>
      <div style="background-color: #049AB5; width:100%; height:20px; margin-top:20px"; margin-bottom:-20px>
      </div>
    </div>


</div>
</body>
</html>`;
    const options = {
      html: htmlContent,
      fileName: 'BusinessDetails',
      directory: 'Documents',
    };

    const pdf = await RNHTMLToPdf.convert(options);
    return pdf.filePath;
  };

  const sharePDF = async pdfFilePath => {
    try {
      const options = {
        url: `file://${pdfFilePath}`,
        type: 'application/pdf',
        failOnCancel: false,
      };

      await Share.open(options);
    } catch (error) {
      // console.error('Error sharing PDF:', error.message);
    }
  };

  const handleGeneratePDF = async userData => {
    // const userData = {
    //   name: 'John Doe',
    //   number: '123-456-7890',
    //   gender: 'Male',
    // };

    const pdfFilePath = await generatePDF(userData);
    await sharePDF(pdfFilePath);
  };

  // const images = [
  //   {
  //     url: item != null && item?.image,
  //     props: {source: item != null && item?.image},
  //   },
  // ];

  // useEffect(() => {
  //   // console.log('details-->', item?.business_hours[3]?.status);
  // });

  //   printLog('ITEM_OD_BUSIESS', JSON.stringify(item));
  //   var week = JSON.parse(item?.business_hourse);
  // const images = item?.images?.map((item, index) => ({
  //   url: item?.visting_card_photo,
  // }));
  const [one, setOne] = useState(null);
  const images = [
    {
      url:
        one == 1
          ? item?.images[0]?.visting_card_photo
          : item?.images[1]?.visting_card_photo,
    },
  ];
  // const [images, setImages] = useState([{url: images[0]?.visting_card_photo}]);
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
        <ZoomImage
          visible={open}
          images={images}
          dismiss={() => setOpen(false)}
        />
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
                paddingBottom: 25,
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
                  onPress={() => {
                    setOne(1);
                    item?.images[0]?.visting_card_photo != null &&
                      setOpen(true);
                  }}>
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
                      item?.images[0]?.visting_card_photo == undefined
                        ? AppImages.MEMBER_IMAGE
                        : {uri: item?.images[0]?.visting_card_photo}
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width: '47%', marginLeft: 10}}
                  activeOpacity={1}
                  onPress={() => {
                    setOne(2);
                    item?.images[1]?.visting_card_photo != null &&
                      setOpen(true);
                  }}>
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
                      item?.images[1]?.visting_card_photo == '' ||
                      item?.images[1]?.visting_card_photo == undefined
                        ? AppImages.MEMBER_IMAGE
                        : // require('../../../assets/images/directory_image.png')
                          {uri: item?.images[1]?.visting_card_photo}
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
                  value={item?.business_type + ' Business'}
                  containerStyle={{marginTop: 10, marginBottom: 10}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 1  :'}
                  value={
                    item?.owner_name_1 == null ? 'Null' : item?.owner_name_1
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 2 :'}
                  value={
                    item?.owner_name_2 == null ? 'Null' : item?.owner_name_2
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 3 :'}
                  value={
                    item?.owner_name_3 == null ? 'Null' : item?.owner_name_3
                  }
                  containerStyle={{}}
                />
                {/* <SimpleDoubleLine
                  title={'Owner Name 4 :'}
                  value={
                    item?.owner_name_4 == null ? 'N/A' : item?.owner_name_4
                  }
                  containerStyle={{}}
                /> */}
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

                {/* <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <SimpleDoubleLine
                  title={'Bussiness Start Date:'}
                  value={moment(item?.business_start_date).format('DD/MM/YYYY')}
                  containerStyle={{}}
                />

                <SimpleDoubleLine
                  title={'Bussiness End Date:'}
                  value={
                    item?.business_end_date == undefined
                      ? 'Continue'
                      : moment(item?.business_end_date).format('DD/MM/YYYY')
                  }
                  containerStyle={{marginTop: 10}}
                /> */}

                <DeviderLine Style={{marginTop: 15, marginBottom: 15}} />

                <DoubleLineButton
                  title={'Website :'}
                  value={item?.website == undefined ? 'Null' : item?.website}
                  containerStyle={{marginTop: 10}}
                  // textStyles={{color: '#0000EE'}}
                  // press={() =>
                  //   item?.website != undefined &&
                  //   Linking.openURL(`https://${item?.website}`)
                  // }
                />
                <DoubleLineButton
                  title={'Mobile No : '}
                  value={item?.country_code + ' ' + item?.business_phone}
                  containerStyle={{marginTop: 10}}
                  press={() =>
                    Linking.openURL(
                      `tel:${item?.country_code + item?.business_phone}`,
                    )
                  }
                />
                <DoubleLineButton
                  title={'E-Mail ID : '}
                  value={item?.business_email}
                  containerStyle={{marginTop: 10}}
                  press={() =>
                    Linking.openURL(`mailto:${item?.business_email}`)
                  }
                />
              </View>
              {!DoNotShow && (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    padding: 5,
                    position: 'absolute',
                    right: 15,
                    bottom: 0,
                  }}
                  onPress={() => handleGeneratePDF()}>
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
          text={'મારો સમાજ... મારી ફરજ'}
        />
      </View>
    </View>
  );
};

export default BusinessDetaiLScreen;
