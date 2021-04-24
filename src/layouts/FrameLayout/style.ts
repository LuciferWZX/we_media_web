import styled from 'styled-components';
export const FrameBox = styled.div`
  height: 100vh;
`;
export const FrameContent = styled.div`
  display: flex;
  height: calc(100vh - 65px);
`;
export const FrameHeader = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0.052083333in 11.25pt -5.25pt rgb(0 0 0 / 10%);
  height: 4.0625pc;
  display: flex;
  align-items: center;
  //padding:.364583333in;
`;
export const HeaderLogo = styled.div`
  width: 257px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  > span {
    font-size: 24px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const HeaderItems = styled.ul`
  display: flex;
  li {
    .anticon {
      font-size: 24px;
      :hover {
        cursor: pointer;
      }
    }
    .upload-btn {
      background-color: #fff2db;
      border: none;
      color: orange;
      :hover {
        background-color: orange;
        color: white;
      }
    }
    margin-right: 20px;
  }
`;
export const SearchComponent = styled.div`
  flex: 1;
  .search-input {
    border: none;
    background-color: #f7f7f7;
    box-shadow: none;
    .ant-input {
      background-color: #f7f7f7;
      ::placeholder {
        color: #6d6d6d;
      }
    }
  }
`;
export const StyledContent = styled.div`
  flex: 1;
  height: calc(100vh - 4.0625pc);
  overflow: auto;
  display: flex;
  justify-content: center;
`;
