import React from 'react'
import { useSelector } from 'react-redux'

import AuthNavigation from '../navigator/AuthNavigation';
import BottomNavigation from '../navigator/BottomNavigation'
import Tendency from '../screens/Tendency/Select'

import { RootState } from '../reducers';

type TendencyProps = {
    isSignup: boolean;
    mbti: string;
    isSkip: boolean;
}

type Props = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function TendencyController({ isSignup, mbti, isSkip }: TendencyProps) {
    return (
        <>
            {!isSkip && (isSignup || mbti === "") ? <Tendency /> : <BottomNavigation />}
        </>
    )
}

export default function NavController({ isLogin, setIsLogin }: Props) {
    const rootState = useSelector((state: RootState) => state)
    const loginState = rootState.login;
    const signupState = rootState.signup;
    setIsLogin(loginState.isSkip || loginState.isLogin);
    return (
        <>
            {!isLogin ?
                <AuthNavigation />
                :
                <TendencyController isSignup={signupState.isSignup} mbti={loginState.mbti} isSkip={loginState.isSkip} />
            }
        </>
    )
}

