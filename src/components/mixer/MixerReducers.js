import { combineReducers } from 'redux'

import {
  CONNECT_MICROPHONE_SUCCESS,
  DISCONNECT_MICROPHONE
} from '../../actions'

const initialState = {
  microphone: {
    audioSource: null,
    isConnected: false
  }
}

function microphone(state = initialState.microphone, action) {
  switch (action.type) {
    case CONNECT_MICROPHONE_SUCCESS:
      return {
        ...state,
        audioSource: action.audioSource,
        isConnected: true
      }
    case DISCONNECT_MICROPHONE:
      return {
        ...state,
        audioSource: null,
        isConnected: false
      }
    default:
      return state
  }
}

export default combineReducers({
  microphone
})
