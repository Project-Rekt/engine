const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let testEntries = glob.sync('./tests/**/*.js').reduce((acc, path) => {
    let entry = path.replace('.js', '').replace('./', '');
    acc[entry] = path;
    return acc;
}, {});

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        ...testEntries
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Project REKT Engine | DEVELOPMENT",
            inject: true,
            filename: 'index.html',
            chunks: ['index']
        }),
        ...Object.keys(testEntries).map(entry => {
            console.log(entry)
            return new HtmlWebpackPlugin({
                title: `Project REKT Engine | TEST ${entry}`,
                inject: true,
                filename: `${entry}/index.html`,
                chunks: [entry]
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};