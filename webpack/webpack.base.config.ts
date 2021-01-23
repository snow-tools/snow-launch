/**
 * @project     snow-launch
 *
 * @fileName    webpack.main.config.ts
 * @filePath    /webpack/webpack.main.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 20:51:30
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 21:17:48
 */

'use strict'

import * as path from 'path'

function srcPath(subdir: string) {
    return path.resolve(__dirname, '../src', subdir)
}

export default {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@': srcPath('renderer'),
        },
    },
    devtool: 'source-map',
    plugins: [],
}
