
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill','./index.tsx'],
        // main: ['./App.tsx'],

    },
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname,'dist')
    },
    resolve:{
        extensions:['.js','.json','.png','.jsx','.tsx'],
        alias: {
            '@' : path.resolve(__dirname,'src/js'),
            '@my':path.resolve(__dirname,'src/a')
        }
    },

    optimization: optimization(),

    devServer: {
        port: 4200,
        overlay:true
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        })
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use: cssLoaders()
            },
            {
                test:/\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test:/\.(s[ac]ss)$/,
                use: cssLoaders('sass-loader')
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath:'../',
                    name: '[path][name].[ext]',
                },
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    publicPath:'../',
                    name: '[path][name].[ext]',
                }
               
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/, 
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/, 
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
            {
                test: /\.tsx$/, 
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ]
            },
        ]
    }
}


// при build оптимизирует(жжимает, удалает коментарии) 
function optimization(){
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new OptimizeCSSAssetsPlugin(),
            new TerserJSPlugin()
        ]
    }
    return config
}

//паттерны webpack => [...]
//[name](имя файла)[hash](праизвольный хеш)
function fileName(ext){
  
    return isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`
}

function cssLoaders(opt){
    const loaders = [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
              hmr: isDev,
              reloadAll: true
          },
        },
        'css-loader',
      ];
      if(opt){
          loaders.push(opt)
      }
      return loaders
}

function babelOptions(preset) {
    const opt = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }
    if(preset){
        opt.presets.push(preset)
    }
    return opt
}
