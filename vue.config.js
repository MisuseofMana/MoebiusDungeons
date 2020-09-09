const {ProvidePlugin} = require('webpack');

module.exports = {
	lintOnSave: false,
    configureWebpack: {
        plugins: [
            new ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            }),
        ],
    },
    chainWebpack: (config) => {
        config.module
            .rule('txt')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();
    },
}