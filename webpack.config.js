const { resolve } = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [{
            test: /\\.(png|jpe?g|mp4|mp3)$/i, 
            use: 'file-loader',
            options: {
                name: '' 
            }
        }],
        rules: [{ 
                test: /\\.css$/, 
				use: ['style-loader', 'css-loader'],
 
        }]
    }
  
};