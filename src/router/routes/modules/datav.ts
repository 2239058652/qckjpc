import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/datav',
  name: 'Datav', //name中的值与path相同，提示404，修改为首字母大写就正常
  //大屏页面的首页即为独立页面，不需要有tab页；
  // component: LAYOUT,
  redirect: '/datav/ymsw',
  meta: {
    icon: 'ion:grid-outline',
    title: '水务主控台',
    orderNo: 10,
  },
  children: [
    {
      path: 'test',
      name: 'Test',
      component: () => import('../../../views/datav/ymsw/layouts/datav/index.vue'),
      meta: {
        title: '元谋水务',
      },
    },
    {
      path: 'ym',
      name: 'Ym',
      component: () => import('../../../views/datav/ymsw/layouts/mapbg/index1.vue'),
      meta: {
        title: '元谋水务',
      },
    },
    {
      path: 'ymsw',
      name: 'Ymsw',
      component: () => import('../../../views/datav/ymsw/layouts/mapbg/index4.vue'),
      meta: {
        title: '总览',
      },
    },
    {
      path: 'ymmap',
      name: 'YmMap',
      component: () => import('../../../views/datav/ymsw/layouts/mapbg/mapIndex.vue'),
      meta: {
        title: '一张图',
      },
    },
    {
      path: 'szy',
      name: 'YmSzy',
      component: () => import('../../../views/datav/ymsw/sections/szy/szyIndex.vue'),
      meta: {
        title: '水资源',
      },
    },
    {
      path: 'saq',
      name: 'YmSaq',
      component: () => import('../../../views/datav/ymsw/sections/saq/saqIndex.vue'),
      meta: {
        title: '水安全',
      },
    },
    {
      path: 'shj',
      name: 'YmShj',
      component: () => import('../../../views/datav/ymsw/sections/shj/shjIndex.vue'),
      meta: {
        title: '水环境',
      },
    },
    {
      path: 'sbm',
      name: 'YmSbm',
      component: () => import('../../../views/datav/ymsw/sections/syy/syyIndex2.vue'),
      meta: {
        title: '水应用',
      },
    },
    {
      path: 'dj',
      name: 'YmDj',
      component: () => import('../../../views/datav/ymsw/sections/dj/djIndex.vue'),
      meta: {
        title: '党建引领',
      },
    },
    {
      path: 'gcxm',
      name: 'YmGcxm',
      component: () => import('../../../views/datav/ymsw/sections/pm/pmIndex2.vue'),
      meta: {
        title: '工程项目',
      },
    },
    {
      path: 'swlc',
      name: 'YmSwlc',
      component: () => import('../../../views/datav/ymsw/sections/swlc/swlcIndex.vue'),
      meta: {
        title: '水务历程',
      },
    },
  ],
};

export default dashboard;
