import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import AuthNavigation from '../navigator/AuthNavigation';
import BottomNavigation from '../navigator/BottomNavigation'
import Tendency from '../screens/Tendency/Select'

import { RootState } from '../reducers';
import {LOGIN_SUCCESS} from "../reducers/login";
import {LoginInfo} from "../../App";

type TendencyProps = {
    mbti: string;
}

type Props = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    loginInfo: LoginInfo;
}

function TendencyController({ mbti, isSkip }: TendencyProps) {
    return (
        <>
            {mbti === "" ? <Tendency /> : <BottomNavigation />}
        </>
    )
}

export default function NavController({ isLogin, setIsLogin, loginInfo }: Props) {
    const rootState = useSelector((state: RootState) => state)
    const [setLogin, setSetLogin] = useState<boolean>(false);
    const loginState = rootState.login;
    const dispatch = useDispatch()

    if(isLogin&&!setLogin&&loginInfo.token){
        console.log(loginInfo)
        dispatch({ type: LOGIN_SUCCESS, payload: { data: { token: loginInfo.token, user: { pk : loginInfo.pk, mbti: loginInfo.mbti } } } });
        setSetLogin(true)
    }

    const loginController = isLogin || loginState.isLogin
    return (
        <>
            {!loginController ?
                <AuthNavigation />
                :
                <TendencyController mbti={loginInfo.mbti} />
            }
        </>
    )
}

