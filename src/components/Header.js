import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

//ASSETS
import {COLORS, IMAGES} from '../assets';

//COMMON COMPONENT
import {Text} from '../components';

/**
 * Header is Component to render app top header/navigation bar
 * @property {string} title - button title
 * @property {search} searchBar - searchBar
 * @property {search} tint - color of subviews
 * @property {search} titleType - color of subviews
 */

const Header = props => {
  return (
    <View style={[styles.container, props.style]}>
      {props.onMenu && (
        <TouchableOpacity style={styles.backContainer} onPress={props.onMenu}>
          <Image
            style={styles.menu}
            source={IMAGES.ic_menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {props.onBack && (
        <TouchableOpacity style={styles.backContainer} onPress={props.onBack}>
          <Image
            style={styles.back}
            source={IMAGES.BACK}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {props.onLeft && (
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={props.onLeft}>
          <Text
            style={{alignSelf: 'flex-start'}}
            size="14"
            weight="bold"
            align="left"
            color={
              props.leftRightTextColor ? props.leftRightTextColor : COLORS.green
            }>
            {props.onLeftTitle}
          </Text>
        </TouchableOpacity>
      )}
      <Text
        style={[props.centerTitleStyle, {flex: 1.0, justifyContent: 'center'}]}
        size="28"
        weight="700"
        align="center"
        type={'1'}
        color={props.titleTextColor ? props.titleTextColor : COLORS.black}>
        {props.title}
      </Text>
      {props.onRight && (
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={props.onRight}>
          <Text
            style={{alignSelf: 'flex-end'}}
            size="14"
            align="right"
            weight="bold"
            color={
              props.leftRightTextColor
                ? props.leftRightTextColor
                : COLORS.lightGreen
            }>
            {props.onRightTitle}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: Platform.OS == 'ios' ? 44 : 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  backContainer: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  back: {
    height: 16,
    width: 16,
    alignSelf: 'center',
  },
});

export default Header;
