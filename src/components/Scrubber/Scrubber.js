import React, { PropTypes } from 'react'

const Scrubber = ({ currentTime, totalTime, handleScrubberChange }) => (
  <div className=''>
    <output>{currentTime}</output>
    <input className='mdl-slider mdl-js-slider' type='range'
      min='0' max='100' defaultValue={currentTime} tabIndex='0'
      onChange={handleScrubberChange(0)} />
    <output>{totalTime}</output>
  </div>
)

Scrubber.propTypes = {
  currentTime: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  handleScrubberChange: PropTypes.func.isRequired
}

export default Scrubber
