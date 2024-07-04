import React from 'react';
import { render } from '@testing-library/react';
import { Divider } from '../../src/components';

describe('Divider component', () => {
  it('renders without crashing', () => {
    render(<Divider />);
  });

  it('renders with custom padding', () => {
    const { container } = render(<Divider padding="10px" />);
    const dividerElement = container.firstChild as HTMLElement;
    expect(dividerElement.style.padding).toBe('10px');
  });

  it('renders without padding when not provided', () => {
    const { container } = render(<Divider />);
    const dividerElement = container.firstChild as HTMLElement;
    expect(dividerElement.style.padding).toBe('');
  });
});
