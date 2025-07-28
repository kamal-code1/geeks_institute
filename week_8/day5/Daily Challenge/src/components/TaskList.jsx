import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTask, editTask, deleteTask, toggleTaskCompletion
} from '../features/tracker/trackerSlice';
import { selectTasksByCategory, selectCompletedTasks } from '../features/tracker/trackerSelectors';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByCategory(categoryId));
  const completedCount = useSelector(selectCompletedTasks);
  const [newTask, setNewTask] = useState('');

  const handleAdd = useCallback(() => {
    if (newTask.trim()) {
      dispatch(addTask({ text: newTask, categoryId }));
      setNewTask('');
    }
  }, [dispatch, newTask, categoryId]);

  const handleToggle = useCallback((id) => {
    dispatch(toggleTaskCompletion(id));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  const handleEdit = useCallback((id, newText) => {
    dispatch(editTask({ id, text: newText }));
  }, [dispatch]);

  return (
    <div>
      <h3>Tasks</h3>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New Task" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span contentEditable onBlur={(e) => handleEdit(task.id, e.target.textContent)}>
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>🗑</button>
          </li>
        ))}
      </ul>
      <p>✅ {completedCount} task(s) completed</p>
    </div>
  );
};

export default TaskList;
