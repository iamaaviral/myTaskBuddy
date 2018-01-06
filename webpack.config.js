// var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: require("path").resolve("./dist"),
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
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                excludes: /node_modules/,
                query: {
                    presets: ['react','es2015','react-hmre','stage-0']
                }
            }
        ]
    }
}
