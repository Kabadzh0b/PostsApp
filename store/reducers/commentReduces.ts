import {CommentsAction, CommentsActionTypes} from "../../types/CommentsAction";
import {ICommentsState} from "../../types/ICommentsState";

export const commentReducer = (state: ICommentsState, action: CommentsAction): ICommentsState => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return {loading: true, error: null, comments: []};
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {loading: false, error: null, comments: action.payload};
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return {loading: false, error: action.payload, comments: []};
        case CommentsActionTypes.DELETE_COMMENT:
            return {loading: true, error: null, comments: []};
        case CommentsActionTypes.DELETE_COMMENT_SUCCESS:
            return {loading: false, error: null, comments: action.payload};
        case CommentsActionTypes.DELETE_COMMENT_ERROR:
            return {loading: false, error: action.payload, comments: []};
        default:
            return {loading: false, error: null, comments: []}
    }
}
