import React from 'react'

import {
  BrowserRouter as Routes
} from 'react-router-dom'

import App from 'client/components/App'

import { Provider } from 'react-redux'

import store from 'client/store'

const router = (
  <Provider store={store}>
    <Routes>
      <App />
    </Routes>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}

export default router
