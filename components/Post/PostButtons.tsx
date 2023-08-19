import {StyleSheet, View} from "react-native";
import CustomButton from "../СustomButton";
import React from "react";
import {useActions} from "../../hooks/useActions";

interface PostButtonsProps {
    editing: boolean,
    setEditing: (value: boolean) => void,
    id: number,
    editTitle: string,
    editBody: string,
}

const PostButtons = ({editing, setEditing, id, editTitle, editBody}: PostButtonsProps) => {

    const {editPost, deletePost} = useActions();

    return (
        <View>
            <View style={editing ? styles.buttonsContainer : styles.displayNone}>
                <CustomButton title={"Save changes"} onPress={() => {
                    setEditing(false);
                    editPost(editTitle, editBody, id);
                }}/>
                <CustomButton title={"Cancel"} onPress={() => {
                    setEditing(false);
                }}/>
            </View>
            <View style={editing ? styles.displayNone : styles.buttonsContainer}>
                <CustomButton title={"Edit"} onPress={() => {
                    setEditing(true);
                }}/>
                <CustomButton title={"Delete"} onPress={() => {
                    deletePost(id);
                }}/>
            </View>
        </View>
    )
}

export default PostButtons;

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    displayNone: {
        display: "none",
    }
})
