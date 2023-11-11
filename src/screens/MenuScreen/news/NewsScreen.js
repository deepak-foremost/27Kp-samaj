import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  RefreshControl,
  SafeAreaView,
  Modal,
  Dimensions,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
// import {getNews} from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog} from '../../../utils/AppConstValue';
import {AppConstValue} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import * as RootNavigation from '../../../utils/RootNavigation';
import {ListMember} from '../advisour_member/AdvicerMember';
import moment from 'moment';
import ScreenToolbar from '../../../components/ScreenToolbar';
import ImageViewer from 'react-native-image-zoom-viewer';

const list = [
  {
    id: 0,
    title:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પ',
    news_date: '22/05/2023',
    src: AppImages.ICON_TEST_VILLAGE,
    content:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
  },
  {
    id: 1,
    title:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પ',
    news_date: '22/05/2023',
    // src:require(''),
    content:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
  },
  {
    id: 2,
    title:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પ',
    news_date: '22/05/2023',
    // src:require(''),
    content:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
  },
  {
    id: 3,
    title:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પ',
    news_date: '22/05/2023',
    src: AppImages.ICON_TEST_VILLAGE,
    content:
      'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
  },
];

const NewsScreen = props => {
  const [visible, setVisible] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [news, setNews] = useState(null);
  const [currentPosition, setPosition] = useState(0);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    setNews(list);
  });

  const images = [
    {
      url: '',
      props: {source: require('../../../assets/images/full_village_image.png')},
    },
  ];

  //   useEffect(() => {
  //     const willFocusSubscription = props.navigation.addListener('focus', () => {
  //       getNews(
  //         response => {
  //           printLog('NewsScreen', JSON.stringify(response));
  //           if (response?.status) {
  //             setNews(response?.data);
  //           }
  //         },
  //         error => {
  //           printLog('NewsScreen', error);
  //         },
  //       );
  //     });

  //     return () => {
  //       willFocusSubscription;
  //     };
  //   }, []);

  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     getNews(
  //       response => {
  //         printLog('NewsScreen', JSON.stringify(response));
  //         if (response?.status) {
  //           setNews(response?.data);
  //         }
  //         setRefreshing(false);
  //       },
  //       error => {
  //         printLog('NewsScreen', error);
  //         setRefreshing(false);
  //       },
  //     );
  //   }, []);

  //   useEffect(() => {
  //     getNews(
  //       response => {
  //         printLog('NewsScreen', JSON.stringify(response));
  //         if (response?.status) {
  //           setNews(response?.data);
  //         }
  //       },
  //       error => {
  //         printLog('NewsScreen', error);
  //       },
  //     );
  //   }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
      }}>
      {/* <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            padding: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.6)',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              margin: 20,
              width: '100%',
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
          <Image
            style={{height: '95%', borderRadius: 10}}
            source={require('../../../assets/images/full_village_image.png')}
          />
        </TouchableOpacity>
      </Modal> */}

      <Modal style={{flex: 1}} visible={showModal} transparent={true}>
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
                height: Dimensions.get('screen').height-100,
                width: Dimensions.get('window').width-25,
                alignSelf:'center',
                borderRadius:15
              }}
              source={props.source}
            />
           
          )}
          transparent={true}
          backgroundColor="rgba(0,0,0,0.7)"
          style={{}}
          // renderHeader={({item}) => (
          //   <TouchableOpacity
          //     style={{
          //       alignSelf: 'flex-end',
          //       height: 24,
          //       width: 24,
          //       margin: 30,
          //     }} onPress={()=> setShowModal(false)}>
          //     <Image
          //       style={{
          //         tintColor: '#000',
          //         height: 24,
          //       width: 24,
          //       }}
          //       source={require('../../../assets/images/assets_images_cross.png')}
          //     />
          //   </TouchableOpacity>
          // )}
          imageUrls={images}
        />
      </Modal>
      {/* <AppDrawerHeader
        title={'27 KP Samaj News'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
      /> */}
      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar text={'27 SAMAJ LATEST UPDATE'} />
        {news == null ? (
          <View
            style={{
              flex: 1,
              backgroundColor: AppColors.BackgroundColor,
              alignItems: 'center',
            }}>
            <ListMember styles={{height: 45, marginHorizontal: 20}} />
            <ListMember styles={{height: 45, marginHorizontal: 20}} />
            <ListMember styles={{height: 45, marginHorizontal: 20}} />
            <ListMember styles={{height: 45, marginHorizontal: 20}} />
            <ListMember styles={{height: 45, marginHorizontal: 20}} />
          </View>
        ) : news?.length == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: AppColors.BackgroundColor,
            }}>
            <Text
              style={{
                fontFamily: AppFonts.bold,
                color: AppColors.black,
                fontSize: 15,
              }}>
              No List Found
            </Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
            //   refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            //   }
            data={news == null ? [] : news}
            renderItem={({item, index}) => (
              <View>
                <NotificationCell
                  item={item}
                  index={index}
                  visible={visible}
                  imagePress={() => setShowModal(true)}
                  onNewsClick={() =>
                    RootNavigation.push(
                      props?.navigation,
                      AppScreens.NEWS_DETAIL_SCREEN,
                      {
                        item: item,
                      },
                    )
                  }
                />
                {visible == item.id ? (
                  <View
                    style={{
                      marginTop: -10,
                      marginHorizontal: 20,
                      backgroundColor: '#fff',
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
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
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        lineHeight: 20,
                        color: AppColors.DarkText,
                      }}>
                      {item.content}
                    </Text>
                  </View>
                ) : null}
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;

const NotificationCell = props => {
  return (
    <TouchableOpacity
      activeOpacity={AppConstValue.ButtonOpacity}
      onPress={() => props?.onNewsClick()}
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: AppColors.BackgroundColor,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        ...Platform.select({
          ios: {
            shadowColor: '#D5D5D5',
            shadowOffset: {width: 0, height: -1},
            shadowOpacity: 0.9,
            shadowRadius: 3,
          },
          android: {
            elevation: 15,
          },
        }),
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{margin: 15}}
        onPress={props?.item.src == null ? null : props?.imagePress}>
        <Image
          source={
            props?.item.src == null ? AppImages.NEWS_FILE_ICON : props?.item.src
          }
          style={{
            alignSelf: 'center',

            height: 63,
            width: 44,
            borderRadius: 5,
            resizeMode: props?.item.src == null ? 'contain' : null,
          }}
        />
      </TouchableOpacity>

      <View style={{paddingVertical: 17, marginRight: 17, flex: 1}}>
        <Text
          numberOfLines={3}
          style={{
            fontFamily: AppFonts.medium,
            fontSize: 10,
            lineHeight: 18,
            color: AppColors.DarkText,
          }}>
          {props?.item?.title}
        </Text>
      </View>
      <View
        style={{
          paddingRight: 15,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        {/* <Image
          source={
            props?.visible == props?.item.id
              ? AppImages.DROP_UP_ICON
              : AppImages.DROP_DOWN_GRAY
          }
          style={{
            tintColor:
              props?.visible == props?.item.id
                ? AppColors.BackgroundSecondColor
                : 'gray',
          }}
        /> */}

        <Text
          numberOfLines={1}
          style={{
            marginTop: 3,
            fontFamily: AppFonts.medium,
            fontSize: 7,
            color: AppColors.DarkText,
          }}>
          {moment(props?.item?.news_date, `yyyy-MM-DD`).format('DD/MM/yyyy')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
