import React, { FC } from 'react';
import {
  StyledFormBox,
  StyledLogin,
  StyledTopBox,
} from '@/pages/entrance/login/style';
import { AutoComplete, Button, Checkbox, Form, Input } from 'antd';
import { useReactive } from 'ahooks';
interface FormProps {
  email: string;
  password: string;
  autoLogin: boolean;
}
interface IState {
  autoEmail: string[];
}

const Login: FC = () => {
  const [form] = Form.useForm<FormProps>();
  const state = useReactive<IState>({
    autoEmail: [],
  });
  /**
   * @todo 自动匹配某些邮箱
   * @param value
   */
  const handleSearch = (value: string) => {
    let res: string[];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`,
      );
    }
    state.autoEmail = res;
  };
  /**
   * @todo 渲染邮箱的下拉框
   */
  const renderAutoEmail = (): Array<{ label: string; value: string }> => {
    return state.autoEmail.map((email) => {
      return {
        value: email,
        label: email,
      };
    });
  };

  const onFinish = (values: FormProps) => {
    console.log('提交了代码：', values);
  };
  return (
    <StyledLogin>
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
              <Button htmlType={'submit'} type={'primary'}>
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
