import { lazy } from 'react';
const Profile = lazy(() => import('../../modules/Profile'));
const LogoutCallback = lazy(() =>
  import('../../modules/Authentication/LogoutCallback'),
);

export default [
  {
    component: Profile,
    path: '/profile',
    exact: true,
  },
  {
    component: LogoutCallback,
    path: '/logout-callback',
    exact: true,
  },
];
