import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const htglManage: AppRouteModule = {
  path: '/htgl',
  name: 'Htgl',
  component: LAYOUT,
  redirect: '/xtsz',
  meta: {
    icon: 'ion:grid-outline',
    title: '后台管理',
    orderNo: 20,
  },
  children: [
    {
      path: 'xtsz',
      name: 'Xtsz',
      component: () => import('../../../views/glht/xtsz.vue'),
      meta: {
        title: '系统设置',
      },
    },
    {
      path: 'bmgl',
      name: 'Bmgl',
      component: () => import('/@/views/glht/bmgl.vue'),
      meta: {
        title: '部门管理',
      },
    },
    {
      path: 'rygl',
      name: 'Rygl',
      component: () => import('/@/views/glht/rygl.vue'),
      meta: {
        title: '人员管理',
      },
    },
    {
      path: 'cdgl',
      name: 'Cdgl',
      component: () => import('/@/views/glht/cdgl.vue'),
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'jsgl',
      name: 'Jsgl',
      component: () => import('/@/views/glht/jsgl.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'wzmb',
      name: 'Wzmb',
      component: () => import('/@/views/glht/wzmb.vue'),
      meta: {
        title: '文章模板',
      },
    },
    {
      path: 'ztgl',
      name: 'Ztgl',
      component: () => import('/@/views/glht/ztgl.vue'),
      meta: {
        title: '专题管理',
      },
    },
    {
      path: 'lmgl',
      name: 'Lmgl',
      component: () => import('/@/views/glht/lmgl.vue'),
      meta: {
        title: '栏目管理',
      },
    },
    {
      path: 'wzgl',
      name: 'Wzgl',
      component: () => import('/@/views/glht/wzgl.vue'),
      meta: {
        title: '文章管理',
      },
    },
    {
      path: 'czrz',
      name: 'Czrz',
      component: () => import('/@/views/glht/czrz.vue'),
      meta: {
        title: '操作日志',
      },
    },
    {
      path: 'wztj',
      name: 'Wztj',
      component: () => import('/@/views/glht/wztj.vue'),
      meta: {
        title: '文章统计',
      },
    },
  ],
};

export default htglManage;
