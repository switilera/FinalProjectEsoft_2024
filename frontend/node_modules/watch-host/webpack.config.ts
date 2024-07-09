import {buildWebpack, BuildMode, BuildPaths} from '@packages/build-config';
import path from 'path';
import webpack from 'webpack';
import {moduleFederationConfig} from './config/moduleFederation';

interface envVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean,
    SHOP_REMOTE_URL?: string,
    ADMIN_REMOTE_URL?: string
}

export default (env: envVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths,
        analyzer: env.analyzer
    });

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';

    config.plugins.push(new webpack.container.ModuleFederationPlugin(
        moduleFederationConfig({SHOP_REMOTE_URL, ADMIN_REMOTE_URL})
    ))

    return config;
};
