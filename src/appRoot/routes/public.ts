import { lazy } from 'react';
const Login = lazy(() => import('../../modules/Login'));

export default [
  {
    component: Login,
    path: '/login',
    exact: true
  }
];
