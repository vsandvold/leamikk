import {
  UPLOAD_FILE
} from '../../constants/ActionTypes'

const initialState = {
  audioFile: null
}

function tracker(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return Object.assign({}, state, {
        audioFile: action.file
      })
    default:
      return state
  }
}

export default tracker
