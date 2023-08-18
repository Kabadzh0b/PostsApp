import {Provider} from "react-redux";
import {store} from "./store";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostList from "./Screens/PostList";
import CommentsList from "./Screens/CommentsList";
import {HomeStackNavigatorParamList} from "./types/HomeStackNavigatorParamList";

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Posts">
                    <Stack.Screen name="Posts" component={PostList}/>
                    <Stack.Screen name="Comments" component={CommentsList}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
