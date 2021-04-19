import { css } from 'styled-components';

export const overflowHidden = (): any => {
  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};
