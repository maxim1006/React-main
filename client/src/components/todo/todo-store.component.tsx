import React, {memo} from "react";
import {TODOS_TYPES} from "../../store/actions/types";
import {createStore} from "redux";
import {generateUniqueId} from "../../common/helpers/helpers";
import TodoHeaderContainer from "./todo-header-container.component";
import TodoFilterLinksContainer from "./todo-filter-links-container.component";
import TodoListContainer from "./todo-list-container.component";
import TodoStoreContext from "./todo-store.context";
import useTodoState from "./use-todo-state";


export interface ITodo {
    name?: string;
    completed: boolean;
    id: string;
}

// Init states
const initState = {
    todos: [{
        name: "deeply learn redux",
        completed: false,
        id: generateUniqueId()
    }],
    visibilityFilter: "All"
};

// Reducers
// использую паттерн комбинации редюсеров в один большой todoAppReducer
const todosReducer = (state: any = initState.todos, action: { type?: string, payload?: ITodo }) => {
    switch (action.type) {
        case TODOS_TYPES.TOGGLE_COMPLETE: {
            const {id, completed}: ITodo = action.payload as ITodo;

            return state.map((todo: ITodo) => todo.id === id ? {...todo, completed: !completed} : todo);
        }

        case TODOS_TYPES.ADD: {
            return [
                ...state,
                action.payload
            ]
        }

        default:
            return state;
    }
};

const visibilityFilterReducer = (state = initState.visibilityFilter, action: { type: string; payload: string }) => {
    switch (action.type) {
        case TODOS_TYPES.SET_VISIBILITY_FILTER: {
            return action.payload;
        }

        default:
            return state;
    }
}

// общий редюсер
// const todoAppReducer = (state: any = {}, action: {type: string; payload: any}) => ({
//     todos: todosReducer(state.todos, action),
//     visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
// });
// эта запись ровно такая же как и с combineReducers
// имплементация combineReducers
const combineReducers = (reducers: any) => (state: any = {}, action: any) =>
    Object.keys(reducers).reduce((nextState: any, key: string) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
    }, {});

const todoAppReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});


// Action creators
export const toggleCompleteTodoActionCreator = (id: string, completed: boolean) => ({
    type: TODOS_TYPES.TOGGLE_COMPLETE,
    payload: {
        id, completed
    }
});

export const setVisibilityFilterActionCreator = (filter: string) => ({
    type: TODOS_TYPES.SET_VISIBILITY_FILTER,
    payload: filter
});

export const addTodoActionCreator = (name: string) => ({
    type: TODOS_TYPES.ADD,
    payload: {
        name,
        completed: false,
        id: generateUniqueId()
    }
});


// Store
// имплементация createStore в counter-store.component.tsx
export const store = createStore(
    todoAppReducer,
    initState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


const TodoStore: React.FC = () => {
    const state = useTodoState();

    return (
        <TodoStoreContext.Provider value={{value: state}}>
            <TodoHeaderContainer/>
            <TodoFilterLinksContainer/>
            <TodoListContainer/>
        </TodoStoreContext.Provider>
    );
};

export default memo(TodoStore);
