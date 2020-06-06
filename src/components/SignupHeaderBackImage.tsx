import React from 'react';
import styled from 'styled-components/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../navigator/AuthNavigation'
import { CommonActions } from '@react-navigation/native'

import BackSvg from '../../assets/X.svg'

type AuthHomeNavigationProp = StackNavigationProp<AuthStackParamList, 'Home'>;

type Props = {
    navigation: AuthHomeNavigationProp
}

const Wrapper = styled.TouchableWithoutFeedback`
    flex:1;
    flex-direction:column;
    align-self:flex-end;
    align-items:flex-start;
    justify-content:center;

    margin-left:30px;
`;

function SignupHeaderBackImage({ navigation }: Props) {
    return (
        <Wrapper onPress={() => navigation.navigate('Home')}>
            <BackSvg />
        </Wrapper>
    )
}

export default SignupHeaderBackImage