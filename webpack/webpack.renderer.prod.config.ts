import * as merge from 'webpack-merge'

import baseConfig from './webpack.renderer.config'

export default merge.smart(baseConfig, {
    mode: 'production',
})
