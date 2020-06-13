import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile';
import Coin from '../screens/Coin';
<<<<<<< HEAD
import SeachNavigation from './SeachNavigation';
=======
import TopNavigation from './TopNavigation';
import BottomCreateNavigation from './BottomCreateNavigation';
>>>>>>> 5b8a9338ed1e22abf904e6e56cfe521fad473852



export type BottomTapParamList = {
<<<<<<< HEAD
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Coin: undefined;
=======
    Home: undefined;
    Create: undefined;
    Profile: undefined;
    Coin: undefined;
>>>>>>> 5b8a9338ed1e22abf904e6e56cfe521fad473852
}



const Tab = createBottomTabNavigator<BottomTapParamList>();



<<<<<<< HEAD
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
=======
export default function() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TopNavigation} />
        <Tab.Screen name="Create" component={BottomCreateNavigation} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Coin" component={Coin} />
      </Tab.Navigator>
    );
  }
>>>>>>> 5b8a9338ed1e22abf904e6e56cfe521fad473852

