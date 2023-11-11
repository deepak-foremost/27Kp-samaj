import React from "react";
import { Image } from "react-native";

export const DeviderLine = props => {
    return (
      <Image
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#DCDCDC',
          marginVertical: 22,
          ...props?.Style,
        }}
      />
    );
  };