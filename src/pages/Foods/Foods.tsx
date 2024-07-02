import { useState, useEffect } from 'react';
import { Food } from '../../types/food';
import { getFoodData } from '../../services/foodServices';

// Components
import {
  CategoriesBar,
  Divider,
  ProductCard,
  SearchBar,
} from '../../components';

// Styles
import './Foods.scss';

const Foods = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const someFoods = foodData.slice(0, 10);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SearchBar value={searchQuery} onValueChange={setSearchQuery} />
      <Divider padding="22px 0" />
      <CategoriesBar />
      <Divider padding="20px 0" />
      <div className="foods-container">
        {someFoods.map((food) => (
          <ProductCard food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
