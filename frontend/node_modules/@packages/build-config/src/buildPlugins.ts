import {Configuration} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/types';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import path from 'path';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isProd = options.mode === 'production';
    const isDev = options.mode === 'development';

    const plugins:  Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: path.resolve(options.paths.public, 'index.html'),
            favicon: path.resolve(options.paths.public, `favicon.ico`),
            publicPath: '/'
        }),
    ];

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'styles/[name].[contenthash:8].css',
                chunkFilename: 'styles/[name].[contenthash:8].css'
            })
        )
    }

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }


    return plugins
}
