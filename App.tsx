import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import PostList from "./components/PostList";

export default function App() {
    return (
        <Provider store={store}>
            <PostList></PostList>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
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
