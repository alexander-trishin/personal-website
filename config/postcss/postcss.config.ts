import fontMagicianPlugin from './postcss-font-magician.plugin';
import presetEnvPlugin from './postcss-preset-env.plugin';
import tailwindPlugin from './tailwind.plugin';

export default {
    plugins: ['postcss-flexbugs-fixes', presetEnvPlugin, fontMagicianPlugin, tailwindPlugin]
};
