import React from 'react'

import { Provider } from 'react-redux'

import { renderStatic } from 'glamor/server'

import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router'

import App from 'client/components/App'

import express from 'express'

import { configureStore } from 'client/store'

const router = express.Router()

// Deal with the home page
const controller = (req, res) => {
  const context = {}
  const initialState = {}

  const store = configureStore(initialState)

  const { html, css, ids = [] } = renderStatic(() => ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  ))

  const templateData = {
    initialHtml: html,
    initialCSS: css,
    initialIds: JSON.stringify(ids),
    initialJSONState: JSON.stringify(store.getState())
  }

  // Render the index.handlebars with the template data.
  res.render('index', templateData)
}

router.get(['/', '/login'], controller)

module.exports = router
