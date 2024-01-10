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
  Platform,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {getParipatr} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import * as RootNavigation from '../../../utils/RootNavigation';
import {staticArray} from '../../../utils/staticArray';
import {ListMember} from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import AppButton from '../../../components/AppButton';
import {LinksButton} from './ImpLinks';
import {AppScreens} from '../../../utils/AppScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getEbook, getJOB, getServices} from '../../../networking/CallApi';

const list = [
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
  {
    title: 'વાડી નું મુહુર્ત સમારોહ',
    circular_date: '22/05/2023',
  },
];

const listOne = [
  {
    title: 'Railway Information',
  },
  {
    title: 'GSRTC Information',
  },
  {
    title: 'PASSPORT Information',
  },
  {
    title: 'Railway Information',
  },
  {
    title: 'GSRTC Information',
  },
  {
    title: 'PASSPORT Information',
  },
];

const listSecond = [
  {
    title: 'Railway PNR Check',
  },
  {
    title: 'Railway PNR Check',
  },
  {
    title: 'Railway PNR Check',
  },
];

const LinkDetails = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [files, setFiles] = useState(null);
  const [services, setServices] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const headerText = props?.route?.params?.text;

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    if (headerText == 'eBOOK') {
      setLoading(true);
      getEbook('', response => {
        if (response?.status) {
          console.log('ebook', JSON.stringify(response?.data));
          setFiles(response?.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
        Error => {
          console.log('ebooookError', Error);
          setLoading(false);
        };
      });
    } else if (headerText == 'JOB') {
      setLoading(true);
      getJOB('', response => {
        if (response?.status) {
          setJobs(response?.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
        Error => {
          console.log('jobError', Error);
          setLoading(false);
        };
      });
    } else {
      setLoading(true);
      getServices('', response => {
        if (response?.status) {
          setServices(response?.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
        Error => {
          setLoading(false);
          console.log('ServiceError', Error);
        };
      });
      // setServices(listOne);
    }
    // setFiles(list);
  }, []);

  const onRefresh = React.useCallback(() => {
    if (headerText == 'eBOOK') {
      setRefreshing(true);
      getEbook('', response => {
        if (response?.status) {
          console.log('ebook', JSON.stringify(response?.data));
          setFiles(response?.data);
          setRefreshing(false);
        } else {
          setRefreshing(false);
        }
        Error => {
          console.log('ebooookError', Error);
          setRefreshing(false);
        };
      });
    } else if (headerText == 'JOB') {
      setRefreshing(true);
      getJOB('', response => {
        if (response?.status) {
          setJobs(response?.data);
          setRefreshing(false);
        } else {
          setRefreshing(false);
        }
        Error => {
          console.log('jobError', Error);
          setRefreshing(false);
        };
      });
    } else {
      setRefreshing(true);
      getServices('', response => {
        if (response?.status) {
          setServices(response?.data);
          setRefreshing(false);
        } else {
          setRefreshing(false);
        }
        Error => {
          setRefreshing(false);
          console.log('ServiceError', Error);
        };
      });
      // setServices(listOne);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <AppDrawerHeader
        title={'પરિપત્ર ફાઇલ'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={headerText} />
        <View style={{flex: 0.9}}>
          {headerText == 'eBOOK' && (
            <View style={{flex: 1}}>
              {isLoading ? (
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
                </View>
              ) : (
                <View style={{flex: 1, paddingTop: 15}}>
                  {files?.length == 0 ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
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
                      renderItem={({item, index}) => (
                        <FileCell item={item} index={index} />
                      )}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    />
                  )}
                </View>
              )}
            </View>
          )}

          {headerText == 'SERVICES' && (
            <View style={{flex: 1}}>
              {isLoading ? (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: AppColors.BackgroundColor,
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
              ) : (
                <View style={{flex: 1, paddingTop: 5}}>
                  {services?.length == 0 ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: AppFonts.semiBold,
                          fontSize: 15,
                          color: AppColors?.line_color,
                        }}>
                        No List Found
                      </Text>
                    </View>
                  ) : (
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{paddingBottom: 20}}
                      data={services == null ? [] : services}
                      renderItem={({item, index}) => (
                        <AppButton
                          buttonStyle={{
                            width: '90%',
                            marginHorizontal: 15,
                            borderRadius: 30,
                            marginTop: 10,
                            height: 40,
                          }}
                          // item={item} index={index}
                          text={item?.service?.toUpperCase()}
                          buttonPress={() =>
                            RootNavigation.navigate(
                              AppScreens.SERVICE_DETAILS,
                              {
                                text: item?.service,
                                id: item?.id,
                              },
                            )
                          }
                        />
                      )}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    />
                  )}
                </View>
              )}
            </View>
          )}

          {headerText == 'JOB' && (
            <View style={{flex: 1}}>
              {isLoading ? (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: AppColors.backgroundColor,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingTop: 5,
                  }}>
                  <ListMember styles={{height: 45}} />
                  <ListMember styles={{height: 45}} />
                  <ListMember styles={{height: 45}} />
                  <ListMember styles={{height: 45}} />
                  <ListMember styles={{height: 45}} />
                </View>
              ) : services?.length == 0 ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
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
                <View style={{flex: 1}}>
                  <View>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{paddingBottom: 5}}
                      data={jobs == null ? [] : jobs}
                      renderItem={({item, index}) =>
                        item?.file != undefined && item?.link == null ? (
                          <FileCell item={item} index={index} />
                        ) : null
                      }
                      // refreshControl={
                      //   <RefreshControl
                      //     refreshing={refreshing}
                      //     onRefresh={onRefresh}
                      //   />
                      // }
                    />
                  </View>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{alignItems: 'center'}}
                    data={jobs == null ? [] : jobs}
                    renderItem={({item, index}) =>
                      // <AppButton
                      //   buttonStyle={{
                      //     width: '90%',
                      //     marginHorizontal: 15,
                      //     borderRadius: 30,
                      //     marginTop: 10,
                      //     height: 40,
                      //   }}
                      //   // item={item} index={index}
                      //   text={item.title}
                      // />
                      item?.link != undefined ? (
                        <LinksButton
                          textfirst={item.name.toUpperCase()}
                          textsecond={'LINK TO VISIT'}
                          mainStyle={{paddingLeft: 0}}
                          buttonStyle={{
                            width: '90%',
                            marginHorizontal: 15,
                            elevation: 5,
                          }}
                          buttonPress={() => Linking.openURL(`${item.link}`)}
                          // buttonPress={() =>
                          //   RootNavigation.navigate(AppScreens.LINK_DETAILS, {
                          //     text: 'SERVICES',
                          //   })
                          // }
                          // src={require('../../../assets/images/service_icon.png')}
                        />
                      ) : null
                    }
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  />
                </View>
              )}
            </View>
          )}
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
  );
};

export default LinkDetails;

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
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Linking.openURL(props?.item?.file);
        }}>
        <Image
          source={AppImages.ICON_PDF_LIST}
          style={{
            marginHorizontal: 10,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 0,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: AppFonts.medium,
            fontSize: 12,
            textAlignVertical: 'center',
            color: AppColors.DarkText,
            flex: 1,
            alignContent: 'center',
          }}>
          {props?.item?.name}
        </Text>

        <View
          style={{
            backgroundColor: AppColors.DarkText,
            borderRadius: 15,
            padding: 3,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: AppFonts.medium,
              fontSize: 7,
              color: '#fff',
              marginTop: 2,
            }}>
            {props?.item?.date}
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
    </TouchableOpacity>
  );
};
