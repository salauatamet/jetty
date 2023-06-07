const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://meteor-api.onrender.com',
      changeOrigin: true,
    }),
  )
}