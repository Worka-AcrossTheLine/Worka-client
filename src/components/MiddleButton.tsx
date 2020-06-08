import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';

type Props = {
    title: string;
    fontSize?: number;
}

const Button = styled.TouchableOpacity`
    background:#3C99E5;
    height:50px;
    border-radius:30px;
    margin-bottom:10px;
    justify-content:center;
    align-items:center;
    min-width:300px;
    width:80%;
`;

const Wrapper = styled.View`
  flex:1;
  justify-content:flex-end;
  align-items:center;
`;

const Title = styled.Text`
  color:#FFFFFF;
  font-weight:700;
`;


const MiddleButton = ({ title, fontSize = 28 }: Props) => {
    return (
        <Wrapper>
            <Button>
                <Title style={{ fontSize }}>{title}</Title>
            </Button>
        </Wrapper>
    )
}

export default MiddleButton
