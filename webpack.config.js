//Konfiguracja Webpack
module.exports = {
    entry: "./js/workshops.jsx",
    output: { filename: "./js/out.js" },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['minify', 'es2015', 'stage-2' , 'react'] }
            }
        ]
    }
}
