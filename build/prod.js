const pkg = require('../package.json'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    pages: path.join(__dirname, '..'),
    vendor: Object.keys(pkg.dependencies),
    src: path.join(__dirname, '..', 'src'),
    config: path.join(__dirname, '..', 'config')
};

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: PATHS.src,
        vendor: PATHS.vendor
    },
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },
    output: {
        path: PATHS.pages,
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
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ]
        }),
        new HtmlwebpackPlugin({
            title: 'CALsera - Track your Coursera week.',
            inject: false,
            template: './src/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
