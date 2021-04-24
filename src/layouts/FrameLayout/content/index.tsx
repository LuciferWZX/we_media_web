import React, { FC, memo } from 'react';
import { StyledContent } from '@/layouts/FrameLayout/style';
const FrameContent: FC = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};
export default memo(FrameContent);
