import { paths } from '../env';

export default [
    'postcss-url',
    {
        url: 'copy',
        basePath: paths.source,
        assetsPath: 'images',
        useHash: true
    }
];
