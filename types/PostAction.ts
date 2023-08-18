import IPost from "./IPost";

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR = 'DELETE_POST_ERROR',
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[];
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST;
    payload: number;
}

interface DeletePostSuccessAction {
    type: PostsActionTypes.DELETE_POST_SUCCESS;
    payload: IPost[];
}

interface DeletePostErrorAction {
    type: PostsActionTypes.DELETE_POST_ERROR;
    payload: string;
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | DeletePostAction
    | DeletePostSuccessAction
    | DeletePostErrorAction;
