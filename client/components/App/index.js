import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Home from 'client/views/Home'

import PageNotFound from 'client/views/PageNotFound'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default App
