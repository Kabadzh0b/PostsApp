import {combineReducers} from "redux";
import {postReducer} from "./postReduces";
import {commentReducer} from "./commentReduces";


export const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
