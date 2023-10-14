import Path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import autoprefixer from 'autoprefixer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
	entry: Path.resolve(__dirname, './src/index.js'),
	output: {
		path: Path.resolve(__dirname, './dist'),
		filename: 'index.js',
	},
	module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
