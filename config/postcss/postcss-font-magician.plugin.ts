export default [
    'postcss-font-magician',
    {
        display: 'swap',
        formats: ['eot', 'woff', 'ttf', 'svg'],
        variants: {
            Lora: {
                '400': [],
                '400 italic': [],
                '700': [],
                '700 italic': []
            },
            Poppins: {
                '300': [],
                '400': [],
                '500': [],
                '600': [],
                '700': []
            }
        },
        foundries: ['google']
    }
];
