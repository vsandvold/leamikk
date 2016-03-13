import React, { PropTypes } from 'react'

const Tracker = ({ isAdvancedUpload, handleFileDrop, handleFileChange }) => {

  const boxClassName = isAdvancedUpload ? 'box has-advanced-upload' : 'box'

  const handleDragOver = event => {
    event.preventDefault()
    event.stopPropagation()
    console.log('dragover')
    event.target.classList.add('is-dragover')
  }

  const handleDragLeave = event => {
    event.preventDefault()
    event.stopPropagation()
    console.log('dragleave')
    event.target.classList.remove('is-dragover')
  }

  const handleOtherDragEvents = event => {
    event.preventDefault()
    event.stopPropagation()
    console.log('drag other')
  }

  return (
    <form
      onDrop={handleFileDrop}
      onChange={handleFileChange}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrag={handleOtherDragEvents}
      onDragStart={handleOtherDragEvents}
      className={boxClassName} method="post" action="" encType="multipart/form-data">
      <div className="box__input">
        <span className='box__icon'>
          <i className='material-icons' style={{fontSize: '80px'}}>file_upload</i>
        </span>
        <input className="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
        <label htmlFor="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
        <button className="box__button" type="submit">Upload</button>
      </div>
      <div className="box__uploading">Uploading&hellip;</div>
      <div className="box__success">Done!</div>
      <div className="box__error">Error! <span></span>.</div>
    </form>
  )
}

Tracker.propTypes = {
  isAdvancedUpload: PropTypes.bool.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired
}

export default Tracker
