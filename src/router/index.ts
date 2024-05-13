import type { ComponentPropsWithoutRef } from 'react';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { nextIntlConfig } from '@/i18n/next-intl-config';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(nextIntlConfig);

export type LinkProps = ComponentPropsWithoutRef<typeof Link>;
