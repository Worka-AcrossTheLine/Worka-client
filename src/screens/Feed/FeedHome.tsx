import React, {useEffect} from 'react';
import { StyleSheet, View, Text, FlatList,Image } from 'react-native';
import { Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers";
import {GET_FEED_REQUEST} from "../../state/Feed/Action";

interface ItemProp {
    item: any;
}

const FeedHome: React.FC = (props) => {
    // @ts-ignore
    const feedState = useSelector((state) => state.getFeed)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: GET_FEED_REQUEST});
        console.log(feedState.data)
    }, []);

    const renderFeed = ({item}: any) => {
        return(
            <View style={styles.container}>
                <View style={styles.viewWrapImage}>
                    <Image style={styles.avatar} source={{uri: item.author.user_image}} />
                </View>
                <View style={styles.item}>
                    <Text>
                        {`${item.id} ${item.text}  ${item.author.username} ${item.author.point} ${item.images}
                         Like:${item.number_of_likes}  comment:${item.number_of_comments} `}
                    </Text>
                </View>
                <Divider />
            </View>
        )
    }
    return(
        <View>
            <FlatList data={feedState.data} renderItem={renderFeed}/>
        </View>
    )
}

export default FeedHome

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
})