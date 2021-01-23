/**
 * @project     snow-launch
 *
 * @fileName    webpack.worker.config.ts
 * @filePath    /webpack/webpack.worker.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 21:03:53
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 23:11:16
 */

import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

import baseConfig from './webpack.base.config'

export default merge.smart(baseConfig as any, {
    target: 'electron-renderer',
    entry: {
        app: ['@babel/polyfill', './src/worker/index.ts'],
    },
    output: {
        filename: '[name]-worker.js',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        ['@babel/preset-env', { targets: { browsers: 'last 2 versions ' } }],
                        '@babel/preset-typescript',
                    ],
                    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
                },
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
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ title: 'Worker', filename: 'worker.html' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
})
