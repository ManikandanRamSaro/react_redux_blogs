import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import UserHeadRecucer from './UserHeadReducer';
export default combineReducers({
    ptext : PostReducer,
    userName : UserHeadRecucer
});