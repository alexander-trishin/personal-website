import { paths } from '../env';

export default [
    'tailwindcss',
    {
        config: paths.resolve(paths.base, 'tailwind.config.js')
    }
];
