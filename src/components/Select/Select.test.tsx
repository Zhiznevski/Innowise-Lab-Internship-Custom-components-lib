import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';
import MOCK_OPTIONS from '../../utils/mockData';

describe('testing options props', () => {
  it('renders select with options', () => {
    render(<Select id="test-id" options={MOCK_OPTIONS} />);
    const wrapper = screen.getByTestId('text-input');
    fireEvent.click(wrapper);
    const firstOption = screen.getByText('one');
    const secondOption = screen.getByText('two');
    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
  });
});

describe('testing variant props', () => {
  it('renders outlined select', () => {
    render(<Select id="test-id" options={MOCK_OPTIONS} variant="outlined" />);
    const wrapper = screen.getByTestId('text-input');
    expect(wrapper).toHaveClass('outlined');
  });
  it('renders outlined select', () => {
    render(<Select id="test-id" options={MOCK_OPTIONS} variant="filled" />);
    const wrapper = screen.getByTestId('text-input');
    expect(wrapper).toHaveClass('filled');
  });
  it('renders outlined select', () => {
    render(<Select id="test-id" options={MOCK_OPTIONS} variant="standard" />);
    const wrapper = screen.getByTestId('text-input');
    expect(wrapper).toHaveClass('standard');
  });
});
