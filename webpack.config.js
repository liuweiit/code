

let htmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry:'./src/js/index.js',
    output:{
        path:__dirname+'/dist',
        filename:'index.min.js'
    },

    plugins:[
        new htmlPlugin({
            template:__dirname+'/src/html/index.html',
            filename:'index.html',
            minify:{
                collapseWhitespace:false
            },
            hash:true
        }),
        new ExtractTextPlugin('index.css')
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            }
        ]
    }
}

module.exports = config;