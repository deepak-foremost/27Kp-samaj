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
  Platform,
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
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getNews} from '../../../networking/CallApi';

// const list = [
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: AppImages.ICON_TEST_VILLAGE,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: null,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: null,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: null,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: null,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
//   {
//     id: 0,
//     title: 'ગરબાની વિશેષ રમઝટ',
//     news_date: '22/05/2023',
//     src: null,
//     content:
//       'પૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં ઉત્સવનું વાતાવરણ.. ગરબાની વિશેષ રમઝટ, એટલ જ શરદ પપૌરાણિક માન્યતાઓ અને શરદ ઋતુ, પૂર્ણાકાર ચંદ્રમાં, સંસાર ભરમાં .',
//   },
// ];

const NewsScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [visible, setVisible] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [news, setNews] = useState(null);
  const [currentPosition, setPosition] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  // useEffect(() => {
  //   setNews(list);
  // });

  const images = [
    {
      url: '',
      props: {source: require('../../../assets/images/full_village_image.png')},
    },
  ];

  const LoadMore = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getNews(
        {page: page},
        response => {
          printLog('NewsScreen', JSON.stringify(response));
          setTotalPage(response?.last_page);
          if (response?.status) {
            var list = news == null ? [] : [...news];
            if (page == 1) {
              setNews(response?.data);
            } else {
              setNews([...list, ...response?.data]);
            }
            setLoading(false);
          }
        },
        error => {
          printLog('NewsScreen', error);
        },
      );
    });

    return () => {
      willFocusSubscription;
    };
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getNews(
      {page: page},
      response => {
        printLog('NewsScreen', JSON.stringify(response));
        if (response?.status) {
          setNews(response?.data);
        }
        setRefreshing(false);
      },
      error => {
        printLog('NewsScreen', error);
        setRefreshing(false);
      },
    );
  }, []);

  // useEffect(() => {
  //   getNews(

  //     response => {
  //       printLog('NewsScreen', JSON.stringify(response));
  //       if (response?.status) {
  //         setNews(response?.data);
  //       }
  //     },
  //     error => {
  //       printLog('NewsScreen', error);
  //     },
  //   );
  // }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.BackgroundSecondColor,
        paddingTop: Platform.OS == 'ios' && StatusBarHeight,
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
                height: Dimensions.get('screen').height - 100,
                width: Dimensions.get('window').width - 25,
                alignSelf: 'center',
                borderRadius: 15,
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
        <View style={{flex: 0.9}}>
          {news == null ? (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: '95%',
                alignSelf: 'center',
              }}>
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
              <ListMember styles={{height: 45}} />
            </View>
          ) : news?.length == 0 ? (
            <View
              style={{
                flex: 0.8,
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
            <View style={{flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                onEndReached={() => {
                  LoadMore();
                }}
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
                              elevation: 5,
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
            </View>
          )}
        </View>
        <BorderView
          text={'સૌનો સાથ ..સૌનો વિકાસ અને સમાજ નો વિકાસ'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>
    </View>
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
        backgroundColor: AppColors.BackgroundColor,
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 5,
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
      <TouchableOpacity
        activeOpacity={1}
        style={{margin: 5}}
        onPress={props?.item.src == null ? null : props?.imagePress}>
        <Image
          source={
            props?.item.src == null ? AppImages.NEWS_FILE_ICON : props?.item.src
          }
          style={{
            alignSelf: 'center',
            // height: props?.item.src == null ? 20 : 20,
            // width: props?.item.src != null ? 20 : 15,
            // borderRadius: 5,
            // resizeMode: props?.item.src == null ? 'stretch' : null,
            // BackgroundColor: '#fff',
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>

      <View style={{marginHorizontal: 15, flex: 1}}>
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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: AppColors.DarkText,
          padding: 3,
          borderRadius: 15,
          margin: 5,
          paddingHorizontal: 10,
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
            fontFamily: AppFonts.medium,
            fontSize: 7,
            color: '#fff',
            paddingTop: 2.5,
          }}>
          {moment(props?.item?.news_date, `yyyy-MM-DD`).format('DD/MM/yyyy')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
