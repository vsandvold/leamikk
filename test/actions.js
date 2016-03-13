import expect from 'expect'
import * as actions from '../src/actions'
import * as types from '../src/actions'

describe('actions', () => {
  it('should create an action to reset error message', () => {
    const expectedAction = {
      type: types.RESET_ERROR_MESSAGE
    }
    expect(actions.resetErrorMessage()).toEqual(expectedAction)
  })
})
