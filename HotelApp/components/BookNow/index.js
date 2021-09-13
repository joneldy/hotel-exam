import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';

const BookNow = () => {
  return (
    <View
      style={{
        padding: SIZES.padding * 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300,
      }}>
      <TouchableOpacity
        style={{
          width: SIZES.width * 0.9,
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>Book now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookNow;
