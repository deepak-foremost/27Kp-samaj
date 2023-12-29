import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {AppImages} from '../utils/AppImages';
import {AppColors} from '../utils/AppColors';

const ZoomImage = props => {
  const [visible, setVisible] = useState(
    !props?.visible ? false : props?.visible,
  );
  return (
    <Modal transparent visible={props?.visible}>
      <ImageViewer
        imageUrls={props?.images}
        // index={currentPosition}
        onSwipeDown={() => setVisible(false)}
        enablePreload
        enableSwipeDown={props?.dismiss}
        renderHeader={() => (
          <View style={{paddingTop: 20}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={props?.dismiss}
              style={{
                height: 20,
                width: 30,
                marginRight: 10,
                alignSelf: 'flex-end',
                backgroundColor: AppColors.BackgroundColor,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={AppImages.ICON_CLOSE}
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </Modal>
  );
};

export default ZoomImage;
