import type { ReactNode } from 'react';

interface AppParams {
    locale: Locale;
}

interface AppPropsWithParams {
    params: AppParams;
}

interface AppLayoutProps extends AppPropsWithParams {
    children: ReactNode;
}

interface AppPageProps extends AppPropsWithParams {}

export type { AppLayoutProps, AppPageProps, AppParams };
