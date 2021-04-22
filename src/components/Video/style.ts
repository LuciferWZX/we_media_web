import styled from 'styled-components';
export const StyledVideo = styled.div``;
export const StyledTinyVideo = styled.div`
  height: 140px;
  border-radius: 10px;
  background-color: navajowhite;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    .play {
      opacity: 1;
    }
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
    .eye {
      font-size: 16px;
      margin-right: 5px;
    }
  }
  .more {
    color: white;
    font-size: 20px;
    cursor: pointer;
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
