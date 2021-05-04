import React, { FC, memo } from 'react';
import {
  Alert,
  Button,
  message,
  Modal,
  Popconfirm,
  Progress,
  Space,
  Upload,
} from 'antd';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';
import { useReactive, useRequest, useUpdateEffect } from 'ahooks';
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
  //是否恢复
  isRecover: boolean;
  //是否显示alert框
  showAlert: boolean;
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
    isRecover: false,
    showAlert: false,
  });
  //@todo visible
  const visible = useSelector(
    (state: ConnectState) => state.layout.uploadVideoVisible,
    (left, right) => left === right,
  );
  //@todo 查询到的未完成的video
  const remoteProcessingVideo = useSelector(
    (state: ConnectState) => state.layout.processingVideo,
    (left, right) => left === right,
  );
  //@todo 获取未完成的video
  const queryProcessingVideoRequest = useRequest(
    (params: { id: string }) => {
      return dispatch({
        type: 'layout/queryProcessingVideo',
        payload: params,
      });
    },
    { manual: true },
  );
  //@todo 删除未完成的video
  const abortProcessingVideoRequest = useRequest(
    (params: { userId: string; videoTitle: string }) => {
      return dispatch({
        type: 'layout/abortProcessingVideo',
        payload: params,
      });
    },
    { manual: true },
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
      if (state.showAlert) {
        state.showAlert = false;
      }
    }
  }, [state.uploadVideo]);
  useUpdateEffect(() => {
    if (visible && userId) {
      queryProcessingVideoRequest.run({ id: userId }).then();
    }
  }, [visible]);
  useUpdateEffect(() => {
    state.showAlert = !!remoteProcessingVideo;
  }, [remoteProcessingVideo]);
  useUpdateEffect(() => {
    if (state.isRecover && remoteProcessingVideo) {
      state.processingVideo = {
        name: remoteProcessingVideo.videoTitle,
        percent: 100,
        status: 'done',
      };
    }
  }, [state.isRecover]);

  //@todo ----监听end--------------------------
  //@todo ----function---------------------
  /**
   * @todo 恢复之前的编辑状态
   */
  const continueEdit = (): void => {
    state.isRecover = true;
    state.showAlert = false;
  };
  /**
   * @todo 完全关闭之后
   */
  const afterClose = () => {
    dispatch({
      type: 'layout',
      payload: {
        processingVideo: null,
      },
    });
    state.uploadVideo = null;
    state.processingVideo = null;
    state.isRecover = false;
    state.showAlert = false;
  };
  /**
   * @todo 删除之前的数据
   */
  const deleteOldVideo = (): void => {
    if (userId && remoteProcessingVideo) {
      abortProcessingVideoRequest
        .run({ userId: userId, videoTitle: remoteProcessingVideo.videoTitle })
        .then((response: 'success' | 'failed') => {
          if (response === 'success') {
            state.showAlert = false;
          }
        });
    }
  };
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
                percent={Number(percent?.toFixed(2))}
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
      afterClose={afterClose}
      cancelText={'保存模版'}
      destroyOnClose={true}
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
        {state.showAlert && (
          <Alert
            style={{ marginBottom: 10 }}
            message="有上次未提交的稿件信息，是否继续？"
            //description="Info Description Info Description Info Description Info Description"
            type="info"
            action={
              <Space direction="horizontal">
                <Button onClick={continueEdit} size="small" type="primary">
                  继续
                </Button>
                <Button
                  loading={abortProcessingVideoRequest.loading}
                  onClick={deleteOldVideo}
                  size="small"
                  danger
                  type="ghost"
                >
                  不用了
                </Button>
              </Space>
            }
          />
        )}
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
