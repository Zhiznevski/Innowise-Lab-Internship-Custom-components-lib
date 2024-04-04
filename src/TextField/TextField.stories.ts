import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    disabled: false,
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    disabled: false,
  },
};
