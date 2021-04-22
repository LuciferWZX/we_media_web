import React, { FC, memo } from 'react';
import { StyledVideoCard } from '@/components/videoCard/style';
import { Avatar, Typography } from 'antd';
interface IProps {
  banner?: React.ReactNode;
}
const { Paragraph } = Typography;
const VideoCard: FC<IProps> = ({ banner }) => {
  return (
    <StyledVideoCard>
      <div className={'banner'}>{banner}</div>
      <div className={'desc'}>
        <Paragraph ellipsis={{ rows: 2, expandable: false }}>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </div>
      <div className={'account-box'}>
        <Avatar />
        <div className={'account-info'}>
          <div>Jonathan Madano</div>
          <div>
            <span>531k 浏览 </span>
            <span>2 星期前 </span>
          </div>
        </div>
      </div>
    </StyledVideoCard>
  );
};
export default memo(VideoCard);
