import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
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
        position={'bottom'}
        statusBarHeight={Platform.OS == 'android' ? 0 : 0}
        style={{
          backgroundColor: AppColors.BackgroundSecondColor,
          fontSize: 14,
          fontFamily: AppFonts.semiBold,
          color: '#000',
          marginHorizontal: 20,
          marginBottom: 10,
          borderRadius: 6,
        }}
      />
    </>
  );
};

export default App;
