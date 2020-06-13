import React from 'react'
import styled from 'styled-components/native'

type Props = {
    children: React.ReactChild
}

const Wrapper = styled.View`
    width:100%;
    height:151.82px;
    border-radius:8px;
    padding:26px 20px;
    background-color:#FFFFFF
    box-shadow:0px 3px 6px #000;
    elevation:6;
`;

export default function ShadowBox({ children }: Props) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
