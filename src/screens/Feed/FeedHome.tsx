import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Modal,
    TouchableWithoutFeedback,
    Button,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import styled from 'styled-components/native';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { GET_FEED_REQUEST, responseFeeds, Feeds, } from "../../state/Feed/Action";

import MentoCard from '../../components/MentoCard';
import DetailModal from '../../components/DetailModal';
import {LOGIN_SUCCESS} from "../../reducers/login";
import {login} from "../../Api/login";

/*
 분기처리가 필요 -> 로그인했을시, isskip 일시에 따라 api 다르게 줌(현재는 permission필요없는 전체 list만 호출중
  navigator에 대해 물어보고 그부분만 추가기술할예
 */

const PaddingHeight = styled.View`
    padding:10px 0px;
`;

const FeedHome = () => {
    const feedState = useSelector((state: RootState) => state.feed)
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    // item를 그냥 object로 받아와도 가능하지만 타입체크
    const [storage, setStorage] = useState<Feeds>(
        {
            id: '',
            author: {
                username: '',
                user_image: ''
            },
            title: '',
            images: '',
            text: '',
            created_at: '',
            updated_at: '',
            number_of_comments: '0',
            number_of_likes: '0',
            post_comments: [],
            tags: [],
        });
    const dispatch = useDispatch();
    const logininfo = useSelector((state: RootState) => state.login);
    const token = AsyncStorage.getItem('token')
    const pk = AsyncStorage.getItem('pk')
    const mbti = AsyncStorage.getItem('mbti')

    const feedDetail = (item: Feeds) => {
        setStorage({
            ...item
        })
        setModalVisible(true)
    }

    const handleClose = () => {
        setModalVisible(false);
    }


    useEffect(() => {
        dispatch({ type: GET_FEED_REQUEST, payload: logininfo.token });
    }, []);

    return (
        <>
            {feedState.fetching ? <Text>'Now Loading'</Text> :
                <View>
                    <FlatList
                        data={feedState.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => feedDetail(item)} key={item.id}>
                                <PaddingHeight >
                                    <MentoCard {...item} />
                                </PaddingHeight>
                            </TouchableOpacity>}
                    />
                </View>
            }
            <DetailModal
                visible={modalVisible}
                onPress={handleClose}
                {...storage}
            />
        </>
    )
}

export default FeedHome

//이하 초보 스타일 , 다지웁시다
const styles = StyleSheet.create({
    container: {
        flex: 1, paddingLeft: 10, paddingRight: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    viewWrapImage: {
        flexDirection: 'row',
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 5,
    },
    viewtest: {
        flex: 1,
        paddingLeft: 10, paddingRight: 10,
        width: 30,
        height: 30,
        backgroundColor: '#ffffff'
    },
    closebutton: {
        //empty
    }
})