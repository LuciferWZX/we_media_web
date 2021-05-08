import React, { FC, useState } from 'react';
interface IProps {
  className?: string;
  url: string;
  width?: string | number;
  height?: string | number;
  id?: string;
}
const VideoPlayer: FC<IProps> = ({
  id,
  className,
  url,
  height = 320,
  width = 400,
}) => {
  return (
    <div className={className}>
      <video id={id} height={height} width={width} src={url} controls={true}>
        <source src={url} type={'video/mp4'} />
      </video>
    </div>
  );
};
export default VideoPlayer;
