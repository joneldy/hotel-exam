import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './Search';
import {SIZES, COLORS, FONTS} from '../../constants';

const WelcomeHeader = () => {
  return (
    <View style={{paddingHorizontal: SIZES.padding}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text style={{...FONTS.h2, color: COLORS.primary}}>
          {'Welcome Guest!'}
        </Text>
        <Icon name="person" size={26} color={COLORS.primary} />
      </View>
      <Search />
    </View>
  );
};

export default WelcomeHeader;
