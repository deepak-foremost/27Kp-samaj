import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppFonts} from '../utils/AppFonts';
import { AppImages } from '../utils/AppImages';

const Header = props => {
  return React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: ConstStyle.appHeaderStyle,
      headerTitle: () => (
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: AppFonts.bold,
              fontSize: 22,
              color: 'white',
            }}>
            Log in
          </Text>
        </View>
      ),
      headerLeft: () => (
        <View style={{paddingStart: 20}}>
          <Image source={AppImages.BACK_ICON}/>
        </View>
      ),
    });
  }, [props.navigation]);
};

export default Header;
