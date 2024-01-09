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
  // const [images, setImages] = useState();

  // const images = [
  //   {
  //     url: items != null && items?.image,
  //     props: {source: items != null && items?.image},
  //   },
  // ];

  const images = imageList?.map(item => ({
    url: item?.image,
  }));

  // useEffect(() => {
  //   setMembers(list);
  // }, [members]);

  const generatePDF = async userData => {
    const htmlContent = ` <html>
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
      
    }
    .profile_img img{
      width: 31%;
      float: left;
      border-radius: 15px;
      height:200;
      margin-left:10px
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
        color: #049AB5;    
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
        color: #049AB5;    
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
      width: 50%;
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
		<img src='${userData?.images[0]?.image}'>
		<img src='${userData?.images[1]?.image}'>
		<img src='${userData?.images[2]?.image}'>
   
	</div>
	<div class="profile_textdiv1">
		<h3>${userData?.phone}</h3>
		<p><label> ગામ:</label>  ${userData?.city}</p>	
		<p><label> શાખ:</label>  ${userData?.shakh}</p>
	</div>
	<div class="profile_textdiv">
		<p><label> મોસાળ</label>  ${userData?.mosal} </p>	
		<p><label> સાસરું:</label>  ${userData?.sasru} </p>	
	</div>
  <div class="address_textbox">
  <ul>
  <li><label> જન્મ તારીખ:</label>${userData?.dob} </li>
  <li><label> ઉંમર:</label>${userData?.age} </li>
  </ul>
  <ul>
  <li><label> ઊંચાઈ:</label>${userData?.height} </li>
  <li><label> વજન:</label>${userData?.weight} </li>
  </ul>
  <ul>
  <li><label> બ્લડગ્રુપ:</label>${userData?.blood_group} </li>
  <li><label> લિંગ:</label>${userData?.gender} </li>
  </ul>
  </div>
  <div class="profile_textdiv">
		<p><label> કુટુંબના વડા સાથેનો સંબંધ:</label>  ${userData?.family_main_member_with_relation} </p>	
		<p><label> લગ્ન સ્થિતિ:</label>  ${userData?.marital_status} </p>	
    <p><label> અભ્યાસ:</label>  ${userData?.study} </p>
    <p><label> વ્યવસાય:</label>  ${userData?.business} </p>
    <p><label> વ્યવસાયનું સરનામું:</label>  ${userData?.business_address} </p>
    <p><label> ફોરેન Country નામ:</label>  ${userData?.foreign_country_name} </p>
    <p><label> હાલ ના રહેઠાણનું સરનામું:</label>  ${userData?.current_address} </p>
    <p><label> મોબાઈલ નંબર:</label>  ${userData?.phone} </p>
    <p><label> E-Mail ID:</label>  ${userData?.email} </p>
    <p><label> જીવન સહાય સભાસદ નં:</label>  ${userData?.jeevan_sahay_nubmer} </p>
    <p><label> ભુમિ સભાસદ નં:</label>  ${userData?.boomi_nubmer} </p>
	</div>
	<div class="address_textbox">
		
	</div>
	<div class="address_textbox">
		
	</div>
	<div class="address_textbox" style="border-bottom: 0px;">
	
	</div>
</div>
</body>
</html>
`;
    // const htmlContent = `
    //   <html>
    //     <body>
    //       <h1>User Details</h1>
    //       <p style="color:red;">ગામ: ${userData.name}</p>
    //       <p>શાખ: ${userData.shakh}</p>
    //       <p>મોસાળ: ${userData.mosal}</p>
    //       <p>સાસરું: ${userData.sasru}</p>
    //       <p>જન્મ તારીખ: ${userData.dob}</p>
    //       <p>ઉંમર: ${userData.age}</p>
    //       <p>ઊંચાઈ: ${userData.height}</p>
    //       <p>વજન: ${userData.weight}</p>
    //       <p>લિંગ: ${userData.gender}</p>
    //       <p>બ્લડગ્રુપ: ${userData.blood_group}</p>
    //       <p>કુટુંબના વડા સાથેનો સંબંધ: ${userData.family_main_member_with_relation}</p>
    //       <p>લગ્ન સ્થિતિ:: ${userData.marital_status}</p>
    //       <p>અભ્યાસ: ${userData.study}</p>
    //       <p>વ્યવસાય: ${userData.business}</p>
    //       <p>વ્યવસાયનું સરનામું: ${userData.business_address}</p>
    //       <p>ફોરેન Country નામ: ${userData.city}</p>
    //       <p>હાલ ના રહેઠાણનું સરનામું: ${userData.current_address}</p>
    //       <p>મોબાઈલ નંબર: ${userData.phone}</p>
    //       <p>E-Mail ID: ${userData.email}</p>

    //     </body>
    //   </html>
    // `;

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

  // const CreatePdf = async () => {
  //   const docsDir = await PDFLib.getDocumentsDirectory();
  //   const pdfPath = `${docsDir}/sample.pdf`;
  //   PDFDocument.create(pdfPath)
  //     .addPages(page1)
  //     .write() // Returns a promise that resolves with the PDF's path
  //     .then(path => {
  //       console.log('PDF created at: ' + path);
  //       // Do stuff with your shiny new PDF!
  //     });
  // };

  // const isPermitted = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'External Storage Write Permission',
  //           message: 'App needs access to Storage data',
  //         },
  //       );
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       alert('Write permission err', err);
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // };

  // const createPDF = async () => {
  //   if (await isPermitted()) {
  //     try {
  //       let options = {
  //         //Content to print
  //         html: '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
  //         //File Name
  //         fileName: 'myPdf',
  //         //File directory
  //         directory: 'Documents',
  //       };
  //       let file = await RNHTMLtoPDF.convert(options);
  //       console.log(file.filePath);
  //       setFilePath(file.filePath);
  //     } catch (error) {
  //       console.log('error---in file', error);
  //     }
  //   }
  // };

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
                  color: AppColors.black,
                  fontSize: 15,
                }}>
                No List Found
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: 15}}
              data={members == null ? [] : members}
              renderItem={({item, index}) => {
                printLog(`ITEM$${index}`, JSON.stringify(item?.item));
                return (
                  <View style={{}}>
                    <FamilyMermberCell
                      saveButton={() => {
                        setPdfLoad(true);
                        handleGeneratePDF(item);
                      }}
                      imgPress={() => {
                        setOpen(true);
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
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
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
        marginHorizontal: 15,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 15,
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

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 3,
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
            style={{width: '31%', height: 80, borderRadius: 10}}
            onPress={
              props?.item?.images[0]?.image == undefined
                ? null
                : props?.imgPress
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
                // resizeMode: 'contain',
                borderRadius: 10,
                backgroundColor: '#F2F2F2',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '31%',
              height: 80,
              borderRadius: 10,
              marginHorizontal: 15,
            }}
            onPress={
              props?.item?.images[1]?.image == undefined
                ? null
                : props?.imgPress
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
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            style={{width: '31%', height: 80, borderRadius: 10}}
            onPress={
              props?.item?.images[2]?.image == undefined
                ? null
                : props?.imgPress
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
          </TouchableOpacity>
        </View>
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
                ? moment(props?.item?.dob, 'YYYY-MM-DD').format('DD-MM-YYYY')
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
        <MemberDetail title={'વ્યવસાય :'} detailText={props?.item?.business} />

        <MemberDetail
          title={'વ્યવસાયનું સરનામું :'}
          detailText={props?.item?.business_address}
        />
        <MemberDetail
          title={'ફોરેન Country નામ :'}
          detailText={props?.item?.foreign_country_name}
        />
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
            detailText={props?.item?.country_code + ' ' + props?.item?.phone}
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
                `tel:${props?.item?.country_code + ' ' + props?.item?.phone}`,
                // `tel:${props?.item?.item?.code}${props?.item?.item?.phone}`,
              )
            }>
            <Image
              style={{marginHorizontal: 5}}
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

        <MemberDetail title={'Email ID :'} detailText={props?.item?.email} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MemberDetail
            styles={{flex: 0}}
            title={'જીવન સહાય સભાસદ નં :'}
            detailText={props?.item?.jeevan_sahay_nubmer}
            style={{}}
          />
          <TouchableOpacity
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() =>
              RootNavigation.navigate(AppScreens.SOCIAL_SERVICE, {
                status: 'main',
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
              style={{padding: 3, borderRadius: 8, paddingHorizontal: 10}}>
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
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MemberDetail
            title={'ભુમિ સભાસદ નં:'}
            detailText={props?.item?.boomi_nubmer}
            style={{}}
          />
          {/* <TouchableOpacity
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() =>
              RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
                status: 'main',
              })
            }
            style={{
              marginHorizontal: 15,
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <LinearGradient
              colors={['#3C5AFF', '#3C5AFF', '#1B74FF']}
              style={{padding: 3, borderRadius: 8, paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  fontSize: 6,
                  color: 'white',
                }}>
                Click Here
              </Text>
            </LinearGradient>
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
          }}>
          <Image source={require('../../../assets/images/save_icon.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};
