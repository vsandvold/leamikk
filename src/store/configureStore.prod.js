import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import thunkInject from '../middleware/thunkInject'

import * as AudioService from '../api/audio/AudioService'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkInject({AudioService})
    )
  )
}
