import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { SearchBar } from '../../src/components';

describe('SearchBar component', () => {
  const renderSearchBox = (value: string) => {
    const onValueChange = vi.fn();
    render(<SearchBar value={value} onValueChange={onValueChange} />);

    return {
      input: screen.getByPlaceholderText(/enter restaurant name.../i),
      onValueChange,
    };
  };

  it('should render an input field for searching', () => {
    const { input } = renderSearchBox('');

    expect(input).toBeInTheDocument();
  });

  it('should call onValueChange with the correct value when input changes', async () => {
    const { input } = renderSearchBox('');

    const user = userEvent.setup();
    const searchTerm = 'SearchTerm';
    await user.type(input, searchTerm);

    act(() => {
      fireEvent.change(input, { target: { value: 'foods' } });
    });
  });
});
