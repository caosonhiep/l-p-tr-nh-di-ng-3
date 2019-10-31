//Pham Van Thinh
//15211TT2290
import React from 'react';
//import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import MuaHang from './MuaHang';
import FlatListBasics from './FlatListBasics';
import ListSanPham from './ListSanPham';
 
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    MuaHang: MuaHang,
    FlatList: FlatListBasics,
    DanhSachSP: ListSanPham,
    
  },
  {
    initialRouteName: 'Home',
  }
);
 
const AppContainer = createAppContainer(RootStack);
 
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
