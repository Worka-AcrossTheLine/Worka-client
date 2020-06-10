import React, { useState } from 'react'
import styled from 'styled-components/native';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  fontSize?: number;
  autoFocus?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address';
  isPassword?: boolean;
  type?: 'email'
}

const Input = styled.TextInput`
  border-bottom-width:3px;
  border-color:#707070;
  font-weight:bold;
  width:100%;
  min-width:90px;
  padding-left:5px;
`;


const InputWrapper = styled.View`
  margin:15px 5px;
  justify-content:center;
  align-items:center;
`;


const SignInput = ({
  placeholder,
  value,
  onChange,
  fontSize = 28,
  autoFocus = false,
  keyboardType = "default",
  isPassword = false,
  type
}: Props) => {
  const [isValid, setIsValid] = useState(true);
  let textAlign: 'center' | 'left' = 'center';
  if (value.length > 0) {
    textAlign = 'left';
  }

  const handleValidEmail = () => {
    if (type === 'email') {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(String(value).toLowerCase()) ? setIsValid(true) : setIsValid(false);
    }
  }

  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => onChange(e)}
        style={{ fontSize, textAlign, color: (isValid ? 'black' : 'red') }}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        onBlur={handleValidEmail}
        onFocus={() => setIsValid(true)}
      />
    </InputWrapper>
  )
}

export default SignInput
