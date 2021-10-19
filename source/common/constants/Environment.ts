import type { EnvironmentMode } from '.';

const {
    NODE_ENV,
    PUBLIC_URL,
    REACT_APP_ANALYTICS_ID,
    REACT_APP_ANALYTICS_URI,
    REACT_APP_WEBAPI_BASEURL
} = process.env;

const Environment = {
    Analytics: {
        Id: REACT_APP_ANALYTICS_ID,
        Uri: REACT_APP_ANALYTICS_URI
    },
    BaseUrl: {
        WebApi: REACT_APP_WEBAPI_BASEURL
    },
    Mode: NODE_ENV as EnvironmentMode | undefined,
    PublicUrl: PUBLIC_URL
};

export default Environment;
