import styled from 'styled-components';
import { overflowHidden } from '@/mixin/font';
export const StyledHomeCard = styled.div`
  padding: 20px;
  cursor: pointer;
`;
export const CardHeader = styled.header`
  display: flex;
  padding-bottom: 15px;
  .title-desc {
    flex: 1;
    .title {
      font-size: 19px;
      font-weight: 600;
      color: #6d6d6d;
      text-transform: capitalize;
      ${overflowHidden()}
    }
    .desc {
      font-size: 15px;
      color: #6d6d6d;
    }
  }
  .action {
  }
`;
