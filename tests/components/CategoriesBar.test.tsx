import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoriesBar } from '../../src/components';
import { Category } from '../../src/types/category';

describe('CategoriesBar component', () => {
  it('should render no categories when the categories array is empty', () => {
    render(
      <CategoriesBar
        categories={[]}
        activeCategory=""
        onCategoryClick={() => {}}
      />,
    );

    expect(screen.getByText(/no categories/i)).toBeInTheDocument();
  });

  it('should render a list of categories', () => {
    const categories: Category[] = [
      { id: '1', name: 'Category 1' },
      { id: '2', name: 'Category 2' },
      { id: '3', name: 'Category 3' },
    ];

    render(
      <CategoriesBar
        categories={categories}
        activeCategory=""
        onCategoryClick={() => {}}
      />,
    );

    categories.forEach((category) => {
      const button = screen.getByText(category.name);
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(category.name);
    });
  });
});
