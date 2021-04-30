import React, { FC, useRef } from 'react';
import { history } from 'umi';
import {
  DeveloperDesc,
  DragDevelopBox,
  StyledFormBox,
  StyledLogin,
  StyledTopBox,
} from '@/pages/entrance/login/style';
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Progress,
  Tooltip,
} from 'antd';
import { useLockFn, usePersistFn, useReactive, useRequest } from 'ahooks';
import { useDispatch } from '@@/plugin-dva/exports';
import { LoginParams } from '@/services/type';
import { CodeStatus, ResType } from '@/utils/types/url';
import { User } from '@/utils/types/user';
import { useModel } from '@@/plugin-model/useModel';
import store from 'storejs';
import { StoreKey } from '@/utils/types/enum';
import { IconFont } from '@/components';
interface FormProps {
  email: string;
  password: string;
  autoLogin: boolean;
}
interface IState {
  autoEmail: string[];
}

const Login: FC = () => {
  const dispatch = useDispatch();
  const constraintsRef = useRef(null);
  const [form] = Form.useForm<FormProps>();
  const { setUser } = useModel('@@initialState', (model) => ({
    setUser: model.setInitialState,
  }));
  /**
   * @todo 本页面的状态
   */
  const state = useReactive<IState>({
    autoEmail: [],
  });
  /**
   * @todo 登录请求
   */
  const { run: loginRun, loading: loginLoading } = useRequest(
    (params: LoginParams) => {
      return dispatch({
        type: 'user/login',
        payload: params,
      });
    },
    { manual: true },
  );
  /**
   * @todo 自动匹配某些邮箱
   * @param value
   */
  const handleSearch = usePersistFn((value: string) => {
    let res: string[];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['qq.com', 'gmail.com', '163.com'].map(
        (domain) => `${value}@${domain}`,
      );
    }
    state.autoEmail = res;
  });
  /**
   * @todo 渲染邮箱的下拉框
   */
  const renderAutoEmail = usePersistFn(
    (): Array<{ label: string; value: string }> => {
      return state.autoEmail.map((email) => {
        return {
          value: email,
          label: email,
        };
      });
    },
  );

  const onFinish = useLockFn(async (values: FormProps) => {
    console.log('提交了代码：', values);
    const res: ResType<User> = await loginRun({
      email: values.email,
      password: values.password,
    });

    if (res.code === CodeStatus.succeed) {
      setUser(res.data);
      message.success('登录成功');
      store.set(StoreKey.token, res.data.token);
      history.push('/');
    } else {
      message.error(res.message);
    }

    console.log(res);
  });
  const developDesc = (
    <DeveloperDesc>
      <div>开发者: wuzhixin</div>
      <div>
        开发状态: <Progress percent={30} steps={10} />
      </div>
      <div>联系方式: 微信 wzx715715</div>
      <div>邮箱:2396423791@qq.com</div>
    </DeveloperDesc>
  );
  return (
    <StyledLogin ref={constraintsRef}>
      <DragDevelopBox drag dragConstraints={constraintsRef}>
        <Tooltip
          color={'black'}
          title={developDesc}
          getTooltipContainer={(triggerNode) => triggerNode}
        >
          <IconFont type={'icon-kefu'} />
        </Tooltip>
      </DragDevelopBox>

      <StyledTopBox>
        <h2 className={'welcome-back'}>欢迎回来</h2>
        <p className={'login-desc'}>登录管理您的帐户。</p>
      </StyledTopBox>
      <StyledFormBox>
        <Form
          form={form}
          layout={'vertical'}
          hideRequiredMark={true}
          onFinish={onFinish}
          initialValues={
            {
              email: '',
              password: '',
              autoLogin: true,
            } as FormProps
          }
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入您的邮箱!' },
              {
                pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                message: '请输入正确的邮箱!',
              },
            ]}
          >
            <AutoComplete options={renderAutoEmail()} onSearch={handleSearch}>
              <Input placeholder={'请输入邮箱'} allowClear={true} />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password placeholder={'请输入密码'} allowClear={true} />
          </Form.Item>

          <Form.Item name="autoLogin" valuePropName="checked">
            <Checkbox>下次自动登录</Checkbox>
          </Form.Item>
          <Form.Item noStyle={true}>
            <div className={'footer-action'}>
              <div>
                还没有账号？<span className={'go-register'}>注册</span>
              </div>
              <Button
                loading={loginLoading}
                htmlType={'submit'}
                type={'primary'}
              >
                进入社区
              </Button>
            </div>
          </Form.Item>
        </Form>
      </StyledFormBox>
    </StyledLogin>
  );
};
export default Login;
