import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

type Props = {
  placeholder: string;
  value: string;
  onChange: Function;
  fontSize?: number;
  autoFocus?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address';
  isPassword?: boolean
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


const SignInput = ({ placeholder, value, onChange, fontSize = 28, autoFocus = false, keyboardType = "default", isPassword = false }: Props) => {
  let textAlign: 'center' | 'left' = 'center';
  if (value.length > 0) {
    textAlign = 'left';
  }
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => onChange(e)}
        style={{ fontSize, textAlign }}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
      />
    </InputWrapper>
  )
}

export default SignInput
