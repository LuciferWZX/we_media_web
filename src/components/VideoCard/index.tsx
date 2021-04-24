import React, { FC, memo } from 'react';
import { StyledVideoCard } from '@/components/videoCard/style';
import { Avatar, Typography } from 'antd';
interface IProps {
  banner?: React.ReactNode;
  desc?: React.ReactNode;
  avatarSrc?: React.ReactNode;
  publisher?: React.ReactNode;
  publishTime?: React.ReactNode;
  viewCount?: React.ReactNode;
}
const { Paragraph } = Typography;
const VideoCard: FC<IProps> = ({
  banner,
  desc,
  avatarSrc,
  publisher,
  publishTime,
  viewCount,
}) => {
  return (
    <StyledVideoCard>
      <div className={'banner'}>{banner}</div>
      <div className={'desc'}>
        <Paragraph ellipsis={{ rows: 2, expandable: false }}>{desc}</Paragraph>
      </div>
      <div className={'account-box'}>
        <div className={'avatar-box'}>
          <Avatar src={avatarSrc} />
        </div>
        <div className={'account-info'}>
          <div className={'account-name'}>{publisher}</div>
          <div className={'account-video-info'}>
            <span className={'account-views'}>
              <span>{viewCount}</span> 浏览{' '}
            </span>
            <span className={'account-time'}>{publishTime}</span>
          </div>
        </div>
      </div>
    </StyledVideoCard>
  );
};
export default memo(VideoCard);
