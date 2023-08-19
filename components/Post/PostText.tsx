import {StyleSheet, TextInput, View} from "react-native";
import React from "react";

interface PostTextProps {
    editing: boolean,
    title: string,
    body: string,
    setTitle: (value: string) => void,
    setBody: (value: string) => void,
}

const PostText = ({editing, title, body, setTitle, setBody}: PostTextProps) => {

    return (
        <View>
            <TextInput
                style={editing ? styles.headerEditing : styles.header}
                onChangeText={setTitle}
                value={title}
                multiline
                editable={editing}
                placeholder={String(title)}
            />
            <TextInput
                style={editing ? styles.bodyEditing : styles.body}
                onChangeText={setBody}
                value={body}
                multiline
                editable={editing}
                placeholder={String(body)}
            />
        </View>
    )
}

export default PostText;

const styles = StyleSheet.create({
    header: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
    },

    body: {
        color: "black",
        marginTop: 20,
        textAlign: "center",
    },

    headerEditing: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        textDecorationLine: "underline",
    },

    bodyEditing: {
        color: "black",
        marginTop: 20,
        textAlign: "center",
        textDecorationLine: "underline",
    },
})
