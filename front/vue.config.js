module.exports = {
    devServer: {
        proxy: {
            "^/coupon/": {
                target: "http://back:5000",
                ws: true,
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: { "^/coupon/": "/coupon/" }
            }
        }
    },
    configureWebpack: {
        devServer: {
            watchOptions: {
                poll: true
            }
        }
    }
};
