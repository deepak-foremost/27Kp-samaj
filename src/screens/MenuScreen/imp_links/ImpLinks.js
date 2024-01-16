import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import AppButton from '../../../components/AppButton';
import {AppFonts} from '../../../utils/AppFonts';
import {AddBorder} from '../../FamilyMemberScreen/AddMemberScreen';
import * as RootNavigation from '../../../utils/RootNavigation';
import {AppScreens} from '../../../utils/AppScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppConstValue} from '../../../utils/AppConstValue';
import MainButton from '../../../components/MainButton';
import BorderView from '../../../components/BorderView';

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

        <View style={{flex: 0.9, padding: 5,paddingHorizontal:15}}>
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
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
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
        alignItems: 'center',
        elevation: 5,
        ...props.buttonStyle,
      }}>
      <MainButton
        buttonPress={props?.buttonPress}
        text={props?.textfirst}
        buttonStyle={{
          width: '100%',
          borderRadius: 25,
          height: 35,
          justifyContent: 'flex-start',
          paddingLeft: 20,
          ...props?.mainStyle,
        }}
        src={props?.src}
        imgStyle={{position: 'relative', left: 0}}
        textStyle={{
          marginLeft: 20,
          fontFamily: AppFonts.medium,
          textAlign: 'flex-start',
        }}
      />
      {/* <AppButton
        text={props?.textsecond}
        buttonStyle={{
          width: '30%',
          borderRadius: 5,
          height: 25,
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          position: 'absolute',
          right: 10,
          top: 5,
        }}
        textStyle={{fontSize: 10, fontFamily: AppFonts.semiBold,color:'black'}}
        buttonPress={props?.buttonPress}
      /> */}
      <TouchableOpacity
        activeOpacity={AppConstValue.ButtonOpacity}
        onPress={props?.buttonPress}
        // onPress={() =>
        //   RootNavigation.navigate(AppScreens.ADVICE_MEMBER, {
        //     status: 'main',
        //   })
        // }
        style={{
          position: 'absolute',
          right: 15,
          backgroundColor: '#FFFFFF',
          padding: 3,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontFamily: AppFonts.semiBold,
            fontSize: 9,
            color: 'black',
            textAlign: 'center',
            paddingTop: 2.5,
          }}>
          {props?.textsecond}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
