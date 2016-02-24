import { CONNECT_MICROPHONE_SUCCESS } from '../constants/ActionTypes'

export function audioSource(state = {}, action) {
  switch (action.type) {
    case CONNECT_MICROPHONE_SUCCESS:
      return Object.assign({}, state, {
        source: action.audioSource
      })
    default:
      return state
  }
}
