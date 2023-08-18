import axios from "axios/index";
import {Dispatch} from "redux";
import {CommentsAction, CommentsActionTypes} from "../../types/CommentsAction";

const COMMENTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/comments';
export const getComments = (id: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS, payload: id});
            const response = await axios.get(COMMENTS_URL + `?postId=${id}`);
            console.log(response.data);
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: "We cannot load comments"});
        }
    }
}
