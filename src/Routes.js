/* eslint-disable react/no-array-index-key */
import React, {
    lazy,
    Suspense,
    Fragment,
    BrowserRouter
  } from 'react';
  import {
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
  import DashboardLayout from './layouts/DashboardLayout';
  import LandingPage from './views/LandingPage';
  import MainLayout from './layouts/MainLayout';
  import LoadingScreen from './components/LoadingScreen';
  const routesConfig = [
    {
      exact: true,
      path: '/',
      component: () => <Redirect to="/home" />
    },
    {
        path: '/app',
        // guard: AuthGuard,
        layout: DashboardLayout,
        routes: [
          {
            exact: true,
            path: '/app',
            component: () => <Redirect to="/app/reports/dashboard" />
          },
          {
            exact: true,
            path: '/app/account',
            //component: lazy(() => import('src/views/pages/AccountView'))
          },
          {
            exact: true,
            path: '/app/reports/dashboard',
            component: lazy(() => import('./views/reports/Dashboard'))
          },
          {
            exact: true,
            path: '/app/reports/board2',
            component: lazy(() => import('./views/reports/Board2'))
          },
          {
            exact: true,
            path: '/app/reports/board3',
            component: lazy(() => import('./views/reports/Board3'))
          }
        ]
    },
    {
      path: '*',
      layout: MainLayout,
      routes: [
        {
          exact: true,
          path: '/home',
          component: LandingPage
        },
        {
          component: () => <Redirect to="/404" />
        }
      ]
    },
    
]
  
  const renderRoutes = (routes) => (routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
           const Component = route.component;
            return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                 <Layout>
                 {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                  </Layout>
                 </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null);
  
  function Routes() {
    return renderRoutes(routesConfig);
  }
  
  export default Routes;
  