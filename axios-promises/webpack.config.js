var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            // { test: /\.(js)$/, use: 'babel-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                    {
                        presets:['es2015', 'react', 'stage-0']
                    }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        inline:true,
        port: 8008,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};



