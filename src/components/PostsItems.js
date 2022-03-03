import React, {useContext} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('screen');
//ASSETS
import {COLORS} from '../assets';
//COMMON COMPONENT
import {Text} from '../components';

const PostsItems = props => {
  //const item = props.item;

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        marginHorizontal: 8,
      }}
      onPress={() => props.onPress()}>
      <View
        style={{
          flexDirection: 'row',
          
        }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
          }}
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/5ceafa407824f80001793b84/1617145105645-4JQVM5BOCNU2XD62M3UM/modal-verbs-passive-past.jpg',
          }}
        />

        <View
          style={{
             flex: 1,
            marginStart: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
             style={{
              flex: 1,
            }}
             color={COLORS.black} size="16" weight="700">
              {'Header'}
            </Text>
            <Text 
            style={{
              alignSelf: 'flex-end',
              flex: 1,
              marginEnd:10,

            }}
            color={COLORS.darkGray} 
            align= "right"
            size="15">
              {'8m ago'}
            </Text>
          </View>

          <Text color={COLORS.black} size="14">
            {
              'Goes here dddjdj djdjdjd djdjdjdj iiir irir ddds pppp lslslslsl lsslslsl eieieiei eieieie'
            }
          </Text>

          <View
            style={{
              borderColor: COLORS.light_gray,
              borderWidth: 0.3,
              marginTop: 5,
            }}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostsItems;
