import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import { audioCtx } from './MixerReducers'
import { audioSource } from './MicrophoneAudioSourceReducers'

import { RESET_ERROR_MESSAGE } from '../constants/ActionTypes'

export function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

export default combineReducers({
  routing,
  errorMessage,
  audioCtx,
  audioSource
})
