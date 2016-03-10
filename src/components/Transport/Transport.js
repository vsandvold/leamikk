import React, { PropTypes } from 'react'

const Transport = ({ isPlaying, handlePlayPauseClick }) => {
  const transportIcon = isPlaying ? 'pause' : 'play_arrow'

  return (
    <div className=''>
      <button onClick={handlePlayPauseClick}
        className='mdl-button mdl-js-button mdl-button--icon'>
        <i className='material-icons'>{transportIcon}</i>
      </button>
    </div>
  )
}

Transport.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  handlePlayPauseClick: PropTypes.func.isRequired
}

export default Transport
