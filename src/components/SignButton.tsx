import React, { ReactChildren } from 'react';
import styled from 'styled-components/native';

type Props = {
    title: string;
    onPress: Function;
    children?: ReactChildren;
}

const SignBtn = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:138px;
    height:50px;
    border-radius:20px;
    border: 5px solid #81B9E0;
    margin:0px 5px;
`;

const SignText = styled.Text`
    color:#81B9E0;
    font-size:20px;
    font-weight:900;
`

function SignButton({ title, onPress, children }: Props) {
    return (
        <SignBtn onPress={() => onPress()}>
            <SignText>{title}</SignText>
        </SignBtn>
    )
}

export default SignButton;