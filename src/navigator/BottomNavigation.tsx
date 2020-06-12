import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Coin from '../screens/Coin';
import SeachNavigation from './SeachNavigation';



export type BottomTapParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Coin: undefined;
}

const Tab = createBottomTabNavigator<BottomTapParamList>();



export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SeachNavigation} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Coin" component={Coin} />
    </Tab.Navigator>
  );
}

