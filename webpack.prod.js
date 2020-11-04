// example webpack config
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './example/index.ts'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'main.[hash:6].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(glsl|vs|fs)$/,
        use: [
          { loader: 'ts-shader-loader' },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, './example/index.html'),
    }),
  ],
};
