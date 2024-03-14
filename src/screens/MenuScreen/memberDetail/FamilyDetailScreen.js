import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Linking,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {FooterTextCell} from '../../../../components/LineCell';
// import {getFamilyMembersList} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens, MyLog} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {ListMember} from '../advisour_member/AdvicerMember';
import BorderView from '../../../components/BorderView';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {MemberDetail} from '../about_us/AboutUsDetailScreen';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';
import {getFamilyMembersList} from '../../../networking/CallApi';
import RNHTMLToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import ZoomImage from '../../../components/ZoomImage';

const list = [
  {
    id: 0,
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
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    id: 1,
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
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
  {
    id: 2,
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
    business: 'નોકરી',
    current_address: 'અમદાવાદ',
    email: 'Test@gmail.com',
    country_code: '+91',
    shakh: 'વડસ્મીયા',
    mosal: 'ગાંધીનગર',
    current_address: 'નિકોલ અમદાવાદ',
  },
];

// const page1 = PDFPage.create()
//   .setMediaBox(200, 200)
//   .drawText('You can add text and rectangles to the PDF!', {
//     x: 5,
//     y: 235,
//     color: '#007386',
//   })
//   .drawRectangle({
//     x: 25,
//     y: 25,
//     width: 150,
//     height: 150,
//     color: '#FF99CC',
//   })
//   .drawRectangle({
//     x: 75,
//     y: 75,
//     width: 50,
//     height: 50,
//     color: '#99FFCC',
//   });

const FamilyDetailScreen = props => {
  const [filePath, setFilePath] = useState('');
  const [members, setMembers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageList, setImageLIst] = useState(null);
  const [pdfLoad, setPdfLoad] = useState(false);
  const [number, setNumber] = useState('');
  const image = require('../../../assets/images/app_main_icon.png');
const imageUri = Image.resolveAssetSource(image).uri;
  // const [images, setImages] = useState();

  const localImage = {
    images: [
      {image: require('../../../assets/images/small_app_icon.png')}, // assuming 'profile.jpg' is your local image file
    ],
  };

  const images = [
    {
      url:
        number == 0 && imageList != null
          ? imageList[0]?.image
          : number == 1 && imageList != null
          ? imageList[1]?.image
          : number == 2 && imageList != null && imageList[2]?.image,
      // url:number==1 && imageList[1]?.image,
      // url:number==2 && imageList[2]?.image
      // props: {source: items != null && items?.image},
    },
  ];

  // const images = imageList?.map((item, index) => ({
  //   url: item?.image,
  // }));

  // useEffect(() => {
  //   setMembers(list);
  // }, [members]);

  const generatePDF = async userData => {
    const htmlContent = ` <html>
    <style type="text/css">
    .header_div{
      display: inline-block;
      width: 102%;
      background-color: #049AB5;
      height:85px;
      margin-top:-10px;
      margin-left:-8px
    }
    .header_div p{
      margin: 0px;
      font-size: 25px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      margin-top:10px
    }
    .header_div img{
      float: left;
      width: 82px;
      margin-left: 25px;
      height:70px;
      margin-top:10px
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
      margin-bottom: 20px;
      margin-top: 20px;
      text-align: center;
      height:200px;
      border-radius: 15px;
    }
    .profile_img img{
      width: 24%;
      border-radius: 15px;
      object-fit: contain;
      height:200;
    }
    .address_textbox{
      display: inline-block;
      width: 100%;
      align-self: center;
      /*margin-bottom: 20px;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 20px;*/
    }
    .address_textbox p{
      margin: 0px;
      color: #000;
      font-size: 16px;
      margin-bottom: 1px;
    }
    .address_textbox label{
        font-weight: bold;
      color: #000;
      background-color: #6BE5E8;
      border: 1px solid #000;
      padding: 5px 4px;
      width: 34.2%;
      text-align: center;
      float: left;
      margin-right: 5px;
    }
    .address_textbox span{
      border: 1px solid #000;
      padding: 5px 2px;
      width: 59%;
      display: inline-block;
      min-height: 18px;
    }
    .address_textbox ul{
      padding: 0px;
      margin: 0px;
      margin-top: 1px;
      display: flex;
      justify-content: center;
    }
    .address_textbox ul li{
      width: 43.2%;
    list-style-type: none;
    float: left;
    color: #000;
    margin: 0px;
    font-size: 16px;
    margin-bottom: 1px;
    }
    .user_namediv{
      display: inline-block;
      width: 100%;
      margin-top: 30px;
      text-align: center;

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
      /*margin-bottom: 20px;
        border-bottom: 1px solid #E6E6E6;
        padding-bottom: 20px;*/
    }
    .address_textbox1 p{
      margin: 0px;
      color: #000;
      font-size: 16px;
      margin-bottom: 1px;
      display: flex;
      justify-content: center;
    }
    .address_textbox1 label{
      font-weight: bold;
      color: #000;
      background-color: #6BE5E8;
      border: 1px solid #000;
      padding: 3px 2px;
      width:31%;
      text-align: center;
      float: left;
      margin-right: 5px;
    }
    .address_textbox1 span{
      border: 1px solid #000;
      padding: 3px 2px;
      width: 53.47%;
      display: inline-block;
      margin-top: 2px;
      min-height: 18px
    }
  </style>
  <body>
  <div class="container">
  <div class="header_div">
  <img src=${imageUri}>
    <p>${'શ્રી સત્તાવીસ કડવા પાટીદાર સમાજ, ઊંઝા'}</p>
    <h5>ફેમિલી માહિતી</h5>
  </div>
  <div class="user_namediv">
  <span>${userData.name.toUpperCase()}</span>
  <span>${userData?.country_code + ' ' + userData?.phone}</span>
  </div>
  <div class="profile_img">
      <img src="${userData?.images[0]?.image}">
  </div>
  <div class="address_textbox">
  <ul>
    <li><p><label> ગામ:</label>  <span>${userData?.city}</span></p></li>
    <li><p><label> શાખ:</label>  <span>${userData?.shakh}</span></p></li>
  </ul>
  <ul>
    <li><p><label>મોસાળ</label>  <span>${userData?.mosal} </span></p></li>
    <li><p><label>સાસરું:</label>  <span>${userData?.sasru} </span></p></li>
  </ul>
  <ul>
  <li><p><label>જન્મ તારીખ:</label><span>${userData?.dob} </span></p></li>
  <li><p><label>ઉંમર:</label><span>${userData?.age} </span></p></li>
  </ul>
  <ul>
  <li><p><label> ઊંચાઈ:</label><span>${userData?.height} </span></p></li>
  <li><p><label> વજન:</label><span>${userData?.weight} </span></p></li>
  </ul>
  <ul>
  <li><p><label> બ્લડગ્રુપ:</label><span>${
    userData?.blood_group
  }</span></p> </li>
  <li><p><label> લિંગ:</label><span>${userData?.gender}</span></p> </li>
  </ul>
  </div>

  <div class="address_textbox1">
  <p><label> કુટુંબના વડા સાથેનો સંબંધ:</label>  <span>${
    userData?.family_main_member_with_relation
  }</span> </p>
  <p><label> લગ્ન સ્થિતિ:</label>  <span>${userData?.marital_status}</span> </p>
  <p><label> અભ્યાસ:</label>  <span>${userData?.study}</span> </p>
  <p><label> વ્યવસાય:</label>  <span>${userData?.business}</span> </p>
  <p><label> વ્યવસાયનું સરનામું:</label>  <span>${
    userData?.business_address
  }</span> </p>
  <p><label> ફોરેન Country નામ:</label>  <span>${
    userData?.foreign_country_name == ''
      ? 'null'
      : userData?.foreign_country_name
  }</span> </p>

  <p><label> હાલ ના રહેઠાણનું સરનામું:</label>  <span>${
    userData?.current_address
  }</span> </p>
  <p><label> મોબાઈલ નંબર:</label>  <span>${userData?.phone}</span> </p>
  <p><label> E-Mail ID:</label>  <span>${userData?.email}</span> </p>
  <p><label> પરિવાર સુરક્ષા સહાય સભ્ય નં:</label>  <span>${
    userData?.jeevan_sahay_nubmer
  }</span> </p>
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
      fileName: 'MemberDetails',
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
    const pdfFilePath = await generatePDF(userData);
    await sharePDF(pdfFilePath);
  };

  const [visible, setVisible] = useState([]);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;

  var item = props?.route?.params?.item;
  printLog('FamilyDetailScreen', JSON.stringify(props?.route?.params?.item));
  // const [members, setMembers] = useState(null);
  useEffect(() => {
    setLoading(true);
    getString(AsyncStorageConst.allDetails, response => {
      // console.log('token-->', JSON.stringify(response));
    });
    getFamilyMembersList(
      {id: item?.id, flag: 'all'},
      response => {
        printLog('SUCCESS', JSON.stringify(response));
        if (response?.status) {
          setMembers(response?.data);
          setLoading(false);
        } else {
          setMembers([]);
          setLoading(false);
        }
      },
      error => {
        printLog('ERROR', JSON.stringify(error));
        setMembers([]);
        setLoading(false);
      },
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={`${item?.family_id} : ${item?.name}`}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={item.name.toUpperCase()} />
        <ZoomImage
          visible={open}
          images={images}
          dismiss={() => setOpen(false)}
        />
        <View style={{flex: 0.9}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 22,
              marginTop: 15,
              backgroundColor: AppColors.BackgroundSecondColor,
              marginHorizontal: 15,
              borderRadius: 8,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: AppFonts.semiBold,
                fontSize: 13,
              }}>
              {`મોં : ${item?.country_code + ' ' + item?.phone}`}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: AppFonts.semiBold,
                fontSize: 13,
                marginTop: 5,
              }}>
              {`ગામ : ${item?.city}`}
            </Text>
          </View>

          {isLoading ? (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : !isLoading && members?.length == 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  color: AppColors.LightText,
                  fontSize: 15,
                }}>
                No Data Found
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: 15}}
              data={members == null ? [] : members}
              renderItem={({item, index}) => {
                // printLog(`ITEM$${index}`, JSON.stringify(item?.item));
                return (
                  <View style={{}}>
                    <FamilyMermberCell
                      saveButton={() => {
                        setPdfLoad(true);
                        handleGeneratePDF(item);
                      }}
                      imgPress={i => {
                        setOpen(true);
                        setNumber(i);
                        setImageLIst(item?.images);
                      }}
                      index={index}
                      item={item}
                      visible={[...visible]}
                      onClick={
                        () =>
                          // setVisible([...index])
                          {
                            const newList = [...members];
                            newList[index].is_selected =
                              !newList[index].is_selected;
                            setMembers(newList);
                          }
                        // RootNavigation.push(
                        //   props?.navigation,
                        //   AppScreens.MEMBER_DETAIL_SCREEN,
                        //   item?.item,
                        // )
                      }
                    />
                    {/* {
                    item?.item.id==visible ? ( <MemberDetailCell item={item?.item} />):
                    null
                  } */}
                  </View>
                );
              }}
            />
          )}
        </View>
        <BorderView
          text={'ફેમિલી પરિવારનું હાર્દિક પુર્વક સ્વાગત છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
        {/* <FooterTextCell title={`પરિવાર નુ ખુબ ખુબ અભિનંદન`} /> */}
      </View>
    </View>
  );
};

export default FamilyDetailScreen;

const FamilyMermberCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={props?.onClick}
      style={{
        // flexDirection: 'row',
        // paddingHorizontal: 14,
        paddingVertical: 5,
        marginHorizontal: 17,
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
      {/* <Image
        source={
          props?.item?.images[0]?.image == undefined
            ? AppImages.MEMBER_IMAGE
            : {uri: props?.item?.images[0]?.image}
        }
        style={{
          height: 19,
          width: 10,
          alignSelf: 'center',
          marginRight: 10,
          resizeMode: 'contain',
          tintColor: '#BDBDBD',
        }}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent:
            // props?.visible == props?.item?.id ? 'center' : 'flex-start',
            props?.visible.includes(props.index) ? 'center' : 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            color: AppColors.black,
            paddingVertical: 10,
            marginRight: 10,
          }}>
          {props?.item?.family_main_member_with_relation}
        </Text>
        <Image
          style={{
            height: '40%',
            width: 2,
            backgroundColor: AppColors.black,
            alignSelf: 'center',
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 11,
            color:
              props?.item?.index % 2 == 1 ? AppColors.black : AppColors.black,
            paddingVertical: 10,
          }}>{`${props?.item?.name}`}</Text>
        <Image
          style={{
            alignSelf: 'center',
            tintColor: '#C5C5C5',
            position: 'absolute',
            right: 10,
          }}
          source={
            props?.item?.is_selected
              ? AppImages.DROP_UP_ICON
              : AppImages.DROP_DOWN_GRAY
          }
        />
      </View>
      {props?.item?.is_selected ? (
        <MemberDetailCell
          item={props?.item}
          saveButton={props?.saveButton}
          imgPress={props?.imgPress}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export const MemberDetailCell = props => {
  const images = [
    {
      url: props?.item?.image,
      props: {source: props?.item?.image},
    },
  ];
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingBottom: 15,
        marginTop: -2,
        ...props.styles,
        ...Platform.select({
          ios: {
            // shadowColor: '#D5D5D5',
            // shadowOffset: {width: 0, height: 5},
            // shadowOpacity: 0.9,
            // shadowRadius: 3,
          },
          android: {
            elevation: 0,
          },
        }),
      }}>
      <View style={{alignItems: 'flex-start', flex: 1}}>
        {/* <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 11,
              color: AppColors.DarkText,
            }}>
            {props?.item?.family_main_member_with_relation}
            {' | '}
          </Text>
          <Text
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 11,
              color: AppColors.DarkText,
            }}>
            {props?.item?.name}
          </Text>
        </View> */}
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                RootNavigation.navigate(AppScreens.FAMILY_DETAIL_SCREEN, {
                  item: {...props.item, id: props?.item?.user_id},
                });
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 14,
                  color: AppColors.BackgroundSecondColor,
                  marginTop: 10,
                  // marginBottom:5
                }}>
                {props?.item?.country_code + ' ' + props?.item?.phone}
              </Text>
              {/* <MemberDetail
                    title={'Family Id :'}
                    detailText={item?.family_id}
                    textStyle={{
                      textDecorationLine: 'underline',
                      color: 'blue',
                    }}
                  /> */}
            </TouchableOpacity>

            <MemberDetail
              style={{marginTop: 0}}
              title={'ગામ :'}
              detailText={props?.item?.city}
              textStyle={{color: AppColors.BackgroundSecondColor}}
            />
            <MemberDetail
              style={{}}
              title={'શાખ :'}
              detailText={props?.item?.shakh}
              textStyle={{color: AppColors.BackgroundSecondColor}}
            />

            <MemberDetail title={'મોસાળ :'} detailText={props?.item?.mosal} />
            <MemberDetail title={'સાસરું: '} detailText={props?.item?.sasru} />

            <View style={{flexDirection: 'row'}}>
              <MemberDetail
                title={'જન્મ તારીખ :'}
                styles={{flex: 0}}
                detailText={
                  props?.item?.dob != '' && props?.item?.dob != undefined
                    ? moment(props?.item?.dob, 'YYYY-MM-DD').format(
                        'DD-MM-YYYY',
                      )
                    : ' '
                }
              />
              <MemberDetail
                style={{marginLeft: 10}}
                title={'|  ઉંમર :'}
                detailText={props?.item?.age}
                styles={{flex: 0}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <MemberDetail
                style={{}}
                title={'ઊંચાઈ :'}
                detailText={props?.item?.height + ' ft.'}
                styles={{flex: 0}}
              />
              <MemberDetail
                style={{}}
                title={'  |  વજન :'}
                detailText={props?.item?.weight + ' Kg'}
                styles={{flex: 0}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <MemberDetail
                title={'બ્લડ ગ્રુપ :'}
                detailText={props?.item?.blood_group}
                styles={{flex: 0}}
              />
              <MemberDetail
                title={'  |  લિંગ :'}
                detailText={props?.item?.gender}
                styles={{flex: 0}}
              />
            </View>
            <MemberDetail
              title={'કુટુંબ ના વડા સાથે નો સંબંધ :'}
              detailText={props?.item?.family_main_member_with_relation}
            />
            <MemberDetail
              title={'લગ્ન સ્થિતિ :'}
              detailText={props?.item?.marital_status}
            />
            <MemberDetail title={'અભ્યાસ :'} detailText={props?.item?.study} />
            <MemberDetail
              title={'વ્યવસાય :'}
              detailText={props?.item?.business}
            />

            <MemberDetail
              title={'વ્યવસાયનું સરનામું :'}
              detailText={props?.item?.business_address}
            />
            {props?.item?.foreign_country_name != undefined && (
              <MemberDetail
                title={'ફોરેન Country નામ :'}
                detailText={props?.item?.foreign_country_name}
              />
            )}
            {/* {props?.item?.foreign_number != undefined && (
          <MemberDetail
            title={'ફોરેન Number :'}
            detailText={
              props?.item?.foriegn_country_code + props?.item?.foreign_number
            }
          />
        )} */}
            <MemberDetail
              title={'હાલ ના રહેઠાણ નુ સરનામું :'}
              detailText={props?.item?.current_address}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <MemberDetail
                styles={{flex: 0}}
                title={'મોબાઇલ નંબર :'}
                detailText={props?.item?.country_code + props?.item?.phone}
                contact
              />

              <TouchableOpacity
                activeOpacity={1}
                style={{
                  paddingBottom: 2.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                onPress={() =>
                  Linking.openURL(
                    `tel:${
                      props?.item?.country_code + ' ' + props?.item?.phone
                    }`,
                    // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
                  )
                }>
                <Image
                  style={{
                    marginHorizontal: 5,
                    height: 9,
                    width: 9,
                    resizeMode: 'contain',
                  }}
                  source={AppImages.CIRCLE_CALL_ICON}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  height: 15,
                  width: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                  paddingBottom: 2.5,
                }}
                onPress={() =>
                  Linking.openURL(
                    `whatsapp://send?phone=${
                      props?.item?.country_code + ' ' + props?.item?.phone
                    }`,
                    // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
                  )
                }>
                <Image style={{}} source={AppImages.WHATSAPP_ICON} />
              </TouchableOpacity>
            </View>

            <MemberDetail
              title={'Email ID :'}
              detailText={props?.item?.email}
            />
            {props?.item?.jeevan_sahay_nubmer != null ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {props?.item?.jeevan_sahay_nubmer != '' && (
                  <MemberDetail
                    styles={{flex: 0}}
                    title={'પરિવાર સુરક્ષા સહાય સભ્ય નં :'}
                    detailText={props?.item?.jeevan_sahay_nubmer}
                    style={{}}
                  />
                )}

                {props?.item?.jeevan_sahay_nubmer != '' && (
                  <TouchableOpacity
                    activeOpacity={AppConstValue.ButtonOpacity}
                    onPress={() =>
                      RootNavigation.navigate(AppScreens.SOCIAL_SERVICE, {
                        status: 'main',
                        item: props?.item,
                        number: props?.item?.jeevan_sahay_nubmer,
                        name: props?.item?.name,
                      })
                    }
                    style={{
                      marginLeft: 10,
                      backgroundColor: '#FFFFFF',
                      justifyContent: 'center',
                      borderRadius: 8,
                      alignItems: 'center',
                      paddingBottom: 2.5,
                    }}>
                    <LinearGradient
                      colors={['#FF56AE', '#FF56AE', '#FF56AE']}
                      style={{
                        padding: 3,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: AppFonts.bold,
                          fontSize: 6,
                          color: 'white',
                        }}>
                        ePay Now
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <></>
            )}
            {/* {props?.item?.boomi_nubmer != '' ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MemberDetail
              title={'ભુમિ સભાસદ નં:'}
              detailText={props?.item?.boomi_nubmer}
              style={{}}
            />
          </View>
        ) : null} */}
          </View>

          <View
            style={{
              // width: '30%',
              // flex: 0.4,
              width: 90,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 3,
              marginTop: 15,
              height: 90,
              position: 'absolute',
              right: 0,
              // marginRight:10
            }}>
            {/* <Image
                  source={AppImages.placeholder_user}
                  style={{
                    height: 109,
                    width: 109,
                    borderRadius: 10,
                  }}
                /> */}
            <TouchableOpacity
              activeOpacity={1}
              style={{width: '100%', height: 80, borderRadius: 10}}
              onPress={() =>
                props?.item?.images[0]?.image == undefined
                  ? null
                  : props?.imgPress(0)
              }>
              <Image
                source={
                  props?.item?.images[0]?.image == undefined
                    ? AppImages.MEMBER_IMAGE
                    : {uri: props?.item?.images[0]?.image}
                }
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                  borderRadius: 10,
                  backgroundColor: '#F2F2F2',
                }}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '31%',
              height: 80,
              borderRadius: 10,
              marginHorizontal: 15,
            }}
            onPress={() =>
              props?.item?.images[1]?.image == undefined
                ? null
                : props?.imgPress(1)
            }>
            <Image
              source={
                props?.item?.images[1]?.image == undefined
                  ? AppImages.MEMBER_IMAGE
                  : {uri: props?.item?.images[1]?.image}
              }
              style={{
                height: '100%',
                width: '100%',
                // resizeMode: 'contain',
                borderRadius: 10,
                backgroundColor: '#F2F2F2',
              }}
            />
          </TouchableOpacity> */}

            {/* <TouchableOpacity
            activeOpacity={1}
            style={{width: '31%', height: 80, borderRadius: 10}}
            onPress={() =>
              props?.item?.images[2]?.image == undefined
                ? null
                : props?.imgPress(2)
            }>
            <Image
              source={
                props?.item?.images[2]?.image == undefined
                  ? AppImages.MEMBER_IMAGE
                  : {uri: props?.item?.images[2].image}
              }
              style={{
                height: '100%',
                width: '100%',
                // resizeMode: 'contain',
                borderRadius: 10,
                backgroundColor: '#F2F2F2',
              }}
            />
          </TouchableOpacity> */}
          </View>
        </View>
        {!props?.notShow && (
          <TouchableOpacity
            onPress={props?.saveButton}
            activeOpacity={1}
            style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              width: '50%',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Image source={require('../../../assets/images/save_icon.png')} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
