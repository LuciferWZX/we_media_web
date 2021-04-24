import React, { FC } from 'react';
import {
  StyledAvatar,
  StyledBackImage,
  StyledCardContent,
  StyledChannelCard,
} from './style';
import { Avatar } from 'antd';
interface IProps {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  avatarSrc?: string;
  backImage?: string;
}
const ChannelCard: FC<IProps> = ({ backImage, avatarSrc, title, desc }) => {
  return (
    <StyledChannelCard>
      <StyledBackImage style={{ backgroundImage: `url(${backImage})` }} />
      <StyledCardContent>
        <StyledAvatar>
          <Avatar size={50} src={avatarSrc} />
        </StyledAvatar>
        <div className={'channel-title'}>{title}</div>
        <div className={'channel-desc'}>{desc}</div>
      </StyledCardContent>
    </StyledChannelCard>
  );
};
export default ChannelCard;
