import React from 'react'
import styled from 'styled-components/native'

import OsView from '../components/OsView'
import ShadowBox from '../components/ShadowBox'
import Tag from '../components/Tag';

import { ThemeProps } from '../style/theme'

const TitleView = styled.View`  
    justify-content:center;
    align-items:center;
    margin:10px 0px;
`;

const Title = styled.Text`
    font-size:20px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
`;

const BodyWrapper = styled.View`
    padding:20px 0px;
`;

const ProfileWrapper = styled.View`
    flex-direction:row;
    margin-bottom:10px;
`;

const AvatarWrapper = styled.View`
    width:40px;
    height:40px;
    border-radius:800px;
    border:1px solid black;
`

const InfoWrapper = styled.View`
    flex:1;
    padding:0px 14px;
`;

const NameText = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.lgFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
    font-weight:700;
`;

const DescText = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.mdFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
    margin-right:14px;
`;

const SemiTitle = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.mdFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
    font-weight:700;
`;

const TendencyWrapper = styled.View`
    flex-direction:row;
    margin:3px 0px;
`;

const Comment = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.smFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
`;



const Text = styled.Text`
    font-size: ${({ theme }: ThemeProps): number => theme.smFont}px;
    align-items: center;
`

const Button = styled.Button``;

const Profile = () => {
    return (
        <OsView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <TitleView>
                <Title>Question</Title>
            </TitleView>
            <BodyWrapper>
                <ShadowBox >
                    <>
                        <ProfileWrapper>
                            <AvatarWrapper></AvatarWrapper>
                            <InfoWrapper>
                                <NameText>username</NameText>
                                <NameText><DescText>Mento: {3}  </DescText><DescText>  Mentiee: {3}</DescText></NameText>
                            </InfoWrapper>
                            <Button title="Setting" onPress={() => console.log("PRESS SETTING")} />
                        </ProfileWrapper>
                        <SemiTitle>Tendency</SemiTitle>
                        <TendencyWrapper>
                            <Tag text="architecture" />
                            <Tag text="interior design" fontColor="white" />
                        </TendencyWrapper>
                        <SemiTitle>Comment</SemiTitle>
                        <Comment>비록 삶이 그대를 속일지라도 슬퍼하지 말라,</Comment>
                    </>
                </ShadowBox>
            </BodyWrapper>
        </OsView>
    )
}


export default Profile