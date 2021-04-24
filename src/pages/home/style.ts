import styled from 'styled-components';

export const StyledHome = styled.div`
  @media screen and (min-width: 1650px) {
    max-width: 81.25pc;
  }
  @media screen and (min-width: 900px) and (max-width: 1650px) {
    max-width: 100%;
  }
  .videos-card {
    padding: 20px;
    .videos-card-container {
      overflow-x: hidden;
    }
  }
  .swiper-btn {
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .action-icon {
      font-size: 18px;
    }
    :hover {
      background-color: #edf4fffa;
    }
    :after {
      content: '';
    }
  }
  .swiper-button-disabled {
    background: #cecece;
    color: gray;
    cursor: not-allowed;
    transition-property: background, color;
    transition-duration: 0.2s;
    :hover {
      background: #cecece;
      color: gray;
    }
  }
  .swiper-wrapper-video-box {
    .swiper-video-box {
      padding-top: 15px;
      padding-right: 20px;
      padding-bottom: 20px;
    }
  }
  .see-all {
    color: #949494;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition-property: color;
    transition-duration: 0.2s;
    :hover {
      color: #31416d;
    }
    .action-icon {
      margin-left: 10px;
    }
  }
`;
export const StyledSwiperBox = styled.div`
  padding: 20px 20px 0 20px;
  .swiper-container {
    background-color: rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 900px) {
      height: 300px;
      border-radius: 10px;
    }
    :hover {
      .swiper-btn {
        transform: scale(1, 1);
      }
    }
    .swiper-btn {
      transform: scale(0, 0);
      height: 40px;
      width: 40px;
      background-color: white;
      border-radius: 30px;
      transition-property: background-color, transform;
      transition-duration: 0.2s;
      .action-icon {
        font-size: 18px;
      }
      :hover {
        background-color: #edf4fffa;
      }
      :after {
        content: '';
      }
    }

    .pagination-square {
      display: inline-block;
      width: 3px;
      height: 3px;
      background: #000;
      position: relative;
      margin: 0 2px;
    }
    .pagination-square-active {
      background: #ff6600;
    }
  }
  .home-swiper-background {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
`;
