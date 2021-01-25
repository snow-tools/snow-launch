/**
 * @project     snow-launch
 *
 * @fileName    webpack.renderer.config.ts
 * @filePath    /webpack/webpack.renderer.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 20:56:42
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-24, 22:35:58
 */

import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

import baseConfig from './webpack.base.config'

export default merge.smart(baseConfig as any, {
    target: 'electron-renderer',
    entry: {
        app: ['@babel/polyfill', './src/renderer/app.tsx'],
    },
    output: {
        filename: '[name]-renderer.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        ['@babel/preset-env', { targets: { browsers: 'last 2 versions ' } }],
                        '@babel/preset-typescript',
                        '@babel/preset-react',
                    ],
                    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]!static',
                },
                include: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            reportFiles: ['src/renderer/**/*'],
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ title: 'SnowLaunch', filename: 'renderer.html' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
})
