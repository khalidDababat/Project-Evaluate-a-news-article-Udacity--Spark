const path = require('path');
const webpack = require('webpack'); 

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin'); // To add PWA support

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    output: {
        
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
    devServer: {
        
        port: 8081,
         
    
      },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

                options:{
                    presets: ['@babel/preset-env'] // Use preset-env for JavaScript transpilation
                } 

            },

            { 
                
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
            ]
    },



    plugins: [
         // HTML template to use
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true, // Simulate the removal of files
            verbose: true, // Log the cleaning process
            cleanStaleWebpackAssets: true,// Automatically remove all unused webpack
            protectWebpackAssets: false// Allow removal of files that are currently being used
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css', // Output CSS file name
            
        }),
        new WorkboxPlugin.GenerateSW({

        })

    ],
   
}
