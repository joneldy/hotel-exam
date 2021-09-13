import React from 'react';
import {SafeAreaView, Animated} from 'react-native';
import DetailsHeader from '../components/DetailsHeader';
import DetailContent from '../components/DetailContent';
import {COLORS} from '../constants';

const HotelDetails = ({route, navigation}) => {
  const scrollX = new Animated.Value(0);
  let {item} = route.params;
  const hotel = item;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray2,
      }}>
      <DetailsHeader hotel={hotel} navigation={navigation} />
      <DetailContent hotel={hotel} scrollX={scrollX} />
    </SafeAreaView>
  );
};

export default HotelDetails;
