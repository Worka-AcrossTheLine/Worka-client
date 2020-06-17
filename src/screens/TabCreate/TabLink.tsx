import React, { useState }from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native';

import MakeJobTagInput from "../../components/MakeJobTagInput"
import MakeInterestingInput from "../../components/MakeInterestingInput"
import MakeEmbed from "../../components/MakeEmbed"
import MakeButton from "../../components/MakeButton"
import OsView from "../../components/OsView"
import addTap from "../../constants/addTap"

type Props = {
    onPress:() => void;
    keyboardType?: 'default';
}

const Wrapper = styled.SafeAreaView`
    flex:1
`;

const TitleWrapper = styled.View`
    flex-direction: row;
    align-items:center;
    backgroundColor: 'rgb(251, 250, 251)';
    padding: 24px 0px;
    
    
`
const Title = styled.Text`
    font-size:24px;
    color: #7B7B7B;
`;

const InputWrapper = styled.View`
    
    flex-direction:column;
`


const TabLink = ({
    onPress, keyboardType
}:Props) => {
    const [tapTag, setTaptag] = useState('');
    const [InterestingTitle, setInterestingTitle] = useState<string>('');
    const [tapUrl, setTapUrl] = useState<string>('')
    
    const handleKeyboard  = () => {
        Keyboard.dismiss();
    }

    


    return (
        <OsView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <TouchableWithoutFeedback onPress={handleKeyboard}>
                <Wrapper>
                    <TitleWrapper>
                        <FlexWrapper>
                            <Title>Link Worka</Title>
                        </FlexWrapper>
                        <MakeButton title="MAKE" onPress={() => onPress()}></MakeButton>
                    </TitleWrapper>
                    <InputWrapper >
                        <MakeJobTagInput 
                            placeholder="Make Job Tag"
                            value={tapTag}
                            onChange = {addTap(setTaptag)}
                            autoFocus = { true }
                        />
                        <MakeInterestingInput
                            placeholder="Make Interesting Title"
                            value={InterestingTitle}
                            onChange={addTap(setInterestingTitle)}
                            autoFocus = {true}
                        />
                        <MakeEmbed
                            placeholder="http://"    
                            value={tapUrl}
                            keyboardType = {"url"}
                            onChange={addTap(setTapUrl)}
                        />
                    </InputWrapper>

                </Wrapper>
            </TouchableWithoutFeedback>
        </OsView>
    )
}
const FlexWrapper = styled.View`
    flex: 1;
    align-items: center;
`;

export default TabLink