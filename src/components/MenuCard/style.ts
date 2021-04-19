import styled from 'styled-components';
import { overflowHidden } from '@/mixin/font';
export const StyledMenuCard = styled.div`
  background-color: white;
`;
export const StyledItemsBlock = styled.div`
  border-right: 1px solid #e2e2e2;
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
    .menu-item-li {
      display: flex;
      color: #6d6d6d;
      font-size: 14px;
      align-items: center;
      padding: 10px 20px;
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
