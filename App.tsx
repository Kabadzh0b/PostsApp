import {Provider} from "react-redux";
import {store} from "./store";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostList from "./Screens/PostList";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Posts">
                    <Stack.Screen name="Posts" component={PostList}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
