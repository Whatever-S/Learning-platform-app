const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://api.wisey.app/api/v1/",
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                "/api": ""
            }
    })
    );
};