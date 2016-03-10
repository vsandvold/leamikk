import {
  SEEK_PLAYBACK_START
} from '../../constants/ActionTypes'

const initialState = {
  currentTime: 0.0,
  totalTime: 0.0
}

function scrubber(state = initialState, action) {
  switch (action.type) {
    case SEEK_PLAYBACK_START:
      return Object.assign({}, state, {
        currentTime: action.offset
      })
    default:
      return state
  }
}

export default scrubber
