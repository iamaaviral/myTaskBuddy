module.exports = {
    devtool: 'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    modules: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                excludes: /node_modules/,
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
}
