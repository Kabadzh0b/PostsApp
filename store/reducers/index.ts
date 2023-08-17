import {combineReducers} from "redux";
import {postReducer} from "./postReduces";


export const rootReducer = combineReducers({
    post: postReducer,
})
