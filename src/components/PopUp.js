import React from 'react';
import {Modal, StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import {AppColors} from '../utils/AppColors';

const PopUp = props => {
  return (
    <View style={{flex: 1}}>
      {/* <LottieView
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        source={props?.src}
        autoPlay={true}
        loop={false}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalView: {},
});
export default PopUp;
