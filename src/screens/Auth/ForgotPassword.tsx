import React, { useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import SignInput from '../../components/SignInput'
import SubmitButton from '../../components/MiddleButton';
import { AuthStackParamList } from '../../navigator/AuthNavigation'
import { StackNavigationProp } from '@react-navigation/stack'

type AuthHomeNavigationProp = StackNavigationProp<AuthStackParamList, 'Signin'>;

type Props = {
    navigation: AuthHomeNavigationProp;
};

const Wrapper = styled.View`
    flex:1;
    background-color:#FFFFFF;
`

const Touch = styled.TouchableOpacity`
    width:70%;
    margin-bottom:10px;
`;

const Password = styled.Text`
    font-size:14px;
    font-weight:bold;
    color:#2B6E9F;
`;

const InputWrapper = styled.View`
    padding:0px 47px;
`;

const ButtonWrapper = styled.View`
    flex:1;
    justify-content:flex-end;
    align-items:center;
`;

const ForgotUsername = ({ navigation }: Props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleInput = (setFunction: React.Dispatch<React.SetStateAction<string>>) => (e: string) => {
        setFunction(e);
    };

    return (
        <Wrapper>
            <InputWrapper>
                <SignInput placeholder="username" value={username} onChange={handleInput(setUsername)} autoFocus={true} />
                <Touch onPress={() => navigation.navigate('ForgotUsername')}>
                    <Password>FORGOT USERNAME</Password>
                </Touch>
                <SignInput placeholder="Email address" value={email} onChange={handleInput(setEmail)} type="email" />
                <Text>Unfortunately, if you have never given us your email, we will not be able to reset your password.</Text>
            </InputWrapper>
            <ButtonWrapper>
                <SubmitButton title="REQUEST USERNAME RECOVERY EMAIL" fontSize={14} onPress={() => console.log("asd")} isPending={false} />
            </ButtonWrapper>
        </Wrapper>
    )
}

export default ForgotUsername

