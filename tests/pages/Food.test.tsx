import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Foods } from '../../src/pages';

describe('Foods Component', () => {
  it('should render the loading state initially', () => {
    render(<Foods />);
  });
});
