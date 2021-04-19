import React, { FC } from 'react';
import { StyledItemsBlock, StyledMenuCard } from '@/components/MenuCard/style';

export interface MenuItem {
  label: string;
  key: string;
  items: Array<{
    key: string;
    icon: React.ReactNode;
    title: React.ReactNode;
    action?: React.ReactNode;
  }>;
}
interface IProps {
  menus: MenuItem[];
}
const MenuCard: FC<IProps> = ({ menus }) => {
  return (
    <StyledMenuCard>
      {menus.map((menu) => {
        return (
          <StyledItemsBlock key={menu.key}>
            <div className={'menu-title'}>{menu.label}</div>
            <ul className={'menu-item-ul'}>
              {menu.items.map((item) => {
                return (
                  <li className={'menu-item-li'}>
                    {item.icon && <div className={'prefix'}>{item.icon}</div>}
                    <div className={'title'}>{item.title}</div>
                    {item.action && (
                      <div className={'action'}>{item.action}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </StyledItemsBlock>
        );
      })}
    </StyledMenuCard>
  );
};
export default MenuCard;
