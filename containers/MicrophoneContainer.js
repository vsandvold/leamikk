import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { connectMicrophone } from '../actions'
import Microphone from '../components/Microphone'

class MicrophoneContainer extends Component {
  render() {
    return (
      <Microphone
        onConnectMicrophoneClicked={() => this.props.connectMicrophone()} />
    )
  }
}

MicrophoneContainer.propTypes = {
  connectMicrophone: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
  { connectMicrophone }
)(MicrophoneContainer)
