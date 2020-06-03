import React, { useState, useEffect } from 'react';
import AuthNavigation from './navigator/AuthNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [islogIn, setIslogin] = useState(false);
  const setLogin = async () => {
    const login = await AsyncStorage.getItem('isLogin');
    if (login === 'true') {
      setIslogin(true);
    }
  };
  useEffect(() => {
    setLogin();
  }, []);
  return (
    <NavigationContainer>
      {islogIn ? <AuthNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
