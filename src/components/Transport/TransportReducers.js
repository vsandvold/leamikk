import {
  PAUSE_PLAYBACK,
  RESUME_PLAYBACK
} from '../../actions'

const initialState = {
  isPlaying: false
}

function transport(state = initialState, action) {
  switch (action.type) {
    case PAUSE_PLAYBACK:
      return {
        ...state,
        isPlaying: false
      }
    case RESUME_PLAYBACK:
      return {
        ...state,
        isPlaying: true
      }
    default:
      return state
  }
}

export default transport
