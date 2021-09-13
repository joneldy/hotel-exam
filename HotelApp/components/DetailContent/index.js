import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import SlideDots from '../SlideDots';
import Ratings from '../Ratings';
import ImageSlider from '../ImageSlider';
import BookNow from '../BookNow';
import {COLORS, SIZES, FONTS} from '../../constants';

const DetailContent = ({hotel, scrollX}) => {
  return (
    <View>
      <ImageSlider hotel={hotel} scrollX={scrollX} />
      <SlideDots hotel={hotel} scrollX={scrollX} />
      <ScrollView style={{marginBottom: 30, paddingHorizontal: 20}}>
        <Text
          style={{
            ...FONTS.body2,
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.black,
          }}>
          {hotel.name}
        </Text>

        <Text style={{...FONTS.body2, fontSize: 14, color: COLORS.gray}}>
          {hotel.location}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: SIZES.padding,
          }}>
          <Ratings hotel={hotel} />
          <Text
            style={{
              ...FONTS.body,
              fontWeight: 'bold',
              marginLeft: 'auto',
              color: COLORS.black,
              marginRight: 20,
            }}>
            {hotel.views} views
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              lineHeight: 20,
              color: COLORS.grey,
            }}>
            {hotel.description}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View
            style={{
              height: 40,
              alignItems: 'center',
              marginLeft: 40,
              paddingLeft: 20,
              flex: 1,
              backgroundColor: COLORS.secondary,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.black,
                marginLeft: 5,
              }}>
              ${hotel.price}
            </Text>
          </View>
        </View>
        <BookNow />
      </ScrollView>
    </View>
  );
};

export default DetailContent;
