import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {icons, SIZES, COLORS, FONTS} from '../../../constants';
import {getCategoryNameById} from '../../../utils';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

const HotelItem = ({item}) => {
  const navigation = useNavigation();
  const catName = getCategoryNameById(item.categoryId);

  return (
    <TouchableOpacity
      style={{marginBottom: SIZES.padding * 2}}
      onPress={() => {
        console.log('item:', item);
        navigation.navigate('HotelDetails', {
          item,
        });
      }}>
      <View
        style={{
          marginBottom: SIZES.padding,
        }}>
        <Image
          source={{
            uri: item.thumbnail,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 200,
            borderRadius: SIZES.radius,
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: COLORS.primary,
            height: 50,
            width: 90,
            zIndex: 1,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow,
          }}>
          <Text
            style={{
              ...FONTS.h4,
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.white,
            }}>
            ${item.price}
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}>
        <Text style={{...FONTS.body2, flex: 1}}>{item.name}</Text>
        <Icon
          name="local-offer"
          size={22}
          color={COLORS.primary}
          style={{marginRight: 2}}
        />
        <Text
          style={{
            ...FONTS.body3,
            fontSize: 14,
            marginRight: 'auto',
            color: COLORS.darkgray,
            paddingHorizontal: SIZES.base,
          }}>
          {catName.charAt(0).toUpperCase() + catName.slice(1)}
        </Text>
      </View>
      <View style={{marginTop: -5, paddingHorizontal: SIZES.base}}>
        <Text style={{...FONTS.body2, fontSize: 14, color: COLORS.gray}}>
          {item.location}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          marginTop: 5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={icons.star}
          style={{
            height: 16,
            width: 16,
            tintColor: COLORS.primary,
            marginRight: 3,
          }}
        />
        <Text style={{...FONTS.body3}}>{item.ratings}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <Text style={{...FONTS.body3, fontWeight: 'bold'}}>
            {`${item.views} views`}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelItem;
