import React, { PropTypes } from 'react'

class Snackbar extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    const notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar({
      message: this.props.message,
      actionHandler: function(event) {},
      actionText: 'Undo',
      timeout: 10000
    });
  }

  render() {
    return (
      <div aria-live='assertive' aria-atomic='true' aria-relevant='text' className='mdl-snackbar mdl-js-snackbar'>
        <div className='mdl-snackbar__text'></div>
        <button type='button'className='mdl-snackbar__action'></button>
      </div>
    )
  }
}

Snackbar.propTypes = {
  errorMessage: PropTypes.string
}

export default Snackbar
