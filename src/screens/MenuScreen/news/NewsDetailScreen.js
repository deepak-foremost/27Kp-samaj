import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import TextComponent from '../../../components/TextComponent';
import BorderView from '../../../components/BorderView';

const NewsDetailScreen = ({route}) => {
  const item = route?.params?.item;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: AppColors.BackgroundSecondColor}}>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'27 SAMAJ LATEST UPDATE'} />
        <View
          style={{
            flex: 0.85,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            margin: 15,
            padding: 10,
            ...Platform.select({
              ios: {
                shadowColor: '#D5D5D5',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.9,
                shadowRadius: 3,
              },
              android: {
                elevation: 15,
              },
            }),
          }}>
          <ScrollView>
            <Image style={{alignSelf:'center'}}
              source={item.src == null ? AppImages.NEWS_FILE_ICON : item.src}
            />

            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingVertical: 5,
              }}>
              <TextComponent first={'Title :'} />
              <TextComponent first={'Village :'} />
              <TextComponent first={'સ્પોનસર નું નામ :'} />
              <TextComponent first={'Date :'} />
              <TextComponent first={'Note :'} />
            </View>

            <View style={{}}>
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 20,
                  color: AppColors.DarkText,
                }}>
                {item.content}
              </Text>
            </View>
          </ScrollView>
        </View>
        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;
