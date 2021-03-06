import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, StyleSheet, Image, Modal, Platform, LogBox} from 'react-native';

//SCREENS
import {
  Splash,
  Login,
  SignUp,
  Market,
  Profile,
} from './src/screens';
//TABBAR
import { TabBar } from './src/components'

//PACKAGES
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//CONTEXT
import {APPContext, APPProvider} from './src/context/APPProvider';
import {LocalizationProvider} from './src/context/LocalizationProvider';

const {Navigator, Screen} = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <LocalizationProvider>
    <APPProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Splash'}>
          <Screen name="Splash" component={Splash} />
          <Screen name="Home" component={BottomBar} />
          <Screen name="Login" component={Login} />
          <Screen name="SignUp" component={SignUp} />
          <Screen name="Market" component={Market} />
          <Screen name="Profile" component={Profile} />
        </Navigator>
      </NavigationContainer>
    </APPProvider>
    </LocalizationProvider>
  );
};

export default App;
