import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo, toggleTodo, removeTodo, setFilter
} from '../features/todos/todosSlice';
import {
  selectTodos, selectVisibilityFilter, selectFilteredTodosCount
} from '../features/todos/todoSelectors';

const TodoList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectVisibilityFilter);
  const count = useSelector(selectFilteredTodosCount);

  const handleAdd = useCallback(() => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  }, [dispatch, input]);

  const handleToggle = useCallback(id => {
    dispatch(toggleTodo(id));
  }, [dispatch]);

  const handleDelete = useCallback(id => {
    dispatch(removeTodo(id));
  }, [dispatch]);

  const handleFilterChange = useCallback((f) => {
    dispatch(setFilter(f));
  }, [dispatch]);

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        <button onClick={() => handleFilterChange('All')} disabled={filter === 'All'}>All</button>
        <button onClick={() => handleFilterChange('Active')} disabled={filter === 'Active'}>Active</button>
        <button onClick={() => handleFilterChange('Completed')} disabled={filter === 'Completed'}>Completed</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>

      <p>{count} task(s) shown</p>
    </div>
  );
};

export default TodoList;
