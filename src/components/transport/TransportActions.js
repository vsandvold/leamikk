/*
What it does:
- Pauses or resumes audio playback
*/
import {
  PAUSE_PLAYBACK,
  RESUME_PLAYBACK
} from '../../actions'

function pausePlayback() {
  return {
    type: PAUSE_PLAYBACK
  }
}

function resumePlayback() {
  return {
    type: RESUME_PLAYBACK
  }
}

export function togglePlayback() {
  return (dispatch, getState, { AudioService }) => {
    const isPlaying = getState().transport.isPlaying
    if (isPlaying) {
      AudioService.suspendPlayback()
        .then(dispatch(pausePlayback()))
    } else {
      AudioService.resumePlayback()
        .then(dispatch(resumePlayback()))
    }
  }
}
