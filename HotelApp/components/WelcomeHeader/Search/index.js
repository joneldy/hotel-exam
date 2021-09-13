import React, {useContext} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SIZES, COLORS} from '../../../constants';
import HomeContext from '../../../context/HomeContext';

const Search = () => {
  const {handleSearch} = useContext(HomeContext);
  return (
    <View
      style={{
        height: 50,
        backgroundColor: COLORS.light,
        marginTop: SIZES.padding,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon name="search" size={30} style={{marginLeft: 20}} />
      <TextInput
        placeholder="Search hotel name"
        style={{fontSize: 20, paddingRight: 60}}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default Search;
