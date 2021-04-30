import { User } from '@/utils/types/user';
import NProgress from 'nprogress';
NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 500,
  template:
    '<div class="bar my-bar" role="bar"><div class="peg my-peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
});
export async function getInitialState(): Promise<User | null> {
  return null;
}
