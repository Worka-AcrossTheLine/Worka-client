import React from 'react'
import styled from 'styled-components/native'

import { ThemeProps } from '../style/theme'

type Props = {
    fontColor?: string;
    text: string;
}

type TextStyle = {
    color?: string;
}

const Wrapper = styled.View`
    border-radius:10px;
    background-color:${({ theme }: ThemeProps): string => theme.sky};
    padding:2px 8px;
    margin-left:8px;
`;

const Text = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.smFont}px;
    color:${({ theme }: ThemeProps): string => theme.gray};
`;

export default function Tag({ fontColor, text }: Props) {
    const textStyle: TextStyle = {};
    fontColor && (textStyle.color = fontColor);
    return (
        <Wrapper>
            <Text style={textStyle}>{text}</Text>
        </Wrapper>
    )
}