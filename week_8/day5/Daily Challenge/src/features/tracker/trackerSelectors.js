import { createSelector } from 'reselect';

const selectTrackerState = (state) => state.tracker;

export const selectTasks = createSelector(
  [selectTrackerState],
  tracker => tracker.tasks
);

export const selectCategories = createSelector(
  [selectTrackerState],
  tracker => tracker.categories
);

export const selectTasksByCategory = (categoryId) => createSelector(
  [selectTasks],
  tasks => tasks.filter(t => t.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  tasks => tasks.filter(t => t.completed).length
);

export const selectCategoryById = (id) => createSelector(
  [selectCategories],
  categories => categories.find(c => c.id === id)
);
