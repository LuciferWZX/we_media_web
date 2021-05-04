import React, { FC, memo } from 'react';
import { Button, message, Modal, Popconfirm, Progress, Upload } from 'antd';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';
import { useReactive, useUpdateEffect } from 'ahooks';
import { IconFont } from '@/components';
import {
  StyledUploadActionButtons,
  StyledUploadVideo,
  UploadVideoModalContent,
} from '../style';
import { useModel } from '@@/plugin-model/useModel';
import { UploadFile, UploadFileStatus } from 'antd/es/upload/interface';
const { Dragger } = Upload;
enum ProgressStatuses {
  normal = 'normal',
  exception = 'exception',
  active = 'active',
  success = 'success',
}
interface ProcessingVideo {
  name: string;
  percent?: number;
  status?: UploadFileStatus;
}
interface IState {
  //已上传的文件列表
  //videoList: File[];
  uploadVideo: UploadFile | null;
  //uploadedFile
  processingVideo: ProcessingVideo | null;
}
const UploadVideoModal: FC = () => {
  //@todo ----state--------------------
  const dispatch = useDispatch();
  const { userId } = useModel('@@initialState', (model) => ({
    userId: model.initialState?.id,
  }));
  const state = useReactive<IState>({
    uploadVideo: null,
    processingVideo: null,
  });
  const visible = useSelector(
    (state: ConnectState) => state.layout.uploadVideoVisible,
    (left, right) => left === right,
  );
  //@todo ----state-end--------------------
  //@todo ----监听--------------------------
  useUpdateEffect(() => {
    if (state.uploadVideo) {
      state.processingVideo = {
        name: state.uploadVideo.name,
        percent: state.uploadVideo.percent,
        status: state.uploadVideo.status,
      };
    }
  }, [state.uploadVideo]);
  //@todo ----监听end--------------------------
  //@todo ----function---------------------
  const deleteVideo = (): void => {
    state.uploadVideo = null;
    state.processingVideo = null;
  };
  const renderUploadVideo = (): React.ReactNode => {
    if (state.processingVideo) {
      const { name, percent, status } = state.processingVideo;

      return (
        <StyledUploadVideo>
          {status === 'uploading' && (
            <div className={'uploading-text'}>
              <IconFont type={'icon-loading'} spin={true} />
              正在上传...
            </div>
          )}
          {status === 'done' && (
            <StyledUploadActionButtons>
              <Popconfirm
                onConfirm={deleteVideo}
                title="确定要删除这个视频吗？"
                okText="确认"
                cancelText="取消"
              >
                <Button type={'link'}>删除</Button>
              </Popconfirm>
            </StyledUploadActionButtons>
          )}
          <div className={'video-icon'}>
            <IconFont type={'icon-vedio'} />
          </div>
          <div className={'video-info'}>
            <div>{name}</div>
            <div>
              <Progress
                percent={percent}
                status={renderUploadProcessBarStatus(status)}
              />
            </div>
          </div>
        </StyledUploadVideo>
      );
    }
    return (
      <div className={'upload-box'}>
        <IconFont className={'upload-icon'} type={'icon-upload_flat'} />
        <div className={'desc-upload'}>拖拽上传或者点击上传</div>
      </div>
    );
  };
  const renderUploadProcessBarStatus = (
    status?: UploadFileStatus,
  ): ProgressStatuses => {
    switch (status) {
      case 'done': {
        return ProgressStatuses.success;
      }
      case 'error': {
        return ProgressStatuses.exception;
      }
      default: {
        return ProgressStatuses.active;
      }
    }
  };
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
      maskClosable={false}
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
        <Dragger
          style={{ padding: '0 20px', position: 'relative' }}
          name={'videoFile'}
          accept={'video/mp4'}
          multiple={false}
          disabled={!!state.uploadVideo || !!state.processingVideo}
          fileList={state.uploadVideo !== null ? [state.uploadVideo] : []}
          showUploadList={false}
          action={`/api/video/uploadVideo?id=${userId}`}
          onChange={(info) => {
            state.uploadVideo = info.file;
            const { status } = info.file;

            if (status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (status === 'done') {
              message.success(`${info.file.name} 上传成功.`).then();
            } else if (status === 'error') {
              message.error(`${info.file.name} 上传失败.`).then();
            }
          }}
        >
          {renderUploadVideo()}
        </Dragger>
      </UploadVideoModalContent>
    </Modal>
  );
};
export default memo(UploadVideoModal);
