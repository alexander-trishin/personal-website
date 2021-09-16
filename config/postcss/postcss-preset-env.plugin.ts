export default [
    'postcss-preset-env',
    {
        autoprefixer: {
            flexbox: 'no-2009'
        },
        features: {
            'nesting-rules': true
        },
        stage: 3
    }
];
