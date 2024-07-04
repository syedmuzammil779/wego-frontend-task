import React from 'react';
import { Category } from '../../types/category';

// Styles
import './CategoriesBar.scss';

interface CategoriesBarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  if (categories.length === 0) return <p>No categories available.</p>;

  return (
    <div className="categories-bar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className={`categories-bar-button ${
            activeCategory === category.id
              ? 'categories-bar-button--active'
              : ''
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
