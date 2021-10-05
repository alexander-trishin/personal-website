import type { EnvironmentMode } from '.';

const { NODE_ENV, PUBLIC_URL, REACT_APP_ANALYTICS_ID, REACT_APP_ANALYTICS_URI } = process.env;

const Environment = {
    Analytics: {
        Id: REACT_APP_ANALYTICS_ID,
        Uri: REACT_APP_ANALYTICS_URI
    },
    Mode: NODE_ENV as EnvironmentMode | undefined,
    PublicUrl: PUBLIC_URL
};

export default Environment;
