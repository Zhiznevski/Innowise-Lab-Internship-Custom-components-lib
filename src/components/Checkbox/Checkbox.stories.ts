import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Checkbox from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'unchecked',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'checked',
  },
};

export const DisabledCheked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'disabled',
  },
};

export const DisabledUncheked: Story = {
  args: {
    disabled: true,
    checked: false,
    label: 'disabled',
  },
};
