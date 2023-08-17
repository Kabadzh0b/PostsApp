import {PostsAction, PostsActionTypes} from "../../types/PostAction";
import {Dispatch} from "redux";
import axios from "axios";

const POSTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/posts';
export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS});
            const response = await axios.get(POSTS_URL);
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: "Error happened :( Posts can`t be loaded."
            });
        }
    }
}
