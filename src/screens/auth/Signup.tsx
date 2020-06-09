import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import { useHeaderHeight, StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParamList } from '../../navigator/AuthNavigation'
import SignInput from '../../components/SignInput';
import SignupText from '../../components/SignupText';
import MiddleButton from '../../components/MiddleButton';
import { HEIGHT } from '../../constant/dimensions';

type AuthHomeNavigationProps = StackNavigationProp<AuthStackParamList, 'Signup'>

type Props = {
  navigation: AuthHomeNavigationProps
}

const Wrapper = styled.SafeAreaView`
  background-color:#ffffff;
  border-width:0px;
  padding:0px 33px;
`;

const InputWrapper = styled.View`
  flex:3;
  justify-content:center;
  padding:0px 20px;
`;

const BirthInputWrapper = styled.View`
  flex:1;
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;
`;

const TermsWrapper = styled.View`
  flex:1;
`

const ButtonWrapper = styled.View`
  flex:2;
  justify-content:flex-end;
  align-items:center;
  margin-bottom:56px;
`;

function Signup({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const headerHeight = useHeaderHeight();

  const handleInput = (setState: Function) => (e: string) => {
    setState(e);
  }

  const handleSignup = () => {
    navigation.navigate('Tendency');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{}}>
      <Wrapper style={{ height: HEIGHT - headerHeight }}>
        <InputWrapper>
          <SignInput placeholder="email" value={email} onChange={handleInput(setEmail)} keyboardType="email-address" type="email" />
          <SignInput placeholder="username" value={username} onChange={handleInput(setUsername)} />
          <SignInput placeholder="password" value={password} onChange={handleInput(setPassword)} isPassword={true} />
        </InputWrapper>
        <BirthInputWrapper>
          <SignInput placeholder="year" value={year} onChange={handleInput(setYear)} fontSize={20} keyboardType="number-pad" />
          <SignInput placeholder="month" value={month} onChange={handleInput(setMonth)} fontSize={20} keyboardType="number-pad" />
          <SignInput placeholder="day" value={day} onChange={handleInput(setDay)} fontSize={20} keyboardType="number-pad" />
        </BirthInputWrapper>
        <TermsWrapper>
          <SignupText />
        </TermsWrapper>
        <ButtonWrapper>
          <MiddleButton title="CREATE ACCOUNT" onPress={handleSignup} />
        </ButtonWrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default Signup;