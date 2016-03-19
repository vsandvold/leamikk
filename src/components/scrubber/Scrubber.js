import React, { PropTypes } from 'react'

const Scrubber = ({ currentTime, totalDuration, handleScrubberChange }) => {

  const formatAsMinutes = seconds => {
    return ('00' + Math.trunc(seconds / 60)).slice(-2)
  }

  const formatAsSeconds = seconds => {
    return ('00' + (seconds % 60).toFixed(1)).slice(-4)
  }

  return (
    <div className='scrubber'>
      <output className='scrubber__output'>{formatAsMinutes(currentTime)}:{formatAsSeconds(currentTime)}</output>
      <div className='scrubber__slider'>
        <input className='mdl-slider mdl-js-slider' type='range' tabIndex='0'
          min='0' max={totalDuration} step={totalDuration/1000} defaultValue={currentTime}
          disabled={totalDuration === 0.0}
          onChange={handleScrubberChange} />
      </div>
      <output className='scrubber__output'>{formatAsMinutes(totalDuration)}:{formatAsSeconds(totalDuration)}</output>
    </div>
  )
}

Scrubber.propTypes = {
  currentTime: PropTypes.number.isRequired,
  totalDuration: PropTypes.number.isRequired,
  handleScrubberChange: PropTypes.func.isRequired
}

export default Scrubber
