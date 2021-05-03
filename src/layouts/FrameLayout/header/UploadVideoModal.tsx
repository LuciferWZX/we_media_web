import React, { FC, memo } from 'react';
import { message, Modal, Upload } from 'antd';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';
import { useReactive } from 'ahooks';
import { DraggerProps } from 'antd/es/upload';
import { IconFont } from '@/components';
import { UploadVideoModalContent } from '../style';
import { useModel } from '@@/plugin-model/useModel';
const { Dragger } = Upload;
interface IState {
  //已上传的文件列表
  videoList: File[];
}
const UploadVideoModal: FC = () => {
  //@todo state
  const dispatch = useDispatch();
  const { userId } = useModel('@@initialState', (model) => ({
    userId: model.initialState?.id,
  }));
  const state = useReactive<IState>({
    videoList: [],
  });
  const draggerProps: DraggerProps = {
    name: 'videoFile',
    multiple: false,
    showUploadList: false,
    action: `/api/video/uploadVideo?id=${userId}`,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`).then();
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`).then();
      }
    },
  };
  const visible = useSelector(
    (state: ConnectState) => state.layout.uploadVideoVisible,
    (left, right) => left === right,
  );
  //@todo function
  const handleCancel = (): void => {
    dispatch({
      type: 'layout/save',
      payload: {
        uploadVideoVisible: false,
      },
    });
  };
  return (
    <Modal
      title="上传视频"
      visible={visible}
      width={700}
      transitionName={'ant-fade'}
      okText={'上传'}
      cancelText={'保存模版'}
      okButtonProps={{
        style: {
          color: '#f98f1d',
          backgroundColor: '#fff1e3',
          borderColor: '#fff1e3',
        },
      }}
      cancelButtonProps={{
        style: {
          color: '#f98f1d',
          borderColor: '#f98f1d',
        },
      }}
      //onOk={handleOk}
      //confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <UploadVideoModalContent>
        <Dragger {...draggerProps}>
          <div className={'upload-box'}>
            <IconFont className={'upload-icon'} type={'icon-upload_flat'} />
            <div className={'desc-upload'}>拖拽上传或者点击上传</div>
          </div>
        </Dragger>
      </UploadVideoModalContent>
    </Modal>
  );
};
export default memo(UploadVideoModal);
