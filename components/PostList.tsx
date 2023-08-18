import {FlatList, StyleSheet, Text, View} from "react-native";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useEffect} from "react";
import {fetchPosts} from "../store/action-creators/fetchPosts";
import Post from "./Post";

export default function PostList() {
    const {posts, error, loading} = useTypedSelector(state => state.post);

    useEffect(() => {
        fetchPosts();
    }, [])

    if (loading) {
        return <View><Text>Loading</Text></View>
    }

    if (error) {
        return <View><Text>Error</Text></View>
    }

    return (
        <View style={styles.list}>
            <Text style={styles.header}>Posts</Text>
            <FlatList data={posts} renderItem={({item}) => <Post title={item.title} body={item.body} id={item.id}/>}
                      keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 36,
    },
    header:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
    }
})
