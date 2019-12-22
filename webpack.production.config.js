const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let testEntries = glob.sync('./tests/**/*.js').reduce((acc, path) => {
    let entry = path.replace(new RegExp(/\/(.[^\/])+\.js$/g), '').replace('./', '');
    acc[entry] = path;
    return acc;
}, {});

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src/index.js'),
        ...testEntries
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Project REKT Engine | DEVELOPMENT",
            inject: true,
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            chunks: ['index']
        }),
        ...Object.keys(testEntries).map(entry => {
            console.log(entry);
            return new HtmlWebpackPlugin({
                title: `Project REKT Engine | TEST ${entry}`,
                inject: true,
                template: `${entry}/index.html`,
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