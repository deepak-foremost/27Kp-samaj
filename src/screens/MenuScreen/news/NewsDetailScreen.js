import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import TextComponent from '../../../components/TextComponent';
import BorderView from '../../../components/BorderView';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NewsDetailScreen = ({route}) => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const item = route?.params?.item;
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      url: '',
      props: {source: require('../../../assets/images/full_village_image.png')},
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      <Modal style={{flex: 0.4}} visible={showModal} transparent={true}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            padding: 20,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
          activeOpacity={1}
          onPress={() => setShowModal(false)}>
          <Image
            style={{
              height: 24,
              width: 24,
              tintColor: '#fff',
              alignSelf: 'flex-end',
            }}
            source={require('../../../assets/images/assets_images_cross.png')}
          />
        </TouchableOpacity>
        <ImageViewer
          renderImage={props => (
            <Image
              style={{
                height: Dimensions.get('screen').height / 3,
                width: Dimensions.get('window').width - 25,
                alignSelf: 'center',
                borderRadius: 15,
                marginHorizontal: 5,
              }}
              source={props.source}
            />
          )}
          maxOverflow={0}
          transparent={true}
          backgroundColor="rgba(0,0,0,0.7)"
          onClick={() => setShowModal(false)}
          imageUrls={images}
        />
      </Modal>
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'27 SAMAJ LATEST UPDATE'} />
        <View
          style={{
            flex: 1,
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowModal(item.src == null ? false : true)}>
              <Image
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#F2F2F2',
                  borderRadius: 10,
                  width: item.src == null ? 15 : '100%',
                  height: item.src == null ? 25 : 100,
                }}
                source={item.src == null ? AppImages.NEWS_FILE_ICON : item.src}
              />
            </TouchableOpacity>

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
    </View>
  );
};

export default NewsDetailScreen;
