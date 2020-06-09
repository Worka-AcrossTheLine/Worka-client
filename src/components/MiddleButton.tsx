import React from 'react'
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

const Title = styled.Text`
  color:#FFFFFF;
  font-weight:700;
`;


const MiddleButton = ({ title, fontSize = 28 }: Props) => {
    return (
        <Button>
            <Title style={{ fontSize }}>{title}</Title>
        </Button>
    )
}

export default MiddleButton
