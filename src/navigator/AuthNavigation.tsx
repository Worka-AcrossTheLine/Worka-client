import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/auth/Home';
import Signup from '../screens/auth/Signup';
import Signin from '../screens/auth/Signin';

export type AuthStackParamList = {
  Home: undefined;
  Signup: undefined;
  Signin: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

const signupHeaderStyle = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  elevation: 0,
}

const signupTitleStyle = {
  textAlign: 'center',
  fontSize: 24,
  color: '#35749F'
}

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: signupHeaderStyle,
          headerTitleAlign: 'center',
          headerTitle: 'CREATE AN ACOUNT',
          headerTitleStyle: signupTitleStyle,
        }} />
      <Stack.Screen name="Signin" component={Signin} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}
