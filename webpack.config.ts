import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlWebpackPlugin from 'interpolate-html-plugin';
import LodashWebpackPlugin from 'lodash-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    DefinePlugin,
    EntryObject,
    Configuration as WebpackConfiguration,
    WebpackPluginInstance
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { WebpackManifestPlugin as ManifestWebpackPlugin } from 'webpack-manifest-plugin';

import {
    getClientEnvironment,
    getWebpackResolveAlias,
    importEnvironmentVariables,
    paths
} from './config';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

importEnvironmentVariables();

const createWebpackConfiguration = (): Configuration => {
    const clientEnvironment = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
    const isProduction = process.env.NODE_ENV === 'production';

    return {
        bail: isProduction,
        mode: isProduction ? 'production' : 'development',
        target: isProduction ? 'browserslist' : 'web',
        devtool: isProduction ? 'source-map' : 'eval',
        entry: {
            main: [paths.indexTsx]
        },
        module: {
            parser: {
                javascript: {
                    strictExportPresence: true
                }
            },
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.tsx?$/,
                            include: paths.source,
                            loader: 'babel-loader',
                            options: {
                                babelrc: true,
                                plugins: isProduction ? [] : ['react-refresh/babel'],
                                cacheDirectory: !isProduction,
                                cacheCompression: true,
                                compact: isProduction
                            }
                        },
                        {
                            test: /\.(js|mjs)$/,
                            loader: 'babel-loader',
                            options: {
                                babelrc: true,
                                compact: false,
                                cacheDirectory: true,
                                cacheCompression: false,
                                sourceMaps: true,
                                inputSourceMap: true
                            }
                        },
                        {
                            test: /\.(pcss|css)$/,
                            use: [
                                isProduction
                                    ? {
                                          loader: MiniCssExtractPlugin.loader,
                                          options: paths.publicUrlOrPath.startsWith('.')
                                              ? { publicPath: '../../' }
                                              : {}
                                      }
                                    : 'style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 2,
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        postcssOptions: {
                                            config: paths.resolve(
                                                paths.config,
                                                'postcss.config.cjs'
                                            )
                                        },
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        {
                            test: /\.svg$/,
                            oneOf: [
                                {
                                    dependency: { not: ['url'] },
                                    loader: '@svgr/webpack',
                                    options: {
                                        prettier: false,
                                        svgo: false,
                                        titleProp: true,
                                        ref: true
                                    }
                                },
                                {
                                    type: 'asset'
                                }
                            ],
                            issuer: {
                                and: [/\.tsx?$/]
                            }
                        },
                        {
                            exclude: [/\.tsx?$/, /\.html$/, /\.json$/, /\.svg$/],
                            type: 'asset',
                            parser: {
                                dataUrlCondition: {
                                    maxSize: 1024
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new LodashWebpackPlugin() as WebpackPluginInstance,
            new HtmlWebpackPlugin({
                inject: true,
                template: paths.indexHtml,
                ...(isProduction
                    ? {
                          minify: {
                              removeComments: true,
                              collapseWhitespace: true,
                              removeRedundantAttributes: true,
                              useShortDoctype: true,
                              removeEmptyAttributes: true,
                              removeStyleLinkTypeAttributes: true,
                              keepClosingSlash: true,
                              minifyJS: true,
                              minifyCSS: true,
                              minifyURLs: true
                          }
                      }
                    : {})
            }),
            new DefinePlugin({
                'process.env': Object.keys(clientEnvironment).reduce(
                    (env, key) => ({
                        ...env,
                        [key]: JSON.stringify(
                            clientEnvironment[key as keyof typeof clientEnvironment]
                        )
                    }),
                    {}
                )
            }),
            new InterpolateHtmlWebpackPlugin(clientEnvironment),
            new ManifestWebpackPlugin({
                fileName: 'asset-manifest.json',
                publicPath: paths.publicUrlOrPath,
                generate: (seed, files, entrypoints) => {
                    const manifestFiles = files.reduce(
                        (manifest, file) => ({
                            ...manifest,
                            [file.name]: file.path
                        }),
                        seed
                    );

                    const entrypointFiles = entrypoints.main.filter(
                        fileName => !fileName.endsWith('.map')
                    );

                    return {
                        files: manifestFiles,
                        entrypoints: entrypointFiles
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as Record<string, any>;
                }
            }),
            ...(isProduction
                ? [
                      new MiniCssExtractPlugin({
                          filename: 'static/css/[name].[contenthash:8].css',
                          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
                      }),
                      new CopyWebpackPlugin({
                          patterns: [
                              {
                                  from: 'public/*',
                                  to: '[name][ext]',
                                  globOptions: {
                                      ignore: ['**/index.html']
                                  }
                              }
                          ]
                      }),
                      new CompressionWebpackPlugin({
                          algorithm: 'brotliCompress',
                          filename: '[path][base].br[query]',
                          threshold: 8192
                      }),
                      new CompressionWebpackPlugin({
                          algorithm: 'gzip',
                          filename: '[path][base].gz[query]',
                          threshold: 8192
                      })
                  ]
                : [new ReactRefreshWebpackPlugin()])
        ],
        resolve: {
            alias: getWebpackResolveAlias(paths.base),
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
        },
        output: {
            clean: true,
            publicPath: paths.publicUrlOrPath,
            path: paths.build,
            pathinfo: !isProduction,
            assetModuleFilename: 'static/media/[name].[hash:8].[ext][query]',
            filename: isProduction
                ? 'static/js/[name].[contenthash:8].js'
                : 'static/js/[name].bundle.js',
            chunkFilename: isProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : 'static/js/[name].chunk.js'
        },
        stats: 'errors-warnings',
        optimization: {
            usedExports: true,
            minimize: isProduction,
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        reuseExistingChunk: true
                    }
                }
            },
            runtimeChunk: {
                name: (entrypoint: EntryObject) => `runtime-${entrypoint.name}`
            }
        },
        devServer: {
            devMiddleware: {
                publicPath: paths.publicUrlOrPath.slice(0, -1)
            },
            static: {
                directory: paths.public,
                publicPath: paths.publicUrlOrPath
            },
            historyApiFallback: {
                disableDotRule: true,
                index: paths.publicUrlOrPath
            },
            hot: true,
            port: 3000,
            open: true
        }
    };
};

export default createWebpackConfiguration;
