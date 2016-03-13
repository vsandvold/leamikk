import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import { initializeAudio } from './api/audio/AudioService'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

initializeAudio()

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
