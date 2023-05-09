import '/@/design/index.less';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';
// 导入ant-design
import Antd from 'ant-design-vue';
//导入datav
// import * as dataV from '@jiaminghi/data-view';//使用该行界面中会无效果，提示无法加载对应的组件
import dataV from '@jiaminghi/data-view';
//导入vue3-video-player
import VueVideoPlayer from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

// Importing on demand in local development will increase the number of browser requests by around 20%.
// This may slow down the browser refresh speed.
// Therefore, only enable on-demand importing in production environments .
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
//发布环境下需要加入antd的样式文件，否则会出现组件样式不正常
if (import.meta.env.PROD) {
  import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);

  //全局注册ant-design
  app.use(Antd);

  //全局注册datav
  app.use(dataV);

  app.use(VueVideoPlayer);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Register global components
  registerGlobComp(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
