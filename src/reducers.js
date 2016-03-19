import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import snackbar from './components/snackbar/SnackbarReducers'
import tracker from './components/tracker/TrackerReducers'
import transport from './components/transport/TransportReducers'
import scrubber from './components/scrubber/ScrubberReducers'
import mixer from './components/mixer/MixerReducers'

export default combineReducers({
  routing,
  snackbar,
  tracker,
  transport,
  scrubber,
  mixer
})
