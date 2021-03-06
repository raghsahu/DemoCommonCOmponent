import React, { Component } from 'react';
import {  View, TouchableOpacity, StyleSheet } from 'react-native';
//COMMON COMPONENT
import {Text} from '../components';
//ASSETS
import {
  COLORS,
} from '../assets';

export default function RadioButtons({ options, selectedOption, onSelect }) {
  return (
    <View style={{
                flexDirection: 'row',
               
              }}>
      {options.map((item) => {
        return (
          <View key={item.key} style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={[styles.circle, {marginLeft:10}]}
              onPress={() => {
                onSelect(item);
              }}>
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )}
            </TouchableOpacity>
                <Text
                weight="500"
                size="12"
                color={'#000000'}
                style={{
                marginLeft:5,
                
              }}>{item.text}
              </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom: 30,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00BFB8',
  },
});
