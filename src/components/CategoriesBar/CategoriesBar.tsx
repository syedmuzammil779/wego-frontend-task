import { useEffect, useState } from 'react';

// Styles
import './CategoriesBar.scss';

interface Category {
  id: string;
  name: string;
  active?: boolean;
}

const CategoriesBar = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(
    '6288a89f1f0152b8c2cd512b',
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json',
      );
      const data: Category[] = await response.json();

      const allCategory: Category = {
        id: '1zz4fg',
        name: 'All',
        active: true,
      };

      const categoriesWithActive = [allCategory, ...data];

      setCategories(categoriesWithActive);
      setActiveCategory(allCategory.id);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <div className="categories-bar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
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
