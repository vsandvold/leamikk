import { RESET_ERROR_MESSAGE } from '../../actions'

const initialState = {
  message: null
}

function snackbar(state = initialState, action) {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return initialState
  } else if (error) {
    return {
      ...state,
      message: action.error
    }
  }

  return state
}

export default snackbar
