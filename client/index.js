import 'client/styles/index.scss'

import { render } from 'react-dom'

import router from 'client/config/router'

import { queryById } from 'client/utils/domUtils'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
  router,
  queryById('app')
)
