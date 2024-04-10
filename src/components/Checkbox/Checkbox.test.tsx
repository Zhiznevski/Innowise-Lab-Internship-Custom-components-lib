import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

const onChange = jest.fn();

describe('testing checked props', () => {
  it('renders checked checkbox', () => {
    render(<Checkbox checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders unchecked checkbox', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
});

describe('testing isDisabled props', () => {
  it('renders disabled checkbox', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('renders enabled checkbox', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeDisabled();
  });
});

describe('testing onChange props', () => {
  it('calls mock function 1 time', () => {
    render(<Checkbox onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

describe('testing label props', () => {
  it('renders checkbox with la', () => {
    render(<Checkbox label="test-checkbox" />);
    const label = screen.getByText('test-checkbox');
    expect(label).toBeInTheDocument();
  });
});
