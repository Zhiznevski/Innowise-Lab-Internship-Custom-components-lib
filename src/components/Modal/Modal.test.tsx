import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

const onClose = jest.fn();

describe('testing isOpen props', () => {
  it('renders modal', () => {
    render(<Modal open />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('not renders modal', () => {
    render(<Modal open={false} />);
    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
});

describe('testing onClose props', () => {
  it('calls onClose function 1 time', () => {
    render(<Modal open onClose={onClose} />);
    const background = screen.getByTestId('background');
    fireEvent.click(background);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('testing children props', () => {
  it('renders modal with child element', () => {
    render(
      <Modal open>
        <h1>title</h1>
      </Modal>
    );
    const modal = screen.getByTestId('modal');
    const title = screen.getByRole('heading');
    expect(modal).toContainElement(title);
  });
});
