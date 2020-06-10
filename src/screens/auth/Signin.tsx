import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { RootState } from '../../reducers'
import { LOGIN_REQUESTED } from '../../reducers/login'
import SignInput from '../../components/SignInput'
import MiddleButton from '../../components/MiddleButton'
import { AuthStackParamList } from '../../navigator/AuthNavigation'
import { StackNavigationProp } from '@react-navigation/stack'
import { HEIGHT } from '../../constants/dimensions'

type AuthHomeNavigationProp = StackNavigationProp<AuthStackParamList, 'Signin'>;

type Props = {
    navigation: AuthHomeNavigationProp;
};

const Wrapper = styled.SafeAreaView`
    height:${HEIGHT}px;
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
    flex:1;
    justify-content:flex-end;
    align-items:center;
    margin-bottom:56px;
`;

const Signin = ({ navigation }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginState = useSelector((state: RootState) => state.login)
    const dispatch = useDispatch();
    console.log(loginState)

    const handleInput = (setInput: React.Dispatch<string>) => (e: string) => {
        setInput(e);
    }

    const handleLogin = () => {
        dispatch({ type: LOGIN_REQUESTED, data: { username, password } })
        console.log("LOGIN");
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
                    <MiddleButton title="LOG IN" onPress={handleLogin} isPending={loginState.pending} />
                </ButtonWrapper>
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}

export default Signin
