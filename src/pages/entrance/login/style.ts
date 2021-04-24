import styled from 'styled-components';
export const StyledLogin = styled.div`
  padding: 37.5px;
`;
export const StyledTopBox = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  .welcome-back {
    font-size: 23px;
    font-weight: 600;
    color: #6d6d6d;
  }
  .login-desc {
    margin: 0 0.5rem;
    color: #474747;
  }
`;
export const StyledFormBox = styled.div`
  .footer-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #474747;
    .go-register {
      color: #929292;
      cursor: pointer;
      :hover {
        color: #3e416d;
      }
    }
  }
`;
