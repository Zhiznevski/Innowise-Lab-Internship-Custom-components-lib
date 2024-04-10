import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Switch from './Switch';

const onChange = jest.fn();

describe('testing checked props', () => {
  it('renders checked switch', () => {
    render(<Switch checked />);
    const switcher = screen.getByRole('checkbox');
    expect(switcher).toBeChecked();
  });

  it('renders unchecked switch', () => {
    render(<Switch />);
    const switcher = screen.getByRole('checkbox');
    expect(switcher).not.toBeChecked();
  });
});

describe('testing isDisabled props', () => {
  it('renders disabled switch', () => {
    render(<Switch disabled />);
    const switcher = screen.getByRole('checkbox');
    expect(switcher).toBeDisabled();
  });

  it('renders enabled checkbox', () => {
    render(<Switch />);
    const switcher = screen.getByRole('checkbox');
    expect(switcher).not.toBeDisabled();
  });
});

describe('testing onChange props', () => {
  it('calls mock function 1 time', () => {
    render(<Switch onChange={onChange} />);
    const switcher = screen.getByRole('checkbox');
    fireEvent.click(switcher);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
