import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import tracker from '../components/Tracker/TrackerReducers'
import transport from '../components/Transport/TransportReducers'
import scrubber from '../components/Scrubber/ScrubberReducers'
import mixer from '../components/Mixer/MixerReducers'

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
  tracker,
  transport,
  scrubber,
  mixer
})
