var path = require('path');

var libraryName = 'es6';
var outputFile = libraryName + '.js';

var config = {
    devtool: 'source-map',

    entry: ['./src/index.js'],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: outputFile,
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};

module.exports = config;
