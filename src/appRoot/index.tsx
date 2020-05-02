import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  RouteProps,
  RedirectProps,
  Redirect,
} from 'react-router-dom';
import publicRoutes from './routes/public';
import privateRoutes from './routes/private';
import publicRedirects from './redirects/public';
import privateRedirects from './redirects/private';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import useCookies from '../common/customHooks/useCookies';

const AppRoot = () => {
  const { isAuthenticated } = useCookies();

  const routes: RouteProps[] = isAuthenticated ? privateRoutes : publicRoutes;
  const redirects: RedirectProps[] = isAuthenticated
    ? privateRedirects
    : publicRedirects;

  return (
    <BrowserRouter>
      {redirects.map((redirect: RedirectProps, index: number) => (
        <Redirect
          from={redirect.from}
          to={redirect.to}
          exact={redirect.exact}
          key={String(index)}
        />
      ))}
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route: RouteProps, index: number) => (
              <Route
                path={route.path}
                component={route.component}
                key={String(index)}
              />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoot;
