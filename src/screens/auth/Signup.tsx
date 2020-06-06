import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import styled from 'styled-components/native'

import SignInput from '../../components/SignInput';
import SignupText from '../../components/SignupText';
import MiddleButton from '../../components/MiddleButton';

const Wrapper = styled.SafeAreaView`
  background-color:#ffffff;
  flex:1;
  border-width:0px;
`;

const InputWrapper = styled.View`
  flex:4;
  justify-content:center;
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
  flex:3;
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleInput = (setState: Function) => (e: string) => {
    setState(e);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Wrapper>
        <InputWrapper>
          <SignInput placeholder="email" value={email} onChange={handleInput(setEmail)} />
          <SignInput placeholder="username" value={username} onChange={handleInput(setUsername)} />
          <SignInput placeholder="password" value={password} onChange={handleInput(setPassword)} />
        </InputWrapper>
        <BirthInputWrapper>
          <SignInput placeholder="year" value={year} onChange={handleInput(setYear)} fontSize={20} />
          <SignInput placeholder="month" value={month} onChange={handleInput(setMonth)} fontSize={20} />
          <SignInput placeholder="day" value={day} onChange={handleInput(setDay)} fontSize={20} />
        </BirthInputWrapper>
        <TermsWrapper>
          <SignupText />
        </TermsWrapper>
        <ButtonWrapper>
          <MiddleButton />
        </ButtonWrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default Signup;