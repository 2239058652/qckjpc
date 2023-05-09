import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/platform',
  name: 'Platform', //name中的值与path相同，提示404，修改为首字母大写就正常
  //大屏页面的首页即为独立页面，不需要有tab页；
  // component: LAYOUT,
  redirect: '/datav/ymsw',
  meta: {
    icon: 'ion:grid-outline',
    title: '系统配置管理',
    orderNo: 90,
  },
  children: [
    {
      path: 'config',
      name: 'config',
      meta: {
        title: '系统配置维护',
      },
    },
    {
      path: 'user',
      name: 'user',
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'menu',
      name: 'menu',
      meta: {
        title: '功能菜单维护',
      },
    },
    {
      path: 'role',
      name: 'role',
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'dept',
      name: 'dept',
      meta: {
        title: '组织机构维护',
      },
    },
    {
      path: 'ad',
      name: 'ad',
      meta: {
        title: '行政区划维护',
      },
    },
    {
      path: 'log',
      name: 'log',
      meta: {
        title: '日志查询',
      },
    },
  ],
};

export default dashboard;
