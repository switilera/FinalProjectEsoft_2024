import packageJson from '../package.json';

export const moduleFederationConfig = {
    name: 'watchShop',
    filename: 'remoteEntry.js',
    exposes: {
        './Router': './src/router/Router.tsx'
    },
    shared: {
        ...packageJson.dependencies,
        react: {
            eager: true,
            requiredVersion: packageJson.dependencies.react
        },
        'react-router-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-router-dom']
        },
        'react-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-dom']
        },
        'antd': {
            eager: true,
            requiredVersion: packageJson.dependencies.antd
        },
        'dayjs': {
            eager: true,
            requiredVersion: packageJson.dependencies.dayjs
        },
        'mobx': {
            eager: true,
            requiredVersion: packageJson.dependencies.mobx
        }
    }
}