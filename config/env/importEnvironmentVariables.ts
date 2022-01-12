import fs from 'fs';

import dotenv from 'dotenv';
import { expand } from 'dotenv-expand';

import paths from './paths';

const importEnvironmentVariables = () => {
    const { NODE_ENV } = process.env;

    [
        `${paths.dotenv}.${NODE_ENV}.local`,
        NODE_ENV !== 'test' && `${paths.dotenv}.local`,
        `${paths.dotenv}.${NODE_ENV}`,
        paths.dotenv
    ].forEach(dotenvFile => {
        if (dotenvFile && fs.existsSync(dotenvFile)) {
            expand(dotenv.config({ path: dotenvFile }));
        }
    });
};

export default importEnvironmentVariables;
