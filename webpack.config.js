const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require("./utils");
const fs = require("fs");
const config = require("./config");

let babelrc = {};
try {
    babelrc =  JSON.parse(fs.readFileSync(".babelrc").toString());
} catch (e) {
    console.error("error parse babelrc");
}

module.exports = {
    entry: "./src/aui.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    watch: false,
    module: {
        rules: [
            {
                test: /[\.js\.jsx\.es]$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: Object.assign({
                        presets: [
                            [
                                'env',
                                {
                                    modules: false,
                                    targets: {
                                        "browsers": ["ie >= 10"]
                                    }
                                }
                            ]
                        ],
                    }, babelrc, {}),
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `src/index.html`,
            filename: `index.html`,
            inject: false
        })
    ]
};