import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { options } from './mockData';

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
  },
};
