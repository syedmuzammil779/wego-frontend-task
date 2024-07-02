// import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar value={searchQuery} onValueChange={setSearchQuery} />
      {/* <CategoriesBar /> */}
      <ProductCard />
    </div>
  );
}

export default App;
