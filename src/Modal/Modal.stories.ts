import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ModalApp from './Modal';

const meta = {
  title: 'ModalApp',
  component: ModalApp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn() },
} satisfies Meta<typeof ModalApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shown: Story = {
  args: {},
};
