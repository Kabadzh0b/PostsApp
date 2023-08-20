import IComment from "./IComment";

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    DELETE_COMMENT = 'DELETE_COMMENT',
    DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR',
    ADD_COMMENT = 'ADD_COMMENT',
    ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
    ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR',
}

interface FetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

interface FetchCommentsSuccessAction {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: IComment[];
}

interface FetchCommentsErrorAction {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

interface DeleteCommentsAction {
    type: CommentsActionTypes.DELETE_COMMENT;
}

interface DeleteCommentsSuccessAction {
    type: CommentsActionTypes.DELETE_COMMENT_SUCCESS;
    payload: IComment[];
}

interface DeleteCommentsErrorAction {
    type: CommentsActionTypes.DELETE_COMMENT_ERROR;
    payload: string;
}

interface AddCommentsAction {
    type: CommentsActionTypes.ADD_COMMENT;
}

interface AddCommentsSuccessAction {
    type: CommentsActionTypes.ADD_COMMENT_SUCCESS;
    payload: IComment[];
}

interface AddCommentsErrorAction {
    type: CommentsActionTypes.ADD_COMMENT_ERROR;
    payload: string;
}

export type CommentsAction =
    FetchCommentsAction
    | FetchCommentsSuccessAction
    | FetchCommentsErrorAction
    | DeleteCommentsAction
    | DeleteCommentsSuccessAction
    | DeleteCommentsErrorAction
    | AddCommentsAction
    | AddCommentsSuccessAction
    | AddCommentsErrorAction;
