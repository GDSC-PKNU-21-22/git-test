const path = require('path');
const webpack = require('webpack');
const reactRefresh = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  //웹펙 이름 설정
  name :'response_check-setting', 
  mode : 'development', //실서비스에서는 prodeuction
  devtool :'eval', 
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    //아래 두 파일은 합쳐질 파일들이다. 
    app: ['./client'],
  }, //입력
  module: {
    rules: [{
      test:  /\.jsx?/,
      loader : 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
              targets: {
                browsers: ['> 1% in KR'], 
              }
          }],
         '@babel/preset-react'
        ],
        
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug : true}),
    new reactRefresh(),
  ],
  output: {
    //path로 __dirname은 이 파일의 디렉토리 경로이다.
    //그리고 dist는 _dirname/dist 아래에 app.js를 웹펙된 파일로 만드는 것임
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  }, //출력

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },

  
};