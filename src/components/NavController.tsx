import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import AuthNavigation from '../navigator/AuthNavigation';
import { RootState } from '../reducers';

type Props = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavController({ isLogin, setIsLogin }: Props) {
    setIsLogin(useSelector((state: RootState) => state.login.isLogin))
    return (
        <>
            {!isLogin ?
                <AuthNavigation />
                :
                <View>
                    <Text>매인페이지</Text>
                </View>
            }
        </>
    )
}

