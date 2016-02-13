import React, { Component, PropTypes } from 'react'

export default class Microphone extends Component {
  render() {
    const { onConnectMicrophoneClicked } = this.props

    return (
      <div>
        <button onClick={onConnectMicrophoneClicked}>Connect</button>
      </div>
    )
  }
}

Microphone.propTypes = {
  onConnectMicrophoneClicked: PropTypes.func
}
