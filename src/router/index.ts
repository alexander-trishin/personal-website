import type { ComponentPropsWithoutRef } from 'react';
import { createNavigation } from 'next-intl/navigation';

import { routing } from '@/i18n/routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type LinkProps = ComponentPropsWithoutRef<typeof Link>;
