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
    wrappers: ['@/wrappers/app'],
    routes: [
      { redirect: '/frame', path: '/' },
      {
        path: '/frame',
        component: '@/layouts/FrameLayout',
        // wrappers: ['@/wrappers/verifyAccount.tsx'],
        routes: [
          { redirect: '/frame/home', path: '/frame' },
          {
            path: '/frame/home',
            component: '@/pages/home',
          },
          {
            path: '/frame/channels',
            component: '@/pages/channels',
          },
          {
            path: '/frame/categories',
            component: '@/pages/categories',
          },
        ],
      },
      {
        path: '/entrance',
        component: '@/layouts/EntranceLayout',
        routes: [
          { redirect: '/entrance/login', path: '/entrance' },
          {
            path: '/entrance/login',
            component: '@/pages/entrance/login',
          },
        ],
      },
    ],
  },
];
export default routes;
