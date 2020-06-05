import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/auth/Home';
import Signup from '../screens/auth/Signup'

export type AuthStackParamList = {
  Home: undefined;
  Signup: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

export default function () {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
