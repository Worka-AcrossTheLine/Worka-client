import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import AuthNavigation from '../navigator/AuthNavigation';
import BottomNavigation from '../navigator/BottomNavigation'
import Tendency from '../screens/Tendency/Select'

import { RootState } from '../reducers';
import {LOGIN_SUCCESS} from "../reducers/login";
import {LoginInfo} from "../../App";
import {GET_FEED_REQUEST} from "../state/Feed/Action";

type TendencyProps = {
    mbti: string;
}

type Props = {
    token : string
}

function TendencyController({ mbti, isSkip }: TendencyProps) {
    return (
        <>
            {mbti === "" ? <Tendency /> : <BottomNavigation />}
        </>
    )
}

export default function NavController({ token }: Props) {
    const rootState = useSelector((state: RootState) => state)
    const [setLogin, setSetLogin] = useState<boolean>(false);
    const loginState = rootState.login;
    const dispatch = useDispatch()
    const feedState = rootState.feed;
    useEffect(()=> {
        if(token || loginState.token) {
            console.log('useEffect')
            dispatch({type: GET_FEED_REQUEST, payload: token})
        }
    },[])

    const loginController = loginState.isLogin
    return (
        <>
            {!loginController ?
                <AuthNavigation />
                :
                <TendencyController mbti={loginState.mbti} />
            }
        </>
    )
}

