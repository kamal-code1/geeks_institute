import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  visibilityFilter: 'All',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
