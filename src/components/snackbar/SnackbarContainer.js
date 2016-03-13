import { connect } from 'react-redux'

import Snackbar from './Snackbar'

function mapStateToProps(state, ownProps) {
  return {
    message: state.snackbar.message
  }
}

const SnackbarContainer = connect(
  mapStateToProps
)(Snackbar)

export default SnackbarContainer
