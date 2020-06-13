import React, { useState, SetStateAction } from 'react'
import styled from 'styled-components/native';


type Props = {
    placeholder: string;
    value: string;
}


const MakeInterestingTitle = ({
    placeholder, value
}:Props) => {
    return (
        <InputWrapper>
            <Input
                placeholder={placeholder}
                value = {value}
            >
                Hello JobTag
            </Input>
        </InputWrapper>
    )
}

const InputWrapper = styled.View`

    justify-content: center;
    width: 100%;
    padding-left: 5px;
    align-self: center;
    

`

const Input = styled.TextInput`
    background-color:#707070;
`



export default MakeInterestingTitle
