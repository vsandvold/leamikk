import expect from 'expect'
import { errorMessage as reducer } from '../src/reducers'
import * as types from '../src/constants/ActionTypes'

describe('reducers', () => {

  it('should handle RESET_ERROR_MESSAGE', () => {
    expect(
      reducer("Error message", {
        type: types.RESET_ERROR_MESSAGE
      })
    ).toEqual(null)
  })

  it('should handle errors', () => {
    expect(
      reducer(null, {
          type: types.CONNECT_MICROPHONE_FAILURE,
          error: 'Error message'
        })
    ).toEqual('Error message')
  })

})
