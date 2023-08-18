import {View, Text, StyleSheet, Dimensions} from "react-native";
import IPost from "../types/IPost";
import CustomButton from "./СustomButton";
import {deletePost} from "../store/action-creators/deletePost";
import {useDispatch} from "react-redux";

const ScreenWidth = Dimensions.get('window').width;

export default function Post({title, body, id}: IPost) {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>
                    {title}
                </Text>
                <Text style={styles.body}>
                    {body}
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <CustomButton title={"Edit"} onPress={()=> {}}/>
                <CustomButton title={"Delete"} onPress={()=> {
                    // @ts-ignore
                    dispatch(deletePost(id));
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:400,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        width:ScreenWidth-40,
        padding:18,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:2,
        justifyContent:"space-between",
    },

    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    header:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:22,
    },

    body: {
        marginTop: 20,
        textAlign: "center",
    },

    button: {
        width:100,
    }
})
