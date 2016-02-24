import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/MixerActions'
import * as types from '../src/constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('MixerActions', () => {

  before(() => {
    window.AudioContext = function() {}
  })

  it('dispatches CREATE_AUDIO_CONTEXT when AudioContext has been created', (done) => {
    const expectedActions = [
      {
        type: types.CREATE_AUDIO_CONTEXT,
        audioCtx: new window.AudioContext()
      }
    ]
    const store = mockStore({ audioCtx: null }, expectedActions, done)
    store.dispatch(actions.getAudioContext())
  })

})
