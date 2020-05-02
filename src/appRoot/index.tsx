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

const AppRoot = () => {
  const routes: RouteProps[] = [...publicRoutes, ...privateRoutes];
  const redirects: RedirectProps[] = [...publicRedirects, ...privateRedirects];

  return (
    <Layout>
      <BrowserRouter>
        {redirects.map((redirect: RedirectProps, index: number) => (
          <Redirect
            from={redirect.from}
            to={redirect.to}
            exact={redirect.exact}
            key={String(index)}
          />
        ))}
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
      </BrowserRouter>
    </Layout>
  );
};

export default AppRoot;
