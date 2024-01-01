import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {AppColors} from '../utils/AppColors';
import {AppConstValue} from '../utils/AppConstValue';
import {AppFonts} from '../utils/AppFonts';
import {AppImages} from '../utils/AppImages';

export const HorizontalMenuComponent = props => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    setPos(props?.setValue);
  }, [props?.setValue]);

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: '48%',
          backgroundColor:
            pos == 0 ? AppColors.BackgroundSecondColor : '#A5CAD1',
          height: 45,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setPos(0);
          props?.onChange(0);
        }}
        activeOpacity={AppConstValue.ButtonOpacity}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 12,
            marginTop: 2.5,
            color: pos == 0 ? '#FFF' : AppColors.lineColor,
            textAlign: 'center',
          }}>
          Search By Category
        </Text>
        <View>
          <Image style={{backgroundColor: AppColors.lineColor, height: 2}} />
          <Image
            style={{
              backgroundColor: pos == 0 ? AppColors.red : '#00000000',
              alignSelf: 'center',
              height: 2,
              width: '85%',
              position: 'absolute',
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '48%',
          backgroundColor:
            pos == 1 ? AppColors.BackgroundSecondColor : '#A5CAD1',
          height: 45,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setPos(1);
          props?.onChange(1);
        }}
        activeOpacity={AppConstValue.ButtonOpacity}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 12,
            color: pos == 1 ? '#FFF' : AppColors.lineColor,
            padding: 10,
            textAlign: 'center',
            marginTop: 2.5,
          }}>
          Business Directory
        </Text>
        <View>
          <Image style={{backgroundColor: AppColors.lineColor, height: 2}} />
          <Image
            style={{
              backgroundColor: pos == 1 ? AppColors.red : '#00000000',
              alignSelf: 'center',
              height: 2,
              width: '85%',
              position: 'absolute',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const GridListComponent = props => {
  return (
    <View
      style={{
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={props?.onSelectItem}
        style={{
          width: '93%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: 'black',
          ...Platform.select({
            ios: {
              shadowColor: '#D5D5D5',
              shadowOffset: {width: 0, height: -1},
              shadowOpacity: 0.9,
              shadowRadius: 3,
            },
            android: {
              elevation: 3,
            },
          }),
        }}>
        <Image
          source={{uri: props?.item?.icon}}
          // source={require('../assets/images/jwellry_image.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
            opacity: 0.8,
            // backgroundColor:'#F2F2F2'
          }}
        />

        <Text
          style={{
            fontFamily: AppFonts.bold,
            fontSize: 9,
            marginBottom: 8,
            marginHorizontal: 14,
            color: '#FFF',
            position: 'absolute',
            bottom: 0,
          }}>
          {props?.item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const BusinessDirectoryCell = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.fade,
        marginHorizontal: 10,
        marginBottom: 15,
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
            elevation: 3,
          },
        }),
      }}>
      <TouchableOpacity
        onPress={() => props?.onClicked('view')}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 10,
        }}
        activeOpacity={AppConstValue.ButtonOpacity}>
        <Image
          source={{uri: props?.item?.visting_card_photo}}
          style={{
            marginLeft: 10,
            marginRight: 10,
            resizeMode: 'contain',
            borderRadius: 10,
            marginBottom: 15,
            backgroundColor: '#F2F2F2',
            height: 100,
            width: 100,
          }}
        />
        <View style={{paddingRight: 5, flex: 1}}>
          <Text
            numberOfLines={3}
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 15,
              color: AppColors.black,
              textTransform: 'capitalize',
            }}>
            {props?.item?.firm}
          </Text>

          <SimpleDoubleLine
            title={'Owner Name :'}
            value={props?.item?.owner_name_1}
          />
          <SimpleDoubleLine
            title={'Category :'}
            value={props?.item?.category_name}
          />
          <SimpleDoubleLine title={'Address :'} value={props?.item?.address} />
          <SimpleDoubleLine
            title={'Mobile No :'}
            value={
              props?.item?.country_code + ' ' + props?.item?.business_phone
            }
          />

          {props?.is_family_id != 1 ? (
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 5,
                marginTop: 5,
                paddingHorizontal: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: '100%',
              }}>
              <TouchableOpacity
                activeOpacity={AppConstValue.ButtonOpacity}
                style={{padding: 5}}
                onPress={() => props?.onClicked('view')}>
                <Image
                  source={AppImages.EYE_ICON}
                  style={{
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 5}}
                activeOpacity={AppConstValue.ButtonOpacity}
                onPress={() => props?.onClicked('edit')}>
                <Image
                  source={AppImages.ICON_EDIT}
                  style={{
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={AppConstValue.ButtonOpacity}
                style={{padding: 5}}
                onPress={() => props?.onClicked('delete')}>
                <Image
                  source={AppImages.ICON_DELETE}
                  style={{
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SimpleDoubleLine = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...props?.containerStyle,
      }}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          marginRight: 5,
          color: AppColors.black,
          textTransform: 'capitalize',
        }}>
        {props?.title}
      </Text>
      <Text
        numberOfLines={5}
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 12,
          color: '#B7B7B7',
          ...props?.textStyles,
          maxWidth: '70%',
        }}>
        {props?.value}
      </Text>
    </View>
  );
};

export const LinkCell = props => {
  return (
    <View
      style={{flexDirection: 'row', marginTop: 5, ...props?.containerStyle}}>
      <Text
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 13,
          marginRight: 5,
          color: AppColors.black,
        }}>
        {props?.title}
      </Text>
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={() => Linking.openURL(props?.value)}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 13,
            color: '#B7B7B7',
            ...props?.textStyle,
          }}>
          {props?.value}
        </Text>
      </TouchableOpacity>

      {props?.contact ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`whatsapp://send?phone=${props?.value}`);
              // Linking.openURL(
              //   `whatsapp://send?phone=${props?.value}&text=${''}`,
              // );
            }}
            style={{marginStart: 10, marginEnd: 5}}
            activeOpacity={AppConstValue.ButtonOpacity}>
            {/* <Image
              source={AppImages.ICON_WHATSAPP}
              style={{height: 20, width: 20, resizeMode: 'cover'}}
            /> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginStart: 5}}
            activeOpacity={AppConstValue.ButtonOpacity}
            onPress={() => Linking.openURL(`tel:${props?.value}`)}>
            <Image
              source={AppImages.ICON_CALL}
              style={{height: 20, width: 20, resizeMode: 'cover'}}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export const WeekDayCell = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 13,
        ...props?.containerStyle,
        width: '45%',
        paddingRight: 10,
        alignItems: 'center',
      }}>
      <Text
        numberOfLines={1}
        style={{
          fontFamily: AppFonts.semiBold,
          fontSize: 13,
          marginRight: 5,
          flex: 1,
          color: AppColors.black,
        }}>
        {props?.day}
      </Text>
      <Image
        source={props?.icon}
        style={{height: 16, width: 13, marginRight: 20}}
      />
    </View>
  );
};
