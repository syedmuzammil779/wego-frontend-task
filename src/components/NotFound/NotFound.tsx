import { FaSearch } from 'react-icons/fa';

// Styles
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <span className="not-found-icon">
        <FaSearch size={200} />
      </span>
      <h1 className="not-found-title">No results found</h1>
      <p className="not-found-description">
        We couldn't find what you searched for. <br /> Try searching again
      </p>
    </div>
  );
};

export default NotFound;
