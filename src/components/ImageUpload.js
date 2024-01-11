import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LoaderView from '../utils/LoaderView';
import {AppImages} from '../utils/AppImages';

const ImageUpload = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '30%',
        height: '100%',
      }}
      onPress={props?.image != undefined ? props?.imgPress : null}>
      <Image
        style={{
          width: '100%',
          height: 80,
          borderRadius: 5,
          backgroundColor: '#F2F2F2',
        }}
        source={
          props?.image == undefined || props?.image == ''
            ? AppImages.MEMBER_IMAGE
            : {
                uri:
                  props?.image?.uri == undefined
                    ? props?.image
                    : props?.image?.uri,
              }
        }
      />

      {props?.image != undefined && (
        <Image
          style={{position: 'absolute', right: 5, top: 5}}
          source={require('../assets/images/cancel_icon.png')}
        />
      )}
    </TouchableOpacity>
  );
};

export default ImageUpload;
