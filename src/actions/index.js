export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
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

export const CREATE_AUDIO_CONTEXT = "CREATE_AUDIO_CONTEXT"
function createAudioContext(audioCtx) {
  return {
    type: CREATE_AUDIO_CONTEXT,
    audioCtx: audioCtx
  }
}

export function getAudioContext() {
  return dispatch => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    dispatch(createAudioContext(audioCtx))
  }
}

export const CONNECT_MICROPHONE_REQUEST = "CONNECT_MICROPHONE_REQUEST";
function connectMicrophoneRequest() {
  return {
    type: CONNECT_MICROPHONE_REQUEST
  }
}

export const CONNECT_MICROPHONE_SUCCESS = "CONNECT_MICROPHONE_SUCCESS";
function connectMicrophoneSuccess(source) {
  return {
    type: CONNECT_MICROPHONE_SUCCESS,
    audioSource: source
  }
}

export const CONNECT_MICROPHONE_FAILURE = "CONNECT_MICROPHONE_FAILURE";
function connectMicrophoneFailure(error) {
  return {
    type: CONNECT_MICROPHONE_FAILURE,
    error: error
  }
}

export function connectMicrophone() {
  return (dispatch, getState) => {
    const audioCtx = getState().audioCtx.ctx

    dispatch(connectMicrophoneRequest())
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const source = audioCtx.createMediaStreamSource(stream)
      dispatch(connectMicrophoneSuccess(source))
      dispatch(connectSourceToAudioCtx())
    })
    .catch(error => {
      dispatch(connectMicrophoneFailure(error.name + ": " + error.message))
    })
  }
}

function connectSourceToAudioCtx() {
  return (dispatch, getState) => {
    const audioCtx = getState().audioCtx.ctx
    const audioSource = getState().audioSource.source

    if (audioSource && audioCtx) {
      audioSource.connect(audioCtx.destination)
    }
  }
}
