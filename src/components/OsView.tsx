import React, { ReactChild } from 'react';
import styled from 'styled-components/native';

import { StatusBar, Platform, TouchableWithoutFeedback, Text } from 'react-native';

type Props = {
    children: React.ReactNode
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

export default function OsView({ children }: Props) {
    return (
        <>
            {Platform.OS === 'ios' ? <IosWrapper>{children}</IosWrapper> : <AndoroidWrapper>{children}</AndoroidWrapper>}
        </>
    )
}