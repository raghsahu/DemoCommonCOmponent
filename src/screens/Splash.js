import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

//ASSETS
import {COLORS, IMAGES} from '../assets';

//COMMON COMPONENT
import {Button, Header, Text, Input} from '../components';

import {LocalizationContext} from '../context/LocalizationProvider';
//PACKAGES
import {CommonActions} from '@react-navigation/native';


function Splash(props) {
  const {getUserLanguage, setI18nConfig, getTranslation} =
    useContext(LocalizationContext);

  useEffect(() => {
    (async () => {
      getUserLanguage(res => {
        setI18nConfig(res);
        moveToNext();
      });
    })();
  }, []);

  const moveToNext = () => {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.primaryColor}
      />

      <ImageBackground
        source={IMAGES.ic_person}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
