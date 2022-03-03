import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { todosReducer } from './todos/todos.reducer'

export default combineReducers({
    todos: todosReducer,
    auth: authReducer,
});