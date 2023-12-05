import {View, Text, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import AppButton from '../../../components/AppButton';
import {AppFonts} from '../../../utils/AppFonts';
import {AddBorder} from '../../FamilyMemberScreen/AddMemberScreen';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ImPLINKS = () => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <ScreenToolbar text={'IMP.LINKS'} />

        <View style={{flex: 1, padding: 15}}>
          <LinksButton
            textfirst={'eBook'}
            textsecond={'Click Here'}
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.LINK_DETAILS, {text: 'eBOOK'})
            }
            src={require('../../../assets/images/ebook_icon.png')}
          />
          <LinksButton
            textfirst={'Services'}
            textsecond={'Click Here'}
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.LINK_DETAILS, {
                text: 'SERVICES',
              })
            }
            src={require('../../../assets/images/service_icon.png')}
          />
          <LinksButton
            textfirst={'Job'}
            textsecond={'Click Here'}
            buttonPress={() =>
              RootNavigation.navigate(AppScreens.LINK_DETAILS, {text: 'JOB'})
            }
            src={require('../../../assets/images/job_icon.png')}
          />
        </View>
        <AddBorder />
      </View>
    </View>
  );
};

export default ImPLINKS;

export const LinksButton = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        ...props.buttonStyle,
      }}>
      <AppButton
      buttonPress={props?.buttonPress}
        text={props?.textfirst}
        buttonStyle={{
          width: '100%',
          borderRadius: 25,
          height: 35,
          justifyContent: 'flex-start',
          paddingLeft: 30,
        }}
        src={props?.src}
        imgStyle={{position: 'relative', left: 0}}
        textStyle={{
          marginLeft: 20,
          fontFamily: AppFonts.medium,
          textAlign: 'flex-start',
        }}
      />
      <AppButton
        text={props?.textsecond}
        buttonStyle={{
          width: '30%',
          borderRadius: 25,
          height: 25,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#FF9900',
          position: 'absolute',
          right: 10,
          top: 5,
        }}
        textStyle={{fontSize: 10, fontFamily: AppFonts.regular, marginLeft: -5}}
        buttonPress={props?.buttonPress}
      />
    </View>
  );
};
