import React from 'react';
import {View, Image, Animated} from 'react-native';

import {SIZES} from '../../constants';

const ImageSlider = ({hotel, scrollX}) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {hotel?.slides.map((image, index) => (
        <View key={`menu-${index}`} style={{alignItems: 'center'}}>
          <View style={{height: SIZES.height * 0.35}}>
            <Image
              source={{uri: image}}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: '100%',
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
              }}
            />
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default ImageSlider;
