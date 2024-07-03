import { useState, useEffect } from 'react';

// Components
import {
  CategoriesBar,
  Divider,
  ErrorPage,
  Loader,
  NotFound,
  ProductCard,
  SearchBar,
} from '../../components';

// Types
import { Food } from '../../types/food';

// Services
import { getFoodData } from '../../services/foodServices';

// Styles
import './Foods.scss';

interface Category {
  id: string;
  name: string;
}

const Foods = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('1zz4fg');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json',
      );
      const data: Category[] = await response.json();

      const allCategory: Category = {
        id: '1zz4fg',
        name: 'All',
      };

      setCategories([allCategory, ...data]);
      setActiveCategory(allCategory.id);
    };

    const fetchData = async () => {
      try {
        const data = await getFoodData();
        setFoodData(data.foods);
        setFilteredFoodData(data.foods);
      } catch (error) {
        setError('Failed to fetch food data');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchData();
  }, []);

  useEffect(() => {
    const filtered =
      activeCategory === '1zz4fg'
        ? foodData
        : foodData.filter((food) => food.categoryId === activeCategory);

    setFilteredFoodData(filtered);
  }, [activeCategory, foodData]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
  };

  const filteredFoods = filteredFoodData.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <SearchBar value={searchQuery} onValueChange={handleSearchChange} />
      <Divider padding="22px 0" />
      <CategoriesBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <Divider padding="20px 0" />
      {filteredFoods.length === 0 ? (
        <NotFound />
      ) : (
        <div className="foods-container">
          {filteredFoods.slice(0, 10).map((food) => (
            <ProductCard food={food} key={food.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Foods;
