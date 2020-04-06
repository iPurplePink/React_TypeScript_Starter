import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter, RouteProps } from 'react-router-dom';
import publicRoutes from './routes/public';
import privateRoutes from './routes/private';
import Loading from '../components/Loading';

const AppRoot = () => {
  const routes: RouteProps[] = [...publicRoutes, ...privateRoutes];

  return (
    <BrowserRouter>
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
  );
};

export default AppRoot;
