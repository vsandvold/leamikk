import React, { PropTypes } from 'react'

const Mixer = ({ isConnected, handleMicrophoneClick }) => {
  const microphoneIcon = isConnected ? 'mic' : 'mic_off'

  return (
    <button onClick={handleMicrophoneClick}
      className='mdl-button mdl-js-button mdl-button--icon'>
      <i className='material-icons'>{microphoneIcon}</i>
    </button>
  )
}

Mixer.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  handleMicrophoneClick: PropTypes.func.isRequired
}

export default Mixer
