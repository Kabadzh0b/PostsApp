import IPost from "./IPost";

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR = 'DELETE_POST_ERROR',
    ADD_POST = 'ADD_POST',
    ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
    ADD_POST_ERROR = 'ADD_POST_ERROR',
    EDIT_POST = 'EDIT_POST',
    EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS',
    EDIT_POST_ERROR = 'EDIT_POST_ERROR',
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

interface AddPostAction {
    type: PostsActionTypes.ADD_POST;
}

interface AddPostSuccessAction {
    type: PostsActionTypes.ADD_POST_SUCCESS;
    payload: IPost[];
}

interface AddPostErrorAction {
    type: PostsActionTypes.ADD_POST_ERROR;
    payload: string;
}

interface EditPostAction {
    type: PostsActionTypes.EDIT_POST;
}

interface EditPostSuccessAction {
    type: PostsActionTypes.EDIT_POST_SUCCESS;
    payload: IPost[];
}

interface EditPostErrorAction {
    type: PostsActionTypes.EDIT_POST_ERROR;
    payload: string;
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | DeletePostAction
    | DeletePostSuccessAction
    | DeletePostErrorAction
    | AddPostAction
    | AddPostSuccessAction
    | AddPostErrorAction
    | EditPostAction
    | EditPostSuccessAction
    | EditPostErrorAction;
