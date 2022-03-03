import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { postReducer } from './posts/posts.reducer';

export default combineReducers({
    posts: postReducer,
    auth: authReducer,
});