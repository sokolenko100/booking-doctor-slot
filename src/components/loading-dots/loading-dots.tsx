import React from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
const animationConfig = {duration: 1000, easing: Easing.inOut(Easing.ease)};

/**
 * LoadingDots component represents a loading indicator composed of three animated dots.
 * It uses Reanimated library to animate the size of the dots in a repeating sequence.
 *
 * @returns {JSX.Element} A React component that renders three animated dots as a loading indicator.
 */
export const LoadingDots = () => {
  const dot1Size = useSharedValue(5);
  const dot2Size = useSharedValue(5);
  const dot3Size = useSharedValue(5);

  dot1Size.value = withRepeat(
    withSequence(
      withTiming(20, animationConfig),
      withTiming(5, animationConfig),
    ),
    -1,
    false,
  );

  dot2Size.value = withDelay(
    500,
    withRepeat(
      withSequence(
        withTiming(20, animationConfig),
        withTiming(5, animationConfig),
      ),
      -1,
      false,
    ),
  );

  dot3Size.value = withDelay(
    1000,
    withRepeat(
      withSequence(
        withTiming(20, animationConfig),
        withTiming(5, animationConfig),
      ),
      -1,
      false,
    ),
  );

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      width: dot1Size.value,
      height: dot1Size.value,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      width: dot2Size.value,
      height: dot2Size.value,
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      width: dot3Size.value,
      height: dot3Size.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, animatedStyle1]} />
      <Animated.View style={[styles.dot, animatedStyle2]} />
      <Animated.View style={[styles.dot, animatedStyle3]} />
    </View>
  );
};
