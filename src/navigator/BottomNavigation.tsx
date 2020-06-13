import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile';
import Coin from '../screens/Coin';
import TopNavigation from './TopNavigation';
import BottomCreateNavigation from './BottomCreateNavigation';



export type BottomTapParamList = {
  Home: undefined;
  Create: undefined;
  Profile: undefined;
  Coin: undefined;
}



const Tab = createBottomTabNavigator<BottomTapParamList>();



export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TopNavigation} />
      <Tab.Screen name="Create" component={BottomCreateNavigation} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Coin" component={Coin} />
    </Tab.Navigator>
  );
}

