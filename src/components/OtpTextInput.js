import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { AppFonts } from '../utils/AppFonts';
import { AppColors } from '../utils/AppColors';

const OtpTextInput = (props) => {
  return (

    <View style={{height: 65, justifyContent: 'space-between', marginTop: 20}}>
    <Text
      style={{
        fontFamily: AppFonts.semiBold,
        fontSize: 12,
        color: AppColors.DarkText,
      }}>
      {props?.text}
    </Text>
    <OTPInputView
      style={{width: '100%',height:55,  alignSelf: 'center',}}
      pinCount={6}
      color={'black'}
      placeholderTextColor={'#000000'}
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad={false}
      codeInputFieldStyle={styles.underlineStyleBase}
    //   codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={code => {
        console.log(`Code is ${code}, you are good to go!`);
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 40,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#38385E',
    fontSize: 24,
    fontFamily: AppFonts.regular,
    borderBottomColor:'#EAEAFF'
  },

  underlineStyleHighLighted: {
    borderColor: '#D2AF43',
    color: 'black',
  },
});

export default OtpTextInput;
