import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PostsActionCreators from '../store/action-creators/PostsActions';
import * as CommentsActionCreators from '../store/action-creators/CommentsActions';

const allActionCreators = {...PostsActionCreators, ...CommentsActionCreators};
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}
