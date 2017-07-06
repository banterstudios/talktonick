import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Home from '../../views/Home'

import PageNotFound from '../../views/PageNotFound'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default App
