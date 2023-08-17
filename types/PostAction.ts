import IPost from "./IPost";

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
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

export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction;
