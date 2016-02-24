import React, { PropTypes } from 'react'

const Transport = ({ onStopClick, onPlaybackClick, onRecordClick }) => (
  <div className='mdl-card'>
    <button onClick={onStopClick}
      className='mdl-button mdl-js-button mdl-button--icon'>
      <i className='material-icons'>stop</i>
    </button>
    <button onClick={onPlaybackClick}
      className='mdl-button mdl-js-button mdl-button--icon'>
      <i className='material-icons'>play_arrow</i>
    </button>
    <button onClick={onRecordClick}
      className='mdl-button mdl-js-button mdl-button--icon'>
      <i className='material-icons'>mic</i>
    </button>
  </div>
)

Transport.propTypes = {
  onStopClick: PropTypes.func.isRequired,
  onPlaybackClick: PropTypes.func.isRequired,
  onRecordClick: PropTypes.func.isRequired
}

export default Transport
