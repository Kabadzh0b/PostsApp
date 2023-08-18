import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {getComments} from "../store/action-creators/CommentsActions";
import {useActions} from "../hooks/useActions";
import {HomeScreenNavigationProp} from "../types/HomeStackNavigatorParamList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Post from "../components/Post";

const CommentsList = ({route}:HomeScreenNavigationProp) => {
    const { postId } = route.params;
    const { getComments } = useActions();
    useEffect(()=>{
        getComments(postId);
    },[])

    const {comments, error, loading} = useTypedSelector(state => state.comment);
    console.log(true);
    console.log(comments);

    if (loading) {
        return <View><Text style={styles.messages}>Loading</Text></View>
    }

    if (error) {
        return <View><Text style={styles.messages}>Error</Text></View>
    }

    return (
        <FlatList data={comments} renderItem={({item}) => <Post title={item.text} body={item.text} id={item.id}/>}
                  keyExtractor={(item) => item.id.toString()}></FlatList>
    )
}

export default CommentsList;

const styles = StyleSheet.create({
    messages: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold"
    }
})
