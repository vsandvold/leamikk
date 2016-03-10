import {
  PAUSE_PLAYBACK,
  RESUME_PLAYBACK
} from '../../constants/ActionTypes'

const initialState = {
  isPlaying: false
}

function transport(state = initialState, action) {
  switch (action.type) {
    case PAUSE_PLAYBACK:
      return Object.assign({}, state, {
        isPlaying: false
      })
    case RESUME_PLAYBACK:
      return Object.assign({}, state, {
        isPlaying: true
      })
    default:
      return state
  }
}

export default transport
