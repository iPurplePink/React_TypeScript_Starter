import { lazy } from 'react';
const App = lazy(() => import('../../modules/App'));

export default [
  {
    component: App,
    path: '/',
    exact: true
  }
];
