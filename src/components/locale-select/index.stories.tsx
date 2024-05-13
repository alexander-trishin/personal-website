import type { Meta, StoryObj } from '@storybook/react';

import { LocaleSelect } from '.';

const meta: Meta<typeof LocaleSelect> = {
    title: 'Locale Select',
    component: LocaleSelect
};

export default meta;

type Story = StoryObj<typeof LocaleSelect>;

export const Basic: Story = {};
