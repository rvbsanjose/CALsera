const pkg = require('./package.json'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src'),
    vendor: Object.keys(pkg.dependencies)
};

module.exports = {
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'source-map',
    entry: {
        app: PATHS.src,
        vendor: PATHS.vendor
    },
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'babel-loader' ],
                include: PATHS.src
            },
            {
                test: /\.scss$/,
                include: PATHS.src,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ]
        }),
        new HtmlwebpackPlugin({
            title: 'CALsera',
            inject: false,
            template: './src/index.html'
        })
    ]
};
