const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export function initializeAudio() {
  return suspendPlayback()
}

export function suspendPlayback() {
  return audioCtx.suspend()
}

export function resumePlayback() {
  return audioCtx.resume()
}

export function createSourceFromArrayBuffer(arrayBuffer) {
  return audioCtx.decodeAudioData(arrayBuffer)
    .then(decodedData => {
      const source = audioCtx.createBufferSource()
      source.buffer = decodedData
      source.start()
      return source
    })
}

var promisifiedOldGUM = function(constraints, successCallback, errorCallback) {

  // First get ahold of getUserMedia, if present
  var getUserMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia);

  // Some browsers just don't implement it - return a rejected promise with an error
  // to keep a consistent interface
  if(!getUserMedia) {
    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
  }

  // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
  return new Promise(function(successCallback, errorCallback) {
    getUserMedia.call(navigator, constraints, successCallback, errorCallback);
  });

}

// Older browsers might not implement mediaDevices at all, so we set an empty object first
if(navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if(navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
}

export function createSourceFromMicrophone() {
  return navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => audioCtx.createMediaStreamSource(stream))
}

export function connectAudioSource(source) {
  source.connect(audioCtx.destination)
  return Promise.resolve(source)
}

export function disconnectAudioSource(source) {
    source.disconnect()
    return Promise.resolve(source)
}
