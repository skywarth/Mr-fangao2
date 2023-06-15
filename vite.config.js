/*
 * @Author: liqifeng
 * @Date: 2023-06-15 10:47:05
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2023-06-15 11:10:37
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Cesium from 'vite-plugin-cesium'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(),Cesium()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build:{
    assetsDir:"static",
    rollupOptions:{
      
      input:{
        index:resolve(__dirname,"index.html"),
        // project:resolve(__dirname,"project.html")
      },
      output:{
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:"static/js/[name]-[hash].js",
        assetFileNames:"static/[ext]/name-[hash].[ext]"
      }
    },
  },
})
