import React from 'react';
import { render, screen } from '@testing-library/react';

import { Badge } from '../../src/components';

describe('Badge Component', () => {
  it('should render the badge', () => {
    render(<Badge>Test Badge</Badge>);
    const badgeElement = screen.getByText('Test Badge');
    expect(badgeElement).toBeInTheDocument();
  });
});
