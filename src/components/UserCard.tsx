import React, { useState } from 'react'
import styled from 'styled-components/native'

import ShadowBox from './ShadowBox'
import Tag from '../components/Tag';

import { ThemeProps } from '../style/theme'
import { user } from '../state/Profile/Action';
import ModifySvg from '../../assets/Modify.svg'
import { TouchableOpacity, TextInput } from 'react-native';

const Wrapper = styled.View`
    width:100%;
    max-width:${({ theme }: ThemeProps): number => theme.maxWidth}px;
    align-self:center;
`;

const WrapperPadding = styled.View`
   padding:20px 26px;
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

const CommentWrapper = styled.View`
    flex-direction:row;
`;

const ModifySvgWrapper = styled.View`
    margin-left:10px;
    width:10px;
    height:10px;
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

const Button = styled.Button``;
interface Props extends user {
    onPress: () => void;
}

const Profile = ({
    username,
    mento,
    mentiee,
    mbti,
    comment,
    onPress
}: Props) => {
    const [isModifyComment, setIsModifyComment] = useState<boolean>(false);
    const handleComment = () => {
        setIsModifyComment(true);
    }
    return (
        <Wrapper>
            <ShadowBox>
                <WrapperPadding>
                    <ProfileWrapper>
                        <AvatarWrapper></AvatarWrapper>
                        <InfoWrapper>
                            <NameText>{username}</NameText>
                            <NameText><DescText>Mento: {mento}  </DescText><DescText>  Mentiee: {mentiee}</DescText></NameText>
                        </InfoWrapper>
                        <Button title="Setting" onPress={() => onPress()} />
                    </ProfileWrapper>
                    <SemiTitle>Tendency</SemiTitle>
                    <TendencyWrapper>
                        <Tag text={mbti} fontColor={"white"} />
                    </TendencyWrapper>
                    <CommentWrapper>
                        <SemiTitle>Comment</SemiTitle>
                        <ModifySvgWrapper>
                            <TouchableOpacity onPress={handleComment}>
                                <ModifySvg />
                            </TouchableOpacity>
                        </ModifySvgWrapper>
                    </CommentWrapper>
                    {isModifyComment ? <TextInput /> :
                        <Comment>{comment}</Comment>
                    }
                </WrapperPadding>
            </ShadowBox>
        </Wrapper>
    )
}


export default Profile