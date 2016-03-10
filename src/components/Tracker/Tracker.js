import React, { PropTypes } from 'react'

const Tracker = ({ handleFileInputChange }) => (
  <div className=''>
    <input type="file" id="input" onChange={handleFileInputChange('this.files')} />
  </div>
)

Tracker.propTypes = {
  handleFileInputChange: PropTypes.func.isRequired
}

export default Tracker
