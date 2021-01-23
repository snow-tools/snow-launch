/**
 * @project     snow-launch
 *
 * @fileName    webpack.worker.prod.config.ts
 * @filePath    /webpack/webpack.worker.prod.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 21:06:07
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 21:06:07
 */

import * as merge from 'webpack-merge'

import baseConfig from './webpack.worker.config'

export default merge.smart(baseConfig, {
    mode: 'production',
})
