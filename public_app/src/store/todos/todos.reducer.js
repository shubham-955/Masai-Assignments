import { ADD_TODOS, DELETE_TODOS } from "./todos.actionTypes";
import { initialState } from "./todos.constants";

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODOS: {
            return {
                ...state, data: [...state.data, payload]
            };
        }
        case DELETE_TODOS: {
            console.log(payload)
            return {
                ...state, data: state.data.filter((todo) => todo.id !== payload)
            };
        }
        default: {
            return { ...state };
        }
    }
}