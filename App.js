import {View, Text, SafeAreaView} from 'react-native';
import React, {useRef} from 'react';
import RootNavigation from './src/utils/RootNavigation';
import {AppStyles} from './src/utils/AppStyles';
import FlashMessage from 'react-native-flash-message';
import {AppColors} from './src/utils/AppColors';
import {AppFonts} from './src/utils/AppFonts';

const App = () => {
  return (
    <>
      <RootNavigation />

      <FlashMessage
        ref={useRef('guest')}
        position={'bottom'}
        statusBarHeight={Platform.OS == 'android' ? 0 : 0}
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          fontSize: 14,
          fontFamily: AppFonts.semiBold,
          color: '#fff',
          marginHorizontal: 20,
          marginBottom: 10,
          borderRadius: 6,
        }}
      />
    </>
  );
};

export default App;
