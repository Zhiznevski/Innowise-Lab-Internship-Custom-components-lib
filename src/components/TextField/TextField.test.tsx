import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('testing variant props', () => {
  it('renders outlined textField', () => {
    render(<TextField id="test-id" variant="outlined" />);
    const textField = screen.getByTestId('text-input');
    expect(textField).toHaveClass('outlined');
  });

  it('renders filled textField', () => {
    render(<TextField id="test-id" variant="filled" />);
    const textField = screen.getByTestId('text-input');
    expect(textField).toHaveClass('filled');
  });
  it('renders standard textField', () => {
    render(<TextField id="test-id" variant="standard" />);
    const textField = screen.getByTestId('text-input');
    expect(textField).toHaveClass('standard');
  });
});

describe('testing error props', () => {
  it('renders textField with error', () => {
    render(<TextField id="test-id" error />);
    const textField = screen.getByTestId('text-input');
    const textLabel = screen.getByTestId('text-label');
    expect(textField).toHaveClass('errorInput');
    expect(textLabel).toHaveClass('errorLabel');
  });

  it('renders textField with error', () => {
    render(<TextField id="test-id" />);
    const textField = screen.getByTestId('text-input');
    const textLabel = screen.getByTestId('text-label');
    expect(textField).not.toHaveClass('errorInput');
    expect(textLabel).not.toHaveClass('errorLabel');
  });
});

describe('testing label props', () => {
  it('renders textField with label', () => {
    render(<TextField id="test-id" label="Age" />);
    const textLabel = screen.getByTestId('text-label');
    expect(textLabel).toHaveTextContent('Age');
  });
});

describe('testing isDisabled props', () => {
  it('renders disabled textField', () => {
    render(<TextField id="test-id" disabled />);
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeDisabled();
  });

  it('renders disabled textField', () => {
    render(<TextField id="test-id" disabled={false} />);
    const textInput = screen.getByTestId('text-input');
    expect(textInput).not.toBeDisabled();
  });
});

describe('testing onClick props', () => {
  it('calls function 1 time', () => {
    const onClick = jest.fn();
    render(<TextField id="test-id" select onClick={onClick} />);
    const textField = screen.getByTestId('text-field');
    fireEvent.click(textField);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('testing selectedValue props', () => {
  it('renders textField with selectedValue', () => {
    render(<TextField id="test-id" select selectedValue="mockValue" />);
    const input = screen.getByTestId('text-input');
    expect(input).toHaveValue('mockValue');
  });
});
