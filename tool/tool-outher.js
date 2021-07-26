/**
 * 保存或获取数据
 * @param data
 * @param key
 * @returns {string}
 */
export function dataStorage(key = 'token', data = null) {
  if (key === false) {
    sessionStorage.clear()
  } else {
    if (data === false) {
      sessionStorage.removeItem(key)
    } else if (data !== null) {
      sessionStorage.setItem(key, data)
    } else {
      return sessionStorage.getItem(key)
    }
  }
}

/**
 * 获取变量类型
 * @param obj
 * @returns {string}
 */
export function variableTypeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
}


/**
 * 获取本地视频缩略图
 * @param videoFile
 * @returns {Promise<unknown>}
 */
export function getVideoThumb(videoFile) {
  return new Promise((resolve) => {
    let blob = new Blob([videoFile]), // 文件转化成二进制文件
      url = URL.createObjectURL(blob); //转化成url
    let oVideo = document.createElement('video');
    oVideo.setAttribute('src', url);
    oVideo.setAttribute('controls', 'controls');
    oVideo.currentTime = 1;  // 设置当前视频为 第1s

    oVideo.addEventListener('canplay', () => {
      let oCanvas = document.createElement('canvas');
      oCanvas.width = oVideo.videoWidth;
      oCanvas.height = oVideo.videoHeight;
      oCanvas.getContext("2d").drawImage(oVideo, 0, 0, oCanvas.width, oCanvas.height);
      resolve(oCanvas.toDataURL("image/png"))
    });
  })
}
