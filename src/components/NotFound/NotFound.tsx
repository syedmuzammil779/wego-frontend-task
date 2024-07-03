import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './NotFound.scss';

const NotFound = () => {
  const [iconSize, setIconSize] = useState(200);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 768) {
        setIconSize(100);
      } else {
        setIconSize(200);
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  return (
    <div className="not-found">
      <span className="not-found-icon">
        <FaSearch size={iconSize} />
      </span>
      <h1 className="not-found-title">No results found</h1>
      <p className="not-found-description">
        We couldn't find what you searched for. <br /> Try searching again
      </p>
    </div>
  );
};

export default NotFound;
