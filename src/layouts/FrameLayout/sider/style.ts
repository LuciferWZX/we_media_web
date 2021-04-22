import styled from 'styled-components';

export const StyledSider = styled.div<{ isScroll: boolean }>`
  width: ${({ isScroll }) => (isScroll ? 0 : '200px')};
  transition-duration: 0.2s;
  transition-property: width;
  background-color: white;
  border-right: 1px solid #e2e2e2;
  overflow: hidden;
  white-space: nowrap;
`;
