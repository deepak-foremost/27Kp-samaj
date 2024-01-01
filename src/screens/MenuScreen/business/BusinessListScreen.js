import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
// import {AppDrawerHeader} from '../../../../components/AppDrawerHeader';
import {BusinessDirectoryCell} from '../../../components/HorizontalMenuComponent';

// import {
//   deleteMyBusiness,
//   getMyBusinesses,
// } from '../../../../networking/CallApi';
import {AppColors} from '../../../utils/AppColors';
import {printLog, ShowMessage} from '../../../utils/AppConstValue';
import {AppFonts} from '../../../utils/AppFonts';
import {AppImages} from '../../../utils/AppImages';
import {AppScreens} from '../../../utils/AppScreens';
import {AppStyles} from '../../../utils/AppStyles';
import {AsyncStorageConst, getString} from '../../../utils/AsyncStorageHelper';
// import LoaderView from '../../../../utils/LoaderView';
import * as RootNavigation from '../../../utils/RootNavigation';
import {
  BusinessDirectoryBox,
  ListMember,
} from '../advisour_member/AdvicerMember';
import ScreenToolbar from '../../../components/ScreenToolbar';
import AppButton from '../../../components/AppButton';
import BorderView from '../../../components/BorderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {deleteMyBusiness, getMyBusinesses} from '../../../networking/CallApi';
import LoaderView from '../../../utils/LoaderView';

const list = [
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
  {
    firm: 'Pramukh International',
    owner_name_1: ' Dhaval Patel',
    category_name: 'Visa Consultants',
    address: ' Nikol, Ahmedabad',
    phone: '+919999999999',
    is_family_id: 1,
  },
];

const user = [
  {
    is_family_id: 1,
  },
];

const BusinessListScreen = props => {
  const inset = useSafeAreaInsets();
  const StatusBarHeight = inset.top;
  const [modelOpen, setModelOpen] = useState(false);
  const [businesses, setBusiness] = useState(null);
    const [user, setUser] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const [refreshing, setRefreshing] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);

  // useEffect(() => {
  //   setBusiness(list);
  //   // setUser(userList);
  // });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMyBusinessesList();
  }, []);

  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getString(AsyncStorageConst.user, res => setUser(res));
      getMyBusinessesList();
    });

    return () => {
      willFocusSubscription;
    };
  }, []);

  const getMyBusinessesList = () => {
    getMyBusinesses(
      response => {
        printLog('BusinessListScreen', JSON.stringify(response));
        if (response?.status) {
          setBusiness(response?.data);
        } else {
          setBusiness([]);
        }
        setRefreshing(false);
      },
      error => {
        printLog('BusinessListScreen', JSON.stringify(error));
        setBusiness([]);
        setRefreshing(false);
      },
    );
  };

  useEffect(() => {
    getString(AsyncStorageConst.user, res => setUser(res));
    getMyBusinessesList();
  }, []);

  //   const deleteItemList = () => {
  //     var deleteIndex = businesses.indexOf(deleteItem);
  //     printLog('deleteIndex', deleteIndex);
  //     if (deleteIndex > -1) {
  //       businesses.splice(deleteIndex, 1);
  //     }
  //     setBusiness(businesses);
  //     setDeleteItem(null);
  //     setModelOpen(false);
  //   };

  return (
    <View
      style={[
        AppStyles.AppMainBackground,
        {
          backgroundColor: AppColors.BackgroundSecondColor,
          paddingTop: Platform.OS == 'ios' && StatusBarHeight,

          //   paddingBottom: safeAreaBottomHeight(),
        },
      ]}>
      {/* <AppDrawerHeader
        title={'Business Details'}
        leadIcon={AppImages.ICON_BACK}
        leadIconClick={() => RootNavigation.goBack()}
        rightIcon={AppImages.ICON_ADD_MEMBER}
        onMoreClick={() =>
          RootNavigation.navigate(AppScreens.AddBusinessScreen, {})
        }
      /> */}

      <View style={{flex: 1, backgroundColor: AppColors.fadeBackground}}>
        <ScreenToolbar
          text={'BUSINESS INFORMATION'}
          secondText={'+ADD'}
          secondPress={() =>
            RootNavigation.navigate(AppScreens.ADD_BUSINESS_SCREEN)
          }
        />

        <AppButton
          text={'Mobile Number : 9999999999'}
          buttonStyle={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 20,
            height: 40,
          }}
        />
        <View style={{flex: 0.9}}>
          {businesses == null ? (
            <View
              style={{
                flex: 1,
                backgroundColor: AppColors.backgroundColor,
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              <BusinessDirectoryBox />
              <BusinessDirectoryBox />
              <BusinessDirectoryBox />
              {/* <ListMember styles={{height: 150}} />
              <ListMember styles={{height: 150}} />
              <ListMember styles={{height: 150}} /> */}
            </View>
          ) : businesses?.length == 0 ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: AppFonts.semiBold,
                  fontSize: 15,
                  color: AppColors?.black,
                }}>
                No List Found
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingTop: 10, marginBottom: 20}}
              data={businesses == null ? [] : businesses}
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              // }
              renderItem={({item, index}) => (
                <BusinessDirectoryCell
                  index={index}
                  item={item}
                  user={user}
                  onClicked={type => {
                    if (type == 'view' || type == 'edit') {
                      RootNavigation.push(
                        props?.navigation,
                        type == 'view'
                          ? AppScreens.BUSINESS_DETAIL_SCREEN
                          : AppScreens.ADD_BUSINESS_SCREEN,
                        {item: item, show: true},
                      );
                    } else if (type == 'delete') {
                      setDeleteItem(item);
                      setModelOpen(true);
                    }
                  }}
                />
              )}
            />
          )}
        </View>
        <BorderView
          text={'સેવા કરવી તે મારી અમૂલ્ય ભેટ છે'}
          backgroundColor={AppColors.BackgroundSecondColor}
        />
      </View>

      <ModalView
        open={modelOpen}
        item={deleteItem}
        loader={deleteLoader}
        color={AppColors.BackgroundColor}
        message={'Are you sure you want to delete Business? '}
        title={'Delete Business'}
        first={' Yes, Delete '}
        press={() => {
          setDeleteLoader(true);
          deleteMyBusiness(
            {business_id: deleteItem?.id},
            response => {
              printLog('onSuccess', JSON.stringify(response));
              ShowMessage(response?.message);
              setModelOpen(false);
              setDeleteLoader(false);
              if (response?.status) {
                // props?.onDelete();
                getMyBusinessesList();
              }
            },
            error => {
              // setDeleteLoader(false);
              printLog('onFailure', JSON.stringify(error));
              props?.onCancel();
            },
          );
        }}
        // onDelete={deleteItemList}
        onCancel={() => {
          setDeleteItem(null);
          setModelOpen(false);
        }}
      />
    </View>
  );
};

export default BusinessListScreen;

export const ModalView = props => {
  const [deleteLoader, setDeleteLoader] = useState(false);
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props?.open}
      onRequestClose={() => {
        printLog('Modal has been closed.');
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={styles.modal}>
          <Text style={styles.modelTextTitle}>{props?.title}</Text>

          <Text style={styles.modelTextSubTitle}>
            {props?.message}
            {/* Are you sure you want to delete Business? */}
          </Text>
          {deleteLoader ? (
            <></>
          ) : (
            // <></>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 40,
                alignSelf: 'stretch',
                marginHorizontal: 20,
                marginBottom: Platform.OS == 'ios' ? 30 : 20,
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: AppColors.BackgroundSecondColor,
                marginTop: 40,
              }}
              onPress={
                // setDeleteLoader(true);
                props?.press
                // deleteMyBusiness(
                //   {business_id: props?.item?.id},
                //   response => {
                //     printLog('onSuccess', JSON.stringify(response));
                //     ShowMessage(response?.message);
                //     setDeleteLoader(false);
                //     if (response?.status) {
                //       props?.onDelete();
                //     }
                //   },
                //   error => {
                //     // setDeleteLoader(false);
                //     printLog('onFailure', JSON.stringify(error));
                //     props?.onCancel();
                //   },
                // );
              }>
              {props?.loader ? (
                <LoaderView
                  style={{width: '25%', height: 30, alignSelf: 'center'}}
                  color={props?.color}
                />
              ) : (
                <Text
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    fontFamily: AppFonts.semiBold,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {props?.first}
                  {/* Yes, Delete */}
                </Text>
              )}
            </TouchableOpacity>
          )}
          {deleteLoader ? (
            <></>
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                props?.onCancel();
              }}>
              <Text
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  fontFamily: AppFonts.semiBold,
                  color: 'black',
                  textAlign: 'center',
                }}>
                No
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    alignContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#D5D5D5',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.9,
        shadowRadius: 5,
      },
      android: {
        elevation: 15,
        borderTopColor: '#fff',
      },
    }),
  },
  modelTextTitle: {
    fontSize: 16,
    width: '100%',
    paddingVertical: 5,
    fontFamily: AppFonts.semiBold,
    color: '#202020',
    textAlign: 'center',
    marginBottom: 20,
  },
  modelTextSubTitle: {
    width: '80%',
    textAlign: 'center',
    fontFamily: AppFonts.semiBold,
    color: '#828282',
  },
});
