import { connect } from 'react-redux'

import { togglePlayback } from './TransportActions'
import Transport from './Transport'

const mapStateToProps = (state, ownProps) => {
  return {
    isPlaying: state.transport.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handlePlayPauseClick: () => {
      dispatch(togglePlayback())
    }
  }
}

const TransportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Transport)

export default TransportContainer
