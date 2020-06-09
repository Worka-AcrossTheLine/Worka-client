import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { combineReducers, bindActionCreators } from 'redux'

import { RootState } from '../../reducers'
import * as loginAction from '../../reducers/login'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

type Props = {
  Data: {
    email: string;
    password: string;
  };
};

function Home(props: Props) {
  const isLogin = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch({ type: loginAction.LOGIN_REQUESTED })
  }
  return (
    <Container>
      {isLogin.pending && <Text>로딩중...</Text>}
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Login Btn" onPress={() => onSignin()}>
        Login btn
      </Button>
    </Container>
  );
}

export default Home;
