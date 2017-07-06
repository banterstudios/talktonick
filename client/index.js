/**
 * @module styles
 */
import 'styles/index.scss'

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
import router from 'config/router'

/**
 * @module store
 */
// import store from './store'

/**
 *  queryById
 */
import { queryById } from 'utils/DomUtils'

/**
 * @module injectTapEventPlugin
 */
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
  router,
  queryById('app')
)
