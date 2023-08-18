import IComment from "./IComment";

export interface ICommentsState{
    comments: IComment[],
    loading: boolean,
    error: null | string,
}
