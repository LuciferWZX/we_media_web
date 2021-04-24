import React, { FC } from 'react';
import { HeaderItems } from '@/layouts/FrameLayout/style';
import { IconFont } from '@/components';
import { Avatar, Badge, Button } from 'antd';
import { history } from 'umi';
import { useModel } from '@@/plugin-model/useModel';
import { Pathname } from '@/utils/types/enum';
const HeaderItemsBox: FC = () => {
  const { user } = useModel('@@initialState', (model) => ({
    user: model.initialState,
  }));

  const handleLogin = () => {
    history.push(Pathname.login);
  };
  if (user) {
    return (
      <HeaderItems>
        <li>
          <Button
            className={'upload-btn'}
            shape="round"
            icon={
              <IconFont style={{ fontSize: 16 }} type={'icon-shangchuan1'} />
            }
          >
            上传
          </Button>
        </li>
        <li>
          <IconFont type={'icon-dingyue'} />
        </li>
        <li>
          <IconFont type={'icon-icon-test'} />
        </li>
        <li>
          <Badge count={5}>
            <IconFont type={'icon-xiaoxi'} />
          </Badge>
        </li>
        <li>
          <Badge count={15}>
            <IconFont type={'icon-tongzhi'} />
          </Badge>
        </li>
        <li>
          <Avatar
            style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
            size={32}
            src={
              'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=73163259,1373343321&fm=26&gp=0.jpg'
            }
          >
            user
          </Avatar>
        </li>
      </HeaderItems>
    );
  }
  return (
    <Button onClick={handleLogin} type={'link'}>
      请登录
    </Button>
  );
};
export default HeaderItemsBox;
