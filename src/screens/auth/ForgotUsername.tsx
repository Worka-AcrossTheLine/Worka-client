import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import SignInput from '../../components/SignInput'
import SubmitButton from '../../components/MiddleButton';

const Wrapper = styled.View`
    flex:1;
    background-color:#FFFFFF;

`

const InputWrapper = styled.View`
    padding:33px;
`;

const ForgotEmail = () => {
    const [email, setEmail] = useState('');

    const handleInput = (e: string) => {
        setEmail(e);
    };

    return (
        <Wrapper>
            <InputWrapper>
                <SignInput
                    placeholder="Email address for your account"
                    fontSize={15}
                    value={email}
                    onChange={handleInput}
                    autoFocus={true}
                    keyboardType="email-address"
                    type="email"
                />
                <Text>Unfortunately, if you have never given us your email, we will not be able to reset your password.</Text>
            </InputWrapper>
            <SubmitButton title="REQUEST USERNAME RECOVERY EMAIL" fontSize={14} />
        </Wrapper>
    )
}

export default ForgotEmail

