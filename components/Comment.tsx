import {StyleSheet, Text, View} from "react-native";
import IComment from "../types/IComment";
import CustomButton from "./СustomButton";

const Comment = ({id, postId, text}:IComment) => {
    return(
        <View style={styles.container}>
            <Text>{text}</Text>
            <View style={styles.buttonsContainer}>
                <CustomButton title={"Edit"} onPress={()=>{}}/>
                <CustomButton title={"Delete"} onPress={()=>{}}/>
            </View>
        </View>
    )
}

export default Comment;

const styles = StyleSheet.create({
    container:{
        textAlign:"center",
        padding:10,
        borderWidth:2,
        margin:10,
        justifyContent:"space-between",
    },
    buttonsContainer:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
})
