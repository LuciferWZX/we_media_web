import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledLogin = styled(motion.div)`
  padding: 37.5px;
  position: relative;
  .developer-find-btn {
    position: absolute;
    right: 20px;
  }
`;
export const DeveloperDesc = styled.div`
  width: 200px;
  .ant-progress-text {
    color: gray;
  }
`;
export const DragDevelopBox = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  font-size: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(80deg, #ff9500 0, #ff6200 100%);
  height: 50px;
  width: 50px;
  z-index: 9999;
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
    .login-btn {
      background-color: #f89020;
      border-color: #f89020;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .ant-form-item-label > label {
    font-size: 17px;
    margin-bottom: 5px;
    display: block;
    font-weight: 600;
  }
`;
