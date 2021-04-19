import React, { FC, memo } from 'react';
import MenuCard, { MenuItem } from '@/components/MenuCard';
import { StyledSider } from '@/layouts/FrameLayout/sider/style';
import { IconFont } from '@/components';
const Sider: FC = () => {
  const menu: MenuItem[] = [
    {
      label: '浏览',
      key: 'browser',
      items: [
        {
          key: 'home',
          icon: <IconFont type={'icon-shouye'} />,
          title: '首页',
        },
        {
          key: 'subscriptions',
          icon: <IconFont type={'icon-31haoyou'} />,
          title: '频道',
        },
        {
          key: 'categories',
          icon: <IconFont type={'icon-fenlei'} />,
          title: '分类 ',
        },
      ],
    },
    {
      label: '订阅',
      key: 'subscriptions',
      items: [],
    },
  ];
  return (
    <StyledSider>
      <MenuCard menus={menu} />
    </StyledSider>
  );
};
export default memo(Sider);
