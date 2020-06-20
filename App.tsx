import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components'

import store from './src/state/store';
import NavController from './src/components/NavController'
import theme from './src/style/theme'
import { View } from 'react-native';

export interface LoginInfo {
  token: string,
  pk : string,
  mbti : string,
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [LoginInfo, setLoginInfo] = useState<LoginInfo>({token :'', pk: '', mbti: ''});

  const setLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    const mbti = await AsyncStorage.getItem('mbti');
    const pk = await AsyncStorage.getItem('pk');

    console.log('mbti',mbti, 'pk' + pk, 'login',token);
    // token 여부 확인 ( 로그인 여부 확인 );
    if (token && mbti && pk) {
      console.log('logincheck')
      setIsLogin(true)
      setLoginInfo({token, pk, mbti})
    }
  }
  useEffect(() => {
    setLogin();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <NavigationContainer>
          <View style={{ width: "100%", height: "100%", backgroundColor: 'black', alignItems: 'center' }}>
            <View style={{ height: "100%", width: "100%", maxWidth: 800 }}>
              <NavController isLogin={isLogin} setIsLogin={setIsLogin} loginInfo={ LoginInfo } />
            </View>
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
