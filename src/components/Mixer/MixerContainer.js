import { connect } from 'react-redux'

import { toggleMicrophone } from './MixerActions'
import Mixer from './Mixer'

const mapStateToProps = (state, ownProps) => {
  return {
    isConnected: state.mixer.microphone.isConnected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMicrophoneClick: () => {
      dispatch(toggleMicrophone())
    }
  }
}

const MixerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mixer)

export default MixerContainer
