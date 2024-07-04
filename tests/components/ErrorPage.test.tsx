import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../../src/components';

export function reloadWindow() {
  window.location.reload();
}

describe('ErrorPage component', () => {
  it('should render without crashing', () => {
    render(<ErrorPage />);
  });

  it('should render the 404 error code', () => {
    render(<ErrorPage />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should display error message', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText(/Whoops... Something went wrong!!!/i)).toBeTruthy();
  });

  it('should display the reload button', () => {
    render(<ErrorPage />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/reload page/i);
  });
});
