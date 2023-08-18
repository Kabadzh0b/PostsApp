import {StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import PostList from "./components/PostList";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <PostList></PostList>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
