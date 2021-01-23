/**
 * @project     snow-launch
 *
 * @fileName    webpack.main.config.ts
 * @filePath    /webpack/webpack.main.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 21:19:43
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 21:26:19
 */

import * as path from 'path'
import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

import baseConfig from './webpack.base.config'

export default merge.smart(baseConfig as any, {
    target: 'electron-main',
    entry: {
        main: './src/main/main.ts',
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
                        ['@babel/preset-env', { targets: 'maintained node versions' }],
                        '@babel/preset-typescript',
                    ],
                    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            reportFiles: ['src/main/**/*'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
})
