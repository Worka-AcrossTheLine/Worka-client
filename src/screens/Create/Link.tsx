import  React, { useState } from "react"
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native';



import MakeJobTagInput from "../../components/MakeJobTagInput"
import MakeInterestingTitle from "../../components/MakeInterestingTitle"



export default function Link() {
    const tag = useState('Architecture')
    const handleInput = (setInput: React.Dispatch<string>) => (e: string) => {
        setInput(e);
    }




    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <Wrapper>
                <TitleWrapper>
                    <Title>Link Worka</Title>
                </TitleWrapper>
                <InputWrapper>

                    <MakeJobTagInput 
                        placeholder="Make Job Tag"
                        value="tag"
                    />
                    <MakeInterestingTitle
                        placeholder="Make Interesting Title"
                        value="tag"
                    />
                </InputWrapper>
            </Wrapper>
        </TouchableWithoutFeedback>
        
    )
}

const Wrapper = styled.SafeAreaView`
    flex:1
`;

const TitleWrapper = styled.View`
    flex:1;
    align-items:center;
    justify-content:flex-start;
    backgroundColor: 'rgb(251, 250, 251)';
    height: 74px;
`
const Title = styled.Text`
    flex:1;
    font-size:24px;
    color: #7B7B7B;
`;

const InputWrapper = styled.View`
  flex:1
`
