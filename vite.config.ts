import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import PkgConfig from 'vite-plugin-package-config'

const isSsr = process.argv.some(item => item === '--ssr');

const config: UserConfig = {
  plugins: [
    preact(),
    ssr(),
    PkgConfig(),
    viteCompression({
      algorithm: 'brotliCompress'
    }),
    viteImagemin({
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
          }
        ]
      }
    })
  ],

  server: {
    port: 7503,
    hmr: {
      path: 'wss',
      protocol: 'wss',
      clientPort: 7503,
      port: 7503
    }
  },

  build: isSsr ? {} : {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if(id.includes('node_modules')) {
            const name = id.match(/node_modules\/([^\/]*)/)[1];
            
            return name;
          }

          else return 'vendor';
        }
      }
    }
  },

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
