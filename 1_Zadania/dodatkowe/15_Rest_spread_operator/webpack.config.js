const path = require('path')

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'out.js',
        path: path.resolve(__dirname, 'js')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}