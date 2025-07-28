import { createSelector } from 'reselect';

const selectTodoState = state => state.todos;

export const selectVisibilityFilter = createSelector(
  [selectTodoState],
  todosState => todosState.visibilityFilter
);

export const selectAllTodos = createSelector(
  [selectTodoState],
  todosState => todosState.todos
);

export const selectTodos = createSelector(
  [selectAllTodos, selectVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case 'Active':
        return todos.filter(t => !t.completed);
      case 'Completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }
);

export const selectFilteredTodosCount = createSelector(
  [selectTodos],
  todos => todos.length
);
