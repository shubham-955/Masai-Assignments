import { ADD_TODOS, DELETE_TODOS } from "./posts.actionTypes";
import { initialState } from "./posts.constants";

export const postReducer = (state = initialState, { type, payload }) => {
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