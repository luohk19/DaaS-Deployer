import { DEFAULT_LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '../types';

const MODELOVERVIEW: AppRouteRecordRaw = {
  path: '/modelOverview',
  name: 'modelOverview',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.modelOverview',
    requiresAuth: false,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/modelOverview/index.vue'),
      meta: {
        locale: 'menu.modelOverview.detail',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default MODELOVERVIEW;