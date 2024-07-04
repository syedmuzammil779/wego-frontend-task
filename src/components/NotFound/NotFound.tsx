import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useResponsiveIconSize } from '../../hooks';
import './NotFound.scss';

const NotFound: React.FC = () => {
  const iconSize: number = useResponsiveIconSize(200, 100);

  return (
    <div className="not-found">
      <span className="not-found-icon">
        <FaSearch size={iconSize} data-testid="search-icon" />
      </span>
      <h1 className="not-found-title">No results found</h1>
      <p className="not-found-description">
        We couldn't find what you searched for. <br /> Try searching again
      </p>
    </div>
  );
};

export default NotFound;
