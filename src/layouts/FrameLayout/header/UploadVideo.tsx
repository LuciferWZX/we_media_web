import React, { FC } from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { IconFont } from '@/components';
import { useLockFn } from 'ahooks';
interface FormProps {
  videoTitle: string;
  videoFile: File;
  videoDesc: string;
  videoTags: string[];
}
const UploadVideo: FC = () => {
  const [form] = Form.useForm<FormProps>();
  //@todo 上传文件
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const onFinish = useLockFn(
    async (values: FormProps): Promise<void> => {
      console.log('提交的value', values);
    },
  );
  return (
    <div>
      <Form
        form={form}
        layout={'vertical'}
        onFinish={onFinish}
        initialValues={{
          videoFile: [],
        }}
      >
        <Form.Item
          noStyle={true}
          shouldUpdate={(prevValues: FormProps, nextValues: FormProps) =>
            prevValues.videoFile !== nextValues.videoFile
          }
        >
          {({ getFieldValue }) => {
            const videoFile = getFieldValue('videoFile');
            if (videoFile.length === 0) {
              return (
                <Form.Item
                  name="videoFile"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="视频文件最大不能超过999MB"
                  style={{ textAlign: 'center' }}
                  rules={[{ required: true, message: '请选择需要上传的视频' }]}
                >
                  <Upload
                    name="logo"
                    action="/upload.do"
                    accept={'video/mp4'}
                    listType="picture"
                    maxCount={1}
                    showUploadList={false}
                  >
                    <div className={'upload-box'}>
                      <IconFont
                        className={'upload-icon'}
                        type={'icon-upload_flat'}
                      />
                    </div>
                  </Upload>
                </Form.Item>
              );
            }
            return <div className={'video-preview'}>sss</div>;
          }}
        </Form.Item>
        <Form.Item
          name={'videoTitle'}
          label={'视频标题'}
          rules={[
            { required: true, message: '请输入视频标题' },
            { whitespace: true, message: '请输入视频标题' },
          ]}
        >
          <Input placeholder={'请输入'} />
        </Form.Item>
        <Form.Item
          name={'videoDesc'}
          label={'视频描述'}
          className={'input-textarea'}
        >
          <Input.TextArea
            showCount={true}
            autoSize={{ minRows: 2, maxRows: 6 }}
            allowClear={true}
            maxLength={200}
            placeholder={'～暂无描述'}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType={'submit'}
            block={true}
            shape={'round'}
            type={'primary'}
          >
            上传视频
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UploadVideo;
