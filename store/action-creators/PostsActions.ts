import {PostsAction, PostsActionTypes} from "../../types/PostAction";
import {Dispatch} from "redux";
import axios from "axios";
import IPost from "../../types/IPost";

let lastIndex = 3;

const POSTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/posts/';
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

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.DELETE_POST, payload: id});
            const response = await axios.get(POSTS_URL);
            await axios.delete(POSTS_URL + id);
            const newArray = response.data.filter((item: IPost) => item.id !== id);
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

export const addPost = (title: string = "", body: string = "") => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.ADD_POST});
            await axios.post(POSTS_URL, {
                title: title,
                body: body,
                id: ++lastIndex,
            });
            const response = await axios.get(POSTS_URL);
            //Unfortunately we need to push an array to display post in UI, because my-json-server doesn't persist actions
            response.data.push({title: title, body: body, id: lastIndex});
            dispatch({type: PostsActionTypes.ADD_POST_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({
                type: PostsActionTypes.ADD_POST_ERROR,
                payload: "Error happened :( Post haven`t been deleted. Try again."
            });
        }
    }
}

export const editPost = (title: string, body: string, id: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.EDIT_POST});
            await axios.patch(POSTS_URL + `/${id}`, {
                title: title,
                body: body,
            });
            const response = await axios.get(POSTS_URL);
            console.log(response.data);
            //Unfortunately we need change an array to display edited post in UI, because my-json-server doesn't persist actions
            response.data = response.data.filter((item: IPost) => item.id !== id);
            response.data.push({
                title: title,
                body: body,
                id: id
            });
            console.log(response.data);
            dispatch({type: PostsActionTypes.ADD_POST_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({
                type: PostsActionTypes.ADD_POST_ERROR,
                payload: "Error happened :( Post haven`t been deleted. Try again."
            });
        }
    }
}
