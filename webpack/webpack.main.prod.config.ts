/**
 * @project     snow-launch
 *
 * @fileName    webpack.main.config.ts
 * @filePath    /webpack/webpack.main.config.ts
 *
 * @createdBy   Plume <plume.snowbot@gmail.com>
 * @createdAt   2021-01-23, 20:56:35
 *
 * @updatedBy   Plume <plume.snowbot@gmail.com>
 * @updatedAt   2021-01-23, 21:19:40
 */

import * as merge from 'webpack-merge'
import baseConfig from './webpack.main.config'

export default merge.smart(baseConfig as any, {
    mode: 'production',
})
