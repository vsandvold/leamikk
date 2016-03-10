import { combineReducers } from 'redux'

import {
  CREATE_AUDIO_CONTEXT,
  CONNECT_MICROPHONE_SUCCESS,
  DISCONNECT_MICROPHONE
} from '../../constants/ActionTypes'

const initialState = {
  audioCtx: null,
  microphone: {
    audioSource: null,
    isConnected: false
  }
}

function audioCtx(state = initialState.audioCtx, action) {
  switch (action.type) {
    case CREATE_AUDIO_CONTEXT:
      return action.audioCtx
    default:
      return state
  }
}

function microphone(state = initialState.microphone, action) {
  switch (action.type) {
    case CONNECT_MICROPHONE_SUCCESS:
      return Object.assign({}, state, {
        audioSource: action.audioSource,
        isConnected: true
      })
    case DISCONNECT_MICROPHONE:
      return Object.assign({}, state, {
        audioSource: null,
        isConnected: false
      })
    default:
      return state
  }
}

export function getAudioCtx(state) {
  return state.mixer.audioCtx
}

export default combineReducers({
  audioCtx,
  microphone
})
