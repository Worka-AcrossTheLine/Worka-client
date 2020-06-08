import React, { useState, useEffect } from 'react';
import AuthNavigation from './src/navigator/AuthNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import Loading from './src/components/Loading'

export default function App() {
  const [islogIn, setIslogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    <Provider store={store}>
      <NavigationContainer>
        {islogIn ? <AuthNavigation /> : <AuthNavigation />}
        {isLoading && <Loading />}
      </NavigationContainer>
    </Provider>
  );
}
