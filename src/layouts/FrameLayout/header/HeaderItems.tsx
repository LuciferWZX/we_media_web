import React, { FC } from 'react';
import { HeaderItems, LiItem } from '@/layouts/FrameLayout/style';
import { IconFont } from '@/components';
import { Avatar, Badge, Button } from 'antd';
import { history, useDispatch } from 'umi';
import { useModel } from '@@/plugin-model/useModel';
import { Pathname } from '@/utils/types/enum';
import { usePersistFn } from 'ahooks';
const HeaderItemsBox: FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const dispatch = useDispatch();
  const { user } = useModel('@@initialState', (model) => ({
    user: model.initialState,
  }));

  const handleLogin = () => {
    history.push(Pathname.login);
  };
  //@todo 打开上传视频的modal
  const openUploadVisible = usePersistFn((): void => {
    dispatch({
      type: 'layout/save',
      payload: {
        uploadVideoVisible: true,
      },
    });
  });
  if (user) {
    return (
      <HeaderItems variants={container} initial="hidden" animate="visible">
        <LiItem variants={item}>
          <Button
            className={'upload-btn'}
            shape="round"
            onClick={openUploadVisible}
            icon={
              <IconFont style={{ fontSize: 16 }} type={'icon-shangchuan1'} />
            }
          >
            上传
          </Button>
        </LiItem>
        <LiItem variants={item}>
          <IconFont type={'icon-dingyue'} />
        </LiItem>
        <LiItem variants={item}>
          <IconFont type={'icon-icon-test'} />
        </LiItem>
        <LiItem variants={item}>
          <Badge count={5}>
            <IconFont type={'icon-xiaoxi'} />
          </Badge>
        </LiItem>
        <LiItem variants={item}>
          <Badge count={15}>
            <IconFont type={'icon-tongzhi'} />
          </Badge>
        </LiItem>
        <LiItem variants={item}>
          <Avatar
            style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
            size={32}
            src={
              'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=73163259,1373343321&fm=26&gp=0.jpg'
            }
          >
            user
          </Avatar>
        </LiItem>
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
