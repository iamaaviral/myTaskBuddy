// var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                excludes: /node_modules/,
                query: {
                    presets: ['react','es2015','react-hmre']
                }
            }
        ]
    }
}
