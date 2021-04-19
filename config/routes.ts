interface Route {
  /**
   * Any valid URL path
   */
  path?: string;
  /**
   * A React component to render only when the location matches.
   */
  component?: string | (() => any);
  wrappers?: string[];
  /**
   * navigate to a new location
   */
  redirect?: string;
  /**
   * When true, the active class/style will only be applied if the location is matched exactly.
   */
  exact?: boolean;
  routes?: any[];
  [k: string]: any;
}
const routes: Route[] = [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { redirect: '/frame', path: '/' },
      {
        path: '/frame',
        component: '@/layouts/frameLayout',
        // wrappers: ['@/wrappers/verifyAccount.tsx'],
        routes: [
          { redirect: '/frame/home', path: '/frame' },
          {
            path: '/frame/home',
            component: '@/pages/home',
          },
        ],
      },
    ],
  },
];
export default routes;
