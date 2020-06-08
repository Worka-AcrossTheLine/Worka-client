import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Keyboard } from 'react-native'
import styled from 'styled-components/native'


import SignInput from '../../components/SignInput'
import MiddleButton from '../../components/MiddleButton'
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Wrapper = styled.SafeAreaView`
    height:${Math.floor(Dimensions.get('screen').height)}px;
    padding:20px 0px;
`;

const TitleWrapper = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
`;

const HeaderTitle = styled.Text`
    font-size : 77px;
    font-weight:700;
    color:#35749F;
`;

const InputWrapper = styled.View`
    flex:1;
`;

const FindWrapper = styled.View`
    margin-top:25px;
    padding-left: 15%;
`;

const FindText = styled.Text`
    font-weight:700;
    font-size:18px;
    color:#35749F;
`;

const ButtonWrapper = styled.View`
    flex:1.5;
`;

const Signin = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleInput = (setInput: React.Dispatch<string>) => (e: string) => {
        setInput(e);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <Wrapper>
                <TitleWrapper>
                    <HeaderTitle>Worka!</HeaderTitle>
                </TitleWrapper>
                <InputWrapper>
                    <SignInput placeholder="username" value={username} onChange={handleInput(setUsername)} />
                    <SignInput placeholder="password" value={password} onChange={handleInput(setPassword)} />
                    <FindWrapper>
                        <FindText>FORGOT PASSWORD</FindText>
                    </FindWrapper>
                </InputWrapper>
                <ButtonWrapper>
                    <MiddleButton title="LOG IN" />
                </ButtonWrapper>
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}

export default Signin
