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

const Foods = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const filteredFoods = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFoodData();
        setFoodData(data.foods);
      } catch (error) {
        setError('Failed to fetch food data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

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
      <CategoriesBar />
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
