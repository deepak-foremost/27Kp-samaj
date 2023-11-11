import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Linking,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {getParipatr} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import { AppFonts } from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import { ListMember } from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';

const list=[
    {
        title:'વાડી નું મુહુર્ત સમારોહ',
        circular_date:'22/05/2023'
    }, {
        title:'વાડી નું મુહુર્ત સમારોહ',
        circular_date:'22/05/2023'
    }, {
        title:'વાડી નું મુહુર્ત સમારોહ',
        circular_date:'22/05/2023'
    }, {
        title:'વાડી નું મુહુર્ત સમારોહ',
        circular_date:'22/05/2023'
    }, {
        title:'વાડી નું મુહુર્ત સમારોહ',
        circular_date:'22/05/2023'
    },
]

const ParichayFileScreen = props => {
  const [files, setFiles] = useState(null);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(()=>{
    setFiles(list)
  })

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     getParipatr(
//       onSuccess => {
//         printLog('getParipatr', JSON.stringify(onSuccess));
//         if (onSuccess?.status) {
//           setFiles(onSuccess?.data);
//         } else {
//           setFiles([]);
//         }
//         setRefreshing(false);
//       },
//       onFailure => {
//         printLog('getParipatr', JSON.stringify(onFailure));
//         setFiles([]);
//         setRefreshing(false);
//       },
//     );
//   }, []);

//   useEffect(() => {
//     getParipatr(
//       onSuccess => {
//         printLog('getParipatr', JSON.stringify(onSuccess));
//         if (onSuccess?.status) {
//           setFiles(onSuccess?.data);
//         } else {
//           setFiles([]);
//         }
//       },
//       onFailure => {
//         printLog('getParipatr', JSON.stringify(onFailure));
//         setFiles([]);
//       },
//     );
//   }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
      }}>
      {/* <AppDrawerHeader
        title={'પરિપત્ર ફાઇલ'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex:1,backgroundColor:AppColors.fadeBackground}}>
        <ScreenToolbar text={'પરિપત્ર ફાઈલ '}/>
      {files == null ? (
        <View
          style={{
            flex: 1,
            backgroundColor: AppColors.backgroundColor,
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingTop: 15,
          }}>
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
          <ListMember styles={{height: 45}} />
        </View>
      ) : files?.length == 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 15,
              color: AppColors?.lineColor,
            }}>
            No List Found
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          data={files == null ? [] : files}
          renderItem={({item, index}) => <FileCell item={item} index={index} />}
        //   refreshControl={
        //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        //   }
        />
      )}
      <BorderView text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
      backgroundColor={AppColors.BackgroundSecondColor}/>
      </View>
    </SafeAreaView>
  );
};

export default ParichayFileScreen;

const FileCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 10,
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
      <View style={{paddingVertical: 17, marginHorizontal: 17, flex: 1}}>
        <Text
          style={{
            fontFamily: AppFonts.medium,
            fontSize: 12,
            lineHeight: 18,
            color: AppColors.DarkText,
          }}>
          {props?.item?.title}
        </Text>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          {/* <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.semiBold,
              fontSize: 13,
              paddingEnd: 5,
              color: AppColors.black,
            }}>
            Date :
          </Text> */}
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.medium,
              fontSize: 10,
              color:AppColors.DarkText,
            }}>
            {props?.item?.circular_date}
          </Text>
        </View>
      </View>

      {/* <Image
        style={{
          alignSelf: 'center',
          height: '75%',
          width: 1,
          backgroundColor: '#EBEBEB',
        }}
      /> */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Linking.openURL(props?.item?.document);
        }}>
        <Image
          source={AppImages.ICON_PDF_LIST}
          style={{
          
            marginHorizontal: 17,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
