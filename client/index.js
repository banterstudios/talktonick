/**
 * @module styles
 */
import 'client/styles/index.scss'

/**
 * @module react
 */
import React from 'react'

/**
 * @module react-dom
 */
import { render } from 'react-dom'

/**
 * @module react-redux
 */
// import { Provider } from 'react-redux'

/**
 * @module router
 */
import router from 'client/config/router'

/**
 * @module store
 */
// import store from './store'

/**
 *  queryById
 */
import { queryById } from 'client/utils/DomUtils'

/**
 * @module injectTapEventPlugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
  router,
  queryById('app')
)
