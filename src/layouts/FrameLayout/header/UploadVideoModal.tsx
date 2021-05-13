import React, { FC, memo } from 'react';
import {
  Alert,
  Button,
  Cascader,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Progress,
  Radio,
  Select,
  Space,
  Tag,
  Upload,
} from 'antd';
import { useDispatch, useSelector } from '@@/plugin-dva/exports';
import { ConnectState } from '@/models/connect';
import { useReactive, useRequest, useUpdateEffect } from 'ahooks';
import { IconFont, VideoPlayer } from '@/components';
import {
  StyledSubarea,
  StyledTags,
  StyledUploadActionButtons,
  StyledUploadVideo,
  UploadVideoModalContent,
} from '../style';

import { useModel } from '@@/plugin-model/useModel';
import { UploadFile, UploadFileStatus } from 'antd/es/upload/interface';
import { RcFile } from 'antd/lib/upload/interface';
import { CascaderOptionType } from 'antd/es/cascader';
import classnames from 'classnames';
import { VideoType } from '@/utils/types/video';
import { getVideoImage } from '@/utils/util';
import VideoCovers from '@/layouts/FrameLayout/header/VideoCovers';

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
interface FormProps {
  videoType: VideoType; //视频类型（自制、转载）
  reprintAddress: string; //转载地址
  videoTitle: string; //视频标题
  videImage: string; //视频封面地址
  videoDesc: string; //视频描述
  videoTags: string[]; //视频标签
  subarea: string[]; //视频分区
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
  //标签的输入框
  searchValue: string;
  //视频的封面
  covers: string[];
}
message.config({ duration: 1 });
const UploadVideoModal: FC = () => {
  //@todo ----state--------------------
  const [form] = Form.useForm<FormProps>();
  const dispatch = useDispatch();
  const { userId } = useModel('@@initialState', (model) => ({
    userId: model.initialState?.id,
  }));
  const state = useReactive<IState>({
    uploadVideo: null,
    processingVideo: null,
    isRecover: false,
    showAlert: false,
    searchValue: '',
    covers: [],
  });
  //@todo visible
  const visible = useSelector(
    (state: ConnectState) => state.layout.uploadVideoVisible,
    (left, right) => left === right,
  );
  //@todo 分区列表
  const subareaList = useSelector(
    (state: ConnectState) => state.layout.subareaList,
    (left, right) => left === right,
  );
  //@todo 标签列表
  const tagList = useSelector(
    (state: ConnectState) => state.layout.tagList,
    (left, right) => left === right,
  );
  //@todo 查询到的未完成的video
  const remoteProcessingVideo = useSelector(
    (state: ConnectState) => state.layout.processingVideo,
    (left, right) => left === right,
  );
  //@todo 打开上传视频初始化数据
  const initDataRequest = useRequest(
    (params: { id: string }) => {
      return dispatch({
        type: 'layout/initOpenUploadVideoData',
        payload: params,
      });
    },
    { manual: true },
  );
  //@todo 删除未完成的video
  const abortProcessingVideoRequest = useRequest(
    (params: { userId: string; videoBucketKey: string }) => {
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
      initDataRequest.run({ id: userId }).then();
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
  useUpdateEffect(() => {
    if (subareaList.length > 0 && subareaList[0].children.length > 0) {
      form.setFieldsValue({
        subarea: [subareaList[0].id, subareaList[0].children[0].id],
      });
    }
  }, [subareaList]);
  useUpdateEffect(() => {
    if (state.uploadVideo && state.uploadVideo.status) {
      console.log(333, state.uploadVideo);
      if (state.uploadVideo.status === 'done') {
        for (let i = 0; i < 3; i++) {
          getVideoImage(
            i * 3,
            state.uploadVideo.response.data.videoLocation,
          ).then((covers: string) => {
            state.covers = state.covers.concat(covers);
          });
        }
      }
    } else if (state.processingVideo && remoteProcessingVideo) {
      console.log(444, remoteProcessingVideo);
      for (let i = 0; i < 3; i++) {
        getVideoImage(i * 3, remoteProcessingVideo.videoLocation).then(
          (covers: string) => {
            state.covers = state.covers.concat(covers);
          },
        );
      }
    }
  }, [state.uploadVideo, remoteProcessingVideo, state.processingVideo]);

  //@todo ----监听end--------------------------
  //@todo ----function---------------------
  const renderVideo = (): React.ReactNode => {
    let url = '';
    if (state.uploadVideo && state.uploadVideo.status === 'done') {
      url = state.uploadVideo.response.data.videoLocation;
    } else if (state.processingVideo && remoteProcessingVideo) {
      url = remoteProcessingVideo.videoLocation;
    }
    if (url !== '') {
      return <VideoPlayer id={'upload-video'} url={url} />;
    }
    return '';
  };
  /**
   * @todo 渲染分区数据
   */
  const formatSubarea = (): CascaderOptionType[] => {
    return subareaList.map((subarea) => {
      return {
        value: subarea.id,
        label: subarea.label,
        children: subarea.children.map((sc) => {
          return {
            value: sc.id,
            label: (
              <StyledSubarea>
                <span className={'subarea-label'}>{sc.label}</span>
                <span className={'subarea-desc'}>{sc.desc}</span>
              </StyledSubarea>
            ),
          };
        }),
      };
    });
  };
  const selectTag = (label: string) => {
    const videoTags = form.getFieldValue('videoTags');
    if (videoTags.length >= 5) {
      if (!videoTags.includes(label)) {
        message.destroy();
        message.error('(〜￣△￣)〜允许添加的标签已经到达了上限').then();
      }
    } else {
      if (!videoTags.includes(label)) {
        form.setFieldsValue({
          videoTags: videoTags.concat(label),
        });
      }
    }
  };
  /**
   * @todo 渲染下拉列表
   * @param label
   */
  const renderSubarea = (
    label: Array<string | React.ReactNode>,
  ): React.ReactNode => {
    return label
      .map((item) => {
        if (typeof item !== 'string') {
          // @ts-ignore
          return item.props.children[0].props.children as any;
        }
        return item;
      })
      .join('→');
  };
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
    form.resetFields();
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
    if (userId && (remoteProcessingVideo || state.uploadVideo)) {
      abortProcessingVideoRequest
        .run({
          userId: userId,
          videoBucketKey:
            remoteProcessingVideo?.videoBucketKey ||
            state.uploadVideo?.response.data.videoBucketKey,
        })
        .then((response: 'success' | 'failed') => {
          if (response === 'success') {
            state.showAlert = false;
            state.uploadVideo = null;
            state.processingVideo = null;
          }
        });
    }
  };
  //@todo 视频上传之前做校验
  const beforeUpload = (file: RcFile): boolean => {
    message.destroy();
    const maxSize800 = file.size / 1024 / 1024 <= 800;
    const maxLength = file.name.length <= 80;
    if (!maxLength) {
      message.error('视频标题长度不能超过80个字符').then();
    }
    if (!maxSize800) {
      message.error('视频大小不能大于800M').then();
    }
    return maxSize800;
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
                onConfirm={deleteOldVideo}
                title="确定要删除这个视频吗？"
                okText="确认"
                cancelText="取消"
              >
                <Button
                  loading={abortProcessingVideoRequest.loading}
                  type={'link'}
                >
                  删除
                </Button>
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
        <div className={'upload-help'}>视频文件最大不能超过800MB</div>
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
      width={800}
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
          beforeUpload={beforeUpload}
          fileList={state.uploadVideo !== null ? [state.uploadVideo] : []}
          showUploadList={false}
          action={`/api/video/uploadVideo?id=${userId}`}
          onChange={(info) => {
            const { status } = info.file;
            message.destroy();
            if (status) {
              state.uploadVideo = info.file;
            }
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
      <Form
        layout={'vertical'}
        form={form}
        initialValues={
          {
            videoType: VideoType.homemade,
            reprintAddress: '',
            videoTitle: '',
            videImage: '',
            videoDesc: '',
            subarea: [],
            videoTags: [],
          } as FormProps
        }
      >
        <Form.Item name={'videoImage'} label={'视频封面'}>
          <VideoCovers covers={state.covers} />
        </Form.Item>
        <Form.Item
          name={'videoTitle'}
          label={'视频标题'}
          style={{ marginTop: 10 }}
          tooltip={'视频标题最大不超过80个字符'}
          rules={[
            { required: true, message: '请输入视频标题' },
            { whitespace: true, message: '请输入视频标题' },
          ]}
        >
          <Input size={'large'} placeholder={'请输入'} maxLength={80} />
        </Form.Item>
        <Form.Item
          name={'videoType'}
          label="类型"
          rules={[{ required: true, message: '请选择类型' }]}
        >
          <Radio.Group>
            <Radio value={VideoType.homemade}>自制</Radio>
            <Radio value={VideoType.reprint}>转载</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          noStyle={true}
          shouldUpdate={(prevValues: FormProps, nextValues: FormProps) =>
            prevValues.videoType !== nextValues.videoType
          }
        >
          {({ getFieldValue }) => {
            const videoType: VideoType = getFieldValue('videoType');
            switch (videoType) {
              case VideoType.reprint: {
                return (
                  <Form.Item
                    name={'reprintAddress'}
                    label={'转载地址'}
                    tooltip={'转载地址最大不超过200个字符'}
                    rules={[
                      { required: true, message: '请输入转载地址' },
                      { whitespace: true, message: '请输入转载地址' },
                    ]}
                  >
                    <Input
                      size={'large'}
                      placeholder={
                        '转载视频请注明来源（例：转自http://www.xxxx.com/yyyy），注明来源会更快地通过审核哦'
                      }
                      maxLength={200}
                    />
                  </Form.Item>
                );
              }
            }
          }}
        </Form.Item>
        <Form.Item
          name={'subarea'}
          label={'分区'}
          rules={[{ required: true, message: '请选择分区' }]}
        >
          <Cascader
            displayRender={renderSubarea}
            size={'large'}
            allowClear={false}
            options={formatSubarea()}
            placeholder="请选择分区"
          />
        </Form.Item>
        <Form.Item
          name={'videoTags'}
          label={'标签'}
          rules={[{ required: true, message: '请选择标签' }]}
          getValueFromEvent={(e) => {
            if (e.length > 5) {
              message.destroy();
              message.error('(〜￣△￣)〜允许添加的标签已经到达了限').then();
            }
            return e.map((tag: string) => tag.slice(0, 20)).slice(0, 5);
          }}
        >
          <Select
            tagRender={({ label, value, closable, onClose }) => {
              return (
                <Tag
                  className={'select-tag'}
                  color={'blue'}
                  //onMouseDown={onPreventMouseDown}
                  closable={closable}
                  onClose={onClose}
                  style={{ marginRight: 3 }}
                >
                  {label}
                </Tag>
              );
            }}
            open={false}
            placeholder={'请选择标签'}
            size={'large'}
            mode="tags"
            style={{ width: '100%' }}
            tokenSeparators={[',']}
          />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prevValues: FormProps, nextValues: FormProps) =>
            prevValues.videoTags !== nextValues.videoTags
          }
        >
          {({ getFieldValue }) => {
            const videoTags = getFieldValue('videoTags');
            return (
              <Form.Item
                style={{ flexDirection: 'row', alignItems: 'baseline' }}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
                label={'所有标签'}
              >
                <StyledTags>
                  <Space wrap direction={'horizontal'}>
                    {tagList.map((tag) => {
                      return (
                        <Tag
                          onClick={() => selectTag(tag.label)}
                          className={classnames({
                            'select-tag': true,
                            'is-selected': videoTags.includes(tag.label),
                          })}
                          key={tag.label}
                          color="blue"
                        >
                          {tag.label}
                        </Tag>
                      );
                    })}
                  </Space>
                </StyledTags>
              </Form.Item>
            );
          }}
        </Form.Item>
        <Form.Item
          name={'videoDesc'}
          label={'视频简介'}
          tooltip={'视频描述最大不超过2000个字符'}
          className={'input-textarea'}
        >
          <Input.TextArea
            showCount={true}
            size={'large'}
            autoSize={{ minRows: 2, maxRows: 6 }}
            allowClear={true}
            maxLength={2000}
            placeholder={'～暂无简介'}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default memo(UploadVideoModal);
