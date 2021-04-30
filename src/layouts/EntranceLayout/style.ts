import styled from 'styled-components';
export const StyledEntrance = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledEntranceBox = styled.div`
  background-color: chocolate;
  display: flex;
  @media screen and (min-width: 960px) {
    width: calc(100% * 2 / 3.001);
  }
  @media screen and (min-width: 640px) and (max-width: 960px) {
    width: 50%;
    flex-direction: column;
    .logo-box {
      flex: unset;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    .logo-box {
      flex: unset;
    }
  }
`;
export const StyledLogoBox = styled.div`
  flex: 1;
  background: linear-gradient(80deg, #ff9500 0, #ff6200 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-place {
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
    .app-name {
      color: #fff;
      margin-bottom: 1.5rem;
      margin-top: 0.5rem;
      font-size: 31px;
      font-weight: 600;
    }
    .app-desc {
      font-size: 15px;
      color: #ffffffb3;
    }
  }
`;
export const StyledActionBox = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
`;
