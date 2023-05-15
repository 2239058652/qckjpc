import type { AppRouteModule } from '/@/router/types';

const dashboard: AppRouteModule = {
  path: '/sl',
  name: 'Sl', //name中的值与path相同，提示404，修改为首字母大写就正常
  //大屏页面的首页即为独立页面，不需要有tab页；
  redirect: '/demo/qzj/QTPage',
  meta: {
    icon: 'ion:grid-outline',
    title: '中国能源网站',
    orderNo: 80,
  },
  children: [
    {
      path: 'QTPage',
      name: 'qTPage',
      component: () => import('/@/views/demo/qzj/QTPage.vue'),
      meta: {
        title: '中国能源首页',
      },
    },
  ],
};

export default dashboard;
