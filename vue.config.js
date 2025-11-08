const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: 'localhost', // host que o navegador acessa
        port: 8090,            // porta externa mapeada no Docker
      },
    },
    historyApiFallback: true,
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
      options: {
        usePolling: true, // necessário no Docker para hot reload
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('@tailwindcss/postcss'), // <- novo pacote
            require('autoprefixer'),
          ],
        },
      },
    },
  },
})
