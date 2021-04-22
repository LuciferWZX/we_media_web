import styled from 'styled-components';
import { overflowHidden } from '@/mixin/font';
export const StyledMenuCard = styled.div`
  background-color: white;
`;
export const StyledItemsBlock = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid #e2e2e2;
  }

  .menu-title {
    color: #999595;
    font-size: 0.75pc;
    font-weight: 600;
    padding: 10px 20px;
  }
  .menu-item-ul {
    .active {
      position: relative;
      color: orange !important;
      background-color: #fff2db !important;

      :before {
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to right, #fd0505, #ffa805);
        border-radius: 3px;
      }
    }
    .menu-item-li {
      display: flex;
      color: #6d6d6d;
      font-size: 14px;
      align-items: center;
      padding: 10px 20px;
      cursor: pointer;
      .prefix {
        font-size: 0.1875in;
        margin-right: 10px;
      }
      .title {
        flex: 1;
        ${overflowHidden()}
      }
      :hover {
        background-color: #ededed;
      }
    }
  }
`;
