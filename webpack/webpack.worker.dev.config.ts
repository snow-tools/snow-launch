/**
 * @project     snow-launch
 *
 * @fileName    webpack.worker.dev.config.ts
 * @filePath    /webpack/webpack.worker.dev.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 21:06:17
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 21:12:29
 */

import * as merge from 'webpack-merge'
import { spawn } from 'child_process'

import baseConfig from './webpack.worker.config'

module.exports = merge.smart(baseConfig, {
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        port: 2022,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false,
        },
        before() {
            if (process.env.START_HOT) {
                console.log('Starting main process')
                spawn('npm', ['run', 'start-main-dev'], {
                    shell: true,
                    env: process.env,
                    stdio: 'inherit',
                })
                    .on('close', code => process.exit(code || undefined))
                    .on('error', spawnError => console.error(spawnError))
            }
        },
    },
} as any)
