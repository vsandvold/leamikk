import { connect } from 'react-redux'

import { uploadFile } from './TrackerActions'
import Tracker from './Tracker'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFileInputChange: (files) => {
      dispatch(uploadFile(files))
    }
  }
}

const TrackerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracker)

export default TrackerContainer
