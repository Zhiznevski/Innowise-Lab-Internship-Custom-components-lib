import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Switch from './Switch';

const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const DisabledCheked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const DisabledUncheked: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};
