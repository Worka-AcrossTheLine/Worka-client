import React from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import styled from 'styled-components/native';

type Props = {
    title: string;
    fontSize?: number;
    onPress: () => void;
    isPending: boolean;
}

const Button = styled.TouchableOpacity`
    padding-right: 10px;
`;

const Title = styled.Text`
  color:#F41473;
  font-weight:300;
`;


const MakeButton = ({ title, fontSize = 12, onPress, isPending }: Props) => {
    return (
        <Button onPress={() => Alert.alert('is Posted')}>
            {!isPending ? <Title style={{ fontSize }}>{title}</Title> : <ActivityIndicator size="large" color="#FFFFFF" />}
        </Button>
    )
}

export default MakeButton
