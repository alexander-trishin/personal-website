import fs from 'fs';
import path from 'path';

const rootDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath: string) => path.resolve(rootDirectory, relativePath);

const getPublicUrlOrPath = (isDevelopment: boolean, envPublicUrl?: string) => {
    if (envPublicUrl) {
        envPublicUrl = envPublicUrl.endsWith('/') ? envPublicUrl : envPublicUrl + '/';

        const stubDomain = 'https://reactjs.org';
        const validPublicUrl = new URL(envPublicUrl, stubDomain);

        return isDevelopment
            ? envPublicUrl.startsWith('.')
                ? '/'
                : validPublicUrl.pathname
            : envPublicUrl;
    }

    return '/';
};

const paths = {
    base: resolvePath('.'),
    build: resolvePath('build'),
    config: resolvePath('config'),
    public: resolvePath('public'),
    indexHtml: resolvePath('public/index.html'),
    source: resolvePath('source'),
    indexTsx: resolvePath('source/index.tsx'),
    tsconfig: resolvePath('tsconfig.json'),
    publicUrlOrPath: getPublicUrlOrPath(
        process.env.NODE_ENV !== 'production',
        process.env.PUBLIC_URL
    ),
    resolve: path.resolve
};

export default paths;
