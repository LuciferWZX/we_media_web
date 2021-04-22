import styled from 'styled-components';

export const StyledHome = styled.div``;
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
`;
