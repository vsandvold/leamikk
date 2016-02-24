import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { connectMicrophone } from '../actions/MicrophoneAudioSourceActions'
import Transport from '../components/Transport'
import Scrubber from '../components/Scrubber'

export const TransportContainer = ({ connectMicrophone }) => (
  <div className='mdl-card'>
    <Transport
      onStopClick={() => console.log('stop')}
      onPlaybackClick={() => console.log('playback')}
      onRecordClick={() => connectMicrophone()} />
    <Scrubber
      onScrubberChanged={() => console.log("scrubber")} />
  </div>
)

TransportContainer.propTypes = {
  connectMicrophone: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
  { connectMicrophone }
)(TransportContainer)
