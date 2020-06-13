import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import NavController from './src/components/NavController'

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const setLogin = async () => {
    AsyncStorage.removeItem('token');
    // testing 을 위한 토큰 삭제
    const login = await AsyncStorage.getItem('token');
    // token 여부 확인 ( 로그인 여부 확인 );
    if (typeof login === 'string') {
      setIsLogin(true)
    }
  }
  useEffect(() => {
    setLogin();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavController isLogin={isLogin} setIsLogin={setIsLogin} />
      </NavigationContainer>
    </Provider>
  );
}
