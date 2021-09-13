import React from 'react';
import {View, Animated} from 'react-native';

import {COLORS, SIZES} from '../../constants';

const SlideDots = ({hotel, scrollX}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={{height: 30, marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding,
        }}>
        {hotel?.slides.map((dot, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SlideDots;
