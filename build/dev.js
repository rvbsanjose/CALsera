const pkg = require('../package.json'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    vendor: Object.keys(pkg.dependencies),
    src: path.join(__dirname, '..', 'src'),
    config: path.join(__dirname, '..', 'config')
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
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: [ PATHS.config, PATHS.src ]
            },
            {
                test: /\.scss$/,
                include: PATHS.src,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ]
        }),
        new HtmlwebpackPlugin({
            title: 'CALsera - Track your Coursera week.',
            inject: false,
            template: './src/index.html'
        })
    ]
};
