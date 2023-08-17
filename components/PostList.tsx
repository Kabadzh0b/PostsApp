import {View} from "react-native";
import {useSelector} from "react-redux";

export default function PostList(){
    const list = useSelector(state => state);
    console.log(list);

    return(
        <View>

        </View>
    );
};
