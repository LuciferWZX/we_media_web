import styled from 'styled-components';
import { overflowHidden } from '@/mixin/font';
export const StyledVideoCard = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  .banner {
    margin-bottom: 10px;
  }
  .desc {
    font-size: 15px;
    color: #333;
    line-height: 16.5pt;
    font-weight: 600;
    text-transform: capitalize;
    div.ant-typography,
    .ant-typography p {
      margin-bottom: 0.5em;
    }
  }
  .account-box {
    display: flex;
    align-items: center;
    .avatar-box {
      margin-right: 10px;
    }
    .account-info {
      flex: 1;
      overflow: hidden;
      .account-name {
        width: 100%;
        font-weight: 600;
        color: #737373;
        font-size: 0.135416667in;
        ${overflowHidden()}
      }
      .account-video-info {
        display: flex;
        justify-content: space-between;
        color: #737373;
        font-size: 0.135416667in;
        .account-views {
          span {
            color: orange;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
