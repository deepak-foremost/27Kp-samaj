import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppFonts} from '../../../utils/AppFonts';
import {JevanSelection, MySelection} from '../../../components/SimpleTextInput';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {staticArray} from '../../../utils/staticArray';
import LogInToolbar from '../../../components/LogInToolbar';
import {getJevanSlah} from '../../../networking/CallApi';
import {AppImages} from '../../../utils/AppImages';
import {MemberCell} from '../sponcer/AppSponcerScreen';
import {ListMember} from '../advisour_member/AdvicerMember';
import {ShowMessage, printLog} from '../../../utils/AppConstValue';

const SocialService = ({route}) => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const item = route?.params?.item;
  const [btnOpacity, setBtnOpacity] = useState('life');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [SelectedItem, setSelectedItem] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  // useEffect(() => {
  //   getJevanSlah(
  //     {page: page},
  //     response => {
  //       setTotalPage(response?.last_page);
  //       if (response?.status) {
  //         setItems(response?.data);
  //         console.log('list', response?.data);
  //         var list = members == null ? [] : [...members];
  //         var data = [];
  //         for (let i = 0; i < response?.data?.length; i++) {
  //           data.push({
  //             name:
  //               response?.data[i]?.sabhy_number + '-' + response?.data[i]?.name,
  //             id: response?.data[i]?.id,
  //             number: response?.data[i]?.phone,
  //             village: response?.data[i]?.village,
  //           });
  //           if (i == 0 && page == 1) {
  //             setValue(data[0]?.name);
  //             setValueId(data[0]?.id);
  //           }
  //           if (page == 1) {
  //             setMembers(data);
  //           } else {
  //             setMembers([...members, ...data]);
  //           }
  //           // setMembers(data);
  //           // if (page == 1) {
  //           //   setMembers(response?.data);
  //           // } else {
  //           //   setMembers([...list, ...response?.data]);
  //         }
  //         // setMembers(response?.data);
  //       }
  //     },
  //     response => {
  //       console.log('error', response);
  //     },
  //   );
  // }, [page]);
  useEffect(() => {
    setLoading(true);
    getJevanSlah(
      {page: page},
      response => {
        setTotalPage(response?.last_page);
        if (response?.status) {
          var list = members == null ? [] : [...members];
          if (page == 1) {
            setMembers(response?.data);
          } else {
            setMembers([...list, ...response?.data]);
          }
          // setMembers(response?.data);
          setLoading(false);
        }
      },
      response => {
        console.log('error', response);
      },
    );
  }, [page]);

  return (
    <View
      style={{
        backgroundColor: AppColors.Orange,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <StatusBar backgroundColor={AppColors.Orange} />
      {/* <Modal visible={show} animationType="fade" transparent={true}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              height: 45,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderColor: AppColors.line_color,
              borderWidth: 1,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 16,
                  textAlignVertical: 'center',
                  paddingStart: 20,
                  color: AppColors.black,
                }}>
                જીવન સહાય સભાસદ સભ્ય
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setShow(false)}>
              <Image
                style={{height: 15, width: 15, resizeMode: 'contain'}}
                source={AppImages.ICON_CLOSE}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            {isLoading && members.length == 0 ? (
              <View>
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
                <ListMember styles={{height: 45}} />
              </View>
            ) : (
              <FlatList
                contentContainerStyle={{
                  paddingBottom: 10,
                  paddingHorizontal: 15,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                onEndReached={() => LoadMore()}
                style={{width: '100%'}}
                data={members}
                renderItem={({item, index}) => (
                  <JevanMember
                    item={item}
                    index={index}
                    imgShow={true}
                    // status={status}
                    select={() => {
                      setSelectedItem(item);
                      setShow(false);
                    }}
                    imgPress={() => {
                      setImages([{url: item?.image}]);
                      setOpen(item?.image == '' ? false : true);
                    }}
                  />
                )}
              />
            )}
          </View>
        </View>
      </Modal> */}
      <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <LogInToolbar
          text={'Quick Pay'}
          imgStyle={{tintColor: 'black'}}
          textStyle={{color: 'black'}}
          style={{
            backgroundColor: AppColors.Orange,
          }}
        />
        {/* <ScreenToolbar
          styles={{backgroundColor: AppColors.Orange}}
          text={'Quick Pay'}
          textStyle={{color:'black'}}
        /> */}
        <View style={{flex: 0.5, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '90%',
              alignItems: 'center',
              marginHorizontal: 15,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor:
                  btnOpacity == 'life' ? AppColors.Orange : '#8E8E8E',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                paddingVertical: 5,
                alignSelf: 'center',
                height: 40,
                // opacity: btnOpacity == 'life' ? 1 : 0.5,
              }}
              onPress={() => {
                setBtnOpacity('life');
                setText('જીવન સહાય સભાસદ સભ્ય');
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.bold,
                  fontSize: 14,
                  color: btnOpacity == 'life' ? 'black' : '#F3F3F3',
                  width: '60%',
                  textAlign: 'center',
                  lineHeight: 20,
                }}>
                જીવન સહાય સભાસદ સભ્ય
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor:
                  btnOpacity == 'bhumi' ? AppColors.Orange : '#8E8E8E',
                width: '45%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                paddingVertical: 5,

                // opacity: btnOpacity == 'bhumi' ? 1 : 0.5,
              }}
              onPress={() => {
                setBtnOpacity('bhumi');
                setText('ભુમિ સભાસદ સભ્ય');
              }}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 14,
                  color: btnOpacity == 'bhumi' ? '#fff' : '#F3F3F3',
                  width: '60%',
                  textAlign: 'center',
                  lineHeight: 20,
                }}>
                ભુમિ સભાસદ સભ્ય
              </Text>
            </TouchableOpacity> */}
          </View>
          <Text
            style={{
              color: '#262626',
              fontSize: 14,
              fontFamily: AppFonts.semiBold,
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 20,
            }}>
            Select જીવન સહાય સભાસદ સભ્ય નંબર{' '}
          </Text>

          <View
            style={{
              backgroundColor: AppColors.BackgroundColor,
              width: '90%',
              flexDirection: 'row',
              // marginTop:-50,
              borderRadius: 5,
              paddingStart: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 15,
              ...Platform.select({
                ios: {
                  shadowColor: '#D5D5D5',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.9,
                  shadowRadius: 5,
                },
                android: {
                  elevation: 5,
                },
              }),
            }}>
            {/* <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor: '#fff',
                height: 35,
                width: '95%',
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => setShow(true)}>
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 11,
                  flex: 1,
                  color: AppColors.DarkText,
                }}>
                {SelectedItem == null && item == undefined
                  ? 'Select'
                  : SelectedItem != null
                  ? SelectedItem?.sabhy_number +
                    '-' +
                    SelectedItem?.name +
                    '    ' +
                    SelectedItem?.village +
                    '    ' +
                    SelectedItem?.country_code +
                    SelectedItem?.phone
                  : item?.jeevan_sahay_nubmer +
                    '-' +
                    item?.name +
                    '    ' +
                    item?.city +
                    '    ' +
                    item?.country_code +
                    item?.phone}
              </Text>
              <Image
                style={{
                  height: 10,
                  width: 10,
                  marginRight: 5,
                  resizeMode: 'contain',
                }}
                source={AppImages.DROP_DOWN_ICON}
              />
            </TouchableOpacity> */}
            <JevanSelection
            more={page>1 && isLoading}
              label={`Choose Option`}
              loading={page==1 && isLoading}
              placeholder={`Select`}
              data={members == [] ? [] : members}
              onEnd={()=>
              LoadMore()}
              // value={suggestion}
              onItemSelect={item => {
                printLog(item?.item);
                setSelectedItem(item);
              }}
              value={
                SelectedItem == null && item == undefined
                  ? 'Select'
                  : SelectedItem != null
                  ? SelectedItem?.sabhy_number +
                    '-' +
                    SelectedItem?.name +
                    '    ' +
                    SelectedItem?.village +
                    '    ' +
                    SelectedItem?.country_code +
                    SelectedItem?.phone
                  : item?.jeevan_sahay_nubmer +
                    '-' +
                    item?.name +
                    '    ' +
                    item?.city +
                    '    ' +
                    item?.country_code +
                    item?.phone
              }
            />
            {/* <MySelection
              label={value}
              placeholder={`Select Number`}
              endReached={() => LoadMore()}
              //   data={range}
              data={members}
              value={value}
              onItemSelect={item => {
                // printLog(JSON.stringify(item?.item));
                setValue(item?.name);
                setValueId(item?.id);
                setPhone(item?.number);
                setVillage(item?.village);
              }}
            /> */}
          </View>

          <AppButton
            text={'Quick Pay'}
            buttonStyle={{
              width: '90%',
              marginHorizontal: 15,
              borderRadius: 30,
              height: 40,
              marginTop: 40,
              backgroundColor: AppColors.Orange,
            }}
            textStyle={{fontSize: 24, color: 'black'}}
            buttonPress={() =>
              SelectedItem != null || item != undefined
                ? RootNavigation.navigate(AppScreens.PAYMENT_SCREEN, {
                    item: SelectedItem == null ? item : SelectedItem,
                  })
                : null
            }
          />
        </View>

        <View
          style={{flex: 0.5, justifyContent: 'center', paddingHorizontal: 15}}>
          <Text
            style={{
              fontSize: 14,
              color: '#262626',
              fontFamily: AppFonts.semiBold,
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
              lineHeight: 30,
            }}>
            Payment Successfully For Year 2023{'\n'} Payment Failed{'\n'}{' '}
            Payment Pending For Year 2023{'\n'} No Due Payment For Year 2023
          </Text>
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
          backgroundColor={AppColors.Orange}
        />
      </View>
    </View>
  );
};

export default SocialService;

export const JevanMember = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.line_color,
      }}
      onPress={props?.select}>
      <Text
        style={{
          flex: 0.5,
          fontFamily: AppFonts.semiBold,
          fontSize: 9,
          color: AppColors.black,
          justifyContent: 'center',
        }}>
        {props?.item?.sabhy_number}
      </Text>
      <Text
        style={{
          flex: 1.5,
          fontFamily: AppFonts.semiBold,
          fontSize: 9,
          color: AppColors.black,
          justifyContent: 'center',
        }}>
        {props?.item?.name}
      </Text>
      <Text
        style={{
          flex: 0.7,
          fontFamily: AppFonts.semiBold,
          fontSize: 9,
          color: AppColors.black,
          justifyContent: 'center',
        }}>
        {props?.item?.village}
      </Text>
      <Text
        style={{
          flex: 1,
          fontFamily: AppFonts.semiBold,
          fontSize: 9,
          color: AppColors.black,
          justifyContent: 'center',
        }}>
        {props?.item?.country_code + props?.item?.phone}
      </Text>
    </TouchableOpacity>
  );
};
