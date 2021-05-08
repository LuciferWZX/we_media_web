export enum ScaleType {
  normal = 'normal', //16:9
  heightMore = 'heightMore', //16:10
}
export function getVideoImage(
  url: string,
  width: number = 1152,
  type: ScaleType = ScaleType.normal,
): Promise<string[]> {
  console.log(123, url);
  return new Promise(function (resolve, reject) {
    let dataURL: string = '';
    let video = document.createElement('video');
    video.setAttribute('crossOrigin', 'anonymous'); //处理跨域
    video.setAttribute('src', url);
    video.setAttribute('width', String(width));
    switch (type) {
      case ScaleType.normal: {
        video.height = (width / 16) * 9;
        break;
      }
      case ScaleType.heightMore: {
        video.height = (width / 16) * 10;
        break;
      }
    }
    video.setAttribute('autoplay', 'autoplay');

    video.addEventListener('loadeddata', function () {
      let canvas = document.createElement('canvas'),
        width = video.width, //canvas的尺寸和图片一样
        height = video.height;
      canvas.width = width;
      canvas.height = height;
      let covers: string[] = [];
      for (let i = 0; i < 3; i++) {
        video.currentTime = i + 3;
        // @ts-ignore
        canvas.getContext('2d').drawImage(video, 0, 0, width, height); //绘制canvas
        dataURL = canvas.toDataURL('image/jpeg'); //转换为base64
        covers = covers.concat(dataURL);
      }

      resolve(covers);
    });
  });
}
