import { RedirectProps } from 'react-router-dom';

const privateRedirects: RedirectProps[] = [
  {
    from: '/',
    to: '/profile',
    exact: true,
  },
];

export default privateRedirects;
