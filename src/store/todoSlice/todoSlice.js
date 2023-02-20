import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completed: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
    },
    delete(state, action) {
      state.todos = state.todos.filter((element) => element.id === action.id);
    },
    deleteAll(state) {
      state.todos = [];
    },
    completed(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
    edit(state, action) {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            title: action.payload.value,
          };
        }
        return el;
      });
    },
  },
});

export const todoActions = todoSlice.actions;
