import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/auth/Home';
import Signup from '../screens/auth/Signup';
import Signin from '../screens/auth/Signin';
import ForgotUsername from '../screens/auth/ForgotUsername';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Tendency from '../screens/tendency'

export type AuthStackParamList = {
  Home: undefined;
  Signup: undefined;
  Signin: undefined;
  ForgotPassword: undefined;
  ForgotUsername: undefined;
  Tendency: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

const headerNone = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  elevation: 0,
}

const titleStyle = {
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
          headerStyle: headerNone,
          headerTitleAlign: 'center',
          headerTitle: 'CREATE AN ACOUNT',
          headerTitleStyle: titleStyle,
        }} />
      <Stack.Screen name="Signin" component={Signin} options={{
        headerShown: false
      }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
        headerStyle: headerNone,
        headerTitleAlign: 'center',
        headerTitle: 'Forgot Password',
        headerTitleStyle: titleStyle
      }} />
      <Stack.Screen name="ForgotUsername" component={ForgotUsername} options={{
        headerStyle: headerNone,
        headerTitleAlign: 'center',
        headerTitle: 'Forgot Username',
        headerTitleStyle: titleStyle
      }} />
      <Stack.Screen name="Tendency" component={Tendency} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
