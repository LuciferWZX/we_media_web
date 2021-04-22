import React, { FC, memo } from 'react';
import { CardHeader, StyledHomeCard } from '@/components/HomeCard/style';
interface IProps {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactElement;
}
const HomeCard: FC<IProps> = ({ children, desc, title, action }) => {
  return (
    <StyledHomeCard>
      <CardHeader>
        <div className={'title-desc'}>
          <div className={'title'}>{title}</div>
          <div className={'desc'}>{desc}</div>
        </div>
        <div className={'action'}>{action}</div>
      </CardHeader>
      <div>{children}</div>
    </StyledHomeCard>
  );
};
export default memo(HomeCard);
