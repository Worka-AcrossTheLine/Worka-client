import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/auth/Home';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
