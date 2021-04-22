import { LayoutModelState } from '@/models/layout';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    LayoutModelState: boolean;
    AccountModelState: boolean;
    InformationModelState: boolean;
  };
}
interface ConnectState {
  loading: Loading;
  layout: LayoutModelState;
}
export { ConnectState, LayoutModelState };
