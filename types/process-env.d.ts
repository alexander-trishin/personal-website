declare namespace NodeJS {
    interface ProcessEnv {
        readonly ANALYZE?: 'true';

        readonly BASE_URL: string;
        readonly GOOGLE_SITE_VERIFICATION: string;
    }
}
