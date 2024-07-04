import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../../src/components';

describe('NotFound component', () => {
  it('should render the not found message', () => {
    render(<NotFound />);

    const titleElement = screen.getByText(/no results found/i);
    const descriptionElement = screen.getByText(
      /couldn't find what you searched for/i,
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should render the search icon with the correct size', () => {
    render(<NotFound />);

    const iconElement = screen.getByTestId('search-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('should display the search again message in the description', () => {
    render(<NotFound />);

    const descriptionElement = screen.getByText(/try searching again/i);

    expect(descriptionElement).toBeInTheDocument();
  });
});
