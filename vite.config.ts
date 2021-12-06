import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
const config: UserConfig = {
  plugins: [preact(), ssr(),viteCompression({
    algorithm: 'brotliCompress'
  }),viteImagemin({
    gifsicle: {
      optimizationLevel: 9,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 9,
    },
    mozjpeg: {
      quality: 40,
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
          active: true,
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
