import {buildWebpack, BuildMode, BuildPaths} from '@packages/build-config';
import path from 'path';
import webpack from 'webpack';
import {moduleFederationConfig} from './config/moduleFederation';

interface envVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean
}

export default (env: envVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config = buildWebpack({
        port: env.port ?? 3002,
        mode: env.mode ?? 'development',
        paths: paths,
        analyzer: env.analyzer
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin(moduleFederationConfig))

    return config
};
