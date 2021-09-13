import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {categories} from '../../data';
import {SIZES, COLORS} from '../../constants';
import HomeContext from '../../context/HomeContext';

const NavCategories = () => {
  const {selectedCategory, setSelectedCategory, handleFilter} =
    useContext(HomeContext);

  function onSelectCategory(id) {
    setSelectedCategory(id);
    handleFilter(id);
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: SIZES.padding * 3,
      }}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => onSelectCategory(item.id)}>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color:
                  selectedCategory === item.id ? COLORS.primary : COLORS.grey,
              }}>
              {item.label}
            </Text>
            {selectedCategory === item.id && (
              <View
                style={{
                  height: 3,
                  width: '100%',
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavCategories;
