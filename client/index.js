import 'client/styles/index.scss'

import 'client/utils/polyfills'

import { render } from 'react-dom'

import router from 'client/config/router'

import { queryById } from 'client/utils/domUtils'

import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStyles from 'client/config/configureStyles'

// rehydrate glamor ids
configureStyles()

// Allow for tap events
injectTapEventPlugin()

render(
  router,
  queryById('app')
)
