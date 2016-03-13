import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import snackbar from './components/snackbar/SnackbarReducers'
import tracker from './components/Tracker/TrackerReducers'
import transport from './components/Transport/TransportReducers'
import scrubber from './components/Scrubber/ScrubberReducers'
import mixer from './components/Mixer/MixerReducers'

export default combineReducers({
  routing,
  snackbar,
  tracker,
  transport,
  scrubber,
  mixer
})
