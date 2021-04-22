import React, { FC, memo } from 'react';
import { CardHeader, StyledHomeCard } from '@/components/HomeCard/style';
const HomeCard: FC = () => {
  return (
    <StyledHomeCard>
      <CardHeader>
        <div className={'title-desc'}>
          <div className={'title'}>Featured Videos</div>
          <div className={'desc'}>Channals You are Fallowing</div>
        </div>
        <div className={'action'}>-</div>
      </CardHeader>
    </StyledHomeCard>
  );
};
export default memo(HomeCard);
