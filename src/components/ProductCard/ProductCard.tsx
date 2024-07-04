import React from 'react';
import { useState } from 'react';
import Badge from '../Badge/Badge';
import { FaStar, FaGift } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import './ProductCard.scss';
import { Food } from '../../types/food';

interface ProductCardProps {
  food: Food;
}

const getPromotionDetails = (discount: string) => {
  switch (discount) {
    case 'discount':
      return {
        icon: <AiOutlinePercentage size={25} />,
        colorClass: 'pink',
      };
    case 'gift':
      return {
        icon: <FaGift size={25} />,
        colorClass: 'blue',
      };
    case '1+1':
      return {
        icon: '1+1',
        colorClass: 'purple',
      };
    default:
      return {
        icon: null,
        colorClass: '',
      };
  }
};

const ProductCard = React.memo(({ food }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { icon, colorClass } = getPromotionDetails(food.promotion);
  const imageUrl =
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400';

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = imageUrl;
  };

  return (
    <div className="product-card">
      <div className="product-card-header">
        {!imageLoaded && <SkeletonLoader data-testid="skeleton-loader" />}
        <img
          src={food.imageUrl || imageUrl}
          alt={food.name}
          className={`product-card-image ${imageLoaded ? '' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
        {icon && (
          <span className={`product-card-icon-badge ${colorClass}`}>
            {icon}
          </span>
        )}
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{food.name}</h3>
        <div className="product-card-badge-group">
          <Badge>
            <span className="product-card-rating">
              <FaStar />
              {food.rating.toFixed(1)}
            </span>
          </Badge>
          <Badge>
            <span className="product-card-time">
              {food.minCookTime}-{food.maxCookTime} min
            </span>
          </Badge>
          {food.isNew && (
            <Badge>
              <span className="product-card-new">New</span>
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
