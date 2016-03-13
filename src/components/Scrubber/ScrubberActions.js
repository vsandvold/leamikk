/*
What it does:
- Displays the current time
- Displays the total time
- Seeks to a different playback position
*/
import {
  SEEK_PLAYBACK_START
} from '../../actions'

function seekPlaybackStart(offset) {
  return {
    type: SEEK_PLAYBACK_START,
    offset: offset
  }
}

export function setPlaybackPosition(offset) {
  return (dispatch, getState) => {
    dispatch(seekPlaybackStart(offset))
  }
}
