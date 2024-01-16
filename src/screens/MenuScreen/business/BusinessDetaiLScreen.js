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
import RNHTMLToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';

const BusinessDetaiLScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [item, setItem] = useState(props?.route?.params?.item);
  const DoNotShow = props?.route?.params?.show;
  const [days, setDayes] = useState([]);
  const [open, setOpen] = useState(false);

  // const generatePDF = async userData => {
  //   const htmlContent = `
  //     <html>
  //     <style>
  //       body{
  //         margin: 20px;
  //       }
  //       p{
  //         margin:20px;
  //       }
  //       h1{
  //         text-align: center;
  //       }
  //     </style>
  //       <body>
  //         <h1>User Details</h1>
  //         <p style="color:red; align-self:'center';">firm: ${item.firm}</p>
  //         <p>Category: ${item.category_name}</p>
  //         <p>Time: ${
  //           moment(item?.from_time, ['HH:mm']).format('hh:mm A') +
  //           '  TO  ' +
  //           moment(item?.to_time, ['HH:mm']).format('hh:mm A')
  //         }</p>
  //         <p>Owner1: ${item.owner_name_1}</p>
  //         <p>Owner2: ${item.owner_name_2}</p>
  //         <p>Owner3: ${item.owner_name_3}</p>
  //         <p>Owner4: ${item.owner_name_4}</p>
  //         <p>Address: ${item.address}</p>
  //         <p>Description: ${item.products}</p>
  //         <p>Phone: ${item.country_code + item.business_phone}</p>
  //         <p>business_email: ${item.business_email}</p>
  //         <p>website: ${item.website}</p>
  //         <p>${item?.business_hours[0]?.day}:${
  //     item?.business_hours[0]?.status == 1 ? '✓  ' : '╳'
  //   } ${'    ' + item?.business_hours[1]?.day}:${
  //     item?.business_hours[1]?.status == 1 ? '✓   ' : '╳'
  //   }  ${'    ' + item?.business_hours[2]?.day}:${
  //     item?.business_hours[2]?.status == 1 ? '✓   ' : '╳'
  //   } </p>
  //   <p>${item?.business_hours[3]?.day}:${
  //     item?.business_hours[3]?.status == 1 ? '✓  ' : '╳   '
  //   } ${'    ' + item?.business_hours[4]?.day}:${
  //     item?.business_hours[4]?.status == 1 ? '✓  ' : '╳'
  //   }  ${'    ' + item?.business_hours[5]?.day}:${
  //     item?.business_hours[5]?.status == 1 ? '✓  ' : '╳'
  //   } </p>
  //   <p>${item?.business_hours[6]?.day}:${
  //     item?.business_hours[6]?.status == 1 ? '✓   ' : '╳'
  //   } </p>
  //         <p>વ્યવસાયનું સરનામું: ${item.business_address}</p>
  //         <p>ફોરેન Country નામ: ${item.city}</p>
  //         <p>હાલ ના રહેઠાણનું સરનામું: ${item.current_address}</p>
  //         <p>મોબાઈલ નંબર: ${item.phone}</p>
  //         <p>E-Mail ID: ${item.email}</p>
  //       </body>
  //     </html>
  //   `;

  //   const options = {
  //     html: htmlContent,
  //     fileName: 'UserDetails',
  //     directory: 'Documents',
  //   };

  //   const pdf = await RNHTMLToPdf.convert(options);
  //   return pdf.filePath;
  // };

  const generatePDF = async userData => {
    const htmlContent = `
    <html>
    <style type="text/css">
    .topname p{
      margin: 0;
      color: #0A3C5D;
      font-size: 22px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .profile_img{
      display: inline-block;
      width: 100%;
      margin-bottom: 40px;
      height:150
      margin-left:25px
    }
    .profile_img img{
      width: 48%;
      
      border-radius: 15px;
      height:150
    }
    .profile_textdiv1 p{
      margin: 0px;
      color: #ABABAB;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .profile_textdiv1 p label{
      font-weight: bold;
      color: #363663;
    }
    .profile_textdiv1{
      display: inline-block;
      width: 100%;
      margin-bottom: 3px;
    }
    .profile_textdiv1 h3{
      margin: 0px;
        font-size: 22px;
        color: #000;    
        margin-bottom: 15px;
    }
  
    .profile_textdiv p{
      margin: 0px;
      color: #ABABAB;
      font-size: 16px;
      margin-bottom: 1px;
    }
    .profile_textdiv p label{
      font-weight: bold;
      color: #000;
    }
    .profile_textdiv{
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 20px;
    }
    .profile_textdiv h3{
      margin: 0px;
        font-size: 22px;
        color: #000;    
        margin-bottom: 15px;
    }
    .address_textbox{
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 20px;
    }
    .address_textbox p{
      margin: 0px;
      color: #ABABAB;
      font-size: 16px;
      margin-bottom: 1px;
    }
    .address_textbox p label{
      font-weight: bold;
      color: #363663;
    }
    .address_textbox ul{
      padding: 0px;
      margin: 0px;
      margin-top: 10px;
    }
    .address_textbox ul li{
      width: 33.33%;
        list-style-type: none;
        float: left;
        font-weight: bold;
        color: #363663;
        margin: 0px;
        font-size: 16px;
        margin-bottom: 6px;
    }	
    .address_textbox ul li img{
      width: 20px;
    }
  </style>
    <body>
    <div class="container">	  
	<div class="profile_img">
		<img src=${item?.images[0]?.visting_card_photo}>
		<img src=${item?.images[1]?.visting_card_photo}>
	</div>
	<div class="profile_textdiv1">
		<h3>${item?.firm}</h3>
		<p><label> Category</label>  ${item?.category_name}</p>	
		<p><label> Firm</label>  ${item?.firm}</p>
		<p><label> Business Type</label>  ${item?.business_type}</p>
	</div>
	<div class="profile_textdiv">
		<p><label> Owner Name 1</label>  ${item?.owner_name_1} </p>	
		<p><label> Owner Name 2</label>  ${item?.owner_name_2} </p>	
		<p><label> Owner Name 3</label>  ${item?.owner_name_3} </p>		
		<p><label> Owner Name 4</label>  ${item?.owner_name_4} </p>		
		<p><label> Village</label>  ${item?.city}</p>
	</div>
	<div class="address_textbox">
		<p><label> Address :</label>  ${item?.address} </p>
		<p><label> Description :</label>  ${item?.products} </p>
	</div>
	<div class="address_textbox">
		<p><label> Time :</label>  ${
      moment(item?.from_time, ['HH:mm']).format('hh:mm A') +
      '  TO  ' +
      moment(item?.to_time, ['HH:mm']).format('hh:mm A')
    }</p>
		<ul>
    <li><label> ${item?.business_hours[0]?.day}</label>${
      item?.business_hours[0]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
    <li><label> ${item?.business_hours[1]?.day}</label>${
      item?.business_hours[1]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
		<li><label> ${item?.business_hours[2]?.day}</label>${
      item?.business_hours[2]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
    <li><label> ${item?.business_hours[3]?.day}</label>${
      item?.business_hours[3]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
		<li><label> ${item?.business_hours[4]?.day}</label>${
      item?.business_hours[4]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
		<li><label> ${item?.business_hours[5]?.day}</label>${
      item?.business_hours[5]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
			<li><label> ${item?.business_hours[6]?.day}</label>${
      item?.business_hours[6]?.status == 1 ? '  ✓ ' : '  ╳ '
    } </li>
		</ul>		
	</div>
	<div class="address_textbox">
		<p><label> Bussiness Start Date :</label>  ${item?.business_start_date}</p>
		<p><label> Bussiness End Date :</label>  ${item?.business_end_date}</p>
	</div>
	<div class="address_textbox" style="border-bottom: 0px;">
		<p><label> Website :</label>  ${item?.website}</p>		
		<p><label> Mobile No. :</label>  ${
      item?.country_code + ' ' + item?.business_phone
    }</p>		
		<p><label> E-Mail Id :</label>  ${item?.business_email}</p>		
	</div>
</div>
</body>
</html>
`;
    const options = {
      html: htmlContent,
      fileName: 'UserDetails',
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
                      item?.images[0]?.visting_card_photo == undefined
                        ? AppImages.MEMBER_IMAGE
                        : {uri: item?.images[0]?.visting_card_photo}
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
                  value={item?.business_type}
                  containerStyle={{marginTop: 10, marginBottom: 10}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 1  :'}
                  value={
                    item?.owner_name_1 == null ? 'N/A' : item?.owner_name_1
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 2 :'}
                  value={
                    item?.owner_name_2 == null ? 'N/A' : item?.owner_name_2
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 3 :'}
                  value={
                    item?.owner_name_3 == null ? 'N/A' : item?.owner_name_3
                  }
                  containerStyle={{}}
                />
                <SimpleDoubleLine
                  title={'Owner Name 4 :'}
                  value={
                    item?.owner_name_4 == null ? 'N/A' : item?.owner_name_4
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
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
        />
      </View>
    </View>
  );
};

export default BusinessDetaiLScreen;
