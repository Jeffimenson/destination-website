// Generated using webpack-cli https://github.com/webpack/webpack-cli
/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
    entry: {
        main: './src/index.js', // this entry point is called main so the output will now also be called main
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true, // Breaks npm run watch, making it delete generated images html loader makes. I think this can be used tho as long as i just do npm run build
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'My Website', // getting title doesn't work with html loader
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main'], // specifies what output scripts should be used in file. if empty, the generated html uses all of them
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    devtool: 'inline-source-map',
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
