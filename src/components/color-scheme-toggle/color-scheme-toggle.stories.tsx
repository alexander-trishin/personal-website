import type { Meta, StoryObj } from '@storybook/react';

import { ColorSchemeToggle } from './color-scheme-toggle';

const meta: Meta<typeof ColorSchemeToggle> = {
    title: 'Color Scheme Toggle',
    component: ColorSchemeToggle
};

export default meta;

type Story = StoryObj<typeof ColorSchemeToggle>;

export const Basic: Story = {};
