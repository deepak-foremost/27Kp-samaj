import RNHTMLToPdf from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import {AppImages} from './AppImages';
import {Image} from 'react-native';

const image = require('../assets/images/app_main_icon.png');
const imageUri = Image.resolveAssetSource(image).uri;

// Assuming your image file is named 'kp_app_icon.png' and it's in the same directory as your html.js file

export const generatePDF = async userData => {
  const htmlContent = ` <html>
    <style type="text/css">
    .header_div{
      display: inline-block;
      width: 102%;
      background-color: #049AB5;
      height:85px;
      margin-top:-10px;
      margin-left:-8px
      display: flex;
      justify-content: center;
    }
    .header_div p{
      margin: 0px;
      font-size: 25px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      margin-top:10px;
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
      margin-right: 20px;
      margin-top:10px;
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
  <img src=${imageUri}/>
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

export const sharePDF = async pdfFilePath => {
  try {
    const options = {
      url: `file://${pdfFilePath}`,
      type: 'application/pdf',
      failOnCancel: false,
    };
    await Share.open(options);
  } catch (error) {
    console.error('Error sharing PDF:', error.message);
  }
};

export const handleGeneratePDF = async userData => {
  console.log(userData);
  const pdfFilePath = await generatePDF(userData);
  await sharePDF(pdfFilePath);
};
