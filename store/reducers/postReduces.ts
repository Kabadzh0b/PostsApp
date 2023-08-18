import {PostsAction, PostsActionTypes} from "../../types/PostAction";
import {IPostsState} from "../../types/IPostsState";

export const postReducer = (state: IPostsState, action: PostsAction): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: []};
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {loading: false, error: null, posts: action.payload};
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []};
        case PostsActionTypes.DELETE_POST:
            return {loading: true, error: null, posts: []};
        case PostsActionTypes.DELETE_POST_SUCCESS:
            return {loading: false, error: null, posts: action.payload};
        case PostsActionTypes.DELETE_POST_ERROR:
            return {loading: false, error: action.payload, posts: []};
        default:
            return {loading: false, error: null, posts: []}
    }
}
