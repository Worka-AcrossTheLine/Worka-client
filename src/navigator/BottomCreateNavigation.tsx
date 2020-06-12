import React from 'react';
import StyleSheet from 'react-native/'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TabCard from '../screens/TabCreate/TabCard'
import TabLink from '../screens/TabCreate/TabLink'
import TabQuestion from '../screens/TabCreate/TabQuestion'




export type BottomCreateNavigationParamList = {
    TabLink: undefined;
    TabCard: undefined;
    TabQuestion: undefined;
  }

const Tab = createBottomTabNavigator<BottomCreateNavigationParamList>();

const styles = StyleSheet.create({
    blurView: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    bottomTabBar: {
      backgroundColor: 'transparent',
    },
  });


export default function() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TabCard" component={TabCard} />
        <Tab.Screen name="TabLink" component={TabLink} />
        <Tab.Screen name="TabQuestion" component={TabQuestion} />
      </Tab.Navigator>
    );
  }

