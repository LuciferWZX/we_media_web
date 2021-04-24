import React, { FC, memo } from 'react';
import { CardHeader, StyledHomeCard } from '@/components/HomeCard/style';
interface IProps {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  action?: React.ReactNode | React.ReactNode[];
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  containerClassName?: string;
}
const HomeCard: FC<IProps> = ({
  containerClassName,
  className,
  children,
  desc,
  title,
  action,
}) => {
  return (
    <StyledHomeCard className={className}>
      <CardHeader>
        <div className={'title-desc'}>
          <div className={'title'}>{title}</div>
          <div className={'desc'}>{desc}</div>
        </div>
        <div className={'action'}>{action}</div>
      </CardHeader>
      <div className={containerClassName}>{children}</div>
    </StyledHomeCard>
  );
};
export default memo(HomeCard);
