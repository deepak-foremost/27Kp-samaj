import {View, Text, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const NavigationDrawer = ({isVisible, closeModal}) => {
  const slideAnim = useRef(new Animated.Value(-400)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -400,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim]);

  return (
    <Animated.View
      style={[styles.modal, {transform: [{translateX: slideAnim}]}]}>
      <View style={styles.modalContent}>
        <Text>Slide Modal Content</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    transform: [{translateX: -400}], // Off-screen initially
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default NavigationDrawer;
