import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import TrangChu from './TrangChu';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import addContactScreen from './addContactScreen';
import Gallery from './Gallery';
import Login from './Login';

const RootStack = createStackNavigator(
  {
    TrangChu, HomeScreen, DetailsScreen, addContactScreen, Gallery, Login
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const App = createAppContainer(RootStack);

export default App
