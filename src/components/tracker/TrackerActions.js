/*
What it does:
- Uploads an audio file
*/
import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE
} from '../../actions'

function uploadFileRequest() {
  return {
    type: UPLOAD_FILE_REQUEST
  }
}

function uploadFileSuccess(source) {
  return {
    type: UPLOAD_FILE_SUCCESS,
    audioSource: source
  }
}

function uploadFileFailure(error) {
  return {
    type: UPLOAD_FILE_FAILURE,
    error: error
  }
}

export function uploadFile(file) {
  return (dispatch, getState, { AudioService }) => {
    dispatch(uploadFileRequest())

    const reader = new FileReader()
    reader.onload = event => {
      AudioService.createSourceFromArrayBuffer(event.target.result)
        .then(source => AudioService.connectAudioSource(source))
        .then(source => dispatch(uploadFileSuccess(source)))
        .catch(error => dispatch(uploadFileFailure(error.name + ": " + error.message)))
    }
    reader.onerror = error => {
      dispatch(uploadFileFailure(error.name + ": " + error.message))
    }
    reader.readAsArrayBuffer(file)
  }
}
