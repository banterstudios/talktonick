import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import Home from 'client/views/Home'
import Login from 'client/views/Login'

import PageNotFound from 'client/views/PageNotFound'

const App = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default App
