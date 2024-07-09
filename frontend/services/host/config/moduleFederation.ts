import packageJson from '../package.json';

interface envHosts {
    SHOP_REMOTE_URL: string,
    ADMIN_REMOTE_URL: string
}

export const moduleFederationConfig = (options: envHosts) => {
    return {
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
            shop: `watchShop@${options.SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `watchAdmin@${options.ADMIN_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true
            },
            'react-router-dom': {
                eager: true
            },
            'react-dom': {
                eager: true
            }
        }
    }
}
