import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ScrollView, TouchableWithoutFeedback, TextInput } from 'react-native'
import styled from 'styled-components/native';
import Tag from './Tag';
import { ThemeProps } from '../style/theme';

import Xsvg from '../../assets/X_1.svg';
import { Feeds, PATCH_FEED_REQUEST } from '../state/Feed/Action';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';

interface Props extends Feeds {
    visible: boolean;
    onPress: () => void;
}

const ModalWrapper = styled.Modal``;

const Wrapper = styled.View`
    width:100%;
    height:100%;
    background-color:rgba(112,112,112,0.9);
    justify-content:center;
    align-items:center;
    padding:0px 15px;
`;

const CloseWrapper = styled.View`
    width:100%;
    max-width:${({ theme }: ThemeProps): number => theme.maxWidth}px;
    align-items:flex-end;
    margin-bottom: 3px;
`;

const CloseView = styled.View`
    width:40px;
    height:40px;
    padding:2px;
    align-items:flex-end;
    justify-content:flex-end;
`;

const DetailWrapper = styled.View`
    border-radius: 8px;
    width:100%;
    max-height:70%;
    max-width:${({ theme }: ThemeProps): number => theme.maxWidth}px;
    background-color:${({ theme }: ThemeProps): string => theme.detailTag}
    
`;

const ScrollWrapper = styled.View``;

const ImageWrapper = styled.View`
    width:100%;
    height:240px;
`;

const TextWrapper = styled.View`
    align-items: flex-start;
    padding:4px;
`;

const Image = styled.Image`
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    width:100%;
    height:100%;
    resize-mode:stretch;
`;

const BodyWrapper = styled.View`
    margin-top:0px;
    width:100%;
`;

const TagWrapper = styled.View`
    width:100%;
    padding:0px 5px;
    flex-wrap:wrap;
    flex-direction:row;
`;

const TitleView = styled.View`
    
`;
const EditWrapper = styled.View`
    border:1px solid black;
    border-radius:8px;
    padding:10px;
`;


const Title = styled.Text`
    font-size:14px;
    text-align:left;
    font-weight: 700;
    color: #554C4C;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom:5px;
    margin-left: 8px;
`;

const Desc = styled.Text`
    font-size:${({ theme }: ThemeProps): number => theme.lgFont}px;
    line-height:12px;
    margin-left: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-top: 5px;
    margin-bottom: 12px;
`;

const EditText = styled.Text`
    color:yellow;
`;

export default function DetailModal({
    visible,
    id,
    author: {
        username,
        pk
    },
    title,
    images,
    text,
    tags,
    onPress
}: Props) {
    const loginState = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const isMe = loginState.data.pk === pk;
    console.log(title, text);
    const [titleInput, setTitleInput] = useState(title);
    const [descInput, setDescInput] = useState(text);
    console.log(titleInput, descInput);
    const [imageInput, setImageInput] = useState(images);
    const [tagsInput, setTagsInput] = useState(tags);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleTitle = (e: string) => {
        setTitleInput(e);
    }

    const handleDesc = (e: string) => {
        setDescInput(e);
    }

    const handleUpdate = () => {
        console.log("HANDLE UPDATE");
        dispatch({
            type: PATCH_FEED_REQUEST, payload: {
                title: titleInput,
                text: descInput,
                images: imageInput,
                tags: tagsInput,
                id: id,
                token: loginState.token,
            }
        });
        setIsEdit(false);
    }

    useEffect(() => {
        return () => {
            console.log("UNMOunt");
        }
    }, [])


    return (
        <ModalWrapper visible={visible} transparent={true} onRequestClose={onPress} >
            <TouchableWithoutFeedback onPress={onPress}>
                <Wrapper>
                    <CloseWrapper>
                        <TouchableOpacity onPress={onPress} style={{}}>
                            <CloseView>
                                <Xsvg style={{}} />
                            </CloseView>
                        </TouchableOpacity>
                    </CloseWrapper>
                    <DetailWrapper>
                        <ScrollView>
                            <ScrollWrapper onStartShouldSetResponder={() => true}>
                                <ImageWrapper><Image source={{ uri: images || '' }} style={{ width: '100%', height: '100%' }} /></ImageWrapper>
                                <BodyWrapper>
                                    <TextWrapper>
                                    </TextWrapper>
                                    <TagWrapper >
                                        {tags.map((el: string, index: number) => <Tag key={`tag-${index}`} text={el} fontColor="#FA5080" />)}
                                    </TagWrapper>
                                    <TagWrapper style={{ justifyContent: "space-between" }}>
                                        <Tag text={username} fontColor="#2C4F71" />
                                        {isMe &&
                                            (isEdit ?
                                                <TouchableOpacity onPress={handleUpdate} >
                                                    <EditText>수정, 등록</EditText>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
                                                    <EditText>edit</EditText>
                                                </TouchableOpacity>)
                                        }
                                    </TagWrapper>
                                    {isEdit ?
                                        <EditWrapper>
                                            <TextInput value={titleInput} onChangeText={handleTitle} />
                                        </EditWrapper>
                                        :
                                        <Title>{title}</Title>
                                    }
                                    {isEdit ?
                                        <EditWrapper>
                                            <TextInput value={descInput} onChangeText={handleDesc} />
                                        </EditWrapper>
                                        :
                                        <Desc style={{ color: "white" }}>{text}</Desc>
                                    }
                                </BodyWrapper>
                            </ScrollWrapper>
                        </ScrollView>
                    </DetailWrapper>
                </Wrapper>
            </TouchableWithoutFeedback>
        </ModalWrapper>
    )
}
