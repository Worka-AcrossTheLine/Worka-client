import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import SignButton from '../../components/SignButton'

import { RootState } from '../../reducers'
import * as loginAction from '../../reducers/login'
import MainImg from '../../../assets/CreditCards.svg'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.View`
  flex:3;
  justify-content:center;
  align-items:center;
`

const ButtonWrapper = styled.View`
  flex:1;
  
`;
const SignButtonWrapper = styled.View`
  flex:1;
  flex-direction:row;
`;

const SkipWrapper = styled.View`
  flex:1;
  align-items:center;
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
      <ImageWrapper>
        <MainImg />
        {isLogin.pending && <Text>로딩중...</Text>}
      </ImageWrapper>
      <ButtonWrapper>
        <SignButtonWrapper>
          <SignButton title="Login" onPress={() => onSignin()} />
          <SignButton title="Signup" onPress={() => onSignin()} />
        </SignButtonWrapper>
        <SkipWrapper>
          <Text>SKIP NOW</Text>
        </SkipWrapper>
      </ButtonWrapper>
    </Container>
  );
}

export default Home;
