import { connect } from 'react-redux'

import { setPlaybackPosition } from './ScrubberActions'
import Scrubber from "./Scrubber"

const mapStateToProps = (state, ownProps) => {
  return {
    currentTime: state.scrubber.currentTime,
    totalDuration: state.scrubber.totalDuration
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleScrubberChange: (event) => {
      dispatch(setPlaybackPosition(event.target.value))
    }
  }
}

const ScrubberContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scrubber)

export default ScrubberContainer
