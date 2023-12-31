import {Button, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {useTypedSelector} from "../hooks/useTypedSelector";
import React, {useEffect, useState} from "react";
import Post from "../components/Post/Post";
import {useActions} from "../hooks/useActions";
import AddPostForm from "../components/Post/AddPostForm";

export default function PostList() {
    const {fetchPosts} = useActions();
    const [addingPost, setAddingPost] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const {posts, error, loading} = useTypedSelector(state => state.post);

    if (loading) {
        return <View><Text style={styles.messages}>Loading</Text></View>
    }

    if (error) {
        return <View><Text style={styles.messages}>Error</Text></View>
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={fetchPosts}><Text style={styles.refresh}>🔄</Text></Pressable>
            <View style={styles.list}>
                <View style={addingPost ? styles.form : styles.displayNone}>
                    <AddPostForm setAddingPost={setAddingPost}/>
                </View>
                <View style={addingPost ? styles.displayNone : {}}>
                    <Button title={"Add Post"} onPress={() => setAddingPost(true)}/>
                </View>
                <View style={addingPost ? {} : styles.displayNone}>
                    <Button title={"Cancel"} onPress={() => setAddingPost(false)}/>
                </View>
                <FlatList data={posts} renderItem={({item}) => <Post title={item.title} body={item.body} id={item.id}/>}
                          keyExtractor={(item) => item.id.toString()}></FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    refresh:{
      fontSize:30,
    },
    list: {
        flex: 1,
    },
    form:{

    },
    header: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    messages: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold"
    },
    displayNone: {
        display: "none",
    }
})
