const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        //entry point of the game
        app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'game.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            include: [ path.resolve(__dirname, "src")],
            exclude: [ path.resolve(__dirname, "node_modules")],
            loader: 'babel-loader',
            query: {
                presets: ["@babel/env"]
            }
        }]
    },
}