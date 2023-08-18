import {PostsAction, PostsActionTypes} from "../../types/PostAction";
import {Dispatch} from "redux";
import axios from "axios";
import IPost from "../../types/IPost";

export const deletePost = (id:number) => {
    const POSTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/posts/';
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.DELETE_POST, payload:id});
            const response = await axios.get(POSTS_URL);
            await axios.delete(POSTS_URL + id);
            const newArray = response.data.filter((item:IPost) => item.id !== id);
            //my-json-server doesn't save changes. I use filter to make difference on UI
            dispatch({type: PostsActionTypes.DELETE_POST_SUCCESS, payload: newArray});
        } catch (e) {
            dispatch({
                type: PostsActionTypes.DELETE_POST_ERROR,
                payload: "Error happened :( Post haven`t been deleted. Try again."
            });
        }
    }
}
