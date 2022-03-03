import React, {useContext} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('screen');
//ASSETS
import {COLORS} from '../assets';
//COMMON COMPONENT
import {Text,} from '../components';

const HotDealItems = props => {
  const item = props.item;

  return (
      <TouchableOpacity
       style={{
        paddingVertical: 10,
        marginHorizontal: 8,
      }}
       onPress={() => props.onPress()} > 
  
      <Image
        style={{
          width: 100,
          height: 120,
          borderRadius: 12,
        }}
        source={{
          uri: item.owner.avatar_url,
        }}
      />

      <View
        style={{
         // alignItems: 'center',
         marginTop: 5,
        }}>
        <Text
          numberOfLines={1}
          color={COLORS.black}
          style={{width: 100}}
          weight="700"
          size="14">
          {item.name}
        </Text>
        <Text
         numberOfLines={1}
         color={COLORS.black}
         style={{width: 100}}
         size="13"
        >
          {item.description}
        </Text>
        {/* <Text
         color={COLORS.black}
         size="15"
         weight="700"
        >
          {'$'+item.price}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default HotDealItems;
