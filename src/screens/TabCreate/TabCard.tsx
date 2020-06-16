import React, { useState }from 'react'
import { Keyboard, TouchableWithoutFeedback, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import MakeJobTagInput from "../../components/MakeJobTagInput"
import MakeInterestingInput from "../../components/MakeInterestingInput"
import MakeButton from "../../components/MakeButton"
import CancerButton from '../../components/CancerButton'
import OsView from "../../components/OsView"
import addTap from "../../constants/addTap"
import {Avatar} from "react-native-elements";


const Wrapper = styled.SafeAreaView`
    flex:1;
    
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
interface Cards {

}
const TabCard: React.FC = (props) => {

    const [tapTag, setTaptag] = useState('');
    const [InterestingTitle, setInterestingTitle] = useState('');
    const [image, setImage] = useState('');

    const handleKeyboard  = () => {
        Keyboard.dismiss();
    }
    const camera = async (arg:void) => {
        try {
            // @ts-ignore
            if (Constants.platform.ios) {
                const { status } = await Permissions.askAsync(Permissions.CAMERA);
                if (status !== 'granted') {
                    alert("카메라 허가 필요");
                    return;
                }
            }

            const result = await ImagePicker.launchCameraAsync();
            if (!result.cancelled) {
                setImage(result.uri)
            }
        } catch (e) {
            console.log(e);
            alert("업로드에러");
        }
    }

    const pickImage = async () => {
        try {
            // @ts-ignore
            if (Constants.platform.ios) {
                const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status !== 'granted') {
                    alert("카메라 허가 필요");
                    return;
                }
            }
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
            if (!result.cancelled) {
                setImage(result.uri)
            }
        }catch(e){
            console.log(e);
            alert("카메라 라이브러리 에러");
        }
    }


    return (
        <OsView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Wrapper>
                <TitleWrapper>
                    <CancerButton title="CANCER"></CancerButton>
                    <FlexWrapper>
                        <Title>Card Worka</Title>
                    </FlexWrapper>
                    <MakeButton title="MAKE"></MakeButton>
                </TitleWrapper>
                <InputWrapper>
                    <MakeJobTagInput
                        placeholder="Make Job Tag"
                        value={tapTag}
                        onChange = {addTap(setTaptag)}
                        autoFocus = { true }
                        onPress={handleKeyboard}
                    />
                    <MakeInterestingInput
                        placeholder="Make Interesting Title"
                        value={InterestingTitle}
                        onChange={addTap(setInterestingTitle)}
                        autoFocus = {true}
                    />
                    <View style={{ }}>
                        <View style={{ margin: 20 }}>

                            <Avatar
                                size="medium"
                                title="C"
                                onPress={camera}
                                source={{ }}
                            />
                            <Avatar
                                size="medium"
                                title="D"
                                onPress={pickImage}
                                source={{ }}
                            />
                            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                        </View>
                    </View>
                </InputWrapper>
            </Wrapper>
        </OsView>
    )
}
const FlexWrapper = styled.View`
    flex: 1;
    align-items: center;
`;

export default TabCard