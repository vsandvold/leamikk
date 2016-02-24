import { CREATE_AUDIO_CONTEXT } from '../constants/ActionTypes'

export function audioCtx(state = {}, action) {
  switch (action.type) {
    case CREATE_AUDIO_CONTEXT:
      return Object.assign({}, state, {
        ctx: action.audioCtx
      })
    default:
      return state
  }
}
