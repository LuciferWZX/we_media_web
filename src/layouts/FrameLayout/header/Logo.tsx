import React, { FC, memo } from 'react';
import { HeaderLogo } from '@/layouts/FrameLayout/style';
import { IconFont } from '@/components';
const LogoBox: FC = () => {
  return (
    <HeaderLogo>
      <IconFont type={'icon-home_shousuo_h_icon'} />
      This is Logo
    </HeaderLogo>
  );
};
export default memo(LogoBox);
