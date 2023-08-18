import {Button, StyleSheet, View} from "react-native";

interface ButtonProps{
    title:string,
    onPress:()=>void,
}

const CustomButton = ({ title, onPress }:ButtonProps) => {
    return (
        <View style={styles.button}>
            <Button title={title} onPress={onPress} />
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button:{
        width:150,
    }
})
