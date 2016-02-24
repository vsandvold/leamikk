import React, { PropTypes } from 'react'

const Snackbar = ({ message }) => {
  const notification = document.querySelector('.mdl-js-snackbar');
  notification.MaterialSnackbar.showSnackbar({
    message: message
  });

  return (
    <div aria-live='assertive' aria-atomic='true' aria-relevant='text' className='mdl-snackbar mdl-js-snackbar'>
      <div className='mdl-snackbar__text'></div>
      <button type='button'className='mdl-snackbar__action'></button>
    </div>
  )
}

Snackbar.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default Snackbar
