import React, { useState } from 'react';
import styled from 'styled-components/native';

import OsView from '../components/OsView';
import UserCard from '../components/UserCard';
import QuestionCard from '../components/QuestionCard'

import theme, { ThemeProps } from '../style/theme'
import { ScrollView } from 'react-native';

type select = 'card' | 'question'

type card = {
    id: string;
    desc: string;
    question_count: number;
    image: string;
    tags: string[];
    username: string;
}

const FAKEDATA = {
    username: "Kimjoobin",
    mento: 3,
    mentiee: 4,
    tag: ["IT", "font-end", "back-end", "full-stack"],
    comment: "한줄로 적을수 있을만큼 열심히 하겠습니다."
}

const FAKEDATA_1 = {
    card: [
        {
            id: "1",
            desc: "Tongji Architectural Design And Research Institute: The Latest Architecture and News",
            question_count: 8,
            image: "https://image.freepik.com/free-vector/design-word-concept_23-2147844787.jpg",
            tags: ["architecture", "interior design"],
            username: "hwan"
        },
        {
            id: "2",
            desc: "IT 최고액 연봉 프로그래밍 언어는?",
            question_count: 4,
            image: "https://lh3.googleusercontent.com/dt7eyYhUAwoOn6V_CrmQuNbITswpJf8k8oJuyNUEggZGD35kA4qnxTFigt78HgMtiJ0sHl0zynRXySVfGTXXNmocrSGPttVyChn2fPXp4ZU5OpWfQvz4HNkJ0rsGCxKXwhs0o6Go",
            tags: ["IT", "front-end"],
            username: "joo"
        },
        {
            id: "3",
            desc: "Tongji Architectural Design And Research Institute: The Latest Architecture and News",
            question_count: 8,
            image: "https://image.freepik.com/free-vector/design-word-concept_23-2147844787.jpg",
            tags: ["architecture", "interior design"],
            username: "hwan"
        },
        {
            id: "4",
            desc: "Tongji Architectural Design And Research Institute: The Latest Architecture and News",
            question_count: 8,
            image: "https://image.freepik.com/free-vector/design-word-concept_23-2147844787.jpg",
            tags: ["architecture", "interior design"],
            username: "hwan"
        }
    ],
    question: [
    ]
}

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

const SelectWrapper = styled.View`
    flex-direction:row;
`;

const Select = styled.TouchableOpacity`
    flex:1;
    padding:30px;
    align-items:center;
`;

const SelectView = styled.View`
    align-items:center;
    padding:0px 10px;
    border:0px solid ${({ theme }: ThemeProps): string => theme.textColor};
    border-bottom-width:0px;
`;

const SelectText = styled.Text`
    font-size:20px;
`;

const QuestionCardWrapper = styled.View`
    padding:10px 0px;
`;


const Profile = () => {
    const [select, setSelect] = useState<select>("card");

    const handleSelect = (text: select) => () => {
        setSelect(text);
    }

    const cards: card[] | [] = FAKEDATA_1[select];

    return (
        <OsView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <ScrollView>
                <TitleView>
                    <Title>Question</Title>
                </TitleView>
                <BodyWrapper>
                    <UserCard {...FAKEDATA} />
                    <SelectWrapper>
                        <Select onPress={() => handleSelect('card')()}>
                            <SelectView style={{ borderBottomWidth: (select === "card" ? 3 : 0) }}>
                                <SelectText style={{ color: (select === "card" ? theme.textColor : "black") }}>Card</SelectText>
                            </SelectView>
                        </Select>
                        <Select onPress={() => handleSelect('question')()}>
                            <SelectView style={{ borderBottomWidth: (select === "question" ? 3 : 0) }}>
                                <SelectText style={{ color: (select === "question" ? theme.textColor : "black") }}>Question</SelectText>
                            </SelectView>
                        </Select>
                    </SelectWrapper>
                    {cards.map((item) =>
                        <QuestionCardWrapper key={item.id}>
                            <QuestionCard {...item} />
                        </QuestionCardWrapper>
                    )}
                </BodyWrapper>
            </ScrollView>
        </OsView>
    )
}


export default Profile