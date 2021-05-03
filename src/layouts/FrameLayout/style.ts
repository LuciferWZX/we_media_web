import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import { motion } from 'framer-motion';
export const FrameBox = styled(Layout)`
  height: 100vh;
`;
export const FrameContentLayout = styled(Layout)``;
export const FrameHeader = styled(Header)`
  background-color: white;
  box-shadow: 0 0.052083333in 11.25pt -5.25pt rgb(0 0 0 / 10%);
  height: 4.0625pc;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0;
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
export const HeaderItems = styled(motion.ul)`
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
export const UploadVideoModalContent = styled.div`
  .input-textarea {
    .anticon {
      font-size: 14px !important;
    }
  }

  .upload-box {
    text-align: center;
    padding: 10px;
    border: 1px dashed grey;
    border-radius: 5px;
    transition-property: border-color;
    transition-duration: 0.2s;
    :hover {
      border-color: orange;
    }
    cursor: pointer;
    .upload-icon {
      font-size: 54px;
    }
    .desc-upload {
      color: #666666;
      font-size: 15px;
      margin-top: 10px;
    }
  }
`;
export const LiItem = styled(motion.li)`
  display: flex;
  align-items: center;
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
export const StyledContent = styled(Content)`
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;
