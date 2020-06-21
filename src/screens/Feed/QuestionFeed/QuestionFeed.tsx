import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, View, ActivityIndicator, Text } from 'react-native'
import styled from 'styled-components/native';

import QuestionCard from '../../../components/QuestionCard';

import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTION_REQUEST } from "../../../state/Question/Action";
import { RootState } from "../../../reducers";
import { questionCard } from '../../../state/Question/Reducer';
import QuestionModal from '../../../components/QuestionModal';

const PaddingHeight = styled.View`
    padding:10px 0px;
`;
const QuestionFeed = () => {
    const [modal, setModal] = useState<questionCard>();

    const dispatch = useDispatch();
    const rootState = useSelector((state: RootState) => state);
    const { login: loginState, question: questionState } = rootState;

    const handleQuestion = (item: questionCard) => {
        setModal(item);
    }

    const handelClose = () => {
        setModal(undefined);
    }

    useEffect(() => {
        if (loginState.isLogin) {
            dispatch({ type: GET_QUESTION_REQUEST, payload: { token: loginState.token } })
        }
    }, [])
    console.log("QIESTIOSNTATAE");
    console.log(questionState.data.results);
    return (
        <View style={{ flex: 1 }}>
            {questionState.fetching ? <ActivityIndicator /> :
                (
                    !questionState.data.results ?
                        <Text>LOADINGING</Text>
                        :
                        <FlatList
                            data={questionState.data.results}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => handleQuestion(item)} key={item.id}>
                                    <PaddingHeight>
                                        <QuestionCard {...item} />
                                    </PaddingHeight>
                                </TouchableOpacity>
                            }
                        />
                )
            }
            {modal &&
                <QuestionModal
                    visible={modal !== undefined}
                    onPress={handelClose}
                    {...modal}
                />
            }
        </View>
    )
}

export default QuestionFeed
