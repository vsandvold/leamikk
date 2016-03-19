import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import TrackerContainer from '../components/tracker/TrackerContainer'
import TransportContainer from '../components/transport/TransportContainer'
import ScrubberContainer from '../components/scrubber/ScrubberContainer'
import MixerContainer from '../components/mixer/MixerContainer'
import Snackbar from '../components/snackbar/Snackbar'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  render() {
    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <header className='mdl-layout__header'>
          <div className='mdl-layout-icon'></div>
          <div className='mdl-layout__header-row'>
            <div className='mdl-layout-spacer'></div>
            <nav className="mdl-navigation">
              <button className='mdl-button mdl-js-button mdl-button--icon'>
                <i className='material-icons'>undo</i>
              </button>
              <button className='mdl-button mdl-js-button mdl-button--icon'>
                <i className='material-icons'>redo</i>
              </button>
            </nav>
          </div>
        </header>
        <div className='mdl-layout__drawer'>
          <span className='mdl-layout__title'>Mawimbi</span>
          <nav className='mdl-navigation'>
            <a className='mdl-navigation__link' href='/'>Mixer</a>
            <a className='mdl-navigation__link' href='/settings'>Settings</a>
            <a className='mdl-navigation__link' href='/help'>Help</a>
          </nav>
        </div>
        <main className='mdl-layout__content' style={{height:'100%'}}>
          <div className='app-container'>
            <div className='app-container__tracker'>
              <TrackerContainer />
            </div>
            <div className='app-container__toolbar'>
              <div className='toolbar'>
                <div className='toolbar__transport'>
                  <TransportContainer />
                </div>
                <div className='toolbar__scrubber'>
                  <ScrubberContainer />
                </div>
                <div className='toolbar__mixer'>
                  <MixerContainer />
                </div>
              </div>
            </div>
          </div>
          <Snackbar />
        </main>
      </div>
    )
  }
}

export default connect()(App)
