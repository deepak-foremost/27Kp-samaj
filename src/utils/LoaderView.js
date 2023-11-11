import React from 'react';
import {View} from 'react-native';
import {DotsLoader} from 'react-native-indicator';

import { AppColors } from './AppColors';

const LoaderView = props => {
  return (
    <>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            height: 65,
            width: '100%',
          },
          props.style,
        ]}>
        <DotsLoader size={10} color={AppColors.LightText} betweenSpace={3} />
      </View>
    </>
  );
};
export default LoaderView;
