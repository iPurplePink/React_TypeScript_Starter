import { RedirectProps } from 'react-router-dom';

const publicRedirects: RedirectProps[] = [
  {
    from: '/',
    to: '/home',
    exact: true,
  },
];

export default publicRedirects;
