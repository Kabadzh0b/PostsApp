import axios from "axios/index";
import {Dispatch} from "redux";
import {CommentsAction, CommentsActionTypes} from "../../types/CommentsAction";
import IComment from "../../types/IComment";

const COMMENTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/comments';
export const getComments = (id: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS, payload: id});
            const response = await axios.get(COMMENTS_URL + `?postId=${id}`);
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: "We cannot load comments"});
        }
    }
}

export const deleteComment = (id: number, postId:number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.DELETE_COMMENT, payload: id});
            const response = await axios.get(COMMENTS_URL + `?postId=${postId}`)
            await axios.delete(COMMENTS_URL + `/${id}`);
            const newArr = response.data.filter((item:IComment) => item.id !== id);
            //Unfortunately we need to filter an array to display delete in UI, because my-json-server doesn't persist actions
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_SUCCESS, payload: newArr});
        } catch (e) {
            console.log(e);
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_ERROR, payload: "We cannot delete comment"});
        }
    }
}

