import React, { useState, SetStateAction } from 'react'
import styled from 'styled-components/native';


type Props = {
    placeholder: string;
    value: string;
    onChange: (e: string) => void;
    autoFocus?: boolean;
    onBlur:() => void;
    keyboardType?: 'default';
}

const MakeCardDescriptionInput = ({
                                  placeholder, value, onChange, autoFocus = false, keyboardType, onBlur
                              }:Props) => {
    let textAlign: 'left'
    if(value.length>0) {
        textAlign = 'left'
    }
    return (
        <InputWrapper>
            <Input
                placeholder={placeholder}
                onChangeText={(e) => onChange(e)}
                value = {value}
                onBlur = {onBlur}
            >
            </Input>

        </InputWrapper>
    )
}

const InputWrapper = styled.View`
    box-shadow:0px 3px 6px #000;
    font-size: 16px;
    margin-bottom: 5px;
    
`

const Input = styled.TextInput`
    background-color:white;
    padding: 21px 10px 21px 43px;
`

export default MakeCardDescriptionInput
