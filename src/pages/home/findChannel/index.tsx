import React, { FC, memo } from 'react';
import { ChannelCard, HomeCard, IconFont } from '@/components';
import { VideoDropDownMenu } from '@/components/Video';
import { useMount, useReactive } from 'ahooks';
import { VideoAction } from '@/utils/types/enum';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { StyledFindChannel } from './style';
import { Space } from 'antd';
interface IState {
  videoDropDownMenu: VideoDropDownMenu[];
}
interface IProps {
  className?: string;
}
const FindChannel: FC<IProps> = ({ className }) => {
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
    new Swiper('.swiper-container-find-channel', {
      direction: 'horizontal',
      loop: false,
      loopPreventsSlide: true,
      resizeObserver: true,
      observeParents: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next-find-channel',
        prevEl: '.swiper-button-prev-find-channel',
      },
    });
  });

  const data = (
    <ChannelCard
      avatarSrc={
        'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=807498736,2545362365&fm=26&gp=0.jpg'
      }
      backImage={
        'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-158832945.jpg'
      }
      title={'Self Development'}
      desc={'55K Subscribers . 16 Videos 6M views'}
    />
  );
  return (
    <StyledFindChannel className={className}>
      <HomeCard
        className={'videos-card'}
        containerClassName={'videos-card-container'}
        title={'Find Channel'}
        action={[
          <Space key={'prev-next'} direction={'horizontal'}>
            <div key={'see-all'} className={'see-all'}>
              <span>查看全部</span>
              <IconFont type={'icon-qianjin'} className={'action-icon'} />
            </div>
            <div className="swiper-button-prev-find-channel swiper-btn">
              <IconFont
                type={'icon-qianjin'}
                rotate={180}
                className={'action-icon'}
              />
            </div>
            <div className="swiper-button-next-find-channel swiper-btn">
              <IconFont type={'icon-qianjin'} className={'action-icon'} />
            </div>
          </Space>,
        ]}
      >
        <div className="swiper-container-find-channel">
          <div className="swiper-wrapper swiper-wrapper-video-box">
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
            <div className="swiper-slide swiper-video-box">{data}</div>
          </div>
        </div>
      </HomeCard>
    </StyledFindChannel>
  );
};
export default memo(FindChannel);
