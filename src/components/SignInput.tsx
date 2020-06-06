import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

type Props = {
    placeholder: string;
    value: string;
    onChange: Function;
    fontSize?: number;
}

const Input = styled.TextInput`
  border-bottom-width:3px;
  border-color:#707070;
  text-align:center;
  font-weight:bold;
  width:70%;
  min-width:90px;
`;


const InputWrapper = styled.View`
  margin:15px;
  justify-content:center;
  align-items:center;
`;


const SignInput = ({ placeholder, value, onChange, fontSize = 28 }: Props) => {
    return (
        <InputWrapper>
            <Input placeholder={placeholder} value={value} onChangeText={(e) => onChange(e)} style={{ fontSize }} />
        </InputWrapper>
    )
}

export default SignInput
