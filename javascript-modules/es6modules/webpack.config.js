const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015-native-modules']
                }
            }
        ]
    },
    plugins: [
        new config.optimization.minimize({
            compress: {warnings: false},
            output: {comments: false},
            sourceMap: true
        }),

        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
        })
    ]
}