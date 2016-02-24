import { CREATE_AUDIO_CONTEXT } from '../constants/ActionTypes'

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
