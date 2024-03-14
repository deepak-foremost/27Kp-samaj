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
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../../utils/AppColors';
import ScreenToolbar from '../../../components/ScreenToolbar';
import {AppImages} from '../../../utils/AppImages';
import {AppFonts} from '../../../utils/AppFonts';
import TextComponent from '../../../components/TextComponent';
import BorderView from '../../../components/BorderView';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';
import ZoomImage from '../../../components/ZoomImage';

const NewsDetailScreen = ({route}) => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const news = route?.params?.item;
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    var data = [];
    news?.images?.map((item, index) => data?.push({url: item?.image}));
    setImages(data);
  }, []);

  // const images = [
  //   {
  //     url: '',
  //     props: {source: require('../../../assets/images/full_village_image.png')},
  //   },
  // ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
      }}>
      {/* <Modal style={{flex: 0.4}} visible={showModal} transparent={true}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            padding: 20,
            paddingTop: Platform.OS == 'ios' && StatusBarHeight,
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
      </Modal> */}
      <ZoomImage
        visible={showModal}
        images={images}
        dismiss={() => setShowModal(false)}
      />
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'27 SAMAJ LATEST UPDATE'} />
        <View
          style={{
            marginVertical: '5%',
            width: '90%',
            alignSelf: 'center',
            backgroundColor: AppColors.backgroundColor,
            paddingBottom: 13,
            flex: 0.9,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: 'white',
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
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <View style={{paddingTop: 10}}>
              {news?.images?.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setShowModal(true)}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      backgroundColor: '#F2F2F2',
                      borderRadius: 10,
                      width: '100%',
                      height: 100,
                      resizeMode:'contain'
                    }}
                    source={{uri: item?.image}}
                  />
                </TouchableOpacity>
              ))}

              <View
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  paddingVertical: 5,
                }}>
                <TextComponent first={'Title :'} second={news?.title} />
                <TextComponent first={'Village :'} second={news?.village} />
                <TextComponent
                  first={'સ્પોનસર નું નામ :'}
                  second={news?.sponser_name}
                />
                <TextComponent first={'Date :'} second={news?.news_date} />
                <TextComponent first={'Note'} />
              </View>

              <View style={{}}>
                <RenderHTML
                  source={{html: news?.description}}
                  contentWidth={Dimensions.get('window').width}
                  tagsStyles={{
                    body: {
                      color: AppColors.DarkText,
                      marginTop: 5,
                      fontFamily: AppFonts.semiBold,
                    },
                    p: {marginTop: -5},
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સમાજ નો કાર્યોમાં સાથ સહકાર આપવો'}
        />
      </View>
    </View>
  );
};

export default NewsDetailScreen;
