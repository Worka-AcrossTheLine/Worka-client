import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';

type Props = {
    title: string;
    fontSize?: number;
    onPress: () => void;
    isPending: boolean;
}

const Button = styled.TouchableOpacity`
    height:50px;
    justify-content:center;
    align-items:center;
    min-width:300px;
    width:34px;
`;

const Title = styled.Text`
  color:#F41473;
  font-weight:300;
`;


const MakeButton = ({ title, fontSize = 12, onPress, isPending }: Props) => {
    return (
        <Button onPress={() => onPress()}>
            {!isPending ? <Title style={{ fontSize }}>{title}</Title> : <ActivityIndicator size="large" color="#FFFFFF" />}
        </Button>
    )
}

export default MiddleButton
