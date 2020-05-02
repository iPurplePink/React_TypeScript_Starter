import { lazy } from 'react';
const Profile = lazy(() => import('../../modules/Profile'));

export default [
  {
    component: Profile,
    path: '/profile',
    exact: true,
  },
];
