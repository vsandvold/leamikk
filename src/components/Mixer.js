import React, { PropTypes } from 'react'

const Mixer = ({ onMuteToggle }) => (
  <label for='mute' className='mdl-switch mdl-js-switch mdl-js-ripple-effect'>
    <input type='checkbox' id='mute' className='mdl-switch__input'
      onChange={onMuteToggle}>
    <span className='mdl-switch__label'>Mute</span>
  </label>
)

Mixer.propTypes = {
  onMuteToggle: PropTypes.func.isRequired
}

export default Mixer
