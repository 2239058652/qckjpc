import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import purgeIcons from 'vite-plugin-purge-icons';
import windiCSS from 'vite-plugin-windicss';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { configHtmlPlugin } from './html';
import { configPwaConfig } from './pwa';
import { configMockPlugin } from './mock';
import { configCompressPlugin } from './compress';
import { configStyleImportPlugin } from './styleImport';
import { configVisualizerConfig } from './visualizer';
import { configThemePlugin } from './theme';
import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';
import { configHmrPlugin } from './hmr';
// 引入cesium插件
import cesium from 'vite-plugin-cesium';
//引入文件自动复制插件
import copy from 'rollup-plugin-copy';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend(),
    // 兼容vite中的cjs导入语法
    viteCommonjs(),
    // 使用cesium需要引入插件
    cesium(),
    //文件自动复制插件
    copy({
      targets: [
        //测试复制liveplayer，功能正常；但liveplayer提供的无法正常使用
        // {
        //   src: 'node_modules/@liveqing/liveplayer-v3/dist/component/liveplayer-lib.min.js',
        //   dest: 'public/js',
        // },
      ],
    }),
  ];

  // vite-plugin-windicss
  vitePlugins.push(windiCSS());

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin());

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons());

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());

  //vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild));

  // The following plugins only work in the production environment
  if (isBuild) {
    //vite-plugin-imagemin
    //不压缩图片
    // VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    );

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv));
  }

  return vitePlugins;
}
