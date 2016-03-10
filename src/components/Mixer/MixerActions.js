/*
What it does:
- Creates an audio context
*/

import {
  CREATE_AUDIO_CONTEXT
} from '../../constants/ActionTypes'

function createAudioContext(audioCtx) {
  return {
    type: CREATE_AUDIO_CONTEXT,
    audioCtx: audioCtx
  }
}

export function getAudioContext() {
  return (dispatch, getState) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtx.suspend();
    dispatch(createAudioContext(audioCtx))
  }
}

/*
What it does:
- Connects/disconnects microphone to/from audio context
*/

import {
  CONNECT_MICROPHONE_REQUEST,
  CONNECT_MICROPHONE_SUCCESS,
  CONNECT_MICROPHONE_FAILURE,
  DISCONNECT_MICROPHONE
} from '../../constants/ActionTypes'

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

function connectMicrophoneRequest() {
  return {
    type: CONNECT_MICROPHONE_REQUEST
  }
}

function connectMicrophoneSuccess(source) {
  return {
    type: CONNECT_MICROPHONE_SUCCESS,
    audioSource: source
  }
}

function connectMicrophoneFailure(error) {
  return {
    type: CONNECT_MICROPHONE_FAILURE,
    error: error
  }
}

function disconnectMicrophone() {
  return {
    type: DISCONNECT_MICROPHONE
  }
}

export function toggleMicrophone() {
  return (dispatch, getState) => {
    const isConnected = getState().mixer.microphone.isConnected
    if (isConnected) {
      getState().mixer.microphone.audioSource.disconnect()
      dispatch(disconnectMicrophone())
    } else {
      const audioCtx = getState().mixer.audioCtx
      dispatch(connectMicrophoneRequest())

      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioCtx.createMediaStreamSource(stream)
        source.connect(audioCtx.destination)
        dispatch(connectMicrophoneSuccess(source))
      })
      .catch(error => {
        dispatch(connectMicrophoneFailure(error.name + ": " + error.message))
      })
    }
  }
}
