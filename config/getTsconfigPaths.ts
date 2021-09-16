import path from 'path';

import tsconfig from '../tsconfig.json';

const getTsconfigPaths = () => {
    const {
        compilerOptions: { baseUrl, paths }
    } = tsconfig;

    const normalize = (input: string) => input.replace(/\/\*$/, '');

    return {
        base: path.normalize(baseUrl),
        paths: Object.entries(paths).reduce(
            (result, [name, [value]]) => ({
                ...result,
                [normalize(name)]: normalize(value)
            }),
            {} as Record<string, string>
        )
    };
};

export default getTsconfigPaths;
