import React, { useState } from 'react'
import styled from 'styled-components/native';
import { StatusBar, Platform, TouchableWithoutFeedback, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { SearchStackParamList } from '../../navigator/SeachNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

type AuthHomeNavigationProps = StackNavigationProp<SearchStackParamList, 'Search'>

type Props = {
    navigation: AuthHomeNavigationProps
}

const currentHeight = StatusBar.currentHeight || 0;

const IosWrapper = styled.SafeAreaView`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    background-color:white;
`;

const AndoroidWrapper = styled.View`
    flex-direction:row;
     align-items:center;
    justify-content:center;
    width:100%;
    padding-top:${currentHeight > 25 ? 46 : 0}px;
    background-color:white;
`;

const InputWrapper = styled.View`
    width:70%;
    height:34px;
    border:2px solid #88C3FC;
    border-radius:8000px;
    align-items:center;
    padding:0px 10px;
    flex-direction:row;
`;

const Input = styled.TextInput`
    flex:1;
`;


function Search({ navigation }: Props) {
    const [value, setValue] = useState('');

    const handleInput = (e: string): void => {
        setValue(e);
    }


    return (
        <>
            <InputWrapper>
                <Input value={value} onChangeText={handleInput} autoFocus={true} />
            </InputWrapper>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text> CANCEL</Text>
            </TouchableOpacity>
        </>
    )
}

export default function ({ navigation }: Props) {
    return (
        <TouchableWithoutFeedback>
            {Platform.OS === 'ios' ? (<IosWrapper><Search navigation={navigation} /></IosWrapper>) : <AndoroidWrapper><Search navigation={navigation} /></AndoroidWrapper>}
        </TouchableWithoutFeedback >
    )
}
