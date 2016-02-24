import React, { PropTypes } from 'react'

const Scrubber = ({ length, timecode, onScrubberChanged }) => (
  <div className='mdl-card'>
    <output>{timecode}</output>
    <input className='mdl-slider mdl-js-slider' type='range'
      min='0' max='100' defaultValue={timecode} tabIndex='0'
      onChange={onScrubberChanged} />
    <output>{length}</output>
  </div>
)

Scrubber.propTypes = {
  length: PropTypes.number,
  timecode: PropTypes.number,
  onScrubberChanged: PropTypes.func.isRequired
}

Scrubber.defaultProps = {
  length: 0,
  timecode: 0
}

export default Scrubber
