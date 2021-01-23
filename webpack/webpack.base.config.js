'use strict'

const path = require('path')

function srcPath(subdir) {
    return path.resolve(__dirname, '../src', subdir)
}

module.exports = {
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
