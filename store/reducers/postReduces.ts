import IPost from "../../types/IPost";
import {PostsAction, PostsActionTypes} from "../../types/PostAction";
import {IPostsState} from "../../types/IPostsState";

const defaultState: IPost[] = [
    {
        id: 1,
        title: "Hello",
        body: "World",
    },
    {
        id: 2,
        title: "Bye",
        body: "World",
    }
]

export const postReducer = (state = defaultState, action: PostsAction): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: []};
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {loading: false, error: null, posts: action.payload};
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []};
        default:
            return {loading: false, error: null, posts: state}
    }
}
