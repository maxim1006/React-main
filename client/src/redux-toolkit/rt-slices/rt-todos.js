import { createSlice } from '@reduxjs/toolkit';

// createSlice and createReducer wrap your function with produce from the Immer library.
// https://immerjs.github.io/immer/docs/introduction

let nextTodoId = 0;

const rtTodosSlice = createSlice({
    name: 'todos',
    initialState: [],
    // reducers - an object, where the keys will become action type strings, and the functions are reducers that will
    // be run when that action type is dispatched.
    reducers: {
        rtAddTodo: {
            reducer: (state, action) => {
                const { id, text } = action.payload;
                state.push({ id, text, completed: false });
            },
            // если нужно кастомно подготовить то что прокидываю в экшн, по умолчанию все что передасться при
            // вызове экшена попадет в пейлоад, однако если нужен кастом делаю prepare
            prepare(text) {
                return { payload: { text, id: nextTodoId++ } };
            }
        },
        rtToggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload);

            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { rtAddTodo, rtToggleTodo } = rtTodosSlice.actions;

export default rtTodosSlice.reducer;

/*
* createSlice returns an object that looks like this:

{
  name: "todos",
  reducer: (state, action) => newState,
  actions: {
    rtAddTodo: (payload) => ({type: "todos/addTodo", payload}),
    rtToggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
  },
  caseReducers: {
    rtAddTodo: (state, action) => newState,
    rtToggleTodo: (state, action) => newState,
  }
}*/
