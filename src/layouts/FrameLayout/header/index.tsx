import React, { FC, memo } from 'react';
import { FrameHeader } from '@/layouts/FrameLayout/style';
import LogoBox from '@/layouts/FrameLayout/header/Logo';
import SearchBlock from '@/layouts/FrameLayout/header/Search';
import HeaderItemsBox from '@/layouts/FrameLayout/header/HeaderItems';
const Header: FC = () => {
  return (
    <FrameHeader>
      <LogoBox />
      <SearchBlock />
      <HeaderItemsBox />
    </FrameHeader>
  );
};
export default memo(Header);
