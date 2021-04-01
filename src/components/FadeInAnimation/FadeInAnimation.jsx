import React, { useRef } from 'react';
import { Animated } from 'react-native';

export function FadeInAnimation({ element,  }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start();
      };
    return (
        <>
        </>
    )
}