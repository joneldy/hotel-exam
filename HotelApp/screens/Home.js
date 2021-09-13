import React from 'react';
import {SafeAreaView} from 'react-native';

import WelComeHeader from '../components/WelcomeHeader';
import NavCategories from '../components/NavCategories';
import HotelList from '../components/HotelList';
import HomeContext from '../context/HomeContext';
import {COLORS} from '../constants';
import {hotels} from '../data';
import {filterByCategories, sortHotels} from '../utils';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const [dbHotels, setDbHotels] = React.useState([...hotels]);

  const handleFilter = (id) => {
    const sorter = [2, 3];
    const filter = [4, 5];

    if (filter.includes(id)) {
      setDbHotels(filterByCategories(id));
    } else if (sorter.includes(id)) {
      setDbHotels(sortHotels(id));
    } else {
      setDbHotels(hotels);
    }
  };

  const handleSearch = (searchStr) => {
    if (searchStr && searchStr.trim() !== '' && searchStr.length > 2) {
      let results = [];
      results = hotels.filter(
        ({name}) => name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1,
      );
      console.log('results, ', results);
      setDbHotels(results);
    } else {
      handleFilter(selectedCategory);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        dbHotels: dbHotels,
        setDbHotels: setDbHotels,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        handleFilter: handleFilter,
        handleSearch: handleSearch,
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray4,
        }}>
        <WelComeHeader />
        <NavCategories />
        <HotelList />
      </SafeAreaView>
    </HomeContext.Provider>
  );
};

export default Home;
