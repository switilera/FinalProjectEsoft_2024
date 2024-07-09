import {BuildOptions} from '../types/types';

export function buildBabelLoader(options: BuildOptions) {
    const isDev = options.mode === 'development';

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                cacheCompression: false,
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: isDev ? 'automatic' : 'classic'
                        }
                    ]
                ]
            }
        }
    }
}
