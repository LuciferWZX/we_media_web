import React, { FC, memo } from 'react';
import {
  StyledActionBox,
  StyledEntrance,
  StyledEntranceBox,
  StyledLogoBox,
} from '@/layouts/EntranceLayout/style';
const EntranceLayout: FC = ({ children }) => {
  return (
    <StyledEntrance>
      <StyledEntranceBox>
        <StyledLogoBox className={'logo-box'}>
          <div className={'logo-place'}>
            <div>LOGO_ICON</div>
            <div className={'app-name'}>WeMedia</div>
            <div className={'app-desc'}>属于你的自媒体地带</div>
          </div>
        </StyledLogoBox>
        <StyledActionBox>{children}</StyledActionBox>
      </StyledEntranceBox>
    </StyledEntrance>
  );
};
export default memo(EntranceLayout);
