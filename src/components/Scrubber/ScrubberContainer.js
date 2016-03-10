import { connect } from 'react-redux'

import { setPlaybackPosition } from './ScrubberActions'
import Scrubber from "./Scrubber"

const mapStateToProps = (state, ownProps) => {
  return {
    currentTime: state.scrubber.currentTime,
    totalTime: state.scrubber.totalTime
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleScrubberChange: (offset) => {
      dispatch(setPlaybackPosition(offset))
    }
  }
}

const ScrubberContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scrubber)

export default ScrubberContainer
