import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  Linking,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {LinksButton} from './ImpLinks';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getServiceDetail} from '../../../networking/CallApi';
import {ListMember} from '../advisour_member/AdvicerMember';
import {AppFonts} from '../../../utils/AppFonts';
import {FileCell} from './LinkDetails';

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

const ServiceDetails = ({route}) => {
  const [information, setInformation] = useState(null);
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const id = route?.params?.id;
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getServiceDetail({id: id, page: page}, response => {
      setTotalPage(response?.last_page);
      if (response?.status) {
        var list = information == null ? [] : [...information];
        if (page == 1) {
          setInformation(response?.data);
        } else {
          setInformation([...list, ...response?.data]);
        }
        // setInformation(response?.data);
        console.log('Servicelist', response?.data);
        setLoading(false);
      } else {
        setInformation([]);
        setLoading(false);
      }
    });
    // setInformation(listSecond);
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getServiceDetail({id: id, page: page}, response => {
      if (response?.status) {
        console.log('ebook', JSON.stringify(response?.data));
        var list = information == null ? [] : [...information];
        if (page == 1) {
          setInformation(response?.data);
        } else {
          setInformation([...list, ...response?.data]);
        }
        setRefreshing(false);
      } else {
        setRefreshing(false);
        setInformation([]);
      }
      Error => {
        console.log('ebooookError', Error);
        setRefreshing(false);
      };
    });
  });

  const headerText = route?.params?.text;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: '#F3F3f3'}}>
        <ScreenToolbar text={headerText?.toUpperCase()} />

        <View style={{flex: 0.9, paddingTop: 5}}>
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
          ) : information?.length == 0 ? (
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
            <View style={{flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 5}}
                onEndReached={() => LoadMore()}
                data={information == null ? [] : information}
                renderItem={({item, index}) =>
                  item?.file != undefined && item?.link == null ? (
                    <FileCell item={item} index={index} />
                  ) : (
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
                    />
                  )
                }
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />

              {/* <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{alignItems: 'center'}}
                data={information == null ? [] : information}
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
                    />
                  ) : null
                }
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              /> */}
            </View>
          )}
        </View>

        {/* <View style={{flex: 0.9, paddingTop: 15}}>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 5}}
              data={information == null ? [] : information}
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
            data={information == null ? [] : information}
            renderItem={({item, index}) => (
              <LinksButton
                textfirst={
                  item?.name
                }
                buttonPress={() => Linking.openURL(`${item?.link}`)}
                textsecond={'LINK TO VISIT'}
                buttonStyle={{width: '90%', marginHorizontal: 15}}
                // buttonPress={() =>
                //   RootNavigation.navigate(AppScreens.LINK_DETAILS, {
                //     text: 'SERVICES',
                //   })
                // }
                // src={require('../../../assets/images/service_icon.png')}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View> */}

        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
        />
      </View>
    </View>
  );
};

export default ServiceDetails;
