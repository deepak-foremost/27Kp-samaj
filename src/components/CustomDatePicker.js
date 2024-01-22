import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Platform} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import AppButton from './AppButton';
import {AppFonts} from '../utils/AppFonts';
import moment from 'moment';
import MonthPicker from 'react-native-month-year-picker';

// const datepickerCustomStyles = {
//   dateText: {
//     fontSize: 18,
//     color: 'red',
//     fontWeight: 'bold',
//   },
// };

export const CustomDatePicker = props => {
  const refRBSheet = useRef();
  const [pastDate, setPastDate] = useState(null);
  const [date, setDate] = useState(
    props?.value == null ? new Date() : props?.value,
  );

  useEffect(() => {
    const d = new Date();
    const pastYear = d.getFullYear() - 1;
    d.setFullYear(pastYear);
    setPastDate(pastYear);
  }, []);

  useEffect(() => {
    if (props?.isOpened) {
      refRBSheet?.current?.open();
    } else {
      refRBSheet?.current?.close();
    }
  }, [props?.isOpened, refRBSheet]);

  const onDateSet = () => {
    props?.onChangeDob(date);
    props?.onClose();
    refRBSheet?.current?.close();
  };

  return (
    <View style={{}}>
      <RBSheet
        ref={refRBSheet}
        height={350}
        openDuration={250}
        onClose={() => {
          props?.onClose(false);
        }}
        customStyles={{
          container: {
            alignSelf: 'center',
            justifyContent: 'center',
            // marginBottom: 10,
            width: '100%',
            // borderRadius: 20,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
          },
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginTop: Platform.OS == 'android' ? 5 : 30,
            marginLeft: 15,
            marginBottom: 7,
            fontFamily: AppFonts.semiBold,
          }}>
          {props?.title}
        </Text>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: '#828282',
          }}>
          <DatePicker
            style={{}}
            textColor="black"
            dividerHeight={250}
            androidVariant="nativeAndroid"
            mode="date"
            date={props?.value}
            theme="light"
            onDateChange={text => setDate(text)}
            maximumDate={props?.minYear == null ? new Date() : props?.minYear}

            // customStyles={datepickerCustomStyles}
            // maximumDate={new Date()}
          />
        </View>

        <AppButton
          buttonStyle={{
            width: '70%',
            marginHorizontal: 10,
            alignSelf: 'center',
          }}
          text={'Save'}
          buttonPress={onDateSet}
        />
      </RBSheet>
    </View>
  );
};
