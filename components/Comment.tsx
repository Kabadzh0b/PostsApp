import {StyleSheet, Text, View} from "react-native";
import IComment from "../types/IComment";
import CustomButton from "./СustomButton";
import {useActions} from "../hooks/useActions";

const Comment = ({id, postId, text}: IComment) => {
    const {deleteComment, editComment} = useActions();
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <View style={styles.buttonsContainer}>
                <CustomButton title={"Edit"} onPress={() => {
                    editComment(id, postId, "test");
                }}/>
                <CustomButton title={"Delete"} onPress={() => {
                    deleteComment(id, postId);
                }}/>
            </View>
        </View>
    )
}

export default Comment;

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        padding: 10,
        borderWidth: 2,
        margin: 10,
        justifyContent: "space-between",
    },
    buttonsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
})
