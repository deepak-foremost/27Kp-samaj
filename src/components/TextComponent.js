import { View, Text } from 'react-native'
import React from 'react'
import { AppFonts } from '../utils/AppFonts'
import { AppColors } from '../utils/AppColors'

const TextComponent = (props) => {
  return (
    <View style={{flexDirection: 'row',paddingVertical:5}}>
    <Text
      style={{
        fontFamily: AppFonts.semiBold,
        fontSize: 11,
        color: AppColors.DarkText,
      }}>
      {props?.first}
    </Text>
    <Text
      style={{
        fontFamily: AppFonts.medium,
        fontSize: 11,
        color: AppColors.DarkText,
        marginLeft:5
      }}>
      {props?.second}
    </Text>
  </View>
  )
}

export default TextComponent