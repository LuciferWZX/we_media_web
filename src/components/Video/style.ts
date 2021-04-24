import styled from 'styled-components';
export const StyledVideo = styled.div``;
export const StyledTinyVideo = styled.div`
  border-radius: 10px;
  background-color: navajowhite;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  :hover {
    background-size: 120% 120%;
    .play {
      opacity: 1;
    }
    .video-image {
      transform: scale(1.2);
    }
  }
  .video-image {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition-property: transform;
    transition-duration: 0.3s;
  }
  .play {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 50px;
    width: 50px;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    transition-property: opacity;
    transition-duration: 0.2s;
    opacity: 0;
  }
  .view-tag {
    color: white;
    background-color: orange;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 3px 7px;
    border-radius: 30px;
    position: absolute;
    left: 15px;
    top: 15px;
    font-weight: 600;
    .eye {
      font-size: 16px;
      margin-right: 5px;
    }
  }
  .more {
    color: white;
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .duration-time {
    background-color: #292929;
    font-weight: 600;
    display: inline-block;
    color: white;
    border-radius: 1.5625pc;
    padding: 0.75pt 0.4375pc;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
`;
