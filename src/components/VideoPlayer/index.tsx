import React, { FC, useState } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import { useMount, useUpdateEffect } from 'ahooks';
interface IProps {
  className?: string;
  url: string;
}
const VideoPlayer: FC<IProps> = ({ className, url }) => {
  const [player, setPlayer] = useState<videojs.Player | null>(null);

  useMount(() => {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: url,
          type: 'video/mp4',
        },
      ],
    };
    setPlayer(
      videojs('my-video', videoJsOptions, function onPlayerReady() {
        videojs.log('Your player is ready!');
      }),
    );
  });
  useUpdateEffect(() => {
    console.log(222);
    player?.src(url);
  }, [url]);
  return (
    <div className={className}>
      <video id="my-video" className="video-js" controls preload="auto"></video>
    </div>
  );
};
export default VideoPlayer;
