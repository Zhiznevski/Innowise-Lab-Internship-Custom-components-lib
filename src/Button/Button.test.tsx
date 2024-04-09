import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
/**
 * @jest-environment jsdom
 */

test('loads and displays greeting', async () => {
  render(<Button disabled />);
  expect(screen.getByRole('button')).toBeDisabled();
});
