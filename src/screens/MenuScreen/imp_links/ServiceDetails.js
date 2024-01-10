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

  useEffect(() => {
    setLoading(true);
    getServiceDetail({id: id}, response => {
      if (response?.status) {
        setInformation(response?.data);
        console.log('Servicelist', response?.data);
        setLoading(false);
      } else {
        setInformation([]);
        setLoading(false);
      }
    });
    // setInformation(listSecond);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getServiceDetail({id: id}, response => {
      if (response?.status) {
        console.log('ebook', JSON.stringify(response?.data));
        setInformation(response?.data);
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

        <View style={{flex: 0.9, paddingTop: 15}}>
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
                  headerText == 'Railway Information'
                    ? 'Railway PNR Check'
                    : item?.name
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
        </View>

        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સેવા કરવી તે મારી અમૂલ્યા ભેટ છે'}
        />
      </View>
    </View>
  );
};

export default ServiceDetails;
