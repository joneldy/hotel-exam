import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import HomeContext from '../../context/HomeContext';
import HotelItem from './HotelItem';
import {SIZES} from '../../constants';

const HotelList = () => {
  const {dbHotels} = useContext(HomeContext);

  return (
    <FlatList
      data={dbHotels}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => <HotelItem item={item} />}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};

export default HotelList;
