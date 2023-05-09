import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/sl',
  name: 'Sl', //name中的值与path相同，提示404，修改为首字母大写就正常
  //大屏页面的首页即为独立页面，不需要有tab页；
  // component: LAYOUT,
  redirect: '/datav/ymsw',
  meta: {
    icon: 'ion:grid-outline',
    title: '水务基础信息',
    orderNo: 80,
  },
  children: [
    {
      path: 'config',
      name: 'config',
      meta: {
        title: '水利工程分类',
      },
    },
    {
      path: 'user',
      name: 'user',
      meta: {
        title: '水利工程维护',
      },
    },
    {
      path: 'menu',
      name: 'menu',
      meta: {
        title: '监测站点分类',
      },
    },
    {
      path: 'role',
      name: 'role',
      meta: {
        title: '监测站点维护',
      },
    },
    {
      path: 'dept',
      name: 'dept',
      meta: {
        title: '预案维护',
      },
    },
    {
      path: 'ad',
      name: 'ad',
      meta: {
        title: '河流档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '河段档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '湖泊档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '水库档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '渠道档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '取水口档案信息',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '排污口档案信息',
      },
    },
  ],
};

export default dashboard;
