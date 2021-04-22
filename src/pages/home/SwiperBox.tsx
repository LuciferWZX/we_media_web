import React, { FC } from 'react';
import { StyledSwiperBox } from '@/pages/home/style';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useMount } from 'ahooks';
import { IconFont } from '@/components';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperBox: FC = () => {
  console.log(11);
  useMount(() => {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      loopPreventsSlide: true,
      autoplay: {
        delay: 2000,
      },
      resizeObserver: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'pagination-square',
        bulletActiveClass: 'pagination-square-active',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  return (
    <StyledSwiperBox>
      <div className={'swiper-container'}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">图片1</div>
          <div className="swiper-slide"> 图片2</div>
          <div className="swiper-slide"> 图片3</div>
        </div>
        <div className="swiper-button-prev swiper-btn">
          <IconFont
            type={'icon-qianjin'}
            className={'action-icon'}
            rotate={180}
          />
        </div>
        <div className="swiper-button-next swiper-btn">
          <IconFont type={'icon-qianjin'} className={'action-icon'} />
        </div>
        <div className="swiper-pagination" />
      </div>
    </StyledSwiperBox>
  );
};
export default SwiperBox;
