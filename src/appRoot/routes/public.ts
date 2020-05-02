import { lazy } from 'react';
const Home = lazy(() => import('../../modules/Home'));

export default [
  {
    component: Home,
    path: '/home',
    exact: true,
  },
];
