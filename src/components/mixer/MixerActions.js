/*
What it does:
- Turns microphone on/off
*/
import {
  CONNECT_MICROPHONE_REQUEST,
  CONNECT_MICROPHONE_SUCCESS,
  CONNECT_MICROPHONE_FAILURE,
  DISCONNECT_MICROPHONE
} from '../../actions'

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
  return (dispatch, getState, { AudioService }) => {
    const microphone = getState().mixer.microphone

    if (microphone.isConnected) {
      return AudioService.disconnectAudioSource(microphone.audioSource)
        .then(dispatch(disconnectMicrophone()))
    } else {
      dispatch(connectMicrophoneRequest())

      return AudioService.createSourceFromMicrophone()
        .then(source => AudioService.connectAudioSource(source))
        .then(source => dispatch(connectMicrophoneSuccess(source)))
        .catch(error => dispatch(connectMicrophoneFailure(error.name + ": " + error.message)))
    }
  }
}
