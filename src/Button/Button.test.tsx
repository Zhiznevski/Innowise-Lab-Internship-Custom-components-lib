import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const onClick = jest.fn();

describe('testing variant props', () => {
  it('renders outlined button', () => {
    render(<Button variant="outlined" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('outlined');
  });

  it('renders text button', () => {
    render(<Button variant="text" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text');
  });

  it('renders outlined button', () => {
    render(<Button variant="contained" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('contained');
  });
});

describe('testing size props', () => {
  it('renders small button', () => {
    render(<Button size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('small');
  });

  it('renders medium button', () => {
    render(<Button size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('medium');
  });

  it('renders large button', () => {
    render(<Button size="large" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('large');
  });
});

describe('testing isDisabled props', () => {
  it('renders disabled button', () => {
    render(<Button disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders enabled button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });
});

describe('testing children props', () => {
  it('renders button with text child', () => {
    render(<Button>testing text</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('testing text');
  });

  it('renders button with span child', () => {
    render(
      <Button>
        <span data-testid="test-span">child span</span>
      </Button>
    );
    const button = screen.getByRole('button');
    const span = screen.getByTestId('test-span');
    expect(button).toContainElement(span);
  });
});

describe('testing onClick event', () => {
  it('calls mock function 1 time', () => {
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
