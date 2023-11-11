import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
  Image,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AppColors} from '../../utils/AppColors';
import MainToolbar from '../../components/MainToolbar';
import {AppImages} from '../../utils/AppImages';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {AppStyles} from '../../utils/AppStyles';
import {AppFonts} from '../../utils/AppFonts';
import HomeMenu from '../../components/HomeMenu';
import BorderView from '../../components/BorderView';
import NavigationDrawer from '../../components/NavigationDrawer';
import {AppConstValue} from '../../utils/AppConstValue';
import DrawerButtons from '../../components/DrawerButtons';
import {SliderBox} from 'react-native-image-slider-box';
import {ScrollView} from 'react-native-gesture-handler';
import {staticArray} from '../../utils/staticArray';
import HomeMenuButton from '../../components/HomeMenu';
import * as RootNavigation from '../../utils/RootNavigation';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';

const images = [
  {
    src: require('../../assets/images/tab_image.png'),
  },
  {
    src: require('../../assets/images/tab_image.png'),
  },
  {
    src: require('../../assets/images/tab_image.png'),
  },
];

const FirstRoute = () => {
  return (
    <View
      style={{
        // flex: 1,
        height: Dimensions.get('window'),
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: 'center',
      }}>
      <Image source={require('../../assets/images/tab_image.png')} />
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        height: Dimensions.get('window'),
        backgroundColor: 'white',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: 'center',
      }}>
      <Image source={require('../../assets/images/tab_image.png')} />
    </View>
  );
};

const ThirdRoute = () => {
  return (
    <View
      style={{
        flex: 1,
        height: Dimensions.get('window'),
        backgroundColor: 'white',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: 'center',
      }}>
      <Image source={require('../../assets/images/tab_image.png')} />
    </View>
  );
};

const Pager = props => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{width: windowWidth, flexDirection: 'row'}}>
      <View style={{width: windowWidth / 3}}>{props[0]}</View>
      <View style={{width: windowWidth / 3}}>{props[1]}</View>
      <View style={{width: windowWidth / 3}}>{props[2]}</View>
    </View>
  );
};

const HomeScreen = () => {
  const [select, setSelect] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState(AppColors.BackgroundSecondColor);
  const [isVisible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const width = Dimensions.get('window').width;

  // console.warn(select)
  // const [images, setImages] = useState([]);

  const fadebackground = () => {
    setTimeout(() => {
      isVisible
       setColor('rgba(0,0,0,0.5)')
    }, 100);
  };

  useEffect(() => {
    fadebackground();
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -400,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim]);

  const screenWidth = Dimensions.get('window').width;

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Upcoming Payments'},
    {key: 'second', title: 'Deposited'},
    {key: 'third', title: ''},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((_, i) => i);
    return (
      <TabBar
        {...props}
        renderLabel={({route, focused}) => (
          <Text style={{color: focused ? 'white' : 'gray'}}>{route.title}</Text>
        )}
        style={styles.tabBar}
        tabStyle={styles.tab}
        indicatorStyle={styles.indicator}
        renderTabBarItem={props => <Pager {...props} />}
      />
    );
  };

  const renderPagination = (index, total, context) => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingTop: 16,
        }}>
        {index > 0 && <Text style={{color: 'white'}}>Left</Text>}
        {index < total - 1 && <Text style={{color: 'white'}}>Right</Text>}
      </View>
    );
  };

  const modalDismiss = () => {
    setVisible(false);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  //  const handleScroll = event => {
  //   const {contentOffset, layoutMeasurement} = event.nativeEvent;
  //   const newPage = Math.floor(contentOffset.x / layoutMeasurement.width);
  //   if (newPage !== currentPage) {
  //     setCurrentPage(newPage);
  //   }
  // };

  const Navigate=((item)=>{
    setTimeout(()=>{
      RootNavigation.navigate(item?.item.screen, {
        status: 'drawer',
        detail: item?.item.detail,
      },100);
    })
    setSelect(item.index)
  })

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: AppColors.BackgroundSecondColor}}>
        <StatusBar backgroundColor={AppColors.BackgroundSecondColor}/>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateX: slideAnim}],
            backgroundColor:'rgba(0,0,0,0.7)',
          },
        ]}>
        <View
          style={{
            height: '100%',
            width: '80%',
            backgroundColor: AppColors.BackgroundSecondColor,
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[AppStyles.AppLogoStyle, {}]}>
              <Image
                style={{height: 100, width: 100}}
                source={AppImages.APP_MAIN_ICON}
              />
            </View>
            <View
              style={[
                {
                  backgroundColor: '#0A4DBB',
                  width: 120,
                  height: 35,
                  justifyContent: 'center',
                  marginTop: 20,
                  borderRadius: 15,
                  borderTopLeftRadius: 0,
                  alignItems: 'center',
                  borderColor: '#F7F7F7',
                  borderWidth: 1,
                },
              ]}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: AppFonts.medium,
                  color: '#F7F7F7',
                }}>
                27 KP SAMAJ
              </Text>
            </View>
          </View>

          <View style={{flex: 0.65, width: '100%', marginTop: -20}}>
            <View style={{flex: 0.85}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                // scrollEnabled={false}
                contentContainerStyle={{width: '100%'}}
                data={staticArray.DrawerMenu}
                renderItem={(item, index) => (
                  <DrawerButtons
                    item={item}
                    // index={index}
                    // pressIn={() => setSelect(item.index)}
                    show={select}
                    // selected={currentMenu}
                    onChange={() => {
                      // RootNavigation.navigate(item?.item.screen, {
                      //   status: 'drawer',
                      //   detail: item?.item.detail,
                      // },);
                      Navigate(item);
                      // setMenu(index);
                      // props?.onClose(currentMenu);
                      // if (item?.screen != '' && item?.index != 6) {
                      //   RootNavigation.navigate(item?.screen, {});
                      // } else if (item?.index == 6) {
                      //   props?.onLogout();
                      // } else if (item?.index == 7) {
                      //   Linking.openURL(Apis.SAMAJ_POLICY);
                      // }
                    }}
                  />
                )}
              />
            </View>

            {/* <DrawerButtons text={'Support Member'} />
            <DrawerButtons text={'Edit Family Member'} />
            <DrawerButtons text={'Edit Business'} />
            <DrawerButtons text={'ભૂમિ'} />
            <DrawerButtons text={'કેળવણી મંડળ'} />
            <DrawerButtons text={'Privacy Policy'} />
            <DrawerButtons text={'Contact Us'} /> */}
            <TouchableOpacity
              style={{
                width: '100%',
                paddingLeft: 30,
                flex: 0.2,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              activeOpacity={AppConstValue.ButtonOpacity}>
              <Image source={AppImages.LOGOUT_ICON} />
              <Text
                style={{
                  fontFamily: AppFonts.medium,
                  fontSize: 14,
                  color: '#F7F7F7',
                  marginLeft: 10,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={{width: '20%', height: '100%'}}
          onPress={() => setVisible(false)}></TouchableOpacity>
      </Animated.View>

      <View style={{flex: 1, backgroundColor: '#fff', opacity: 1}}>
        <MainToolbar
          leftSrc={require('../../assets/images/navigation_icon.png')}
          rightSrc={AppImages.LOGOUT_ICON}
          text={'27 KP SAMAJ'}
          leftPress={() => setVisible(true)}
        />

        <View style={{flex: 0.3, justifyContent: 'center', paddingTop: 10}}>
          {/* <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.imageContainer}
            
          >
           
            <View style={{padding: 10, width: width - 20}}>
              <Image
                style={{flex: 1, width: '100%'}}
                source={require('../../assets/images/tab_image.png')}
              />
            </View>
            <View style={{padding: 10, width: width}}>
              <Image
                style={{flex: 1, width: '100%'}}
                source={require('../../assets/images/tab_image.png')}
              />
            </View>
            <View style={{padding: 10, width: width}}>
              <Image source={require('../../assets/images/tab_image.png')} />
            </View>
          </ScrollView> */}

          {/* <SliderBox
          
            images={images}
            sliderBoxHeight={200}
            parentWidth={Dimensions.get('window').width}
            ImageComponentStyle={styles.imageBox}
            imageLoadingColor="#2196F3"
            dotColor="#FFEE58"
            paginationBoxVerticalPadding={20}
            paginationBoxStyle={styles.paginationBox}
            dotStyle={styles.dotStyle}
            paginationBoxHorizontalPadding={20}
            autoplay
            circleLoop
          /> */}

          {/* <Swiper
            containerStyle={{}}
            // renderPagination={renderPagination}
            // pagingEnabled={true}
            renderPagination={(i)=> console.log('')}
            horizontal={true}
            showAdjacentViews={true}
            contentInsetAdjustmentBehavior="scrollableAxes">
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'red',
              }}>
              <Text>vjb</Text>
            </View>
            <View
              style={{
                backgroundColor: 'green',
                flex: 1,
              }}></View>
          </Swiper> */}
          <View style={{}}>
            <Carousel
              // ref={c => {
              //   this._carousel = c;
              // }}
              data={images}
              renderItem={({item}) => (
                <Image
                  style={{width: '102%', alignSelf: 'center', borderRadius: 10}}
                  source={item.src}
                />
              )}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width - 50}
              layout="default"
              layoutCardOffset={`18`}
              loop
            />
          </View>

          {/* <ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <SliderBox
              disableOnPress
              // ImageComponent={FastImage}
              images={[
                require('../../assets/images/tab_image.png'),
                require('../../assets/images/tab_image.png'),
              ]}
              // dotColor={AppColors.backgroundColor}
              // inactiveDotColor={AppColors.lineColor}
              style={{height: 260}}
              dotStyle={{
                width: 5,
                height: 5,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
              }}
            />
          </ScrollView> */}
          {/* <TabView
            style={{}}
            renderTabBar={props => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'red',
                }}>
                <TabBar
                  {...props}
                  // indicatorStyle={styles.tabBarIndicatorStyle}

                  indicatorStyle={{
                    backgroundColor: '#CBA328',
                    borderColor: '#CBA328',
                    height: 0,
                    borderRadius: 5,
                  }}
                  pressColor="white"
                  style={{
                    backgroundColor: 'black',
                    height: 0,
                    marginHorizontal: 5,
                    alignSelf: 'center',
                    borderRadius: 10,
                    width: '85%',
                  }}
                  tabStyle={{}}
                  // labelStyle={styles.tabBarLabelStyle}
                  inactiveColor="#BDBCBC"
                  activeColor="#CBA328"
                />
              </View>
            )}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width, backgroundColor: 'red'}}
            accessibilityIgnoresInvertColors={false}
          /> */}

          {/* <ScrollView horizontal={true} pagingEnabled={true}>
            <View style={{padding: 10, width: '90%'}}>
              <Image source={require('../../assets/images/tab_image.png')} />
            </View>
            <View style={{padding: 10, width: '90%'}}>
              <Image source={require('../../assets/images/tab_image.png')} />
            </View>
            <View style={{padding: 10}}>
              <Image source={require('../../assets/images/tab_image.png')} />
            </View>
          </ScrollView> */}

          {/* <SliderBox
            disableOnPress
            ImageComponent={FastImage}
            images={images}
            dotColor={AppColors.backgroundColor}
            inactiveDotColor={AppColors.lineColor}
            style={{height: 260}}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
            }}
          /> */}
        </View>

        <View style={{flex: 0.58,}}>
          <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
            data={staticArray.HomeMenu}
            renderItem={(item, index) => (
              <HomeMenuButton
                item={item}
                index={index}
                // press={() => {
                //   MyLog('ContactUsScreen', item?.item?.index);

                //   RootNavigation.push(
                //     props?.navigation,
                //     item?.item?.screen,
                //     NaN,
                //   );
                // }}
              />
            )}
          />
        </View>

        {/* <View style={{flex: 0.55, justifyContent: 'space-evenly'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <HomeMenu
              src={AppImages.ABOUT_US_ICON}
              text={'About Us'}
              press={() => {
                setVisible(true);
              }}
            />

            <HomeMenu src={AppImages.SEARCH_ICON} text={'Search'} />

            <HomeMenu
              src={AppImages.STATICS_ICON}
              text={'Statistics'}
              press={() => modalDismiss()}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <HomeMenu
              src={AppImages.FAMILY_MEMBER_ICON}
              text={'Family Member Details'}
            />

            <HomeMenu
              src={AppImages.BUSSINESS_ICON}
              text={'Business Details'}
            />

            <HomeMenu
              src={AppImages.VILLAGE_ICON}
              text={'Village Member Details'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <HomeMenu src={AppImages.NEWS_ICON} text={'27 Samaj Latest News'} />

            <HomeMenu src={AppImages.FORM_ICON} text={'પરિપત્ર'} />

            <HomeMenu src={AppImages.CONTACT_US_ICON} text={'Contact Us'} />
          </View>
        </View> */}

        <BorderView
          backgroundColor={AppColors.BackgroundSecondColor}
          text={'સમાજ એજ મારો પરિવાર'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 100,
    height: Dimensions.get('window').height,
    width: '100%',
    flexDirection: 'row',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200, // Adjust the height of the displayed image box
    resizeMode: 'cover',
  },
});

export default HomeScreen;
