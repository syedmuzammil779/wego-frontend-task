import React from 'react';
import { Loader } from '../../src/components';
import { render, screen } from '@testing-library/react';

describe('Loader component', () => {
  it('should renders correctly', () => {
    render(<Loader />);
  });

  it('should renders circles component with correct props', () => {
    render(<Loader />);
    const circlesLoading = screen.getByTestId('circles-loading');
    expect(circlesLoading).toBeInTheDocument();
  });
});
