import 'webpack-dev-server';
import * as webpack from 'webpack';
import { resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Mode = 'none' | 'development' | 'production' | undefined;

const NODE_ENV: Mode = process.env.NODE_ENV as Mode;

const PREFIX = '/spa-deploy-09.2022';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    publicPath: NODE_ENV === 'production' ? PREFIX : '/',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "404.html",
    }),
    new webpack.DefinePlugin({
      PRODUCTION: NODE_ENV == 'production',
      PREFIX: JSON.stringify(PREFIX),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['public/index.html'],
    historyApiFallback: true,
  },
};

export default config;
