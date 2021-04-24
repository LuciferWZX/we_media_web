import React, { FC, memo, useRef } from 'react';
import { StyledTinyVideo, StyledVideo } from '@/components/video/style';
import { IconFont } from '@/components';
import { Dropdown, Menu } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { useSize } from 'ahooks';
interface IProps {
  type: 'tiny' | 'normal';
  viewCount?: React.ReactNode;
  videoTime?: React.ReactNode;
  dropDownMenu?: VideoDropDownMenu[];
  dropDownMenuClick?: MenuClickEventHandler;
  videoImage?: string;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}
export interface VideoDropDownMenu {
  key: any;
  label: React.ReactNode;
  icon?: string;
}
const Video: FC<IProps> = ({
  type,
  viewCount,
  videoTime,
  dropDownMenu,
  dropDownMenuClick,
  onClick,
  videoImage,
}) => {
  const ref = useRef(null);
  const size = useSize(ref);
  /**
   * @todo 渲染更多的下拉菜单
   */
  const renderMoreMenu = (menu: VideoDropDownMenu[]): React.ReactNode => {
    return (
      <Menu onClick={dropDownMenuClick}>
        {menu.map((item) => {
          return (
            <Menu.Item
              style={{ color: '#9799a2' }}
              key={item.key}
              icon={item.icon && <IconFont type={item.icon} />}
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };
  if (type === 'tiny') {
    return (
      <StyledTinyVideo
        ref={ref}
        onClick={onClick}
        style={{ height: size && size.width ? size.width / 2 : 230 }}
      >
        {/*@todo 渲染播放的背景图片*/}
        <div
          style={{
            backgroundImage: `url(${videoImage})`,
          }}
          className={'video-image'}
        />
        {/*@todo 渲染播放的图标*/}
        <div className={'play'}>
          <IconFont className={'play'} type={'icon-play'} />
        </div>
        {/*@todo 渲染左上角的浏览量*/}
        {viewCount && (
          <div className={'view-tag'}>
            <IconFont className={'eye'} type={'icon-eye'} />
            {viewCount}
          </div>
        )}
        {/*@todo 渲染右上角 更多 按钮*/}
        {dropDownMenu ? (
          <Dropdown
            arrow={true}
            overlay={() => renderMoreMenu(dropDownMenu) as any}
            overlayClassName={'video-drop-down'}
            placement="bottomRight"
          >
            <IconFont className={'more'} type={'icon-more'} />
          </Dropdown>
        ) : (
          <IconFont className={'more'} type={'icon-more'} />
        )}
        {/*@todo 渲染右下角的播放时长*/}
        {videoTime && <div className={'duration-time'}>{videoTime}</div>}
      </StyledTinyVideo>
    );
  }
  return <StyledVideo>video component not finish </StyledVideo>;
};
export default memo(Video);
