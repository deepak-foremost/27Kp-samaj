import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import AppButton from '../../../components/AppButton';

// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {
  HorizontalDetailInput,
  HorizontalSelection,
  HorizontalTextInput,
} from '../../../components/SimpleTextInput';
// import {
//   getCities,
//   getSuggestionData,
//   postAddFeedback,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog, ShowMessage} from '../../../utils/AppConstValue';
import {AppImages} from '../../../utils/AppImages';
// import LoaderView from '../../../utils/LoaderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FeedBackScreen = props => {
  const [suggestion, setSuggestion] = useState(null);
  const [suggestionID, setSuggestionID] = useState('0');
  const [suggestionList, setSuggestionList] = useState([]);

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setLoading] = useState(false);

  //   useEffect(() => {
  //     getCities(
  //       response => {
  //         var temp = [];

  //         for (let i = 0; i < response?.data?.length; i++) {
  //           temp.push({
  //             name: response?.data[i]?.name,
  //             id: response?.data[i]?.id,
  //           });
  //         }

  //         setCities(temp);
  //       },
  //       error => {},
  //       ``,
  //     );

  //     getSuggestionData(
  //       response => {
  //         var temp = [];

  //         for (let i = 0; i < response?.data?.length; i++) {
  //           temp.push({
  //             name: response?.data[i]?.name,
  //             id: response?.data[i]?.id,
  //           });
  //         }

  //         setSuggestionList(temp);
  //       },
  //       error => {},
  //     );
  //   }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
      }}>
      {/* <AppDrawerHeader
        title={'Feedback'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: AppColors.fadeBackground,
         
        }}>
        <ScreenToolbar text={'FEEDBACK'} />

        <AppButton
          text={'Mobile Number : 9999999999'}
          width={'85%'}
          buttonStyle={{
            marginTop: 20,
            width: '75%',
            borderRadius: 30,
            height: 40,
            alignSelf:'center'
          }}
         
        />

        
       
        
          <KeyboardAwareScrollView
          enableOnAndroid={true}
            contentContainerStyle={{
              marginVertical: '6%',
              width: '90%',
              alignItems: 'center',
              backgroundColor: AppColors.backgroundColor,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: 'white',
              alignSelf:'center',
              paddingBottom: 30,
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
            {/* <HorizontalSelection
          label={`Choose Option`}
          placeholder={`Choose Option`}
          data={suggestionList == null ? [] : suggestionList}
          value={suggestion}
          onItemSelect={item => {
            printLog(JSON.stringify(item?.item));
            setSuggestion(item?.name);
            setSuggestionID(item?.id);
          }}
        /> */}

            <HorizontalSelection
              label={`Choose Option`}
              placeholder={`Choose Option`}
              data={cities == null ? [] : cities}
              value={city}
              onItemSelect={item => {
                printLog(JSON.stringify(item?.item));
                setCity(item?.name);
              }}
            />

            <HorizontalTextInput
              label={`Your Name`}
              defaultText={name}
              onChangeText={setName}
            />
            <HorizontalTextInput
              label={`Your Mobile`}
              defaultText={phone}
              onChangeText={setPhone}
            />
            <HorizontalSelection
              label={`Village`}
              placeholder={`Village`}
              data={cities == null ? [] : cities}
              value={city}
              onItemSelect={item => {
                printLog(JSON.stringify(item?.item));
                setCity(item?.name);
              }}
            />
            <HorizontalTextInput
              label={`Message`}
              defaultText={message}
              onChangeText={setMessage}
            />
            {/* <HorizontalDetailInput
              label={`Write your message`}
              value={message}
              ChangeText={setMessage}
            /> */}

            {isLoading ? (
              <View style={{height: 45, width: '55%'}}>
                {/* <LoaderView /> */}
              </View>
            ) : (
              <AppButton
                text={'Submit'}
                width={'55%'}
                buttonStyle={{
                  marginTop: 70,
                  width: '50%',
                  borderRadius: 30,
                  height: 40,
                }}
                onClick={() => {
                  if (suggestion == null) {
                    ShowMessage('Please select suggestion');
                  } else if (name.trim == '') {
                    ShowMessage('Please enter name');
                  } else if (phone.trim == '') {
                    ShowMessage('Please enter phone');
                  } else if (city == null) {
                    ShowMessage('Please select city');
                  } else if (message.trim == '') {
                    ShowMessage('Please enter message');
                  } else {
                    setLoading(true);
                    postAddFeedback(
                      {
                        suggestion_id: suggestionID,
                        name: name,
                        phone: phone,
                        city: city,
                        message: message,
                      },
                      response => {
                        ShowMessage(response?.message);
                        if (response?.status) {
                          RootNavigation?.goBack();
                        }
                        setLoading(false);
                      },
                      error => {
                        ShowMessage(error);
                        setLoading(false);
                      },
                    );
                  }
                }}
              />
            )}
          </KeyboardAwareScrollView>

          <BorderView backgroundColor={AppColors.BackgroundSecondColor} text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}/>
       
      </View>
    </SafeAreaView>
  );
};

export default FeedBackScreen;
