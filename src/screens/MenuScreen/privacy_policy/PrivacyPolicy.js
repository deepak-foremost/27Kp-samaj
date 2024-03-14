import {View, Text, SafeAreaView, Platform, ScrollView} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import BorderView from '../../../components/BorderView';
import {AppFonts} from '../../../utils/AppFonts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PrivacyPolicy = () => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  return (
    <View
      style={{
        backgroundColor: AppColors.BackgroundSecondColor,
        flex: 1,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <ScreenToolbar text={'PRIVACY POLICY'} />
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.9,
              marginHorizontal: 15,
              borderRadius: 15,
              backgroundColor: AppColors.BackgroundColor,
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: 20,
              ...Platform.select({
                ios: {
                  shadowColor: '#D5D5D5',
                  shadowOffset: {width: 0, height: -1},
                  shadowOpacity: 0.9,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 5,
                },
              }),
            }}>
            <ScrollView
            contentContainerStyle={{paddingVertical:10}}
            showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  color: AppColors.DarkText,
                  fontSize: 12,
                  fontFamily: AppFonts.medium,
                }}>
                **પ્રસ્તાવનાં**{'\n\n'} આ ગોપનાચાર નીતિ (કેળાવડ પોલિસી)
                ગોપનીયતાના પ્રતિ અમારી દાયરામાં છે.આ નીતિનો લક્ષ્ય આપની માહિતીને
                કેવી રીતે સંગ્રહ કરવાનો, વાપરવાનો અને સાંભાળવાનો છે.{'\n\n'}**જો
                વ્યાક્તિગત માહિતી**{'\n\n'} આ સાઇટ પર યોગદાન આપતાં, અથવા આપની
                માહિતી સંગ્રહ કરતાં, અમે તમારી વ્યક્તિગત માહિતીનો સંગ્રહ,
                સંગ્રહણ અને વાપરવાનો હક ધરાવવાનો ઇજાજત માંગીએ છીએ. આપની માહિતી
                પર આપનો ઇજાજત વિના અન્ય કોઈને પણ પ્રગટ નહીં કરવાનો આપનો અધિકાર
                છે.
                {'\n\n'} **કુકીઝ**{'\n\n'} આ સાઇટ વપરાશકર્તાઓ પરિસ્થિતિઓને
                સમજવાનો અને અમારી સર્વિસ પ્રદાન કરવાના માટે કુકીઝનો ઉપયોગ કરે
                છે.
                {'\n\n'} **માહિતીની રક્ષા**{'\n\n'} અમે તમારી માહિતીને સુરક્ષિત
                રાખવાનો પ્રયાસ કરીએ છીએ, પરંતુ ઇન્ટરનેટ પર માહિતી ટ્રાન્સમિટ
                કરતાં સમયે અમે કોઈપણ રક્ષણ ગેરંટી નહીં કરીએ છીએ.
                {'\n\n'} **બદલ**{'\n\n'} આ ગોપનાચાર નીતિમાં સુધારો કરવાનો હક
                અમારો છે, અને અમે કોઈપણ સમયે તેમને બદલી શકીએ છીએ. આપની જાણ માટે
                સરનામાં ચેક કરતાં રહો.{'\n\n'} **સંપર્ક કરો**{'\n\n'} આ ગોપનાચાર
                નીતિને સંદર્ભિત કરવા માટે કૃપા કરીને અમ
              </Text>
            </ScrollView>
          </View>
          <BorderView
            backgroundColor={AppColors.BackgroundSecondColor}
            text={'સમાજ એજ મારો પરિવાર છે'}
          />
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicy;
