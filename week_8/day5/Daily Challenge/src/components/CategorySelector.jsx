import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/tracker/trackerSelectors';

const CategorySelector = ({ selectedCategory, onSelect }) => {
  const categories = useSelector(selectCategories);

  return (
    <select value={selectedCategory} onChange={(e) => onSelect(e.target.value)}>
      {categories.map(c => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
