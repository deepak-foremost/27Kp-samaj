import {View, Text, SafeAreaView, FlatList, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {LinksButton} from './ImpLinks';
import BorderView from '../../../components/BorderView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  useEffect(() => {
    setInformation(listSecond);
  }, [information, setInformation]);
  const headerText = route?.params?.text;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: '#F3F3f3'}}>
        <ScreenToolbar text={headerText} />

        <View style={{flex: 1, paddingTop: 15}}>
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
                    : headerText
                }
                textsecond={'LINK TO Visit'}
                buttonStyle={{width: '90%', marginHorizontal: 15}}
                // buttonPress={() =>
                //   RootNavigation.navigate(AppScreens.LINK_DETAILS, {
                //     text: 'SERVICES',
                //   })
                // }
                // src={require('../../../assets/images/service_icon.png')}
              />
            )}
            //   refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            //   }
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
