import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../utils/AppColors';
import { AppFonts } from '../utils/AppFonts';
import {SponcerCell} from '../components/SponcerCell';
export const SponcerModal = props => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        ...props?.styles,
      }}>
      <View style={styles.sponcerLabelBox}>
        <Text
          style={styles.sponcerLabel}>{`પરિવાર પરિચય એપ્લિકેશન સ્પોન્સર`}</Text>
      </View>
      <SponcerCell
        member={`પટેલ શીવરામભાઈ ગોવિંદભાઈ (ધનાલી)`}
        style={{marginTop: 15}}
      />
      <SponcerCell
        member={`ચોકસી ગોવિંદભાઈ બબલદાસ (ધનાલી)`}
        style={{marginTop: 5}}
      />
      <SponcerCell
        member={`પટેલ મનોજભાઈ બાબુભાઈ (ધનાલી)`}
        style={{marginTop: 5}}
      />
      <SponcerCell
        member={`પટેલ દિનેશભાઈ કાંતિલાલ (ધનાલી)`}
        style={{marginTop: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelBox: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: AppFonts.semiBold,
    fontSize: 18,
    color: AppColors.backgroundColor,
    marginHorizontal: 8,
  },
  start: {
    fontFamily: AppFonts.semiBold,
    fontSize: 26,
    color: AppColors.backgroundColor,
    marginTop: 10,
  },
  address: {
    fontFamily: AppFonts.semiBold,
    color: AppColors.black,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 11,
    fontSize: 14,
  },
  sponcerLabelBox: {
    borderRadius: 20,
    marginTop: 28,
    borderColor: AppColors.purple,
    height: 35,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.purple,
    borderColor: AppColors.backgroundColor,
    borderWidth: 1,
  },
  sponcerLabel: {
    color: AppColors.backgroundColor,
    fontSize: 13,
    fontFamily: AppFonts.semiBold,
  },
});
