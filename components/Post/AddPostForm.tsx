import {Button, StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useActions} from "../../hooks/useActions";

interface FormProps {
    setAddingPost: (value: boolean) => void
}

const AddPostForm = ({setAddingPost}: FormProps) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {addPost} = useActions();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                multiline
                placeholder="set your title here"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBody}
                value={body}
                multiline
                placeholder="set your body here"
            />
            <Button title={"Create post"} onPress={() => {
                addPost(title, body);
                setAddingPost(false);
            }}
            />
        </View>
    )
}

export default AddPostForm;

const styles = StyleSheet.create({
    container: {},
    input: {}
})
