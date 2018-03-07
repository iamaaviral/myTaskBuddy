const express = require('express');
const path = require('path');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const port = process.env.PORT || 8080;
const app = express();

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname));

// app.use('/', function (req, res) {
//     res.sendFile(path.resolve('index.html'));
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
// var port = 3000;

// app.listen(port, function(error) {
//   if (error) throw error;
//   console.log("Express server listening on port", port);
// });
app.listen(port);
// console.log("Express server listening on port", port);
