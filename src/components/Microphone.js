import React, { PropTypes } from 'react'

const Microphone = ({ onConnectMicrophoneClicked }) => (
  <button onClick={onConnectMicrophoneClicked}
    className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>Connect</button>
)

Microphone.propTypes = {
  onConnectMicrophoneClicked: PropTypes.func.isRequired
}

export default Microphone
