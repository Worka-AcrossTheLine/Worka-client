import React, { useState } from 'react'
import styled from 'styled-components/native';
import { StatusBar, Platform, TouchableWithoutFeedback } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { SearchStackParamList } from '../../navigator/SeachNavigation'

type AuthHomeNavigationProps = StackNavigationProp<SearchStackParamList, 'Home'>

type Props = {
    navigation: AuthHomeNavigationProps
}

const currentHeight = StatusBar.currentHeight || 0;

const IosWrapper = styled.SafeAreaView`
    align-items:center;
    justify-content:center;
    width:100%;
    background-color:white;
`;

const AndoroidWrapper = styled.View`
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

const InputImage = styled.Image`
    width:16.78px;
    height:20.68px;
    margin-right:5px;
    background-color:white;
`;

const Input = styled.View`
    flex:1;
`;

const SearchWrapper = styled.ScrollView`
    z-index:3;
    width:100%;
    height:100px;
    background-color:white;
`;


function Search() {

    return (
        <>
            <InputWrapper>
                <InputImage source={require('../../../assets/search_btn.png')} />
                <Input />
            </InputWrapper>
        </>
    )
}

export default function ({ navigation }: Props) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
            {Platform.OS === 'ios' ? (<IosWrapper><Search /></IosWrapper>) : <AndoroidWrapper><Search /></AndoroidWrapper>}
        </TouchableWithoutFeedback>
    )
}
