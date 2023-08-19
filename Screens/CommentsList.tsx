import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {getComments} from "../store/action-creators/CommentsActions";
import {useActions} from "../hooks/useActions";
import {HomeScreenNavigationProp} from "../types/HomeStackNavigatorParamList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Comment from "../components/Comment";
import CustomButton from "../components/СustomButton";

const CommentsList = ({route}: HomeScreenNavigationProp) => {

    const {postId} = route.params;
    const {getComments} = useActions();
    const [text, setText] = useState("");

    useEffect(() => {
        getComments(postId);
    }, [])

    const {comments, error, loading} = useTypedSelector(state => state.comment);

    if (loading) {
        return <View><Text style={styles.messages}>Loading</Text></View>
    }

    if (error) {
        return <View><Text style={styles.messages}>Error</Text></View>
    }

    return (
        <View>
            <FlatList data={comments}
                      renderItem={({item}) => <Comment id={item.id} postId={item.postId} text={item.text}/>}
                      keyExtractor={(item) => item.id.toString()}></FlatList>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    multiline
                    placeholder="useless placeholder"
                />
                <CustomButton title={"Send"} onPress={() => {
                }}/>
            </View>

        </View>

    )
}

export default CommentsList;

const styles = StyleSheet.create({
    messages: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems:"center",
        margin:10,
    },
    input: {
        padding:4,
        paddingHorizontal:10,
        flex:1,
        borderWidth: 2,
        marginRight:5,
    }
})
