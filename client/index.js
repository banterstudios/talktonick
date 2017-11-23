import React from 'react'

import 'client/styles/index.scss'

import 'client/utils/polyfills'

import { render } from 'react-dom'

import Router from 'client/config/Router'

import { queryById } from 'client/utils/domUtils'

import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStyles from 'client/config/configureStyles'

import { AppContainer } from 'react-hot-loader'

// rehydrate glamor ids
configureStyles()

// Allow for tap events
injectTapEventPlugin()

const renderApp = (Component) => {
  render(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
    queryById('app')
  )
}

renderApp(Router)

if (module.hot) {
  module.hot.accept('./config/Router', () => {
    const NewRouter = require('./config/Router').default
    renderApp(NewRouter)
  })
}
