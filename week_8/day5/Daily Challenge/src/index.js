import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';

const App = () => {
  const [categoryId, setCategoryId] = useState('work');

  return (
    <div>
      <h1>🧠 Productivity Tracker</h1>
      <CategorySelector selectedCategory={categoryId} onSelect={setCategoryId} />
      <TaskList categoryId={categoryId} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
