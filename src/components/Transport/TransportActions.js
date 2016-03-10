/*
What it does:
- Pauses or resumes audio playback
*/
import {
  PAUSE_PLAYBACK,
  RESUME_PLAYBACK
} from '../../constants/ActionTypes'

import { getAudioCtx } from '../Mixer/MixerReducers'

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
  return (dispatch, getState) => {
    const isPlaying = getState().transport.isPlaying
    if (isPlaying) {
      console.log('play -> pause')
      getAudioCtx(getState()).suspend()
      dispatch(pausePlayback())
    } else {
      console.log('pause -> resume')
      getAudioCtx(getState()).resume()
      dispatch(resumePlayback())
    }
  }
}
