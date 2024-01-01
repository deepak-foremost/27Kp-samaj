import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppFonts} from '../utils/AppFonts';
import {AppColors} from '../utils/AppColors';
import {SimpleDoubleLine} from './HorizontalMenuComponent';
import {HorizontalSelection, HorizontalTextInput} from './SimpleTextInput';
import {AppImages} from '../utils/AppImages';
import {getString} from '../utils/AsyncStorageHelper';

const EditBusiness = props => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    getString('village', response => {
      setCities(response);
    });
  }, [cities, setCities]);
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 8,
        paddingTop: 5,
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
      {props?.show ? (
        <Image
          style={{
            alignSelf: 'center',
            resizeMode: '',
            backgroundColor: AppColors.backgroundColor,
            borderRadius: 100,
            height: 70,
            width: 70,
          }}
          source={
            AppImages.ABOUT_US_ICON
            // {uri: item?.visting_card_photo}
          }
        />
      ) : null}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '90%',
          alignSelf: 'center',

          backgroundColor: AppColors.backgroundColor,
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        {props?.show ? (
          <View style={{paddingHorizontal: '5%', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: AppFonts.bold,
                fontSize: 20,
                color: AppColors.black,
                textTransform: 'capitalize',
                marginBottom: 10,
              }}>
              {props?.item?.firm}
            </Text>
            <SimpleDoubleLine
              title={'Owner Name :'}
              value={props?.item?.owner_name_1}
              containerStyle={{}}
            />
            <SimpleDoubleLine
              title={'Category :'}
              value={props?.item?.category_name}
              containerStyle={{}}
            />
            <SimpleDoubleLine
              title={'Address :'}
              value={props?.item?.address}
              containerStyle={{}}
            />

            <SimpleDoubleLine
              title={'Mobile No  :'}
              value={props?.item?.country_code+' '+props?.item?.phone}
              containerStyle={{}}
            />
          </View>
        ) : null}

        <HorizontalSelection
          label={`Category`}
          placeholder={`Select Category`}
          data={[]}
          value={''}
          onItemSelect={item => {
            printLog(JSON.stringify(item?.item));
            setCity(props?.item?.name);
          }}
        />

        <HorizontalTextInput
          label={`Firm : `}
          defaultText={''}
          onChangeText={''}
        />

        <View>
          <HorizontalTextInput
            label={`Owner Name 1`}
            defaultText={''}
            onChangeText={''}
            styles={{marginTop: 0}}
          />

          <HorizontalTextInput
            label={`Owner Name 2`}
            defaultText={''}
            onChangeText={''}
            styles={{marginTop: 0}}
          />

          <HorizontalTextInput
            label={`Owner Name 3`}
            defaultText={''}
            onChangeText={''}
            styles={{marginTop: 0}}
          />

          <HorizontalTextInput
            label={`Owner Name 4`}
            defaultText={''}
            onChangeText={''}
            styles={{marginTop: 0}}
          />
        </View>

        <HorizontalSelection
          label={`Village`}
          placeholder={`Select Village`}
          data={cities}
          value={city}
          onItemSelect={item => {
            printLog(JSON.stringify(props?.item?.item));
            setCity(props?.item?.name);
          }}
        />

        <HorizontalTextInput
          label={`Address`}
          defaultText={''}
          onChangeText={''}
          styles={{marginTop: 0}}
        />

        <HorizontalTextInput
          label={`Description`}
          defaultText={''}
          onChangeText={''}
          styles={{marginTop: 0}}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '49%'}}>
            <HorizontalTextInput
              label={`Time  From`}
              defaultText={''}
              onChangeText={''}
              styles={{marginTop: 0}}
            />
          </View>
          <View style={{width: '49%'}}>
            <HorizontalTextInput
              label={`Time  To`}
              defaultText={''}
              onChangeText={''}
              styles={{marginTop: 0}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditBusiness;
