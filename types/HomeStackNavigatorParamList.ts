

import type {NativeStackScreenProps} from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Posts: undefined;
    Comments: { postId: number };
}

export type HomeScreenNavigationProp = NativeStackScreenProps<HomeStackNavigatorParamList,  'Comments', 'Posts'>
