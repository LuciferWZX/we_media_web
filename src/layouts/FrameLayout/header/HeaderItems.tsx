import React, { FC } from 'react';
import { HeaderItems } from '@/layouts/FrameLayout/style';
import { IconFont } from '@/components';
import { Avatar, Badge, Button } from 'antd';
const HeaderItemsBox: FC = () => {
  return (
    <HeaderItems>
      <li>
        <Button
          className={'upload-btn'}
          shape="round"
          icon={<IconFont style={{ fontSize: 16 }} type={'icon-shangchuan1'} />}
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
          size="small"
        >
          user
        </Avatar>
      </li>
    </HeaderItems>
  );
};
export default HeaderItemsBox;
