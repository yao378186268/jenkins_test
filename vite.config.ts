import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.15.92:60060/mock/13',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        bypass: function (req, res, proxyOptions) {
          console.log(
            proxyOptions.rewrite(req.url),
            '-------',
            proxyOptions.target
          );

          const proxyUrl = new URL(
            proxyOptions.rewrite(req.url) || '',
            proxyOptions.target as string
          )?.href;
          console.log(proxyUrl);

          res.setHeader('proxy-url', proxyUrl);
        },
      },
      // '/api1': {
      //   target:
      //     'https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-toutiao.fe.xitu_juejin_cn_web-default',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api1\/api2/, ''),
      // },
      '/api/api2': {
        target:
          'http://192.168.15.92:60060/mock/13/dmp/console/customer/customers/list',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/api2/, ''),
      },
    },
  },
});
