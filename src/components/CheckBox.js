import React, { Component } from 'react';
import {  View, TouchableOpacity, StyleSheet } from 'react-native';
//COMMON COMPONENT
import {Text} from '../components';
//ASSETS
import {
  COLORS,
} from '../assets';

export default function CheckBox(props) {
  return (
      <TouchableOpacity
            style={styles.terms}
            onPress={() => {
              props.onChecked(!props.isSelected);
            }}>
            <View style={styles.checkBox}>
              {props.isSelected && <View style={styles.checkSelected}></View>}
            </View>
            <Text
              size="14"
              type={1}
              weight="400"
              align="center"
              color={'#11243D'}>
              {props.text}
            </Text>
          </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   terms: {
    marginTop: 20,
    marginHorizontal: 30,
    // alignSelf: 'center',
    flexDirection: 'row',
  },
  checkBox: {
    height: 18,
    width: 18,
    borderRadius: 4,
    borderColor: COLORS.sky,
    borderWidth: 2,
    alignSelf: 'center',
    marginRight: 8,
    justifyContent: 'center',
  },
  checkSelected: {
    height: 12,
    width: 12,
    borderRadius: 3,
    backgroundColor: COLORS.sky,
    alignSelf: 'center',
  },
});
