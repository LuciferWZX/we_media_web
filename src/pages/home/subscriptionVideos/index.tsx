import React, { FC, memo } from 'react';
import { HomeCard, IconFont, Video, VideoCard } from '@/components';
import { VideoDropDownMenu } from '@/components/Video';
import { useMount, useReactive } from 'ahooks';
import { MenuInfo } from 'rc-menu/lib/interface';
import { VideoAction } from '@/utils/types/enum';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { StyledSubscriptionVideo } from './style';
interface IState {
  videoDropDownMenu: VideoDropDownMenu[];
}
const SubscriptionVideos: FC = () => {
  /*@todo 内部状态 */
  const state = useReactive<IState>({
    videoDropDownMenu: [],
  });
  /*@todo 页面加载完成 初始化数据*/
  useMount(() => {
    state.videoDropDownMenu = [
      { key: VideoAction.watchLater, label: '稍后再看', icon: 'icon-history' },
      { key: VideoAction.collect, label: '收藏', icon: 'icon-shoucang' },
      { key: VideoAction.share, label: '分享', icon: 'icon-fenxiang' },
    ];
    new Swiper('.swiper-container-subscription-videos', {
      direction: 'horizontal',
      loop: false,
      loopPreventsSlide: true,
      resizeObserver: true,
      observeParents: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
    });
  });
  /**
   * @todo video点击下拉菜单
   * @param info
   */
  const handleDropDownMenu = (info: MenuInfo): void => {
    info.domEvent.stopPropagation();
    console.log(info.key);
  };
  /**
   * @todo 点击video去播放
   */
  const clickVideo = (): void => {
    console.log('播放了');
  };
  const data = (
    <VideoCard
      desc={'这是我今天上传的小视频.'}
      avatarSrc={
        'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2909072015,3629141008&fm=26&gp=0.jpg'
      }
      publisher={'蝙蝠侠🦇'}
      publishTime={'2 星期前'}
      viewCount={'531k'}
      banner={
        <Video
          onClick={clickVideo}
          videoImage={
            'http://demo.kangjingept.com:8020/cssthemes6/4.14ZF02/assets/images/video-thumbal/1.png'
          }
          viewCount={'2.7M'}
          videoTime={'40:00'}
          dropDownMenu={state.videoDropDownMenu}
          dropDownMenuClick={handleDropDownMenu}
          type={'tiny'}
        />
      }
    />
  );
  return (
    <StyledSubscriptionVideo>
      <HomeCard
        className={'videos-card'}
        containerClassName={'videos-card-container'}
        title={'Updates From Subscriptions'}
        action={[
          <div key={'see-all'} className={'see-all'}>
            <span>查看全部</span>
            <IconFont type={'icon-qianjin'} className={'action-icon'} />
          </div>,
        ]}
        desc={'Channels You are Fallowing'}
      >
        <div className="swiper-container-subscription-videos">
          <div className="swiper-wrapper swiper-wrapper-video-box">
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
          </div>
        </div>
      </HomeCard>
    </StyledSubscriptionVideo>
  );
};
export default memo(SubscriptionVideos);
