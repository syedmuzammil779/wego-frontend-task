// Styles
import './CategoriesBar.scss';

interface Category {
  id: string;
  name: string;
  active?: boolean;
}

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
