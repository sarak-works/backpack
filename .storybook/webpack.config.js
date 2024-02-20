/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sassFunctions = require('../packages/bpk-mixins/sass-functions');
const postCssPlugins = require('../scripts/webpack/postCssPlugins');

const { BPK_TOKENS } = process.env;
const rootDir = path.resolve(__dirname, '../');
const devMode = process.env.NODE_ENV !== "production";

module.exports = ({ config }) => {
  config.plugins.push(new MiniCssExtractPlugin());

  const i = config.module.rules.findIndex(
    rule => rule.test.toString() === '/\\.css$/',
  );
  config.module.rules.splice(i, 1);

  config.module.rules.push({
    test: /\.[jt]sx?$/,
    exclude: /node_modules\/(?!bpk-).*/,
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-env']],
    },
  });
  config.module.rules.push({
    test: /\.(js|jsx)?$/,
    loader: 'babel-loader',
    options: {
      plugins: ['babel-plugin-react-docgen'],
    },
  });
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  /* eslint-disable-next-line no-param-reassign */
  config.resolve.alias = {
    ...config.resolve.alias,
    react: path.join(rootDir, 'node_modules/react'),
    'react-dom': path.join(rootDir, 'node_modules/react-dom'),
  };
  config.module.rules.push({
    test: /\.[jt]sx?$/,
    include: /node_modules\/@skyscanner\/bpk-svgs.*/,
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-env']],
    },
  });
  // Handle direct css imports, ie the single stylesheet
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {modules: false}
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [postCssPlugins],
          },
        },
      },
    ],
  });
  // We still want to load the adhoc styling from the example repo.
  config.module.rules.push({
    test: /(examples).*\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [postCssPlugins],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: BPK_TOKENS
            ? fs.readFileSync(
                path.join(
                  rootDir,
                  `node_modules/@skyscanner/bpk-foundations-web/tokens/${BPK_TOKENS}.scss`,
                ),
              )
            : '',
          sassOptions: {
            functions: sassFunctions,
          },
        },
      },
    ],
  });
  // Ensure that `import STYLES from './' still generates a module that has the same hashed CSS Modules for use.
  config.module.rules.push({
    test: /\.scss$/,
    exclude: /(examples).*\.scss$/,
    use: [
      {
        loader: path.resolve('./.storybook/passthrough-loader'),
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[hash:base64]',
            localIdentHashFunction: 'md4',
            localIdentContext: path.resolve(__dirname, "../packages/bpk-stylesheet"),
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [postCssPlugins],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: BPK_TOKENS
            ? fs.readFileSync(
                path.join(
                  rootDir,
                  `node_modules/@skyscanner/bpk-foundations-web/tokens/${BPK_TOKENS}.scss`,
                ),
              )
            : '',
          sassOptions: {
            functions: sassFunctions,
          },
        },
      },
    ],
  });
  return config;
};
