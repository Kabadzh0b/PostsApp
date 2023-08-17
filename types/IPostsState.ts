import IPost from "./IPost";

export interface IPostsState {
    posts: IPost[],
    loading: boolean,
    error: null | string,
}
