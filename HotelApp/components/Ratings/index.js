import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS} from '../../constants';

const Ratings = ({hotel}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Icon
          name="star"
          size={22}
          color={COLORS.primary}
          style={{marginRight: 2}}
        />
        <Icon
          name="star"
          size={22}
          color={COLORS.primary}
          style={{marginRight: 2}}
        />
        <Icon
          name="star"
          size={22}
          color={COLORS.primary}
          style={{marginRight: 2}}
        />
        <Icon name="grade" size={22} color={'#ccc'} style={{marginRight: 2}} />
        <Icon name="grade" size={22} color={'#ccc'} style={{marginRight: 2}} />
      </View>
      <Text style={{...FONTS.body, marginLeft: 10}}>{hotel.ratings}</Text>
    </>
  );
};

export default Ratings;
