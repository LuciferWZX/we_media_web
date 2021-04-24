import { LayoutModelState } from '@/models/layout';
import { UserModelState } from '@/models/user';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    userModelState: boolean;
    LayoutModelState: boolean;
    AccountModelState: boolean;
    InformationModelState: boolean;
  };
}
interface ConnectState {
  loading: Loading;
  layout: LayoutModelState;
  user: UserModelState;
}
export { ConnectState, LayoutModelState, UserModelState };
