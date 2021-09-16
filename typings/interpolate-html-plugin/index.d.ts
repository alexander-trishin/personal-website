declare module 'interpolate-html-plugin' {
    import type { Compiler, WebpackPluginInstance } from 'webpack';

    class InterpolateHtmlWebpackPlugin implements WebpackPluginInstance {
        constructor(options: { [key in string]: string });

        apply(compiler: Compiler): void;
    }

    export default InterpolateHtmlWebpackPlugin;
}
