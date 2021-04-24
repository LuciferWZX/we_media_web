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
      parallax: true,
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
          <div className="swiper-slide">
            <div
              className={'home-swiper-background'}
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1618480547214-e8efa3bc6c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
              }}
            >
              This is your destiny
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className={'home-swiper-background'}
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1619146601359-68d13dd7b448?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1588&q=80)`,
              }}
            />
          </div>
          <div className="swiper-slide">
            <div
              className={'home-swiper-background'}
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
              }}
            />
          </div>
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
