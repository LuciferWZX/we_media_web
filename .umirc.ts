import antdTheme from './config/antdTheme';
import { defineConfig } from 'umi';
import proxy from './config/proxy';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  theme: antdTheme,
  hash: true,
  history: {
    type: 'hash',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  fastRefresh: {},
  proxy: proxy['dev'],
});
