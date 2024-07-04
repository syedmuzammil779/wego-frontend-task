import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { Food } from '../../src/types/food';

vi.mock('react-icons/fa', () => ({
  FaStar: () => <div data-testid="fa-star" />,
  FaGift: () => <div data-testid="fa-gift" />,
}));
vi.mock('react-icons/ai', () => ({
  AiOutlinePercentage: () => <div data-testid="ai-outline-percentage" />,
}));
vi.mock(
  '../Badge/Badge',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div data-testid="badge">{children}</div>,
);
vi.mock('../SkeletonLoader/SkeletonLoader', () => () => (
  <div data-testid="skeleton-loader" />
));

describe('ProductCard', () => {
  const mockFood: Food = {
    id: '628b5decc94a27754f30e6f1',
    index: 0,
    rating: 3.9508,
    promotion: 'gift',
    isNew: false,
    categoryId: '6288a89fac9e970731bfaa7b',
    minCookTime: 80,
    maxCookTime: 100,
    restaurant: 'Niquent',
    name: 'Niquent Drinks',
    imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
  };

  it('should render ProductCard component', () => {
    render(<ProductCard food={mockFood} />);
    expect(screen.getByText(mockFood.name)).toBeInTheDocument();
    expect(screen.getByText(mockFood.rating.toFixed(1))).toBeInTheDocument();
    expect(
      screen.getByText(`${mockFood.minCookTime}-${mockFood.maxCookTime} min`),
    ).toBeInTheDocument();
  });

  it('should hide SkeletonLoader and shows image after it is loaded', () => {
    render(<ProductCard food={mockFood} />);
    const image = screen.getByAltText(mockFood.name);
    fireEvent.load(image);
    expect(screen.queryByTestId('skeleton-loader')).not.toBeInTheDocument();
    expect(image).not.toHaveClass('hidden');
  });

  it('should display fallback image on image error', () => {
    render(<ProductCard food={mockFood} />);
    const image = screen.getByAltText(mockFood.name);
    fireEvent.error(image);
    expect(image).toHaveAttribute(
      'src',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
    );
  });

  it('should display correct promotion details based on the promotion type', () => {
    const promotions = ['discount', 'gift', '1+1'];
    promotions.forEach((promotion) => {
      const food = { ...mockFood, promotion };
      render(<ProductCard food={food} />);
      if (promotion === 'discount') {
        expect(screen.getByTestId('ai-outline-percentage')).toBeInTheDocument();
      } else if (promotion === 'gift') {
        expect(screen.getByTestId('fa-gift')).toBeInTheDocument();
      } else if (promotion === '1+1') {
        expect(screen.getByText('1+1')).toBeInTheDocument();
      }
    });
  });
});
