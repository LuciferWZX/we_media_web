import React, { FC, memo } from 'react';
import { StyledItemsBlock, StyledMenuCard } from './style';
import classnames from 'classnames';
import { useLocation, history } from 'umi';
import { Pathname } from '@/utils/types/enum';
import { IconFont } from '@/components';
import { useReactive } from 'ahooks';
export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  action?: React.ReactNode;
}
interface IState {
  menus: MenuItem[];
}
const MenuCard: FC = () => {
  const location = useLocation();
  const state = useReactive<IState>({
    menus: [
      {
        key: Pathname.home,
        icon: 'icon-shouye',
        title: '首页',
      },
      {
        key: Pathname.channels,
        icon: 'icon-31haoyou',
        title: '频道',
      },
      {
        key: Pathname.categories,
        icon: 'icon-fenlei',
        title: '分类 ',
      },
    ],
  });

  console.log(location);
  /**
   * @todo 点击菜单
   */
  const handleClick = (key: string): void => {
    if (location.pathname !== key) {
      history.push(key);
    }
  };
  return (
    <StyledMenuCard>
      <StyledItemsBlock>
        <div className={'menu-title'}>浏览</div>
        <ul className={'menu-item-ul'}>
          {state.menus.map((item) => {
            return (
              <li
                key={item.key}
                className={classnames({
                  'menu-item-li': true,
                  active: location.pathname === item.key,
                })}
                onClick={() => handleClick(item.key)}
              >
                {item.icon && (
                  <div className={'prefix'}>
                    <IconFont type={item.icon as any} />
                  </div>
                )}
                <div className={'title'}>{item.title}</div>
                {item.action && <div className={'action'}>{item.action}</div>}
              </li>
            );
          })}
        </ul>
      </StyledItemsBlock>
      <StyledItemsBlock>
        <div className={'menu-title'}>订阅</div>
      </StyledItemsBlock>
    </StyledMenuCard>
  );
};
export default memo(MenuCard);
