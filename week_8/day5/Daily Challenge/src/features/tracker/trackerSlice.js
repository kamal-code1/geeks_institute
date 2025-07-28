import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 'work', name: 'Work' },
    { id: 'personal', name: 'Personal' }
  ],
  tasks: [],
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        categoryId: action.payload.categoryId,
        completed: false,
      });
    },
    editTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.text = action.payload.text;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    addCategory: (state, action) => {
      state.categories.push({
        id: Date.now().toString(),
        name: action.payload
      });
    },
    editCategory: (state, action) => {
      const category = state.categories.find(c => c.id === action.payload.id);
      if (category) category.name = action.payload.name;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(c => c.id !== action.payload);
      state.tasks = state.tasks.filter(t => t.categoryId !== action.payload);
    },
  },
});

export const {
  addTask, editTask, deleteTask, toggleTaskCompletion,
  addCategory, editCategory, deleteCategory
} = trackerSlice.actions;

export default trackerSlice.reducer;
