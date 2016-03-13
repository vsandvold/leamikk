import { connect } from 'react-redux'

import { uploadFile } from './TrackerActions'
import Tracker from './Tracker'

const isAdvancedUpload = () => {
  const div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAdvancedUpload: isAdvancedUpload()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFileDrop: event => {
      event.preventDefault()
      event.stopPropagation()

      const files = event.dataTransfer.files
      if (files && files.length > 0) {
        dispatch(uploadFile(files[0]))
      }
    },
    handleFileChange: event => {
      event.preventDefault()
      event.stopPropagation()

      const files = event.target.files
      if (files && files.length > 0) {
        dispatch(uploadFile(files[0]))
      }
    }
  }
}

const TrackerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracker)

export default TrackerContainer
