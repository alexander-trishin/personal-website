export interface AppParams {
    locale: Locale;
}

interface AppPropsWithParams {
    params: AppParams;
}

export interface AppLayoutProps extends AppPropsWithParams {
    children: React.ReactNode;
}

export interface AppPageProps extends AppPropsWithParams {}
