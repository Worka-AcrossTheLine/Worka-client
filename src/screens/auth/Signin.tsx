import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Keyboard } from 'react-native'
import styled from 'styled-components/native'


import SignInput from '../../components/SignInput'
import MiddleButton from '../../components/MiddleButton'
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthStackParamList } from '../../navigator/AuthNavigation'
import { StackNavigationProp } from '@react-navigation/stack'

type AuthHomeNavigationProp = StackNavigationProp<AuthStackParamList, 'Signin'>;

type Props = {
    navigation: AuthHomeNavigationProp;
};

const Wrapper = styled.SafeAreaView`
    height:${Math.floor(Dimensions.get('screen').height)}px;
    padding:20px 33px;
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
    padding:0px 20px;
`;

const FindWrapper = styled.TouchableOpacity`
    margin-top:25px;
`;

const FindText = styled.Text`
    font-weight:700;
    font-size:18px;
    color:#35749F;
`;

const ButtonWrapper = styled.View`
    flex:1.5;
    margin-bottom:56px;
`;

const Signin = ({ navigation }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    <SignInput placeholder="password" value={password} onChange={handleInput(setPassword)} isPassword={true} />
                    <FindWrapper onPress={() => navigation.navigate("ForgotPassword")}>
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
