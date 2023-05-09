import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/bi',
  name: 'Bi', //name中的值与path相同，提示404，修改为首字母大写就正常
  //大屏页面的首页即为独立页面，不需要有tab页；
  // component: LAYOUT,
  redirect: '/datav/ymsw',
  meta: {
    icon: 'ion:grid-outline',
    title: '业务子系统',
    orderNo: 30,
  },
  children: [
    {
      path: 'config',
      name: 'config',
      meta: {
        title: '河长制信息系统',
      },
    },
    {
      path: 'user',
      name: 'user',
      meta: {
        title: '山洪灾害监测预警',
      },
    },
    {
      path: 'menu',
      name: 'menu',
      meta: {
        title: '灌区管理子系统',
      },
    },
    {
      path: 'role',
      name: 'role',
      meta: {
        title: '小型水库子系统',
      },
    },
    {
      path: 'dept',
      name: 'dept',
      meta: {
        title: 'XXX子系统',
      },
    },
    {
      path: 'ad',
      name: 'ad',
      meta: {
        title: '其他子系统',
      },
    },
  ],
};

export default dashboard;
