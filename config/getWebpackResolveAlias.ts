import path from 'path';

import getTsconfigPaths from './getTsconfigPaths';

const getWebpackResolveAlias = (root: string) => {
    const { base, paths } = getTsconfigPaths();

    return Object.entries(paths).reduce(
        (aliases, [name, relative]) => ({ ...aliases, [name]: path.resolve(root, base, relative) }),
        {}
    );
};

export default getWebpackResolveAlias;
