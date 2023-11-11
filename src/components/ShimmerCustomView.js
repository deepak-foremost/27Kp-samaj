import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const ShimmerCustomView = props => {
  return (
    <>
      <View
        style={{
          // position: 'absolute',
          // backgroundColor: 'white',
          width: '100%',
          ...Platform.select({
            ios: {
              shadowColor: '#ebebeb',
              shadowOffset: {width: 0, height: -1},
              shadowOpacity: 0.9,
              shadowRadius: 3,
            },
            android: {
              elevation: 20,
            },
          }),
        }}>
        <ShimmerPlaceHolder
          duration={900}
          // shimmerColors={["#f3f3f3", "#ebebeb", "#f3f3f3"]}
          shimmerColors={['#ebebeb', '#dbdbdb', '#ebebeb']}
          width={300}
          height={70}
          shimmerStyle={[
            {width: '100%', height: '100%', borderRadius: 8},
            props.style,
          ]}
          LinearGradient={LinearGradient}
          
        />
      </View>
    </>
  );
};
export default ShimmerCustomView;
