import {View, StyleSheet, Dimensions, Pressable} from "react-native";
import IPost from "../../types/IPost";
import {useNavigation} from "@react-navigation/native";
import {HomeScreenNavigationProp} from "../../types/HomeStackNavigatorParamList";
import React, {useState} from "react";
import PostText from "./PostText";
import PostButtons from "./PostButtons";

const ScreenWidth = Dimensions.get('window').width;

export default function Post({title, body, id}: IPost) {
    const [editTitle, setEditTitle] = useState(title);
    const [editBody, setEditBody] = useState(body);
    const navigation: HomeScreenNavigationProp = useNavigation();
    const [editing, setEditing] = useState(false);

    return (
        <Pressable onPress={() => {
            // @ts-ignore
            navigation.navigate('Comments', {postId: id})
        }}>
            <View style={styles.container}>
                <PostText editing={editing} title={editTitle} body={editBody} setTitle={setEditTitle}
                          setBody={setEditBody}/>
                <PostButtons editing={editing} setEditing={setEditing} id={id} editTitle={editTitle}
                             editBody={editBody}/>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 400,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        width: ScreenWidth - 40,
        padding: 18,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "space-between",
    },
})
