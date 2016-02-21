import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import MicrophoneContainer from './MicrophoneContainer'
import { resetErrorMessage } from '../actions'

class App extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    return (
      <div>
        <MicrophoneContainer />
        {this.renderErrorMessage()}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
