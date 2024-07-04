import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Pagination } from '../../src/components';
import { Food } from '../../src/types/food';

describe('Pagination Component', () => {
  const mockSetPage = vi.fn();
  const mockProducts: Food[] = Array.from({ length: 25 }, (_, i) => ({
    id: `${i}5asdfasd2q34`,
    name: `Product ${i + 1}`,
    description: `Description for product ${i + 1}`,
    index: i,
    rating: 3.9508,
    promotion: 'gift',
    isNew: false,
    categoryId: '6288a89fac9e970731bfaa7b',
    minCookTime: 80,
    maxCookTime: 100,
    restaurant: 'Niquent',
    imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
  }));

  beforeEach(() => {
    mockSetPage.mockClear();
  });

  it('should render pagination buttons', () => {
    render(
      <Pagination products={mockProducts} page={1} setPage={mockSetPage} />,
    );
    expect(screen.getByTestId('pagination-prev')).toBeInTheDocument();
    expect(screen.getByTestId('pagination-next')).toBeInTheDocument();
  });

  it('should disable previous button on the first page', () => {
    render(
      <Pagination products={mockProducts} page={1} setPage={mockSetPage} />,
    );
    expect(screen.getByTestId('pagination-prev')).toBeDisabled();
  });

  it('should disable next button on the last page', () => {
    render(
      <Pagination products={mockProducts} page={3} setPage={mockSetPage} />,
    );
    expect(screen.getByTestId('pagination-next')).toBeDisabled();
  });

  it('should call setPage with correct page number when page button is clicked', () => {
    render(
      <Pagination products={mockProducts} page={1} setPage={mockSetPage} />,
    );

    fireEvent.click(screen.getByText('2'));

    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  it('calls setPage with correct page number when next button is clicked', () => {
    render(
      <Pagination products={mockProducts} page={1} setPage={mockSetPage} />,
    );
    fireEvent.click(screen.getByTestId('pagination-next'));
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  it('calls setPage with correct page number when previous button is clicked', () => {
    render(
      <Pagination products={mockProducts} page={2} setPage={mockSetPage} />,
    );
    fireEvent.click(screen.getByTestId('pagination-prev'));
    expect(mockSetPage).toHaveBeenCalledWith(1);
  });

  it('should not render pagination when there are no products', () => {
    render(<Pagination products={[]} page={1} setPage={mockSetPage} />);
    expect(screen.queryByTestId('pagination-prev')).not.toBeInTheDocument();
  });
});
