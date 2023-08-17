import {FlatList, Text, View} from "react-native";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useEffect} from "react";
import {fetchPosts} from "../store/action-creators/fetchPosts";

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
        <View>
            <FlatList data={posts} renderItem={({item}) => <Text>{item.title}</Text>}
                      keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    );
};
