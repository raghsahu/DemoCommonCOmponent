import React, {Component, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
//COMMON COMPONENT
import {Text} from '../components';
//ASSETS
import {COLORS} from '../assets';
import {Picker} from '@react-native-picker/picker'; //for dropdown

export default function DropdownPicker(props) {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={[styles.inputContainer, styles.inputView, {marginTop: 10}]}>
      <Picker
        dropdownIconColor={COLORS.black}
        placeholder={props.placeholder}
        placeholderStyle={{color: COLORS.gray}}
        placeholderIconColor={COLORS.gray}
        itemStyle={{color: COLORS.black, backgroundColor: COLORS.black}}
        style={{
          color: COLORS.black,
          width: 300,
          placeholderTextColor: COLORS.gray,
        }}
        ref={pickerRef}
        selectedValue={props.selectedValue}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => props.onChange(itemValue)}>
        <Picker.Item
          color={COLORS.gray}
          label={props.placeholder}
          value={props.placeholder}
        />
        {props.options.map(item => {
          return (
            <Picker.Item label={item.label} value={item.value} key={item.key} />
          );
        })}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    marginHorizontal: 30,
  },
  inputContainer: {
    height: 54,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: COLORS.lightGrey,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
  },
});
