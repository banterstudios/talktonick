import React from 'react'

import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router'

import App from '../../client/components/App'

const express = require('express')

const router = express.Router()

// Deal with the home page
const homeController = (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  const templateData = {
    initialHtml: html,
    initialJSONState: JSON.stringify({})
  }

  // Render the index.handlebars with the template data.
  res.render('index', templateData)
}

router.get('/', homeController)

module.exports = router
