import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    background:#3C99E5;
    height:50px;
    border-radius:30px;
    margin-bottom:50px;
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
  font-size:28px;
  font-weight:700;
`;


const MiddleButton = () => {
    return (
        <Wrapper>
            <Button>
                <Title>CREATE ACCOUNT</Title>
            </Button>
        </Wrapper>
    )
}

export default MiddleButton
