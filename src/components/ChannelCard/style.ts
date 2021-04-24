import styled from 'styled-components';
export const StyledChannelCard = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  flex-direction: column;
  box-shadow: -8px 0.5pc 1.125pc -0.4375pc rgb(25 42 70 / 13%);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  :hover {
    transform: translateY(-10px);
  }
`;
export const StyledBackImage = styled.div`
  background-size: cover;
  min-height: 100px;
`;
export const StyledCardContent = styled.div`
  flex: 1;
  background: white;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .channel-title {
    margin-bottom: 0.375pc;
    font-size: 12pt;
    font-weight: 600;
    color: #6d6d6d;
  }
  .channel-desc {
    font-size: 13.5px;
    color: #9d9d9d;
  }
`;
export const StyledAvatar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  background-color: white;
  border-radius: 50%;
  left: 0;
  right: 0;
  top: -100%;
  bottom: 0;
  margin: auto;
`;
