import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import SettingsPage from './containers/SettingsPage'
import HelpPage from './containers/HelpPage'

export default (
  <Route path="/" component={App}>
    <Route path="/settings"
           component={SettingsPage} />
    <Route path="/help"
           component={HelpPage} />
  </Route>
)
