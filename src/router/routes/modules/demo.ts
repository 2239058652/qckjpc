import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/ymsw',
  meta: {
    icon: 'ion:grid-outline',
    title: '集成测试中',
    orderNo: 20,
  },
  children: [
    {
      path: 'qzj',
      name: 'qzj',
      component: () => import('/@/views/demo/qzj/index.vue'),
      meta: {
        title: '数据维护',
      },
    },
    {
      path: 'layout',
      name: 'Layout',
      component: () => import('/@/views/demo/antd/layout.vue'),
      meta: {
        title: 'UI测试-布局',
      },
    },
    {
      path: 'form',
      name: 'Form',
      component: () => import('/@/views/demo/antd/form.vue'),
      meta: {
        title: 'UI测试-表单',
      },
    },
    //   {
    //     path: 'cesium',
    //     name: 'Cesium',
    //     component: () => import('/@/views/demo/cesium/index.vue'),
    //     meta: {
    //       title: 'cesium',
    //     },
    //   },
  ],
};

export default dashboard;
