import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
const config: UserConfig = {
  plugins: [react(), ssr(),viteCompression(),viteImagemin({
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
};

export default config;
