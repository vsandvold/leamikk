import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import {
  RESET_ERROR_MESSAGE,
  CREATE_AUDIO_CONTEXT,
  CONNECT_MICROPHONE_SUCCESS
} from "../actions"

function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

function audioCtx(state = {}, action) {
  switch (action.type) {
    case CREATE_AUDIO_CONTEXT:
      return Object.assign({}, state, {
        ctx: action.audioCtx
      })
    default:
      return state
  }
}

function audioSource(state = {}, action) {
  switch (action.type) {
    case CONNECT_MICROPHONE_SUCCESS:
      return Object.assign({}, state, {
        source: action.audioSource
      })
    default:
      return state
  }
}

export function getAudioSource(state) {
  return state.audioSource
}

export default combineReducers({
  routing,
  errorMessage,
  audioCtx,
  audioSource
})
