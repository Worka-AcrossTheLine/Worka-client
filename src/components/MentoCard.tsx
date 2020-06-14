import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';

import Tag from './Tag';
import { ThemeProps } from '../style/theme';

type Props = {
    image?: string | null;
    title: string;
    desc: string;
    tags: string[];
    username: string;
    company: string;
}

const Wrapper = styled.View`
    width:100%;
    height:250px;
    padding:5px;
    box-shadow:0px 3px 6px #000;
    border-radius:8px;
    elevation:15;
`;

const ImageWrapper = styled.View`
    height:180px;
    background-color:white;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    elevation:1;
`;

const Image = styled.Image`
    width:100%;
    height:180px;
    resize-mode:stretch
`;

const TextWrapper = styled.View`
    flex:1;
    padding:8px;
`;

const Title = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.lgFont}px;
    font-weight:700;
    text-align:center;
`;

const Desc = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.mdFont}px;
    line-height:16px;
`;

const BottomWrapper = styled.View`
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    background-color:white;
    height:70px;
    padding:11px;
    justify-content:space-around;

`;

const TagsWrapper = styled.View`
    flex-direction:row;
`;

const UserTagWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

export default function MentoCard({
    image,
    title,
    desc,
    tags,
    username,
    company,
}: Props) {
    return (
        <Wrapper>
            <ImageWrapper>
                {image ? <Image source={{ uri: image }} /> : <TextWrapper>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                </TextWrapper>}
            </ImageWrapper>
            <BottomWrapper>
                <TagsWrapper>
                    {tags.map((el, index) => <Tag key={`tag-${index}`} fontColor={index ? "#FFFFFF" : 'black'} text={el} />)}
                </TagsWrapper>
                <UserTagWrapper>
                    <Tag text={username} />
                    <Tag text={company} />
                </UserTagWrapper>
            </BottomWrapper>
        </Wrapper>
    )
}
