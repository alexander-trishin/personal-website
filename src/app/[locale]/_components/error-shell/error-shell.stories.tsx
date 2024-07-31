import type { Meta, StoryObj } from '@storybook/react';

import { ErrorShell, ErrorShellImage, ErrorShellText, ErrorShellTitle } from '.';

const meta: Meta<typeof ErrorShell> = {
    title: 'Error Shell',
    component: ErrorShell
};

export default meta;

type Story = StoryObj<typeof ErrorShell>;

export const Basic: Story = {
    args: {
        bd: '0.25rem solid var(--mantine-primary-color-6)',
        children: (
            <>
                <ErrorShellImage ta="center">&lt;ErrorShellImage /&gt;</ErrorShellImage>
                <ErrorShellTitle>&lt;ErrorShellTitle /&gt;</ErrorShellTitle>
                <ErrorShellText>&lt;ErrorShellText /&gt;</ErrorShellText>
            </>
        )
    }
};
