const path = require("path")
const glob = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin")

let testEntries = glob.sync("./tests/**/main.js").reduce((acc, path) => {
    console.log(path);
    let entry = path
        .replace(new RegExp(/\/(.[^\/])+\.js$/g), "")
        .replace("./", "")
    acc[entry] = path
    return acc
}, {})

module.exports = {
    mode: "development",
    entry: {
        index: path.join(__dirname, "src/index.js"),
        ...testEntries,
    },
    output: {
        path: path.join(__dirname, "dep"),
        filename: "[name].bundle.js",
    },
    devServer: {
        watchContentBase: true,
        contentBase: [
            path.join(__dirname, "src"),
            path.join(__dirname, "tests"),
        ],
        inline: true,
        hot: true,
        compress: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Project REKT Engine | DEVELOPMENT",
            inject: true,
            filename: "index.html",
            template: path.join(__dirname, "src/index.html"),
            chunks: ["index"],
        }),
        ...Object.keys(testEntries).map(entry => {
            console.log(entry)
            return new HtmlWebpackPlugin({
                title: `Project REKT Engine | TEST ${entry}`,
                inject: true,
                template: `${entry}/index.html`,
                filename: `${entry}/index.html`,
                chunks: [entry],
            })
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
}
