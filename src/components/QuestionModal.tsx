import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import styled from 'styled-components/native';
import Tag from './Tag';
import { ThemeProps } from '../style/theme';
import DownArrow from '../../assets/DownArrow.svg';
import UpArrow from '../../assets/UpArrow.svg';
import ThumpsUp from '../../assets/ThumpsUp.svg';
import ThumpsDown from '../../assets/ThumpsDown.svg';

type Props = {
    visible: boolean;
    id: string;
    image: string;
    desc: string;
    question_count: number;
    tags: string[];
    username: string;
    onPress: () => void;
}

const QUESTIONS =
    [
        {
            q: "HELLOW",
            as: [{ u: "kimjoobin", a: "worlds??", }]
        },
        {
            q: "WORLD!",
            as: [{ u: "whan", a: "HELLO WORLD ^_^" }]
        },
        {
            q: "NO JAVA, IT'S SCRIPT!",
            as: [
                { u: "java_man", a: "JAVA IS BEST L" },
                { u: "py", a: "NO py IS BEST ^_^" },
                { u: "an", a: "파이썬은 최고의 언어입니다. 자바 달라요" }
            ]
        },
        {
            q: "WHO HAS BEST PERPOMENTS IN IMERSIVE 19"
        }
    ]

const ModalWrapper = styled.Modal``;

const Wrapper = styled.View`
    width:100%;
    height:100%;
    background-color:rgba(112,112,112,0.9);
    justify-content:center;
    align-items:center;
    padding:0px 30px;
`;

const QuestionWrapper = styled.View`
    width:100%;
    max-width:320px;
    max-height:50%;
    background-color:${({ theme }: ThemeProps): string => theme.detailBg};
`;

const ScrollWrapper = styled.View`
`;

const ModalTabWrapper = styled.View`
    width:100%;
    background-color:${({ theme }: ThemeProps): string => theme.white};
    margin-bottom:5px;
`;

const TileWrapper = styled.View`
    flex-direction:row;
    height:64px;
`;

const TextWrapper = styled.View`
    height:64px;
    padding:0px 10px;
    justify-content:center;
`;

const BodyWrapper = styled.View`
    flex:1
`;

const DetailWrapper = styled.View`
    flex:1;
    padding:0px 20px;
    align-items:flex-start;
`;

const DropDownWrapper = styled.View`
    align-items:center;
`;

const AnswerWrapper = styled.View`
    width:100%;
    margin-top:10px;
`;

const RatingWrapper = styled.View`
    flex-direction:row;
    justify-content:flex-end;
`;

const TagWrapper = styled.View`
    min-height:90px;
    padding:15px;
    justify-content:space-around;
`;

const TendencyTagWrapper = styled.View`
    flex-direction:row;
`;

const UserTagWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const Image = styled.Image`
    width:64px;
    height:64px;
    resize-mode:stretch;
`;

const Desc = styled.Text`
    text-align:center;
    font-size:${({ theme }: ThemeProps): number => theme.smFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
    line-height:12px;
`;

const QuestionText = styled.Text`
    text-align:center;
    font-size:${({ theme }: ThemeProps): number => theme.mdFont}px;
    color:${({ theme }: ThemeProps): string => theme.textColor};
    line-height:12px;
`;

const AnswerUsername = styled.Text`
    color:${({ theme }: ThemeProps): string => theme.textColor};
    font-size:${({ theme }: ThemeProps): number => theme.smFont}px;
`;

export default function QuestionModal({ visible, desc, image, question_count, tags, username, onPress }: Props) {
    const [detailIndex, setDetailIndex] = useState<number>();

    const setDetailStyle = (index: number): { display?: 'none' | 'flex', height?: number, flex?: number } => {
        return (
            typeof detailIndex === 'number' && detailIndex === index ?
                { display: 'flex', height: 300, flex: 1 }
                :
                {}
        )
    }

    const closeModal = () => {
        setDetailIndex(undefined);
        onPress();
    }

    const handleDetail = (index: number) => {
        index === detailIndex ? setDetailIndex(undefined) : setDetailIndex(index)
    }

    return (
        <ModalWrapper visible={visible} transparent={true} onRequestClose={closeModal} >
            <TouchableWithoutFeedback onPress={closeModal}>
                <Wrapper>
                    <QuestionWrapper onStartShouldSetResponder={() => true}>
                        <ScrollView>
                            <ScrollWrapper>
                                <ModalTabWrapper>
                                    <TileWrapper onStartShouldSetResponder={() => true}>
                                        <TextWrapper style={{ flex: 1 }}>
                                            <Desc>{desc}</Desc>
                                        </TextWrapper>
                                        <Image source={{ uri: image }} />
                                    </TileWrapper>
                                </ModalTabWrapper>
                                <BodyWrapper>
                                    {QUESTIONS && (
                                        QUESTIONS.map((qs, index) =>
                                            <ModalTabWrapper key={`q-${index}`} style={setDetailStyle(index)} onStartShouldSetResponder={() => true}>
                                                <TextWrapper>
                                                    <QuestionText>Q{index + 1}.{qs.q}</QuestionText>
                                                </TextWrapper>
                                                <DetailWrapper style={{ display: index === detailIndex ? 'flex' : 'none' }}>
                                                    {qs.as && (
                                                        qs.as.map((answer, idx) =>
                                                            <AnswerWrapper key={`answer-${idx}`}>
                                                                <AnswerUsername style={{ opacity: 0.6 }}>{answer.u}</AnswerUsername>
                                                                <AnswerUsername>{answer.a}</AnswerUsername>
                                                                <RatingWrapper>
                                                                    <ThumpsUp style={{ marginRight: 7 }} />
                                                                    <ThumpsDown style={{ marginRight: 5 }} />
                                                                </RatingWrapper>
                                                            </AnswerWrapper>
                                                        )
                                                    )}
                                                </DetailWrapper>
                                                <DropDownWrapper >
                                                    <TouchableOpacity onPress={() => handleDetail(index)} style={{ padding: 5 }}>
                                                        {detailIndex === index ? <UpArrow /> : <DownArrow />}
                                                    </TouchableOpacity>
                                                </DropDownWrapper>
                                            </ModalTabWrapper>
                                        )
                                    )}
                                </BodyWrapper>
                            </ScrollWrapper>
                        </ScrollView>
                        <TagWrapper >
                            <TendencyTagWrapper>
                                {tags.map((tag, tagIndex) => <Tag key={`tag-${tagIndex}`} text={tag} fontColor="#FFFFFF" />)}
                            </TendencyTagWrapper>
                            <UserTagWrapper>
                                <Tag text={username} fontColor="#FFFFFF" />
                            </UserTagWrapper>
                        </TagWrapper>
                    </QuestionWrapper>
                </Wrapper>
            </TouchableWithoutFeedback>
        </ModalWrapper>
    )
}
