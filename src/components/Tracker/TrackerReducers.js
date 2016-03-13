import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE
} from '../../actions'

const initialState = {
  audioSource: null,
  isLoading: false
}

function tracker(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        audioSource: action.audioSource,
        isLoading: false
      }
    case UPLOAD_FILE_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default tracker
