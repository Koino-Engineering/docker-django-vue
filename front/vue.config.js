module.exports = {
    devServer: {
        proxy: {
            "^/coupon/": {
                target: "http://back:5000",
                changeOrigin: true,
                logLevel: "debug",
            },
            "^/articles": {
                target: "http://back:5000",
                changeOrigin: true,
                logLevel: "debug",
            },
        },
    },
    configureWebpack: {
        devServer: {
            watchOptions: {
                poll: true,
            },
        },
    },
};
