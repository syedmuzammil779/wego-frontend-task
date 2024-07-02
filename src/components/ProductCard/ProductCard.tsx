// Components
import Badge from '../Badge/Badge';

// Icons
import { FaStar } from 'react-icons/fa6';
import { FaGift } from 'react-icons/fa';

// Styles
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="food image"
          className="product-card-image"
        />
        <span className="product-card-icon-badge">
          <FaGift size={20} />
        </span>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">Dominio's pizza</h3>
        <div className="product-card-badge-group">
          <Badge>
            <span className="product-card-rating">
              <FaStar />
              4.7
            </span>
          </Badge>
          <Badge>
            <span className="product-card-time">50-70 min</span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
