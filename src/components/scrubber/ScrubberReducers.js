import {
  SEEK_PLAYBACK_START,
  UPLOAD_FILE_SUCCESS
} from '../../actions'

const initialState = {
  currentTime: 0.0,
  totalDuration: 0.0
}

function scrubber(state = initialState, action) {
  switch (action.type) {
    case SEEK_PLAYBACK_START:
      return {
        ...state,
        currentTime: action.offset
      }
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        totalDuration: action.audioSource.buffer.duration
      }
    default:
      return state
  }
}

export default scrubber
