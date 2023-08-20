import axios from "axios/index";
import {Dispatch} from "redux";
import {CommentsAction, CommentsActionTypes} from "../../types/CommentsAction";
import IComment from "../../types/IComment";

const COMMENTS_URL = 'https://my-json-server.typicode.com/Kabadzh0b/PostsApp/comments';
let lastIndex = 3;
export const getComments = (id: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS});
            const response = await axios.get(COMMENTS_URL + `?postId=${id}`);
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: "We cannot load comments"});
        }
    }
}

export const deleteComment = (id: number, postId: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.DELETE_COMMENT});
            const response = await axios.get(COMMENTS_URL + `?postId=${postId}`)
            await axios.delete(COMMENTS_URL + `/${id}`);
            const newArr = response.data.filter((item: IComment) => item.id !== id);
            //Unfortunately we need to filter an array to display delete in UI, because my-json-server doesn't persist actions
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_SUCCESS, payload: newArr});
        } catch (e) {
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_ERROR, payload: "We cannot delete a comment"});
        }
    }
}

export const addComment = (postId: number, text: string) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.ADD_COMMENT});
            const response = await axios.get(COMMENTS_URL + `?postId=${postId}`)
            await axios.post(COMMENTS_URL + `/`, {
                id: ++lastIndex,
                postID: postId,
                text: text,
            });
            //Unfortunately we need to push an array to display delete in UI, because my-json-server doesn't persist actions
            response.data.push({
                id: lastIndex,
                postID: postId,
                text: text,
            })
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: CommentsActionTypes.DELETE_COMMENT_ERROR, payload: "We cannot add a comment"});
        }
    }
}

