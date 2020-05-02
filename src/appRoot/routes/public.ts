import { lazy } from 'react';
const Home = lazy(() => import('../../modules/Home'));
const LoginCallback = lazy(() =>
  import('../../modules/Authentication/LoginCallback'),
);

export default [
  {
    component: Home,
    path: '/home',
    exact: true,
  },
  {
    component: LoginCallback,
    path: '/login-callback',
    exact: true,
  },
];
