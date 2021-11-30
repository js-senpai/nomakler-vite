import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
const config: UserConfig = {
  plugins: [reactRefresh(), ssr(),viteCompression({
    algorithm: 'brotliCompress'
  }),viteImagemin({
    gifsicle: {
      optimizationLevel: 5,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 5,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    webp: {
      quality: 50,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  }),],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  resolve: {
    alias: {
      "react": "@preact/compat",
      "react-dom": "@preact/compat"
    }
  }
};

export default config;
