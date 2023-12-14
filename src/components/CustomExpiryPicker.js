import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Platform, Dimensions, FlatList} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import AppButton from './AppButton';
import {AppFonts} from '../utils/AppFonts';
import moment from 'moment';
import MonthPicker from 'react-native-month-year-picker';
import Carousel from 'react-native-snap-carousel';

const images = [
  {
    month: 1,
  },
  {
    month: 2,
  },
  {
    month: 3,
  },{
    month: 1,
  },
  {
    month: 2,
  },
  {
    month: 3,
  },
];

export const CustomExpiryPicker = props => {
  const refRBSheet = useRef();
  const [date, setDate] = useState(
    props?.value == null ? new Date() : props?.value,
  );
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
            marginBottom: 10,
            width: '95%',
            borderRadius: 20,
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
          <View style={{height: 200}}>
            <FlatList
            contentContainerStyle={{flexGrow:1}}
              data={images}
              renderItem={({item}) => (
                <Text
                  style={{
                    backgroundColor: 'red',
                    height:40,
                    width:200,
                    marginVertical: 10,
                  }}>
                  {item.month}
                </Text>
              )}
            />
          </View>
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
